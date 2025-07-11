/**
 * Utility functions for consistent scrolling behavior across the app
 */

/**
 * Scrolls to a target element with proper offset for fixed headers
 * @param targetId - The ID of the target element (without #)
 * @param offset - Additional offset in pixels (default: 80 for header)
 */
export function scrollToElement(targetId: string, offset: number = 100): void {
  const element = document.getElementById(targetId);
  if (!element) {
    console.warn(`Element with ID "${targetId}" not found`);
    return;
  }

  const elementTop = element.offsetTop - offset;
  
  window.scrollTo({
    top: elementTop,
    behavior: 'smooth'
  });
}

/**
 * Scrolls to the top of the page instantly
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  });
}

/**
 * Scrolls to the top of the page smoothly
 */
export function scrollToTopSmooth(): void {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

/**
 * Gets the current scroll position
 */
export function getScrollPosition(): { x: number; y: number } {
  return {
    x: window.scrollX || window.pageXOffset,
    y: window.scrollY || window.pageYOffset
  };
}

/**
 * Checks if an element is in the viewport
 */
export function isElementInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}