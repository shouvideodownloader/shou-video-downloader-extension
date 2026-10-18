// Popup: send the pasted link to shouvideodownloader.com
(function () {
  "use strict";
  var input = document.getElementById("url");
  var btn = document.getElementById("go");

  function openDownloader(raw) {
    var url = (raw || "").trim();
    if (!url) {
      input.focus();
      return;
    }
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }
    chrome.tabs.create({
      url: "https://shouvideodownloader.com/?url=" + encodeURIComponent(url)
    });
    window.close();
  }

  btn.addEventListener("click", function () { openDownloader(input.value); });
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { openDownloader(input.value); }
  });

  // Prefill with the current tab's URL when it looks like a Kuaishou/Kwai link.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var t = tabs && tabs[0];
    if (t && /kuaishou\.com|kwai\.com/i.test(t.url || "")) {
      input.value = t.url;
    }
  });
})();
