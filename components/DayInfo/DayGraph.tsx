'use client';

import { FC, useEffect, useRef } from 'react';
import { day } from './constants';
import { HourElem } from './HourElem';

interface props {
  className: string;
  hourClassName: string;
}

const DayGraph: FC<props> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      const temps = day.map((hour) => hour.temp);
      const maxTemp = Math.max(...temps);
      const minTemp = Math.min(...temps);
      const xStep = 50;
      const yStep = 50 / (maxTemp - minTemp);

      ctx.beginPath();
      ctx.fillStyle = 'rgba(256,256,256)';
      ctx.strokeStyle = '#ffd700';
      ctx.font = '400 14px Inter';
      ctx.lineWidth = 2;
      day.forEach((hour, i) => {
        const x = i * xStep + 25;
        const y = (maxTemp - hour.temp) * yStep + 20;
        ctx.lineTo(x, y);
        ctx.fillText(`${hour.temp}°`, x - 10, y - 10);
      });
      ctx.stroke();
      ctx.lineTo(1175, 80);
      ctx.lineTo(25, 80);
      ctx.fillStyle = 'rgba(256,256,256,0.3)';
      ctx.fill();
    }
  }, []);

  return (
    <div className={props.className}>
      <div className={props.hourClassName}>
        {day.map((hour, index) => (
          <HourElem key={index} time={hour.time} probality={hour.probality} />
        ))}
      </div>
      <canvas ref={canvasRef} width={1200} height={80}></canvas>
    </div>
  );
};

export { DayGraph };
