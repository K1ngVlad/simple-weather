'use client';

import { FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import s from './Reg.module.scss';
import { useNav } from '@/hooks';
import { getRegion } from '@/api';

interface props {
  apiKey?: string;
  lang: string;
}

const Reg: FC<props> = ({ apiKey, lang }) => {
  const { nav, setNav } = useNav();
  const { push } = useRouter();
  const { lat, lon, loading, region } = nav;

  useEffect(() => {
    const q = localStorage.getItem('q');
    if (q) {
      push(`/${lang}/${q}`);
    } else {
      if (window?.navigator?.geolocation && apiKey) {
        navigator.geolocation.getCurrentPosition(
          async ({ coords }) => {
            const { latitude, longitude } = coords;
            const q = `${latitude},${longitude}`;
            const currentRegion = await getRegion(q, apiKey);
            if (currentRegion) {
              setNav((e) => ({ ...e, region: currentRegion, loading: false }));
            } else {
              setNav((e) => ({ ...e, loading: false }));
            }
          },
          () => {
            setNav((e) => ({ ...e, loading: false }));
          }
        );
      } else {
        setNav((e) => ({ ...e, loading: false }));
      }
    }
  }, []);

  return (
    <h3 className={s.regionChange}>{`${loading ? 'Подождите...' : region}`}</h3>
  );
};

export { Reg };
