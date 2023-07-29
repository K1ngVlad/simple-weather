import { Search } from '@/components';

interface Props {
  params: {
    lang: string;
  };
}

export default function SearchPage(props: Props) {
  return (
    <main className="change">
      <Search lang={props.params.lang} />
    </main>
  );
}
