# Engineering Interview Kit

A comprehensive, high-signal revision kit for Software Engineers preparing for interviews.

Built with **Astro**, **Tailwind CSS**, and **MDX**, this project provides a lightning-fast, beautifully designed static site that renders technical concepts, Mermaid diagrams, and code snippets effortlessly.

## 🚀 Features

- **High Signal-to-Noise Ratio**: Every topic follows a strict pattern: TL;DR, Mental Model (Mermaid diagram), Example, Interview Questions, and Gotchas.
- **Mermaid Diagrams**: Native support for complex system design and architecture models.
- **Dynamic Routing**: Content is dynamically generated from MDX files organized by category (JavaScript, TypeScript, Go, Node.js, SQL, System Design).
- **Premium Design**: Clean, modern dark UI built with Tailwind CSS.

## 📂 Project Structure

- `src/content/topics/` - All the MDX content lives here, grouped by category.
- `src/pages/` - Astro routing and page components.
- `src/layouts/` - Main site layout and global styling.
- `src/content.config.ts` - Zod schema enforcing frontmatter types.

## 🛠️ Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📝 Adding New Content

To add a new topic, create a new `.mdx` file in the appropriate category folder under `src/content/topics/`. Make sure to include the required frontmatter:

```yaml
---
title: "Topic Name"
description: "A short description."
importance: "HIGH" # HIGH, MEDIUM, LOW
revisionTime: 5
category: "JavaScript"
---
```

## 🌐 Deployment

This project is configured for seamless deployment to **Netlify** using the `@astrojs/netlify` adapter. Simply connect the repository to Netlify, and it will build and deploy automatically.
