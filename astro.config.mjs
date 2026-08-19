// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import { visit } from 'unist-util-visit';

function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.lang === 'mermaid') {
        node.type = 'html';
        node.value = `<div class="mermaid flex justify-center bg-gray-900/50 rounded-xl p-6 my-8 border border-gray-800 overflow-x-auto w-full">\n${node.value}\n</div>`;
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
  integrations: [mdx()],
  adapter: netlify()
});