interface params {
  lang: string;
  q: string;
}

const getData = async ({ lang, q }: params) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=3&aqi=yes&alerts=yes&lang=${lang}`;
  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
};

export { getData };
