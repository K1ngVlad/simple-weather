import { Region } from '@/components';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    lang: string;
  };
}

export default function ChoiseRegion(props: Props) {
  // redirect(`/${props.params.lang}/samara`);
  return (
    <main className="change">
      <Region lang={props.params.lang} />
    </main>
  );
}
