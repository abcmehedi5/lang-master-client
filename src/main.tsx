import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.tsx";
import AuthProvider from "./Providers/AuthProvider.tsx";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
