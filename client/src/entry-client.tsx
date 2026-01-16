import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import App from './App';
import './index.css';

const helmetContext = {} as any;

const root = document.getElementById('root');
if (root) {
  ReactDOM.hydrateRoot(
    root,
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
