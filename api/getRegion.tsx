import { Geo } from '@/interfaces';

const getRegion = async (q: string, apiKey: string) => {
  const url = `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${q}`;
  console.log(url);
  const response = await fetch(url);
  const data: Geo[] = await response.json();
  if (data.length) {
    return data[0].name;
  } else {
    return null;
  }
};

export { getRegion };
