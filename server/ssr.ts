import React from 'react';
import { renderToString } from 'react-dom/server';
import { render as renderApp } from '../client/src/entry-server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let template: string | null = null;

// Load HTML template
async function loadTemplate() {
  try {
    // In development, load from client/index.html
    // In production, load from dist/client/index.html
    const isDev = process.env.NODE_ENV === 'development';
    const templatePath = isDev
      ? path.resolve(__dirname, '../client/index.html')
      : path.resolve(__dirname, '../dist/client/index.html');
    
    template = fs.readFileSync(templatePath, 'utf-8');
  } catch (error) {
    console.error('Failed to load template:', error);
    return null;
  }
}

export async function renderPage(url: string): Promise<string> {
  if (!template) {
    await loadTemplate();
  }

  if (!template) {
    throw new Error('Failed to load HTML template');
  }

  try {
    const { html, helmet } = await renderApp({ url });
    const appHtml = renderToString(html);

    // Get meta tags from helmet
    const helmetStrings = helmet
      ? {
          title: helmet.title?.toString() || '',
          meta: helmet.meta?.toString() || '',
          link: helmet.link?.toString() || '',
          script: helmet.script?.toString() || '',
        }
      : { title: '', meta: '', link: '', script: '' };

    // Build the final HTML with injected meta tags and app content
    let finalHtml = template
      .replace(
        '<title></title>',
        helmetStrings.title || '<title>Smart Sync One</title>'
      )
      .replace('</head>', `${helmetStrings.meta}${helmetStrings.link}${helmetStrings.script}</head>`)
      .replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

    return finalHtml;
  } catch (error) {
    console.error('SSR Error:', error);
    throw error;
  }
}
