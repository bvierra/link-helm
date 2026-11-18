const copy = {
  skip: "Skip to content", navLabel: "Primary navigation", navWorkflow: "How it works", navCompatibility: "Compatibility", navDownload: "Build Link Helm",
  heroEyebrow: "Browser identity router", heroLede: "One link. The right browser profile.", heroDetail: "Route external links by source application and domain, keeping work, personal, and client sessions in the browser identity where they belong.",
  buildSource: "Build from source", supportLabel: "Current support status", platformRequirement: "macOS 13+ / Windows 10/11 x64 / Linux XDG", platformValidated: "macOS, Windows, and Linux validated", openSource: "MIT licensed",
  productEyebrow: "Control without context switching", productTitle: "A quiet control surface for every incoming link", productDetail: "Set Link Helm as the default browser, define precise rules, preview routing decisions, and keep sensitive URL paths out of diagnostics.", productAlt: "Link Helm settings showing default browser, accessibility, routing controls, and browser profile testing", productCaption: "The current Link Helm settings interface on macOS.",
  workflowEyebrow: "Routing pipeline", workflowTitle: "Context in. Correct identity out.", workflowDetail: "Link Helm evaluates only the context needed to make a routing decision.",
  stepSourceTitle: "Source application", stepSourceDetail: "Mail, chat, calendar, or any app opening a web link.", stepContextTitle: "Link context", stepContextDetail: "Match by source application identifier and domain without retaining full URLs.", stepRuleTitle: "Routing rule", stepRuleDetail: "Choose a specified, active, global, or prompted destination.", stepProfileTitle: "Browser profile", stepProfileDetail: "Open the link in the browser-managed identity that fits the context.",
  capabilitiesEyebrow: "Built for repeat use", capabilitiesTitle: "Routing that stays explainable", featureRulesTitle: "Specific, ordered rules", featureRulesDetail: "Preview matches before relying on them, then reorder and export your configuration.", featurePrivacyTitle: "Bounded diagnostics", featurePrivacyDetail: "Diagnostics retain domains and stable identifiers, not paths, query values, or fragments.", featureFallbackTitle: "Visible fallback behavior", featureFallbackDetail: "Ask, reuse an active profile, use an installed browser's default behavior, or fail explicitly when a destination is unavailable.",
  compatibilityEyebrow: "Current support", compatibilityTitle: "Validated on macOS, Windows, and Linux", compatibilityDetail: "Chrome, Edge, Brave, and Firefox routing has been validated across all three desktop platforms.", tablePlatform: "Platform", tableBrowser: "Browser", tableStatus: "Status", statusValidated: "Validated",
  downloadEyebrow: "Download or build", downloadTitle: "Get Link Helm for your platform", downloadDetail: "Download the latest unsigned packages below, or build from source with Rust stable, Tauri CLI 2, and each platform's native prerequisites.", macPackageDetail: "Download the package for your Mac, or build an unsigned DMG on macOS with Xcode Command Line Tools installed.", windowsPackageDetail: "Download the x64 installer, or build NSIS on Windows 10/11 with Visual Studio Build Tools installed.", linuxPackageDetail: "Download a Debian package or AppImage, or build on Linux with WebKitGTK, AppIndicator, and XDG dependencies.", outputLabel: "Build output", downloadAppleSilicon: "Apple Silicon DMG", downloadIntel: "Intel DMG", downloadWindows: "Windows x64", downloadDeb: "Debian / Ubuntu", downloadAppImage: "AppImage", fullInstructions: "Build instructions",
  footerText: "Open source under the MIT License. Built with Rust and Tauri.", viewGithub: "View on GitHub"
};

document.querySelectorAll("[data-i18n]").forEach((element) => {
  const value = copy[element.dataset.i18n];
  if (value) element.textContent = value;
});
document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
  const value = copy[element.dataset.i18nAria];
  if (value) element.setAttribute("aria-label", value);
});
document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
  const value = copy[element.dataset.i18nAlt];
  if (value) element.setAttribute("alt", value);
});
