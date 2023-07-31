'use client';

import { useEffect } from 'react';

interface props {
  q: string;
}

const SaveRegion = (props: props) => {
  useEffect(() => {
    localStorage.setItem('q', props.q);
  }, []);
  return <></>;
};

export { SaveRegion };
