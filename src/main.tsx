import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import './index.css';

// Add error handling to catch and display rendering errors
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found in the DOM");
}

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HeroUIProvider>
        <ToastProvider />
        <Router>
          <App />
        </Router>
      </HeroUIProvider>
    </React.StrictMode>
  );
} catch (error) {
  console.error("Error rendering React application:", error);
  
  // Display error on page instead of blank screen
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: system-ui, sans-serif;">
      <h1 style="color: #c20e4d;">Application Error</h1>
      <p>The application failed to load properly. Please check the console for details.</p>
      <pre style="background: #f1f3f5; padding: 10px; border-radius: 4px; overflow: auto;">${error instanceof Error ? error.message : String(error)}</pre>
      <button onclick="window.location.reload()" style="background: #0A2342; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-top: 10px;">
        Reload Page
      </button>
    </div>
  `;
}
