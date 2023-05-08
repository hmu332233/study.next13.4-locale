'use client'
import React, { createContext, useContext } from "react";

export const DictionaryContext = createContext<Record<string, string>>({});

export function DictionaryProvider({ children, dictionary }: { children: React.ReactNode, dictionary: Record<string, string> }) {
    return (
        <DictionaryContext.Provider value={dictionary}>
            {children}
        </DictionaryContext.Provider>
    );
}

export const useDictionary = () => {
    const dictionary = useContext(DictionaryContext);
    return (key: string) => dictionary[key] || key;
};