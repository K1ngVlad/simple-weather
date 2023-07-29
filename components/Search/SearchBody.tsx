'use client';

import { FC, FormEvent, useState } from 'react';
import Image from 'next/image';

import { getRegions } from '@/api';
import { Geo } from '@/interfaces/GeoInterface';
import { SearchElem } from './SearchElem';

import search from '@/assets/search.svg';
import cross from '@/assets/cross.svg';

import s from './SearchBody.module.scss';

interface props {
  apiKey?: string;
  lang: string;
}

const SearchBody: FC<props> = (props) => {
  const { apiKey, lang } = props;
  const [value, setValue] = useState('');
  const [regions, setRegions] = useState<Geo[] | null>(null);

  const onSubmitHeandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log('dasdsa');
    if (apiKey) {
      const currentRegions = await getRegions(value, apiKey);
      setRegions(currentRegions);
    }
  };

  const onResetHeandler = (e: FormEvent) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <div className={s.searchBody}>
      <form
        onReset={(e) => onResetHeandler(e)}
        onSubmit={(e) => onSubmitHeandler(e)}
        className={s.inputBox}
      >
        <input
          placeholder="Введите ваш регион"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={s.submitBtn} type="submit">
          <Image src={search} alt="Найти" />
        </button>
        {value && (
          <button className={s.resetBtn} type="reset">
            <Image src={cross} alt="Стереть" />
          </button>
        )}
      </form>
      <div>
        {regions ? (
          regions.length ? (
            regions.map((region) => (
              <SearchElem key={region.id} lang={lang} geo={region} />
            ))
          ) : (
            <div className={s.notFound}>
              К сожалению, по вашему запросу ничего не найдено. Проверьте
              правильность написания или <b>повторите его на английском</b>.
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export { SearchBody };
