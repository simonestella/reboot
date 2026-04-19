export interface Tip {
  id: string;
  emoji: string;
  title: { it: string; en: string };
  description: { it: string; en: string };
  category: "hydration" | "posture" | "nutrition" | "sleep" | "mindset" | "movement";
  gradientFrom: string;
  gradientTo: string;
}

export const tips: Tip[] = [
  {
    id: "water",
    emoji: "💧",
    title: { it: "Bevi almeno 2L d'acqua", en: "Drink at least 2L of water" },
    description: {
      it: "Distribuisci l'assunzione durante la giornata: un bicchiere appena sveglio, uno ogni ora in ufficio. L'idratazione migliora concentrazione, metabolismo e recupero muscolare.",
      en: "Spread your intake throughout the day: a glass right after waking up, one every hour at the office. Hydration improves concentration, metabolism and muscle recovery."
    },
    category: "hydration",
    gradientFrom: "#1B8EF0",
    gradientTo: "#00C9A7"
  },
  {
    id: "stand-up",
    emoji: "🧍",
    title: { it: "Alzati almeno 2 ore al giorno in ufficio", en: "Stand at least 2 hours a day at the office" },
    description: {
      it: "Se hai una scrivania regolabile in altezza usala. Altrimenti alzati ogni 45-60 minuti: fai una chiamata in piedi, vai a bere acqua, usa le scale. Stare seduti >6h/giorno aumenta il rischio cardiovascolare.",
      en: "If you have a height-adjustable desk, use it. Otherwise stand up every 45-60 minutes: take a call standing, get water, use the stairs. Sitting >6h/day increases cardiovascular risk."
    },
    category: "posture",
    gradientFrom: "#00C9A7",
    gradientTo: "#4CAF50"
  },
  {
    id: "20-20-20",
    emoji: "👁️",
    title: { it: "Regola 20-20-20 per gli occhi", en: "20-20-20 eye rule" },
    description: {
      it: "Ogni 20 minuti, guarda qualcosa a 6 metri di distanza per 20 secondi. Riduce l'affaticamento oculare da schermo. Metti un promemoria sul telefono o usa un'app timer.",
      en: "Every 20 minutes, look at something 6 meters away for 20 seconds. Reduces digital eye strain. Set a reminder on your phone or use a timer app."
    },
    category: "posture",
    gradientFrom: "#7B61FF",
    gradientTo: "#1B8EF0"
  },
  {
    id: "stairs",
    emoji: "🪜",
    title: { it: "Usa sempre le scale", en: "Always use the stairs" },
    description: {
      it: "Sostituisci l'ascensore con le scale ogni volta che puoi. Salire 10 piani al giorno brucia circa 100 calorie extra, migliora la salute cardiovascolare e fortifica i muscoli delle gambe.",
      en: "Replace the elevator with stairs whenever you can. Climbing 10 floors a day burns about 100 extra calories, improves cardiovascular health and strengthens leg muscles."
    },
    category: "movement",
    gradientFrom: "#4CAF50",
    gradientTo: "#00C9A7"
  },
  {
    id: "protein",
    emoji: "🥩",
    title: { it: "Pasto ricco di proteine post-allenamento", en: "Protein-rich meal post-workout" },
    description: {
      it: "Entro 30-60 minuti dall'allenamento, consuma almeno 20-30g di proteine. Aiutano la riparazione e la crescita muscolare. Pollo, pesce, uova, legumi o un frullato proteico sono ottime scelte.",
      en: "Within 30-60 minutes of training, consume at least 20-30g of protein. They help muscle repair and growth. Chicken, fish, eggs, legumes or a protein shake are great choices."
    },
    category: "nutrition",
    gradientFrom: "#FF8C42",
    gradientTo: "#FF6B6B"
  },
  {
    id: "sleep",
    emoji: "😴",
    title: { it: "Dormi 7-8 ore per il recupero", en: "Sleep 7-8 hours for recovery" },
    description: {
      it: "Il 70% del recupero muscolare avviene durante il sonno. Mantieni orari costanti, dormi in una stanza fresca (18-20°C), evita schermi 1 ora prima di andare a letto.",
      en: "70% of muscle recovery happens during sleep. Keep consistent hours, sleep in a cool room (18-20°C), avoid screens 1 hour before bed."
    },
    category: "sleep",
    gradientFrom: "#1B8EF0",
    gradientTo: "#7B61FF"
  },
  {
    id: "breathing",
    emoji: "🧘",
    title: { it: "Respira profondamente nelle pause", en: "Breathe deeply during breaks" },
    description: {
      it: "La respirazione diaframmatica attiva il sistema nervoso parasimpatico riducendo il cortisolo. Tecnica: 4 sec inspira, 7 sec tieni, 8 sec espira (metodo 4-7-8). Fallo 5 volte, 3 volte al giorno.",
      en: "Diaphragmatic breathing activates the parasympathetic nervous system, reducing cortisol. Technique: 4 sec inhale, 7 sec hold, 8 sec exhale (4-7-8 method). Do it 5 times, 3 times a day."
    },
    category: "mindset",
    gradientFrom: "#00C9A7",
    gradientTo: "#1B8EF0"
  },
  {
    id: "wrists",
    emoji: "✋",
    title: { it: "Allunga polsi e dita frequentemente", en: "Frequently stretch wrists and fingers" },
    description: {
      it: "Se lavori molto al computer, fermati ogni ora per: aprire e chiudere le mani 10 volte, ruotare i polsi in entrambe le direzioni e fare pressione sul palmo con le dita tese. Previene la sindrome del tunnel carpale.",
      en: "If you work a lot on the computer, stop every hour to: open and close hands 10 times, rotate wrists in both directions and press the palm with fingers extended. Prevents carpal tunnel syndrome."
    },
    category: "posture",
    gradientFrom: "#4CAF50",
    gradientTo: "#1B8EF0"
  },
  {
    id: "walk-commute",
    emoji: "🚲",
    title: { it: "Cammina o vai in bici al lavoro", en: "Walk or cycle to work" },
    description: {
      it: "Anche solo parcheggiare più lontano o scendere una fermata prima fa differenza. Chi va al lavoro a piedi o in bici accumula mediamente 40 minuti di attività fisica extra al giorno senza accorgersene.",
      en: "Even just parking further away or getting off one stop earlier makes a difference. People who walk or cycle to work accumulate an average of 40 extra minutes of physical activity per day without noticing."
    },
    category: "movement",
    gradientFrom: "#00C9A7",
    gradientTo: "#4CAF50"
  },
  {
    id: "phone-screen",
    emoji: "📵",
    title: { it: "Stacca dagli schermi 1h prima di dormire", en: "Disconnect from screens 1h before sleeping" },
    description: {
      it: "La luce blu degli schermi sopprime la melatonina fino al 50%, ritardando l'addormentamento e peggiorando la qualità del sonno. Sostituisci il telefono con un libro, meditazione o stretching leggero.",
      en: "Blue light from screens suppresses melatonin by up to 50%, delaying sleep onset and worsening sleep quality. Replace your phone with a book, meditation or light stretching."
    },
    category: "sleep",
    gradientFrom: "#7B61FF",
    gradientTo: "#FF6B6B"
  }
];
