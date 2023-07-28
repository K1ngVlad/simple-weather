import therm from '@/assets/therm.svg';
import wind from '@/assets/wind.svg';
import drop from '@/assets/drop.svg';
import sun from '@/assets/sun.svg';
import eye from '@/assets/eye.svg';
import pressure from '@/assets/pressure.svg';

const info = [
  {
    img: therm,
    name: 'Ощущается как',
    value: '21 °',
  },
  {
    img: wind,
    name: 'Ветер',
    value: '19 км/ч',
  },
  {
    img: drop,
    name: 'Влажность',
    value: '63 %',
  },
  {
    img: sun,
    name: 'УФ',
    value: '0 Очень слабый',
  },
  {
    img: eye,
    name: 'Видимость',
    value: '14 км',
  },
  {
    img: pressure,
    name: 'Давление воздуха',
    value: '1 009 гПа',
  },
];

export { info };
