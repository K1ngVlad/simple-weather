import { redirect } from 'next/navigation';

interface Props {
  params: {
    lang: string;
  };
}

export default function Redirect(props: Props) {
  redirect(`/${props.params.lang}/samara`);
}
