import { useState, useEffect } from 'react';
import useDebounce from './useDebounce';
import paginate from '../utils/paginate';
export const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchJobs() {
      const data = await fetch(
        `https://www.arbeitnow.com/api/job-board-api`
      ).then((res) => res.json());
      setJobs(paginate(data));
      setLoading(false);
    }
    fetchJobs();
  }, [debouncedSearch]);
  return { debouncedSearch, search, jobs, setSearch, loading };
};
