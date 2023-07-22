import { FC } from 'react';

import s from './InfoElem.module.scss';
import Image from 'next/image';

interface props {
  img: string;
  name: string;
  value: string;
}

const InfoElem: FC<props> = (props) => {
  const { img, name, value } = props;
  return (
    <div className={s.infoElem}>
      <Image src={img} alt={name} />
      <span className={s.name}>{name}</span>
      <span className={s.value}>{value}</span>
    </div>
  );
};

export { InfoElem };
