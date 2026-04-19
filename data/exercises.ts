export interface Exercise {
  id: string;
  time: string;
  name: { it: string; en: string };
  emoji: string;
  duration: number;
  restAfter: number;
  category: "morning" | "office" | "lunch" | "afternoon" | "evening" | "night";
  gradientFrom: string;
  gradientTo: string;
  description: { it: string; en: string };
  sets: number;
  reps: { it: string; en: string };
  muscles: { it: string[]; en: string[] };
  howTo: { it: string[]; en: string[] };
}

export const exercises: Exercise[] = [
  {
    id: "wake-up-stretch",
    time: "06:30",
    name: { it: "Risveglio Muscolare", en: "Wake-up Stretch" },
    emoji: "🌅",
    duration: 10,
    restAfter: 0,
    category: "morning",
    gradientFrom: "#FF8C42",
    gradientTo: "#FFD166",
    description: {
      it: "Routine di allungamento mattutino da fare ancora sul letto o sul tappetino. Nessuna serie, nessun riposo — esegui ogni posizione una sola volta in sequenza.",
      en: "Morning stretching routine done on the bed or mat. No sets, no rest — perform each position once in sequence."
    },
    sets: 1,
    reps: { it: "1 giro completo", en: "1 full round" },
    muscles: { it: ["Schiena", "Collo", "Gambe", "Fianchi"], en: ["Back", "Neck", "Legs", "Hips"] },
    howTo: {
      it: [
        "Sdraiati sulla schiena, braccia lungo i fianchi — respira lentamente",
        "Porta entrambe le ginocchia al petto e abbraccia le cosce: tieni 30 secondi",
        "Mantieni le spalle a terra: ruota le ginocchia verso sinistra (30 sec), poi verso destra (30 sec)",
        "Siediti con le gambe aperte a V, piega il busto in avanti verso il centro: tieni 30 secondi",
        "Alzati in piedi lentamente: ruota le spalle indietro 10 volte consecutive",
        "Inclina la testa: orecchio destro verso spalla destra (15 sec), poi sinistra (15 sec)",
        "Ruota il collo lentamente 5 cerchi in senso orario, poi 5 in senso antiorario",
        "Fatto — nessun riposo necessario, passa alla tua colazione o al bagno"
      ],
      en: [
        "Lie on your back, arms at your sides — breathe slowly",
        "Bring both knees to your chest and hug your thighs: hold 30 seconds",
        "Keep shoulders on the floor: rotate knees left (30 sec), then right (30 sec)",
        "Sit with legs open in a V, fold torso forward toward the center: hold 30 seconds",
        "Stand up slowly: roll shoulders backward 10 times in a row",
        "Tilt head: right ear toward right shoulder (15 sec), then left (15 sec)",
        "Slowly rotate your neck 5 circles clockwise, then 5 counter-clockwise",
        "Done — no rest needed, move on to breakfast or the bathroom"
      ]
    }
  },
  {
    id: "morning-yoga",
    time: "07:00",
    name: { it: "Yoga del Mattino", en: "Morning Yoga Flow" },
    emoji: "🧘",
    duration: 15,
    restAfter: 5,
    category: "morning",
    gradientFrom: "#1B8EF0",
    gradientTo: "#00C9A7",
    description: {
      it: "Saluto al Sole × 3 serie. Ogni serie dura circa 3 minuti. Tra una serie e l'altra riposati 60 secondi in piedi, respirando. I passi descrivono UNA singola serie completa.",
      en: "Sun Salutation × 3 sets. Each set takes about 3 minutes. Rest 60 seconds standing between sets. The steps describe ONE complete set."
    },
    sets: 3,
    reps: { it: "1 sequenza per serie", en: "1 sequence per set" },
    muscles: { it: ["Tutto il corpo", "Core", "Spalle", "Gambe"], en: ["Full body", "Core", "Shoulders", "Legs"] },
    howTo: {
      it: [
        "Stai in piedi, piedi uniti, mani al petto (Tadasana) — respira profondamente",
        "Inspira: alza le braccia sopra la testa, sguardo verso l'alto",
        "Espira: piegati in avanti, mani verso il pavimento (ginocchia leggermente flesse va bene)",
        "Inspira: allunga la schiena e guarda avanti (mezza flessione in avanti)",
        "Espira: porta i piedi indietro in plank — corpo in linea retta dalla testa ai talloni",
        "Abbassati lentamente fino a terra, poi inspira alzando il petto (posizione cobra)",
        "Espira: spingi i fianchi verso l'alto fino al cane a testa in giù (Adho Mukha) — tieni 5 respiri",
        "Cammina i piedi verso le mani, torna in piedi e alza le braccia — hai completato 1 serie",
        "↳ Dopo la serie 1 e 2: riposa 60 secondi in piedi respirando. Dopo la serie 3: fine."
      ],
      en: [
        "Stand with feet together, hands at chest (Tadasana) — breathe deeply",
        "Inhale: raise arms overhead, gaze upward",
        "Exhale: fold forward, hands toward the floor (slightly bent knees is fine)",
        "Inhale: lengthen spine and look forward (halfway lift)",
        "Exhale: step feet back into plank — body in a straight line head to heels",
        "Lower slowly to the floor, then inhale lifting your chest (cobra pose)",
        "Exhale: push hips up into downward-facing dog (Adho Mukha) — hold 5 breaths",
        "Walk feet toward hands, stand back up and raise arms — 1 set complete",
        "↳ After set 1 and 2: rest 60 sec standing and breathing. After set 3: done."
      ]
    }
  },
  {
    id: "office-neck",
    time: "10:00",
    name: { it: "Pausa Collo & Spalle", en: "Neck & Shoulder Break" },
    emoji: "💆",
    duration: 5,
    restAfter: 1,
    category: "office",
    gradientFrom: "#7B61FF",
    gradientTo: "#1B8EF0",
    description: {
      it: "Esercizi silenziosi alla scrivania × 2 serie. I passi descrivono UNA serie. Tra la serie 1 e la serie 2: riposa 30 secondi seduto normalmente.",
      en: "Silent desk exercises × 2 sets. Steps describe ONE set. Between set 1 and 2: rest 30 seconds sitting normally."
    },
    sets: 2,
    reps: { it: "10 per lato per serie", en: "10 each side per set" },
    muscles: { it: ["Collo", "Spalle", "Trapezi", "Avambracci"], en: ["Neck", "Shoulders", "Trapezius", "Forearms"] },
    howTo: {
      it: [
        "Siediti dritto: schiena non appoggiata allo schienale, piedi a terra",
        "Ruota lentamente il collo a destra fino a sentire l'allungamento — tieni 15 secondi",
        "Ruota a sinistra — tieni 15 secondi",
        "Abbassa l'orecchio destro verso la spalla destra — tieni 15 secondi, poi sinistra 15 sec",
        "Ruota entrambe le spalle indietro in cerchio: 10 rotazioni consecutive",
        "Intreccia le mani, allunga le braccia in avanti e ruota i polsi 10 volte",
        "Apri il petto: porta le braccia dietro la schiena, spingi il petto in avanti — tieni 20 sec",
        "↳ Fine serie 1 → riposa 30 sec → ripeti dall'inizio per la serie 2"
      ],
      en: [
        "Sit straight: back off the backrest, feet flat on the floor",
        "Slowly rotate neck to the right until you feel the stretch — hold 15 seconds",
        "Rotate to the left — hold 15 seconds",
        "Drop right ear toward right shoulder — hold 15 sec, then left 15 sec",
        "Roll both shoulders backward in circles: 10 rotations in a row",
        "Interlace hands, extend arms forward and rotate wrists 10 times",
        "Open your chest: bring arms behind your back, push chest forward — hold 20 sec",
        "↳ End of set 1 → rest 30 sec → repeat from the top for set 2"
      ]
    }
  },
  {
    id: "lunch-walk",
    time: "12:30",
    name: { it: "Camminata di Mezzogiorno", en: "Lunchtime Walk" },
    emoji: "🚶",
    duration: 20,
    restAfter: 10,
    category: "lunch",
    gradientFrom: "#00C9A7",
    gradientTo: "#4CAF50",
    description: {
      it: "Camminata a passo sostenuto di 20 minuti durante la pausa pranzo. Nessuna serie, nessun riposo durante la camminata — segui la sequenza una volta sola.",
      en: "20-minute brisk walk during lunch break. No sets, no rest during the walk — follow the sequence once through."
    },
    sets: 1,
    reps: { it: "20 minuti continui", en: "20 continuous minutes" },
    muscles: { it: ["Gambe", "Glutei", "Cuore", "Polpacci"], en: ["Legs", "Glutes", "Heart", "Calves"] },
    howTo: {
      it: [
        "Minuti 0–2: cammina lentamente per riscaldarti le gambe",
        "Minuti 2–18: aumenta il ritmo — dovresti riuscire a parlare ma NON a cantare",
        "Schiena dritta, spalle rilassate, sguardo avanti orizzontale",
        "Oscilla le braccia in modo naturale, sincronizzate con i passi",
        "Se possibile includi una salita o delle scale — aumenta il beneficio cardiovascolare",
        "Minuti 18–20: rallenta gradualmente fino a passo normale",
        "Fatto — 10 minuti di riposo prima di tornare alla scrivania (incluso nel piano)"
      ],
      en: [
        "Minutes 0–2: walk slowly to warm up your legs",
        "Minutes 2–18: increase pace — you should be able to talk but NOT sing",
        "Back straight, shoulders relaxed, gaze forward at eye level",
        "Swing arms naturally, in sync with your steps",
        "Include a hill or stairs if possible — boosts cardiovascular benefit",
        "Minutes 18–20: gradually slow back to a normal pace",
        "Done — 10 minutes of rest before returning to your desk (included in the plan)"
      ]
    }
  },
  {
    id: "desk-squats",
    time: "14:30",
    name: { it: "Micro-workout Scrivania", en: "Desk Micro-workout" },
    emoji: "💪",
    duration: 5,
    restAfter: 2,
    category: "afternoon",
    gradientFrom: "#FF6B6B",
    gradientTo: "#FF8C42",
    description: {
      it: "Allenamento silenzioso in ufficio × 3 serie. I passi descrivono UNA serie. Tra ogni serie: riposa 30 secondi seduto. Dopo le 3 serie: 2 minuti di pausa prima di riprendere il lavoro.",
      en: "Silent office workout × 3 sets. Steps describe ONE set. Between each set: rest 30 seconds seated. After all 3 sets: 2-minute break before resuming work."
    },
    sets: 3,
    reps: { it: "15 ripetizioni per serie", en: "15 reps per set" },
    muscles: { it: ["Quadricipiti", "Glutei", "Core", "Polpacci"], en: ["Quadriceps", "Glutes", "Core", "Calves"] },
    howTo: {
      it: [
        "Squat dalla sedia: alzati lentamente senza usare le mani, riscendi fino a sfiorare la sedia — 15 volte di fila",
        "Alzata sui polpacci: in piedi davanti alla scrivania, alzati sulle punte dei piedi e scendi lentamente — 15 volte",
        "Contrazione isometrica glutei: seduto, stringa i glutei il più forte possibile per 10 secondi, rilascia — 10 volte",
        "Plié silenzioso: piedi a V larghi, abbassati lentamente e rialzati — 10 volte (zero rumore)",
        "↳ Fine serie → siediti e riposa 30 secondi → ripeti per un totale di 3 serie",
        "↳ Dopo la serie 3: pausa di 2 minuti prima di tornare al lavoro"
      ],
      en: [
        "Chair squat: stand up slowly without using hands, lower back until you barely touch the seat — 15 times in a row",
        "Calf raises: standing in front of desk, rise onto tiptoes and lower slowly — 15 times",
        "Isometric glute squeeze: sitting, squeeze glutes as hard as possible for 10 seconds, release — 10 times",
        "Silent plié: feet in a wide V, lower slowly and rise — 10 times (zero noise)",
        "↳ End of set → sit and rest 30 seconds → repeat for a total of 3 sets",
        "↳ After set 3: 2-minute break before returning to work"
      ]
    }
  },
  {
    id: "active-break",
    time: "16:00",
    name: { it: "Pausa Attiva alla Scrivania", en: "Active Desk Break" },
    emoji: "🖥️",
    duration: 8,
    restAfter: 2,
    category: "afternoon",
    gradientFrom: "#1B8EF0",
    gradientTo: "#7B61FF",
    description: {
      it: "Sequenza discreta in ufficio × 3 serie. I passi descrivono UNA serie. Tra ogni serie: riposa 20 secondi. Dopo le 3 serie: 2 minuti di pausa prima di riprendere il lavoro.",
      en: "Discreet office sequence × 3 sets. Steps describe ONE set. Between each set: rest 20 seconds. After all 3 sets: 2-minute break before resuming work."
    },
    sets: 3,
    reps: { it: "12 ripetizioni per serie", en: "12 reps per set" },
    muscles: { it: ["Petto", "Tricipiti", "Core", "Schiena"], en: ["Chest", "Triceps", "Core", "Back"] },
    howTo: {
      it: [
        "Desk push-off: metti i palmi sul bordo della scrivania, corpo inclinato — abbassati e spingi su 12 volte (silenziosissimo)",
        "Sollevamento gambe seduto: siediti con la schiena dritta, allunga entrambe le gambe orizzontali e tieni 30 secondi",
        "Torsione busto: mani sulle cosce, ruota lentamente il busto a destra e a sinistra — 10 volte per lato",
        "Stretching flessori: in piedi, porta il ginocchio destro al petto con le mani e tieni 20 sec — poi sinistra 20 sec",
        "↳ Fine serie → riposa 20 secondi → ripeti per un totale di 3 serie",
        "↳ Dopo la serie 3: 2 minuti di pausa prima di tornare al lavoro"
      ],
      en: [
        "Desk push-off: palms on desk edge, body inclined — lower and push up 12 times (completely silent)",
        "Seated leg raises: sit with back straight, extend both legs horizontally and hold 30 seconds",
        "Torso rotation: hands on thighs, slowly rotate torso right and left — 10 times each side",
        "Hip flexor stretch: standing, bring right knee to chest with your hands and hold 20 sec — then left 20 sec",
        "↳ End of set → rest 20 seconds → repeat for a total of 3 sets",
        "↳ After set 3: 2-minute break before returning to work"
      ]
    }
  },
  {
    id: "evening-workout",
    time: "18:30",
    name: { it: "Allenamento Serale", en: "Evening Workout" },
    emoji: "🏋️",
    duration: 35,
    restAfter: 10,
    category: "evening",
    gradientFrom: "#1B8EF0",
    gradientTo: "#00C9A7",
    description: {
      it: "Sessione forza a corpo libero × 4 serie per i movimenti principali. I passi descrivono UNA serie. Tra ogni serie: riposa 60 secondi. Totale incluso riscaldamento e defaticamento: 35 minuti.",
      en: "Bodyweight strength session × 4 sets for main movements. Steps describe ONE set. Between each set: rest 60 seconds. Total including warm-up and cool-down: 35 minutes."
    },
    sets: 4,
    reps: { it: "12–15 ripetizioni per serie", en: "12–15 reps per set" },
    muscles: { it: ["Tutto il corpo", "Petto", "Schiena", "Core", "Gambe"], en: ["Full body", "Chest", "Back", "Core", "Legs"] },
    howTo: {
      it: [
        "Riscaldamento 5 min: corsa sul posto alzando le ginocchia, 1 minuto → rotazioni spalle e fianchi, 2 min → salti leggeri, 2 min",
        "Push-up: mani a larghezza spalle, corpo in linea retta — 15 volte. ↳ Riposa 60 sec. Ripeti ×4 serie totali",
        "Squat profondo: scendi fino a 90°, contrai i glutei risalendo — 15 volte. ↳ Riposa 60 sec. Ripeti ×4 serie",
        "Plank: core contratto, fianchi allineati — tieni 45 secondi. ↳ Riposa 60 sec. Ripeti ×3 serie",
        "Affondo alternato: passo lungo, ginocchio posteriore vicino a terra — 12 volte per gamba. ↳ Riposa 60 sec. ×3 serie",
        "Superman: prono, alza contemporaneamente braccia e gambe — 12 volte. ↳ Riposa 60 sec. ×3 serie",
        "Crunch bicicletta: gomito sinistro verso ginocchio destro e viceversa — 20 volte. ↳ Riposa 60 sec. ×3 serie",
        "Defaticamento 5 min: stretching leggero su schiena, fianchi e gambe — nessuna serie, solo respira e allungati"
      ],
      en: [
        "5 min warm-up: high-knees jogging 1 min → shoulder and hip circles 2 min → light jumps 2 min",
        "Push-ups: hands shoulder-width, body straight — 15 times. ↳ Rest 60 sec. Repeat ×4 total sets",
        "Deep squats: lower to 90°, contract glutes on the way up — 15 times. ↳ Rest 60 sec. Repeat ×4 sets",
        "Plank: core tight, hips aligned — hold 45 seconds. ↳ Rest 60 sec. Repeat ×3 sets",
        "Alternating lunges: wide step, rear knee near ground — 12 times per leg. ↳ Rest 60 sec. ×3 sets",
        "Superman: lying prone, simultaneously lift arms and legs — 12 times. ↳ Rest 60 sec. ×3 sets",
        "Bicycle crunches: left elbow toward right knee and vice versa — 20 times. ↳ Rest 60 sec. ×3 sets",
        "5 min cool-down: light stretching on back, hips and legs — no sets, just breathe and stretch"
      ]
    }
  },
  {
    id: "evening-cooldown",
    time: "21:00",
    name: { it: "Defaticamento Serale", en: "Evening Cooldown" },
    emoji: "🌙",
    duration: 15,
    restAfter: 0,
    category: "night",
    gradientFrom: "#4CAF50",
    gradientTo: "#00C9A7",
    description: {
      it: "Stretching profondo pre-sonno. Nessuna serie, nessun riposo — esegui ogni posizione una volta sola in sequenza, tenendo i tempi indicati. Non sforzare mai, solo respira e lasciati andare.",
      en: "Deep pre-sleep stretching. No sets, no rest — perform each position once in sequence, holding the indicated times. Never force it, just breathe and let go."
    },
    sets: 1,
    reps: { it: "1 giro completo", en: "1 full round" },
    muscles: { it: ["Tutto il corpo", "Flessori dell'anca", "Schiena", "Gambe"], en: ["Full body", "Hip flexors", "Back", "Legs"] },
    howTo: {
      it: [
        "Posizione del bambino (Balasana): siediti sui talloni, allunga le braccia avanti sul pavimento — tieni 60 secondi",
        "Piccione modificato lato destro: ginocchio destro davanti, gamba sinistra distesa dietro — tieni 45 secondi",
        "Piccione modificato lato sinistro: ginocchio sinistro davanti, gamba destra distesa — tieni 45 secondi",
        "Farfalla: piante dei piedi unite, talloni vicini al bacino, piegati lentamente in avanti — tieni 45 secondi",
        "Allungamento schiena: sdraiato, porta ginocchio destro al petto con le mani — 30 sec. Poi sinistra — 30 sec",
        "Legs up the wall: alza le gambe appoggiate al muro, schiena a terra — resta 2 minuti",
        "Respirazione 4-7-8: inspira 4 sec, tieni 7 sec, espira 8 sec — ripeti 5 cicli lentamente",
        "Savasana: sdraiati completamente immobile, occhi chiusi — resta 2–3 minuti e poi vai a dormire"
      ],
      en: [
        "Child's pose (Balasana): sit on heels, extend arms forward on the floor — hold 60 seconds",
        "Modified pigeon right side: right knee forward, left leg extended behind — hold 45 seconds",
        "Modified pigeon left side: left knee forward, right leg extended — hold 45 seconds",
        "Butterfly: soles together, heels near pelvis, slowly fold forward — hold 45 seconds",
        "Back stretch: lying down, bring right knee to chest with hands — 30 sec. Then left — 30 sec",
        "Legs up the wall: raise legs resting on wall, back on floor — stay 2 minutes",
        "4-7-8 breathing: inhale 4 sec, hold 7 sec, exhale 8 sec — repeat 5 cycles slowly",
        "Savasana: lie completely still, eyes closed — stay 2–3 minutes then go to sleep"
      ]
    }
  }
];
