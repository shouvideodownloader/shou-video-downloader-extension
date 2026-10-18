// Content script: floating "Download" button on Kuaishou / Kwai pages.
// The extension never downloads video files itself — it hands the page URL
// to https://shouvideodownloader.com/ which does the downloading.
(function () {
  "use strict";

  var BTN_ID = "shou-dl-float-btn";

  function targetUrl() {
    // Prefer a canonical/share URL when the page exposes one.
    var canonical = document.querySelector('link[rel="canonical"]');
    var url = (canonical && canonical.href) || location.href;
    return "https://shouvideodownloader.com/?url=" + encodeURIComponent(url);
  }

  function inject() {
    if (document.getElementById(BTN_ID)) { return; }

    var btn = document.createElement("a");
    btn.id = BTN_ID;
    btn.href = targetUrl();
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.textContent = "⬇ Download via Shou";
    btn.title = "Send this video to Shou Video Downloader";
    btn.style.cssText = [
      "position:fixed", "right:18px", "bottom:18px", "z-index:2147483647",
      "background:#1d4ed8", "color:#fff", "font:600 14px/1 -apple-system,'Segoe UI',Roboto,sans-serif",
      "padding:12px 16px", "border-radius:999px", "text-decoration:none",
      "box-shadow:0 4px 14px rgba(29,78,216,.45)", "cursor:pointer"
    ].join(";");

    var close = document.createElement("span");
    close.textContent = "✕";
    close.title = "Hide";
    close.style.cssText = "margin-left:10px;font-size:11px;opacity:.75;cursor:pointer;";
    close.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      btn.remove();
    });
    btn.appendChild(close);

    // Refresh the href in case the page URL changes (SPA navigation).
    btn.addEventListener("mouseenter", function () { btn.href = targetUrl(); });

    (document.body || document.documentElement).appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
