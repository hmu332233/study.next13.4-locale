import { DictionaryProvider } from "@/contexts/DictionaryContext";
import { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  children: React.ReactNode,
  params: {
    lang: 'en' | 'ko';
  }
}

export default async function Layout({
  children,
  params: { lang }
}: Props) {
  const dictionary = await getDictionary(lang);
  return (
    <DictionaryProvider dictionary={dictionary}>
      {children}
    </DictionaryProvider>
  )
}
