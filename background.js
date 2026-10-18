// Background service worker: right-click context menu entry.
(function () {
  "use strict";

  var MENU_ID = "shou-download-video";

  function siteUrl(pageUrl) {
    return "https://shouvideodownloader.com/?url=" + encodeURIComponent(pageUrl);
  }

  chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
      id: MENU_ID,
      title: "Download with Shou Video Downloader",
      contexts: ["page"],
      documentUrlPatterns: ["*://*.kuaishou.com/*", "*://*.kwai.com/*"]
    });
  });

  chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === MENU_ID && info.pageUrl) {
      chrome.tabs.create({ url: siteUrl(info.pageUrl) });
    }
  });
})();
