import React from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // Ensure immediate scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' to ensure immediate scrolling
    });
  }, [pathname]);

  return null;
};