import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use instant for immediate scroll on route change
    });
  }, [location.pathname]);

  return null; // This component doesn't render anything
}
