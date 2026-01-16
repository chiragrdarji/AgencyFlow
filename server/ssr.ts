import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderToStaticMarkup } from 'react-dom/server';
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
    const { html: appHtml, helmet } = await renderApp({ url });

    // Extract meta tags from helmet
    let titleHtml = '<title>Smart Sync One</title>';
    let metaHtml = '';

    if (helmet) {
      try {
        // Get title
        if (helmet.title && helmet.title.toComponent) {
          const titleComponents = helmet.title.toComponent();
          if (titleComponents && titleComponents.length > 0) {
            const firstComponent = titleComponents[0];
            if (firstComponent && firstComponent.props && firstComponent.props.children) {
              const titleText = firstComponent.props.children;
              titleHtml = `<title>${titleText}</title>`;
              console.log('✓ Title:', titleText);
            }
          }
        }

        // Get meta tags (description, keywords, og, twitter, etc.)
        if (helmet.meta && helmet.meta.toComponent) {
          const metaComponents = helmet.meta.toComponent();
          if (metaComponents && metaComponents.length > 0) {
            const metaTags = metaComponents.map((tag: React.ReactElement) => 
              renderToStaticMarkup(tag)
            ).join('\n');
            metaHtml += metaTags;
            console.log('✓ Meta tags injected:', metaComponents.length, 'tags');
          }
        }

        // Get link tags (canonical, hreflang, etc.)
        if (helmet.link && helmet.link.toComponent) {
          const linkComponents = helmet.link.toComponent();
          if (linkComponents && linkComponents.length > 0) {
            const linkTags = linkComponents.map((tag: React.ReactElement) => 
              renderToStaticMarkup(tag)
            ).join('\n');
            metaHtml += '\n' + linkTags;
            console.log('✓ Link tags injected:', linkComponents.length, 'tags');
          }
        }

        // Get script tags
        if (helmet.script && helmet.script.toComponent) {
          const scriptComponents = helmet.script.toComponent();
          if (scriptComponents && scriptComponents.length > 0) {
            const scriptTags = scriptComponents.map((tag: React.ReactElement) => 
              renderToStaticMarkup(tag)
            ).join('\n');
            metaHtml += '\n' + scriptTags;
            console.log('✓ Script tags injected:', scriptComponents.length, 'tags');
          }
        }
      } catch (helmetError) {
        console.warn('Error extracting helmet data:', helmetError);
      }
    }

    // Build the final HTML with injected meta tags and app content
    // Remove all existing meta/link tags from template and replace with helmet tags
    let finalHtml = template
      // Replace title
      .replace(/<title>.*?<\/title>/, titleHtml)
      // Remove all old meta tags from template head
      .replace(/<meta\s+(?:name|property)="(?:description|keywords|author|robots|language|revisit-after|og:|twitter:)"[^>]*>/gi, '')
      // Remove old canonical and og:url links
      .replace(/<link\s+rel="(?:canonical|alternate)"[^>]*>/gi, '')
      // Insert new helmet tags before closing head
      .replace('</head>', `${metaHtml}\n</head>`)
      // Replace app content
      .replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

    // Log FOUC prevention
    console.log('✓ CSS will be injected by Vite during transformIndexHtml');

    return finalHtml;
  } catch (error) {
    console.error('SSR Error:', error);
    throw error;
  }
}
