// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import { visit } from 'unist-util-visit';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkBreaks from 'remark-breaks';


function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.lang === 'mermaid') {
        node.type = 'html';
        const encoded = encodeURIComponent(node.value);
        node.value = `<div class="mermaid-container w-full" data-mermaid-encoded="${encoded}"></div>`;
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://eng-interview-kit.netlify.app',
  prefetch: true,
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [remarkMermaid, remarkMath, remarkBreaks],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [mdx(), sitemap()],
  adapter: netlify()
});