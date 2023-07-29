import { FC } from 'react';
import { info } from './constants';
import { InfoElem } from './InfoElem';
import { SunInfo } from './SunInfo';
import { getAssessment } from './helpers';

import s from './About.module.scss';

interface props {
  feelslike_c: number;
  wind_kph: number;
  humidity: number;
  uv: number;
  vis_km: number;
  pressure_mb: number;
  sunrise: string;
  sunset: string;
  localtime: string;
}

const About: FC<props> = (props) => {
  const {
    feelslike_c,
    wind_kph,
    humidity,
    uv,
    vis_km,
    pressure_mb,
    sunrise,
    sunset,
    localtime,
  } = props;

  const values = [
    `${feelslike_c} °`,
    `${wind_kph} км/ч`,
    `${humidity} %`,
    `${uv} ${getAssessment(uv)}`,
    `${vis_km} км`,
    `${
      pressure_mb < 1000
        ? pressure_mb
        : `${String(pressure_mb)[0]} ${String(pressure_mb).slice(1)}`
    } мбар`,
  ];

  return (
    <section className={s.about}>
      <h3 className={s.title}>О погоде</h3>
      <div className={s.container}>
        {info.map((e, i) => (
          <InfoElem img={e.img} name={e.name} value={values[i]} key={e.name} />
        ))}
      </div>
      <SunInfo sunrise={sunrise} sunset={sunset} localtime={localtime} />
    </section>
  );
};

export { About };
