# dlldsys - Open Source Projects Portfolio

My personal portfolio page showcasing open source projects focused on WeChat ecosystem SDKs.

## Projects

- **wechat-sdk-ai** - AI-powered WeChat SDK (with dedicated comments)
- **angular-weui** - WeChat-style UI component library for Angular (with dedicated comments)
- **wecom-sdk** - WeChat Work (Enterprise WeChat) SDK (with dedicated comments)
- **bill-sync** - Cross-platform bill management app, In Progress (with dedicated comments)

## Features

- Clean white theme design
- Individual comments section for each project
- Unified page-level comments (留言板)
- Responsive layout for mobile and desktop
- GitHub Giscus integration for discussions

## Setup

This is a static site hosted on GitHub Pages. To run locally:

```bash
# Simply open index.html in a browser
# Or use a local server
python -m http.server 8000
```

Then visit http://localhost:8000

## GitHub Pages Deployment

The site is automatically deployed from the `main` branch. Ensure GitHub Pages is enabled in repository settings.

## Giscus Configuration

This site uses [Giscus](https://giscus.app/) for comments. Each project has its own comment section, plus a unified page-level留言板.

To get your Giscus configuration:
1. Visit [giscus.app](https://giscus.app/)
2. Enter your repository info (dlldsys/dlldsys.github.io)
3. Enable GitHub Discussions on your repository
4. Copy the generated configuration values
5. Update `script.js` with your `repoId` and `categoryId`

## Tech Stack

- HTML5
- CSS3 (Custom CSS, no frameworks)
- Vanilla JavaScript
- Giscus (GitHub Discussions powered comments)

## File Structure

```
d:/codes/homepage/
├── index.html      # Main page with project cards and comments
├── styles.css      # White theme + card styles
├── script.js      # Giscus initialization + animations
└── README.md      # This file
```
