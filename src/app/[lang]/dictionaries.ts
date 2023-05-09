import 'server-only';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ko: () => import('@/dictionaries/ko.json').then((module) => module.default),
};
 
export const getDictionary = async (locale: 'en' | 'ko') => dictionaries[locale]();
export const useDictionary = async (locale: 'en' | 'ko') => {
  const dictionary = await getDictionary(locale);
  return (key: string) => dictionary[key] || key;
}