import React from 'react';
import { Router } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

interface RenderOptions {
  url: string;
}

interface RenderResult {
  html: React.ReactElement;
  helmet: any;
}

export async function render({ url }: RenderOptions): Promise<RenderResult> {
  const helmetContext = {} as any;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity, // Don't refetch on server
      },
    },
  });

  // Extract path from URL for wouter SSR
  const path = new URL(url, 'http://localhost').pathname;

  const html = (
    <Router ssrPath={path}>
      <HelmetProvider context={helmetContext}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </HelmetProvider>
    </Router>
  );

  return {
    html,
    helmet: helmetContext.helmet,
  };
}
