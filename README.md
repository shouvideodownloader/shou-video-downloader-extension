# Shou Video Downloader — Browser Extension

The official companion browser extension for **[Shou Video Downloader](https://shouvideodownloader.com/)** — the free online tool to download Kuaishou and Kwai videos without watermark.

🌐 Website: **https://shouvideodownloader.com/**

## What it does

- Adds a floating **"⬇ Download via Shou"** button on any Kuaishou (`kuaishou.com`) or Kwai (`kwai.com`) video page — one click sends the video to shouvideodownloader.com for downloading.
- Right-click any Kuaishou/Kwai page → **"Download with Shou Video Downloader"**.
- Toolbar popup: paste any Kuaishou/Kwai link and hit **Download**.

The extension itself never downloads video files — it hands the page URL to [shouvideodownloader.com](https://shouvideodownloader.com/), which does the downloading (no app install, no sign-up, no watermark).

## Install (developer mode)

1. Download or clone this repo.
2. Open `chrome://extensions` (or `edge://extensions`, `brave://extensions`).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select this folder.

## Project structure

```
manifest.json      — Manifest V3 config
popup.html/js      — toolbar popup (paste-a-link)
content.js         — floating download button on Kuaishou/Kwai pages
background.js      — right-click context menu
icons/             — extension icons (from the shouvideodownloader.com logo)
```

## Privacy

No tracking, no analytics, no data collection. The only network request the extension makes is opening `https://shouvideodownloader.com/?url=<video-page>` when you click download.

## License

MIT — see [LICENSE](LICENSE). © 2026 Abdur rahman.
