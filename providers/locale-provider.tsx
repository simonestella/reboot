"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type Locale = "it" | "en";

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "it",
  setLocale: () => {},
  t: (k) => k,
});

const translations: Record<string, Record<Locale, string>> = {
  "nav.portfolio": { it: "Portfolio", en: "Portfolio" },
  "nav.exercises": { it: "Esercizi", en: "Exercises" },
  "nav.tips": { it: "Consigli", en: "Tips" },
  "hero.subtitle": {
    it: "Il tuo piano di allenamento giornaliero per uno stile di vita attivo e sano",
    en: "Your daily workout plan for an active and healthy lifestyle"
  },
  "hero.portfolio_link": { it: "Visita il mio Portfolio", en: "Visit my Portfolio" },
  "timeline.title": { it: "Il tuo giorno in movimento", en: "Your day in motion" },
  "timeline.subtitle": {
    it: "Una timeline di 24 ore con esercizi, pause e momenti di recupero",
    en: "A 24-hour timeline with exercises, rest breaks and recovery moments"
  },
  "timeline.rest": { it: "Riposo", en: "Rest" },
  "timeline.sleep": { it: "Sonno & Recupero", en: "Sleep & Recovery" },
  "timeline.duration": { it: "Durata", en: "Duration" },
  "timeline.sets": { it: "Serie", en: "Sets" },
  "timeline.reps": { it: "Ripetizioni", en: "Reps" },
  "timeline.muscles": { it: "Muscoli coinvolti", en: "Muscles involved" },
  "timeline.how": { it: "Come eseguirlo", en: "How to perform it" },
  "timeline.rest_after": { it: "Riposo dopo", en: "Rest after" },
  "timeline.close": { it: "Chiudi", en: "Close" },
  "tips.title": { it: "Consigli per la giornata", en: "Daily wellness tips" },
  "tips.subtitle": {
    it: "Piccole abitudini quotidiane che fanno una grande differenza nel lungo periodo",
    en: "Small daily habits that make a big difference in the long run"
  },
  "theme.light": { it: "Chiaro", en: "Light" },
  "theme.dark": { it: "Scuro", en: "Dark" },
  "hero.adapt_title": {
    it: "Adatta il piano al tuo ritmo",
    en: "Adapt the plan to your own pace"
  },
  "hero.adapt_body": {
    it: "Gli orari sono solo un suggerimento: ogni esercizio può essere spostato in base alla tua giornata. L'importante è muoversi, anche solo 5 minuti alla volta. Inizia da ciò che è più facile per te.",
    en: "The times are just a suggestion: every exercise can be shifted to fit your day. What matters is moving, even just 5 minutes at a time. Start with whatever feels easiest."
  },
  "timeline.you_are_here": { it: "Sei qui!", en: "You're here!" },
  "timeline.in_progress": { it: "In corso", en: "In progress" },
};

export function LocaleProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [locale, setLocale] = useState<Locale>("it");

  const ctx = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: string): string => translations[key]?.[locale] ?? key,
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={ctx}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
