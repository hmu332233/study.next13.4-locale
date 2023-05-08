import { useDictionary } from "@/contexts/DictionaryContext";

function Button() {
  const t = useDictionary();
  const handleClick = () => alert('Hello!');
  return <button className="border border-black" onClick={handleClick}>{t('client')}</button>
}

export default Button;