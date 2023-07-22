import { About, AirQuality, DayInfo, DaysInfo, NowInfo } from '@/components';

export default function Home() {
  return (
    <main>
      <NowInfo />
      <DayInfo />
      <DaysInfo />
      <AirQuality />
      <About />
    </main>
  );
}
