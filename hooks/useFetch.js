import { useState, useEffect } from 'react';
import useDebounce from './useDebounce';
import { Constants } from '../utils/constants';
export const useFetch = () => {
  const { timeoutValue } = Constants();
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const debouncedSearch = useDebounce(search, timeoutValue);

  useEffect(() => {
    async function fetchJobs() {
      const data = await fetch(
        `https://www.arbeitnow.com/api/job-board-api`
      ).then((res) => res.json());
      setJobs(data);
      setLoading(false);
    }
    fetchJobs();
  }, [debouncedSearch]);
  return { debouncedSearch, search, jobs, setSearch, loading };
};
