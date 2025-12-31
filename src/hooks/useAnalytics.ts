import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface AnalyticsConfig {
  gaId?: string;
  hotjarId?: string;
  enableAnalytics?: boolean;
}

declare global {
  interface Window {
    gtag?: {
      (...args: unknown[]): void;
      q?: unknown[];
    };
    hj?: {
      (...args: unknown[]): void;
      q?: unknown[];
    };
    dataLayer?: unknown[];
    _hjSettings?: { hjid: number; hjsv: number };
  }
}

export const useAnalytics = (config: AnalyticsConfig = {}) => {
  const location = useLocation();

  useEffect(() => {
    const {
      gaId = import.meta.env.VITE_GA_ID,
      hotjarId = import.meta.env.VITE_HOTJAR_ID,
      enableAnalytics = import.meta.env.VITE_ENABLE_ANALYTICS === "true",
    } = config;

    // Only initialize analytics in production
    if (!import.meta.env.PROD || !enableAnalytics) {
      return;
    }

    // Initialize Google Analytics
    if (gaId && !window.gtag) {
      // Load Google Analytics script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      const gtagFunction = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
      
      // Add queue property for Hotjar compatibility
      gtagFunction.q = gtagFunction.q || [];
      
      window.gtag = gtagFunction;
      window.gtag("js", new Date());
      window.gtag("config", gaId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      console.log("Google Analytics initialized");
    }

    // Initialize Hotjar
    if (hotjarId && !window.hj) {
      // Set Hotjar settings
      window._hjSettings = { hjid: parseInt(hotjarId), hjsv: 6 };
      
      // Load Hotjar script
      (function (h: Window, o: Document, t: string, j: string, a: Element | null, r: HTMLScriptElement) {
        if (!h.hj) {
          h.hj = function () { 
            const hj = h.hj as { q?: unknown[] };
            hj.q = hj.q || []; 
            hj.q.push(arguments); 
          };
        }
        h._hjSettings = { hjid: parseInt(hotjarId), hjsv: 6 };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = true;
        r.src = t + h._hjSettings?.hjid + j + h._hjSettings?.hjsv;
        a?.appendChild(r);
      })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=", null, document.createElement("script") as HTMLScriptElement);

      console.log("Hotjar initialized");
    }
  }, [config]);

  // Track page views
  useEffect(() => {
    const {
      gaId = import.meta.env.VITE_GA_ID,
      enableAnalytics = import.meta.env.VITE_ENABLE_ANALYTICS === "true",
    } = config;

    if (!import.meta.env.PROD || !enableAnalytics || !gaId || !window.gtag) {
      return;
    }

    // Track page view
    window.gtag("config", gaId, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location, config]);

  // Track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    const {
      gaId = import.meta.env.VITE_GA_ID,
      enableAnalytics = import.meta.env.VITE_ENABLE_ANALYTICS === "true",
    } = config;

    if (!import.meta.env.PROD || !enableAnalytics || !gaId || !window.gtag) {
      return;
    }

    window.gtag("event", eventName, parameters);
  };

  // Track user interactions
  const trackInteraction = (action: string, category: string, label?: string) => {
    trackEvent("user_interaction", {
      event_category: category,
      event_label: label,
      value: action,
    });
  };

  // Track form submissions
  const trackFormSubmission = (formName: string) => {
    trackEvent("form_submit", {
      event_category: "forms",
      event_label: formName,
    });
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent("button_click", {
      event_category: "engagement",
      event_label: buttonName,
      value: location,
    });
  };

  // Track page scroll depth
  const trackScrollDepth = (depth: number) => {
    trackEvent("scroll", {
      event_category: "engagement",
      event_label: "scroll_depth",
      value: depth,
    });
  };

  return {
    trackEvent,
    trackInteraction,
    trackFormSubmission,
    trackButtonClick,
    trackScrollDepth,
  };
};
