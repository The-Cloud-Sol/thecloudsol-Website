import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopOnRouteChange } from "./components/ScrollToTopOnRouteChange";
import { useEffect } from "react";
import PreloadScreen from "./components/PreloadScreen";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "./components/SEOHead";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  LazyHome,
  LazyAbout,
  LazyContact,
  LazyQuote,
  LazyPrivacy,
  LazyTerms,
  LazyNotFound,
  LazyAWS,
  LazyAzure,
  LazyGoogleWorkspace,
  LazyMicrosoft365,
  LazySpecialized,
  preloadRoute
} from "./components/LazyLoad";

const queryClient = new QueryClient();

// Preload critical routes on hover
const usePreloadOnHover = () => {
  useEffect(() => {
    // Preload service pages when user is likely to navigate
    const preloader = {
      about: () => preloadRoute("about"),
      contact: () => preloadRoute("contact"),
      quote: () => preloadRoute("quote"),
      aws: () => preloadRoute("aws"),
      azure: () => preloadRoute("azure"),
      google: () => preloadRoute("google-workspace"),
      microsoft: () => preloadRoute("microsoft-365"),
      specialized: () => preloadRoute("specialized"),
    };

    // Add hover listeners to navigation links
    const addHoverListeners = () => {
      const links = document.querySelectorAll('a[href*="/about"], a[href*="/contact"], a[href*="/quote"]');
      links.forEach(link => {
        const href = link.getAttribute("href");
        if (href?.includes("/about")) {
          link.addEventListener("mouseenter", preloader.about, { once: true });
        } else if (href?.includes("/contact")) {
          link.addEventListener("mouseenter", preloader.contact, { once: true });
        } else if (href?.includes("/quote")) {
          link.addEventListener("mouseenter", preloader.quote, { once: true });
        }
      });
    };

    // Add listeners after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(addHoverListeners, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
};

// AppLayout component that wraps all routes with the Layout
const AppLayout = () => {
  usePreloadOnHover();
  
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
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
            <SEOHead />
            <Routes>
              {/* Routes with layout */}
              <Route element={<AppLayout />}>
                <Route index element={<LazyHome />} />
                <Route path="about" element={<LazyAbout />} />
                <Route path="about.tsx" element={<Navigate to="/about" replace />} />
                <Route path="contact" element={<LazyContact />} />
                <Route path="quote" element={<LazyQuote />} />
                <Route path="privacy" element={<LazyPrivacy />} />
                <Route path="terms" element={<LazyTerms />} />
                
                {/* Service pages */}
                <Route path="services/aws" element={<LazyAWS />} />
                <Route path="services/azure" element={<LazyAzure />} />
                <Route path="services/google-workspace" element={<LazyGoogleWorkspace />} />
                <Route path="services/microsoft-365" element={<LazyMicrosoft365 />} />
                <Route path="services/specialized" element={<LazySpecialized />} />
                
                {/* 404 - Keep this as the last route */}
                <Route path="*" element={<LazyNotFound />} />
              </Route>
            </Routes>
            <ScrollToTop />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
