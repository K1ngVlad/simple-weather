import { getData } from '@/api';
import {
  About,
  AirQuality,
  DayInfo,
  DaysInfo,
  Header,
  NowInfo,
} from '@/components';
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

  const dayInfo = data.forecast.forecastday[0].hour
    .concat(data.forecast.forecastday[1].hour)
    .map(({ time, temp_c, condition, chance_of_rain }) => ({
      time,
      temp_c,
      condition,
      chance_of_rain,
    }));

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
      <DayInfo localtime={localtime} dayInfo={dayInfo} />
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
