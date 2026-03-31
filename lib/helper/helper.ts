import { useState, useEffect, useMemo } from 'react';

/**
 * Generates a URL string with UTM parameters appended correctly.
 * @param fieldUrl - The base destination URL (e.g., '/contact-us')
 * @param searchParams - The UTM string (e.g., '?utm_source=google')
 */
export const hrefWithUtmParams = (fieldUrl: string | any, searchParams: string | any): string => {
  // 1. Safety Check: If fieldUrl is an object (legacy Page Router artifact), extract pathname
  const baseUrl = typeof fieldUrl === 'object' ? fieldUrl.pathname : fieldUrl;

  if (!baseUrl) return '/';

  // 2. Safety Check: Ensure searchParams is a string before calling .startsWith
  const searchString = typeof searchParams === 'string' ? searchParams : '';

  // Handle anchor links
  if (baseUrl.startsWith('#')) {
    return baseUrl;
  }

  if (!searchString) return baseUrl;

  // Remove leading '?' to avoid double question marks
  const cleanSearch = searchString.startsWith('?') ? searchString.slice(1) : searchString;

  // Decide if we need '?' or '&'
  const separator = baseUrl.includes('?') ? '&' : '?';

  return `${baseUrl}${separator}${cleanSearch}`;
};

/**
 * Parses a string of data attributes into a React object.
 */
export const parseDataAttributes = (str: string | null | undefined): Record<string, string> => {
  if (!str) return {};

  const attrs: Record<string, string> = {};
  const regex = /([\w-]+)=['"]([^'"]+)['"]/g;
  let match;

  while ((match = regex.exec(str)) !== null) {
    attrs[match[1]] = match[2];
  }

  return attrs;
};

interface LocationState {
  search: string;
  path: string;
}

/**
 * Hook to capture and filter UTM parameters.
 */
export const useLocationSearch = () => {
  const [locationSearch, setLocationSearch] = useState<LocationState>({
    search: '',
    path: '',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentSearch = window.location.search;

    if (currentSearch && currentSearch.includes('utm_')) {
      const urlParams = new URLSearchParams(currentSearch);
      const filteredParams = new URLSearchParams();

      const ALLOWED_UTMS = [
        'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'
      ];

      urlParams.forEach((value, key) => {
        if (ALLOWED_UTMS.includes(key.toLowerCase())) {
          filteredParams.append(key, value);
        }
      });

      const sanitized = filteredParams.toString();

      setLocationSearch({
        search: sanitized ? `?${sanitized}` : '',
        path: window.location.pathname,
      });
    }
  }, []);

  return { locationSearch };
};