'use client'
import { useDictionary } from '@/contexts/DictionaryContext';
import Button from '../../components/HelloButton'

type Props = {
  params: {
    lang: 'en' | 'ko';
  }
}

async function Home({ params: { lang }}: Props) {
  const t = useDictionary();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>lang: {lang}</div>
      <div>hello: {t('hello')}</div>
      <div>server: {t('server')}</div>
      <Button />
    </main>
  )
}

export default Home;