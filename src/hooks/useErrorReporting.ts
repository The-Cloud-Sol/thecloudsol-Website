import { useEffect } from "react";

interface ErrorReportingConfig {
  dsn?: string;
  environment?: string;
  release?: string;
  enableErrorReporting?: boolean;
}

interface ErrorContext {
  componentStack?: string;
  user?: {
    id?: string;
    email?: string;
    name?: string;
  };
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
}

declare global {
  interface Window {
    Sentry?: {
      init: (config: Record<string, unknown>) => void;
      captureException: (error: Error, context?: ErrorContext) => void;
      captureMessage: (message: string, level?: string) => void;
      setUser: (user: ErrorContext["user"]) => void;
      setTag: (key: string, value: string) => void;
      addBreadcrumb: (breadcrumb: {
        message: string;
        category: string;
        level?: string;
        data?: Record<string, unknown>;
      }) => void;
    };
  }
}

export const useErrorReporting = (config: ErrorReportingConfig = {}) => {
  const {
    dsn = import.meta.env.VITE_SENTRY_DSN,
    environment = import.meta.env.MODE,
    release = import.meta.env.VITE_APP_VERSION || "1.0.0",
    enableErrorReporting = import.meta.env.VITE_ENABLE_ERROR_REPORTING === "true",
  } = config;

  useEffect(() => {
    // Only initialize error reporting in production
    if (!import.meta.env.PROD || !enableErrorReporting || !dsn) {
      return;
    }

    // Load Sentry SDK
    const script = document.createElement("script");
    script.src = "https://browser.sentry-cdn.com/7.64.0/bundle.min.js";
    script.crossOrigin = "anonymous";
    script.onload = () => {
      if (window.Sentry) {
        window.Sentry.init({
          dsn,
          environment,
          release,
          tracesSampleRate: 0.1, // Capture 10% of transactions for performance monitoring
          beforeSend: (event) => {
            // Filter out certain errors
            if (event.exception) {
              const error = event.exception.values?.[0];
              if (error?.type === "ChunkLoadError") {
                // Don't send chunk load errors to Sentry
                return null;
              }
            }
            return event;
          },
        });

        console.log("Sentry error reporting initialized");
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, [dsn, environment, release, enableErrorReporting]);

  // Report error
  const reportError = (error: Error, context?: ErrorContext) => {
    if (!import.meta.env.PROD || !enableErrorReporting || !window.Sentry) {
      console.error("Error:", error, context);
      return;
    }

    window.Sentry.captureException(error, context);
  };

  // Report message
  const reportMessage = (message: string, level: string = "info") => {
    if (!import.meta.env.PROD || !enableErrorReporting || !window.Sentry) {
      console.log(`[${level.toUpperCase()}] ${message}`);
      return;
    }

    window.Sentry.captureMessage(message, level);
  };

  // Set user context
  const setUser = (user: ErrorContext["user"]) => {
    if (!import.meta.env.PROD || !enableErrorReporting || !window.Sentry) {
      return;
    }

    window.Sentry.setUser(user);
  };

  // Set tag
  const setTag = (key: string, value: string) => {
    if (!import.meta.env.PROD || !enableErrorReporting || !window.Sentry) {
      return;
    }

    window.Sentry.setTag(key, value);
  };

  // Add breadcrumb
  const addBreadcrumb = (breadcrumb: {
    message: string;
    category: string;
    level?: string;
    data?: Record<string, unknown>;
  }) => {
    if (!import.meta.env.PROD || !enableErrorReporting || !window.Sentry) {
      return;
    }

    window.Sentry.addBreadcrumb({
      ...breadcrumb,
      timestamp: Date.now() / 1000,
    } as any);
  };

  return {
    reportError,
    reportMessage,
    setUser,
    setTag,
    addBreadcrumb,
  };
};
