import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopOnRouteChange } from "./components/ScrollToTopOnRouteChange";
import { useEffect } from "react";
import PreloadScreen from "./components/PreloadScreen";

// Loading component for lazy loaded routes
const RouteLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
  </div>
);

// Critical pages - loaded immediately (home page)
import Home from "./pages/Index";

// Lazy load non-critical pages
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Quote = lazy(() => import("./pages/Quote"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load service pages (these are heavy with images and components)
const AWS = lazy(() => import("./pages/services/AWS"));
const Azure = lazy(() => import("./pages/services/Azure"));
const GoogleWorkspace = lazy(() => import("./pages/services/GoogleWorkspace"));
const Microsoft365 = lazy(() => import("./pages/services/Microsoft365"));
const Specialized = lazy(() => import("./pages/services/Specialized"));

const queryClient = new QueryClient();

// AppLayout component that wraps all routes with the Layout
const AppLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <ScrollToTopOnRouteChange />
        <PreloadScreen />
        <Routes>
          {/* Routes with layout */}
          <Route element={<AppLayout />}>
            {/* Critical route - loaded immediately */}
            <Route index element={<Home />} />
            
            {/* Lazy loaded non-critical routes */}
            <Route 
              path="about" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <About />
                </Suspense>
              } 
            />
            <Route path="about.tsx" element={<Navigate to="/about" replace />} />
            <Route 
              path="contact" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <Contact />
                </Suspense>
              } 
            />
            <Route 
              path="quote" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <Quote />
                </Suspense>
              } 
            />
            <Route 
              path="privacy" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <Privacy />
                </Suspense>
              } 
            />
            <Route 
              path="terms" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <Terms />
                </Suspense>
              } 
            />
            
            {/* Lazy loaded service pages (heavy with images and components) */}
            <Route 
              path="services/aws" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <AWS />
                </Suspense>
              } 
            />
            <Route 
              path="services/azure" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <Azure />
                </Suspense>
              } 
            />
            <Route 
              path="services/google-workspace" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <GoogleWorkspace />
                </Suspense>
              } 
            />
            <Route 
              path="services/microsoft-365" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <Microsoft365 />
                </Suspense>
              } 
            />
            <Route 
              path="services/specialized" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <Specialized />
                </Suspense>
              } 
            />
            
            {/* 404 - Keep this as the last route */}
            <Route 
              path="*" 
              element={
                <Suspense fallback={<RouteLoadingFallback />}>
                  <NotFound />
                </Suspense>
              } 
            />
          </Route>
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
