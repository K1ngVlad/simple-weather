'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

import { Loading } from '@/components';

export default function Redirect() {
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      redirect(`/${lang}`);
    } else {
      redirect('/ru');
    }
  }, []);

  return <Loading />;
}
