'use client';

import { NavigatorContext } from '@/providers';
import { useContext } from 'react';

const useNav = () => {
  return useContext(NavigatorContext);
};

export { useNav };
