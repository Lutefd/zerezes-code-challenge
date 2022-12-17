import Head from 'next/head';
import { useState } from 'react';
import Job from './Job';
import { useFetch } from '../hooks/useFetch';
import paginate from '../utils/paginate';
import { Constants } from '../utils/constants';
import filterJobs from '../utils/filter';
export default function Home() {
  const { jobs, debouncedSearch, setSearch, loading } = useFetch();
  const { timeoutValue, elementsPerPage, initialPageIndex } = Constants();
  const [page, setPage] = useState(0);
  const amountOfPages = Math.ceil(
    filterJobs(jobs.data, debouncedSearch)?.length / elementsPerPage
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
    setTimeout(() => {
      handlePage(initialPageIndex);
    }, timeoutValue);
  };
  const handlePage = (index) => {
    setPage(index);
  };
  const renderPaginationButtons = () => {
    return [...Array(amountOfPages)].map((_, index) => {
      return (
        <button
          key={index}
          className={`btn mb-3 ${
            index === page ? 'btn-accent' : 'btn-outline btn-accent'
          }`}
          onClick={() => handlePage(index)}
        >
          {index + 1}
        </button>
      );
    });
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Zerezes Code Challenge</title>
        <meta
          name="description"
          content="Zerezes' code challenge by Luis Dourado"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <div className="justify-center navbar bg-base-300">
          <a
            href="https://github.com/Lutefd/zerezes-code-challenge"
            className="text-xl normal-case btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            Zerezes Code Challenge ::)
          </a>
        </div>
      </nav>
      <main className="grid place-items-center">
        <a href="https://zerezes.com.br/" target="_blank" rel="noreferrer">
          <img src="zerezes-logo.svg" alt="Logo da Zerezes" />
        </a>
        <input
          type="search"
          placeholder="Pesquisar"
          onChange={(e) => handleChange(e)}
          className="w-full max-w-xs input input-bordered input-accent"
        />
        <section className="flex flex-col items-center justify-center gap-5">
          {!loading && (
            <>
              <div className="container grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {paginate(filterJobs(jobs.data, debouncedSearch), page)?.map(
                  (job) => {
                    return <Job key={job.slug} {...job} />;
                  }
                )}
              </div>
              <div className="btn-group">{renderPaginationButtons()}</div>
            </>
          )}
        </section>
      </main>
      <footer className="mt-auto justify-center navbar bg-base-300">
        <a
          href="https://github.com/Lutefd/"
          className="link link-hover"
          target="_blank"
          rel="noreferrer"
        >
          Desafio feito por Luis Dourado
        </a>
      </footer>
    </div>
  );
}
