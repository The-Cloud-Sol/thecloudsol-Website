import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="text-center">
      <Loader2 className="w-8 h-8 animate-spin text-sky-400 mx-auto mb-4" />
      <p className="text-slate-400">Loading...</p>
    </div>
  </div>
);

// Lazy loaded components
const Home = lazy(() => import("../pages/Index").then(module => ({ default: module.default })));
const About = lazy(() => import("../pages/About").then(module => ({ default: module.default })));
const Contact = lazy(() => import("../pages/Contact").then(module => ({ default: module.default })));
const Quote = lazy(() => import("../pages/Quote").then(module => ({ default: module.default })));
const Privacy = lazy(() => import("../pages/Privacy").then(module => ({ default: module.default })));
const Terms = lazy(() => import("../pages/Terms").then(module => ({ default: module.default })));
const NotFound = lazy(() => import("../pages/NotFound").then(module => ({ default: module.default })));

// Service pages
const AWS = lazy(() => import("../pages/services/AWS").then(module => ({ default: module.default })));
const Azure = lazy(() => import("../pages/services/Azure").then(module => ({ default: module.default })));
const GoogleWorkspace = lazy(() => import("../pages/services/GoogleWorkspace").then(module => ({ default: module.default })));
const Microsoft365 = lazy(() => import("../pages/services/Microsoft365").then(module => ({ default: module.default })));
const Specialized = lazy(() => import("../pages/services/Specialized").then(module => ({ default: module.default })));

// Higher-order component for lazy loading with suspense
export const withLazyLoading = <T extends React.ComponentType<any>>(
  Component: T,
  fallback: React.ReactNode = <LoadingSpinner />
) => {
  const LazyComponent = lazy(() => 
    Promise.resolve({ default: Component })
  );

  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Preload function for critical routes
export const preloadRoute = (routeName: string) => {
  switch (routeName) {
    case "about":
      import("../pages/About");
      break;
    case "contact":
      import("../pages/Contact");
      break;
    case "quote":
      import("../pages/Quote");
      break;
    case "aws":
      import("../pages/services/AWS");
      break;
    case "azure":
      import("../pages/services/Azure");
      break;
    case "google-workspace":
      import("../pages/services/GoogleWorkspace");
      break;
    case "microsoft-365":
      import("../pages/services/Microsoft365");
      break;
    case "specialized":
      import("../pages/services/Specialized");
      break;
    default:
      break;
  }
};

// Export lazy loaded components with suspense
export const LazyHome = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Home />
  </Suspense>
);

export const LazyAbout = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <About />
  </Suspense>
);

export const LazyContact = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Contact />
  </Suspense>
);

export const LazyQuote = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Quote />
  </Suspense>
);

export const LazyPrivacy = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Privacy />
  </Suspense>
);

export const LazyTerms = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Terms />
  </Suspense>
);

export const LazyNotFound = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <NotFound />
  </Suspense>
);

export const LazyAWS = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <AWS />
  </Suspense>
);

export const LazyAzure = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Azure />
  </Suspense>
);

export const LazyGoogleWorkspace = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <GoogleWorkspace />
  </Suspense>
);

export const LazyMicrosoft365 = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Microsoft365 />
  </Suspense>
);

export const LazySpecialized = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Specialized />
  </Suspense>
);
