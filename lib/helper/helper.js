const hrefWithUtmParams = (fieldUrl, locationSearch) => {
  return fieldUrl.startsWith('#')
    ? locationSearch.path + locationSearch.search + fieldUrl
    : {
      pathname: fieldUrl,
      query: locationSearch?.search.replace('?', ''),
    };
};

const parseDataAttributes = (str) => {
  if (!str) return {};

  const regex = /([\w-]+)=['"]([^'"]+)['"]/g;
  const attrs = {};
  let match;

  while ((match = regex.exec(str)) !== null) {
    attrs[match[1]] = match[2];
  }

  return attrs;
};

const useLocationSearch = () => {
  const [locationSearch, setLocationSearch] = useState({
    search: '',
    path: '',
  });

  useEffect(() => {
    if (window.location.search && window.location.search.includes('utm_')) {
      const searchParams = new URLSearchParams(window.location.search);
      const filteredParams = new URLSearchParams();

      const allowedParams = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'utm_id',
      ];

      for (const [key, value] of searchParams.entries()) {
        if (allowedParams.includes(key.toLowerCase())) {
          filteredParams.append(key, value);
        }
      }

      const sanitizedSearch = filteredParams.toString();
      setLocationSearch({
        search: sanitizedSearch ? `?${sanitizedSearch}` : '',
        path: window.location.pathname,
      });
    }
  }, []);

  return { locationSearch };
}

export {
  hrefWithUtmParams, parseDataAttributes, useLocationSearch
}