import React from 'react';
import { Constants } from '../utils/constants';
const Job = ({ company_name, title, remote, url, location, created_at }) => {
  const { toMilliseconds } = Constants();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  };
  const date = new Date(created_at * toMilliseconds).toLocaleDateString(
    'pt-br',
    options
  );
  return (
    <article className="card">
      <div className="card-body bg-base-200 mt-2 rounded-lg">
        <div className="card-title flex-col">
          <h3 className="justify-self-center text-center">{title}</h3>
          <p className="text-sm">Criado em: {date}</p>
        </div>
        <div className="flex justify-between mt-4 ">
          <div className="">
            <h4 className="flex gap-2">
              <img
                src="/briefcase-solid.svg"
                className="w-3"
                alt="Icone de maleta indicando que o texto a seguir é o nome da empresa"
              />
              {company_name}
            </h4>
            <h5 className="flex gap-2 items-center">
              <img
                src="/location-dot-solid.svg"
                className="w-3"
                alt="Icone de um waypoint indicando que o texto a seguir corresponde a localidade da vaga"
              />{' '}
              {remote ? 'Remoto' : `${location}`}
            </h5>
          </div>
          <a href={url} className="btn btn-accent self-center">
            Saiba Mais
          </a>
        </div>
      </div>
    </article>
  );
};
export default Job;
