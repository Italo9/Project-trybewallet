const SIGLA_API = 'https://economia.awesomeapi.com.br/json/all';

const getSigla = async () => {
  const response = await fetch(SIGLA_API);
  const json = await response.json();
  return Promise.resolve(json);
};

export default getSigla;
