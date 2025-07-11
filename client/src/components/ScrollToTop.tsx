import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { scrollToElement, scrollToTop } from '@/lib/scrollUtils';

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Check if there's a hash (anchor) in the URL
    const hash = window.location.hash;
    
    if (hash) {
      // Small delay to ensure the page has rendered and components are mounted
      setTimeout(() => {
        const targetId = hash.substring(1);
        scrollToElement(targetId, 100); // Use utility function with 100px offset
      }, 150);
    } else {
      // No hash, scroll to top immediately for all page changes
      scrollToTop();
    }
  }, [location]);

  return null;
}