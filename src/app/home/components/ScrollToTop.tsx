"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Prevent browser from restoring previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Always start from the top
    window.scrollTo(0, 0);
  }, []);

  return null;
}