'use client';

import { FC, useEffect, useRef } from 'react';

import s from './Title.module.scss';

interface props {
  children: React.ReactNode;
}

const Title: FC<props> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      const containerWidth = containerRef.current?.offsetWidth;
      const titleWidth = titleRef.current?.offsetWidth;
      if (!containerWidth || !titleWidth) return;
      if (titleWidth > containerWidth) {
        titleRef.current.classList.add(s.animation);
      } else {
        titleRef.current.classList.remove(s.animation);
      }
    }, 500);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div ref={containerRef} className={s.titleContainer}>
      <h2 ref={titleRef} className={s.headerTitle}>
        {props.children}
      </h2>
    </div>
  );
};

export { Title };
