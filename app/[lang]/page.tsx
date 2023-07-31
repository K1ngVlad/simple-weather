import { Region } from '@/components';
import { redirect } from 'next/navigation';
import { SaveLang } from './SaveLang';

interface Props {
  params: {
    lang: string;
  };
}

export default function ChoiseRegion(props: Props) {
  const lang = props.params.lang;
  return (
    <main className="change">
      <SaveLang lang={lang}>
        <Region lang={lang} />
      </SaveLang>
    </main>
  );
}
