console.log('Main.jsx executing');
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import queryClient from './api/queryClient';
import App from './App';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import LenisProvider from '@/providers/LenisProvider';
import theme from '@/styles/theme';
import './index.css';
import './styles/fonts.css';

// Global Error Handler for debugging
window.onerror = function (message, source, lineno, colno, error) {
  const errorHtml = `
    <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:white; color:red; padding:20px; z-index:9999; overflow:auto;">
      <h1 style="font-size:24px; margin-bottom:10px;">Application Error</h1>
      <pre style="font-family:monospace; white-space:pre-wrap;">${message}\n\nSource: ${source}:${lineno}:${colno}\n\nStack:\n${error?.stack || 'No stack trace'}</pre>
    </div>
  `;
  document.body.innerHTML = errorHtml;
  console.error('Global Error:', error);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <LenisProvider>
              <ErrorBoundary>
                <App />
              </ErrorBoundary>
            </LenisProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
