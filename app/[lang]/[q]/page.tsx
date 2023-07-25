import {
  About,
  AirQuality,
  DayInfo,
  DaysInfo,
  Header,
  NowInfo,
} from '@/components';
// import { useData } from '@/hooks';
import { Weather } from '@/interfaces';

interface Props {
  params: {
    lang: string;
    q: string;
  };
}

interface params {
  lang: string;
  q: string;
}

const getData = async ({ lang, q }: params) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=3&aqi=yes&alerts=yes&lang=${lang}`;
  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
};

export default async function Home({ params }: Props) {
  const data: Weather = await getData(params);

  const { localtime, name, country } = data.location;

  const {
    condition,
    wind_kph,
    temp_c,
    wind_dir,
    feelslike_c,
    humidity,
    uv,
    vis_km,
    pressure_mb,
  } = data.current;

  const { maxtemp_c, mintemp_c } = data.forecast.forecastday[0].day;

  const dayInfo = data.forecast.forecastday[0].hour.map(
    ({ time, temp_c, condition, chance_of_rain }) => ({
      time,
      temp_c,
      condition,
      chance_of_rain,
    })
  );

  const daysInfo = data.forecast.forecastday.map(({ day }) => ({
    maxtemp_c: Math.round(day.maxtemp_c),
    mintemp_c: Math.round(day.mintemp_c),
    condition: condition,
  }));

  const { air_quality } = data.current;

  const { sunrise, sunset } = data.forecast.forecastday[0].astro;

  return (
    <main>
      <div className="background"></div>
      <Header name={name} country={country} />
      <NowInfo
        localtime={localtime}
        condition={condition}
        wind_kph={wind_kph}
        temp_c={temp_c}
        wind_dir={wind_dir}
        maxtemp_c={maxtemp_c}
        mintemp_c={mintemp_c}
      />
      <DayInfo dayInfo={dayInfo} />
      <DaysInfo daysInfo={daysInfo} />
      <AirQuality air_quality={air_quality} />
      <About
        localtime={localtime}
        feelslike_c={feelslike_c}
        wind_kph={wind_kph}
        humidity={humidity}
        uv={uv}
        vis_km={vis_km}
        pressure_mb={pressure_mb}
        sunrise={sunrise}
        sunset={sunset}
      />
    </main>
  );
}
