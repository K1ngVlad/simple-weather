'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { day } from './constants';

import s from './Canvas.module.scss';
import { dayInfoInterface } from './interface';

const Canvas: FC<dayInfoInterface> = ({ dayInfo }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      const temps = dayInfo.map((hour) => hour.temp_c);
      const maxTemp = Math.max(...temps);
      const minTemp = Math.min(...temps);
      const xStep = 50 * 2;
      const yStep = (50 * 2) / (maxTemp - minTemp);

      ctx.beginPath();
      ctx.fillStyle = 'rgba(256,256,256)';
      ctx.strokeStyle = '#ffd700';
      ctx.font = '400 28px Inter';
      ctx.lineWidth = 4;
      dayInfo.forEach((hour, i) => {
        const x = i * xStep + 25 * 2;
        const y = (maxTemp - hour.temp_c) * yStep + 20 * 2;
        ctx.lineTo(x, y);
        ctx.fillText(`${hour.temp_c}°`, x - 10, y - 10);
      });
      ctx.stroke();
      ctx.lineTo(1175 * 2, 80 * 2);
      ctx.lineTo(25 * 2, 80 * 2);
      ctx.fillStyle = 'rgba(256,256,256,0.3)';
      ctx.fill();
    }
    setLoading(false);
  }, []);

  return (
    <>
      <canvas
        style={{
          display: loading ? 'none' : 'block',
        }}
        className={s.canvas}
        ref={canvasRef}
        width={2400}
        height={160}
      ></canvas>
      {loading && <div className={s.loading}>Идёт построение графика...</div>}
    </>
  );
};

export { Canvas };
