"use client";
import { useState, useEffect } from "react";

const useLazyLoad = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "0px" } // Adjust the rootMargin as needed to control when the element is considered in the viewport
    );

    const target = document.querySelector("#lazy-load-target"); // Change this selector to the appropriate image container ID or class
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return isIntersecting;
};

export default useLazyLoad;
