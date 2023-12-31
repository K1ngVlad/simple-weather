import { FC } from 'react';
import { day } from './constants';
import { HourElem } from './HourElem';
import { Canvas } from './Сanvas';

interface props {
  className: string;
  hourClassName: string;
  localtime: string;
  dayInfo: {
    time: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    chance_of_rain: number;
  }[];
}

const DayGraph: FC<props> = (props) => {
  const { className, hourClassName, dayInfo, localtime } = props;
  return (
    <div className={className}>
      <div className={hourClassName}>
        {dayInfo.map((hour) => (
          <HourElem
            key={hour.time}
            time={hour.time.slice(-5, hour.time.length)}
            probality={hour.chance_of_rain}
            condition={hour.condition}
          />
        ))}
      </div>
      <Canvas localtime={localtime} dayInfo={dayInfo} />
    </div>
  );
};

export { DayGraph };
