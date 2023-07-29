import { Geo } from '@/interfaces';

const getRegions = async (q: string, apiKey: string) => {
  const url = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${q}`;
  const response = await fetch(url);
  const data: Geo[] = await response.json();
  return data;
};

export { getRegions };
