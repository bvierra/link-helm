#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 || $# -gt 2 ]]; then
  echo "Usage: $0 INPUT.AppImage [OUTPUT.AppImage]" >&2
  exit 2
fi

input=$1
output=${2:-$input}
input=$(cd "$(dirname "$input")" && pwd)/$(basename "$input")
output=$(cd "$(dirname "$output")" && pwd)/$(basename "$output")

if [[ ! -x "$input" ]]; then
  chmod a+rx "$input"
fi

workdir=$(mktemp -d)
trap 'rm -rf "$workdir"' EXIT

(
  cd "$workdir"
  "$input" --appimage-extract >/dev/null
)

appdir="$workdir/squashfs-root"
if [[ ! -f "$appdir/AppRun" ]]; then
  echo "AppImage does not contain an AppRun file: $input" >&2
  exit 1
fi

chmod a+rx "$appdir/AppRun"
if [[ -d "$appdir/usr/bin" ]]; then
  find "$appdir/usr/bin" -type f -exec chmod a+rx {} +
fi
# appimagetool rejects AppDirs whose directories are not world-readable
# (extraction leaves them 0700), so open read/traverse access tree-wide.
chmod -R a+rX "$appdir"

appimagetool=${APPIMAGETOOL:-appimagetool}
"$appimagetool" "$appdir" "$output"
chmod a+rx "$output"
