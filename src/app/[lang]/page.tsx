import Button from '../../components/HelloButton'
import { getDictionary } from './dictionaries';

type Props = {
  params: {
    lang: 'en' | 'ko';
  }
}

async function Home({ params: { lang }}: Props) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>lang: {lang}</div>
      <div>hello: {dictionary.hello}</div>
      <div>server: {dictionary.server}</div>
      <Button />
    </main>
  )
}

export default Home;