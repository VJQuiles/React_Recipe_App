import { useState, useEffect } from 'react';

function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; // skip if no URL

    const controller = new AbortController();
    setData(null);
    setError(null);
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, JSON.stringify(options)]); // stringify options to trigger on changes

  return { data, loading, error };
}

export default useFetch;
