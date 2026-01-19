// import React from 'react';
// import { Router } from 'wouter';
// import { HelmetProvider } from 'react-helmet-async';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { renderToString } from 'react-dom/server';
// import App from './App';

// interface RenderOptions {
//   url: string;
// }

// interface RenderResult {
//   html: string;
//   helmet: any;
// }

// export async function render({ url }: RenderOptions): Promise<RenderResult> {
//   const helmetContext = {} as any;
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         staleTime: Infinity, // Don't refetch on server
//       },
//     },
//   });

//   // Extract path from URL for wouter SSR
//   const path = new URL(url, 'http://localhost').pathname;
  
//   const appElement = (
//     <Router ssrPath={path}>
//       <HelmetProvider context={helmetContext}>
//         <QueryClientProvider client={queryClient}>
//           <App />
//         </QueryClientProvider>
//       </HelmetProvider>
//     </Router>
//   );

//   // Render to string to populate helmet context
//   const html = renderToString(appElement);

//   return {
//     html,
//     helmet: helmetContext.helmet,
//   };
// }

import React from 'react';

import { Router } from 'wouter';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { renderToString } from 'react-dom/server';

import App from './App';

import { HelmetProvider } from 'react-helmet-async';
 
interface RenderOptions {

  url: string;

}
 
interface RenderResult {

  html: string;

  helmet: any;

}
 
export async function render({ url }: RenderOptions): Promise<RenderResult> {

  const helmetContext = {} as any;
 
  const queryClient = new QueryClient({

    defaultOptions: {

      queries: {

        staleTime: Infinity,

      },

    },

  });
 
  // Extract path from URL for wouter SSR

  const path = new URL(url, 'http://localhost').pathname;
 
  const appElement = (
<Router ssrPath={path}>
<HelmetProvider context={helmetContext}>
<QueryClientProvider client={queryClient}>
<App />
</QueryClientProvider>
</HelmetProvider>
</Router>

  );
 
  const html = renderToString(appElement);
 
  return {

    html,

    helmet: helmetContext.helmet,

  };

}

 
