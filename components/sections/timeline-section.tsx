"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { exercises, type Exercise } from "@/data/exercises";
import { ExerciseModal } from "@/components/shared/exercise-modal";
import { useLocale } from "@/providers/locale-provider";

interface TimelineItem {
  type: "sleep" | "exercise" | "gap" | "now";
  time?: string;
  label?: { it: string; en: string };
  exercise?: Exercise;
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function buildTimeline(): TimelineItem[] {
  const items: TimelineItem[] = [];

  items.push({ type: "sleep", time: "00:00", label: { it: "😴 Sonno & Recupero", en: "😴 Sleep & Recovery" } });

  exercises.forEach((ex, i) => {
    items.push({ type: "exercise", exercise: ex });

    if (i < exercises.length - 1) {
      const [nextH] = exercises[i + 1].time.split(":").map(Number);
      const [curH, curM] = ex.time.split(":").map(Number);
      const endMin = curH * 60 + curM + ex.duration + ex.restAfter;
      const nextStartMin = nextH * 60;
      if (nextStartMin - endMin > 45) {
        const h = Math.floor(endMin / 60).toString().padStart(2, "0");
        const m = (endMin % 60).toString().padStart(2, "0");
        items.push({
          type: "gap",
          time: `${h}:${m}`,
          label: { it: "Tempo libero / lavoro", en: "Free time / work" }
        });
      }
    }
  });

  items.push({ type: "sleep", time: "22:30", label: { it: "😴 Buonanotte — dormi bene!", en: "😴 Good night — sleep well!" } });

  return items;
}

const BASE_TIMELINE = buildTimeline();

function getItemMinutes(item: TimelineItem): number | null {
  if (item.time) return timeToMinutes(item.time);
  if (item.exercise) return timeToMinutes(item.exercise.time);
  return null;
}

export function TimelineSection() {
  const { t, locale } = useLocale();
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const nowLabel = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  const timelineItems = useMemo(() => {
    const hasActiveExercise = exercises.some((ex) => {
      const s = timeToMinutes(ex.time);
      return nowMinutes >= s && nowMinutes < s + ex.duration;
    });

    if (hasActiveExercise) return BASE_TIMELINE;

    let insertAfter = -1;
    for (let i = 0; i < BASE_TIMELINE.length; i++) {
      const mins = getItemMinutes(BASE_TIMELINE[i]);
      if (mins !== null && mins <= nowMinutes) insertAfter = i;
    }

    // After 22:30 or before first item: the sleep rows handle the visual, no floating marker needed
    if (insertAfter === -1 || insertAfter === BASE_TIMELINE.length - 1) return BASE_TIMELINE;

    const nowItem: TimelineItem = { type: "now" };
    return [
      ...BASE_TIMELINE.slice(0, insertAfter + 1),
      nowItem,
      ...BASE_TIMELINE.slice(insertAfter + 1),
    ];
  }, [nowMinutes]);

  return (
    <section id="exercises" className="py-8 scroll-mt-20">
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight mb-3">
          {t("timeline.title")}
        </h2>
        <p className="text-[var(--ink-2)] text-base max-w-lg mx-auto">
          {t("timeline.subtitle")}
        </p>
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line: w-16(64) + gap-4(16) + dot-center(6) = 86px mobile; w-20(80)+gap+center = 102px desktop */}
        <div
          className="absolute left-[86px] sm:left-[102px] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, transparent, var(--primary) 8%, var(--primary-end) 92%, transparent)" }}
        />

        <div className="space-y-1">
          {timelineItems.map((item) => {
            let key: string;
            if (item.type === "now") key = "now";
            else if (item.type === "exercise") key = `ex-${item.exercise?.id}`;
            else key = `${item.type}-${item.time}`;
            return (
              <TimelineRow
                key={key}
                item={item}
                locale={locale}
                t={t}
                onSelect={setSelected}
                nowLabel={nowLabel}
                nowMinutes={nowMinutes}
              />
            );
          })}
        </div>
      </div>

      <ExerciseModal exercise={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function NowMarker({ t, nowLabel }: Readonly<{ t: (k: string) => string; nowLabel: string }>) {
  return (
    <motion.div
      className="flex items-center gap-4 py-2.5 relative z-10"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Time */}
      <div className="w-16 sm:w-20 text-right flex-shrink-0">
        <span
          className="text-[11px] font-black tabular-nums tracking-wide"
          style={{ color: "var(--primary)" }}
        >
          {nowLabel}
        </span>
      </div>

      {/* Pulsing dot */}
      <div className="relative flex-shrink-0 w-3 flex justify-center">
        {/* Outer pulse ring */}
        <motion.span
          className="absolute rounded-full"
          style={{
            width: 20, height: 20,
            background: "var(--primary)",
            top: "50%", left: "50%",
            translateX: "-50%", translateY: "-50%",
            willChange: "transform, opacity",
          }}
          animate={{ scale: [1, 2.4, 1], opacity: [0.45, 0, 0.45] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Inner dot — slightly bigger than regular dots */}
        <span
          className="relative w-3.5 h-3.5 rounded-full ring-2 ring-[var(--bg)] z-10 block"
          style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-end))" }}
        />
      </div>

      {/* Gradient line + glowing badge */}
      <div className="flex-1 flex items-center gap-2 min-w-0 overflow-hidden">
        <div
          className="flex-1 h-px min-w-0"
          style={{
            background: "linear-gradient(90deg, var(--primary) 0%, var(--primary-end) 60%, transparent 100%)",
            opacity: 0.45,
          }}
        />
        <motion.div
          className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold text-white whitespace-nowrap"
          style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-end))" }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(27,142,240,0)",
              "0 0 14px rgba(27,142,240,0.65)",
              "0 0 0px rgba(27,142,240,0)",
            ],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span aria-hidden>📍</span>
          <span>{t("timeline.you_are_here")}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ExerciseRow({ ex, locale, t, onSelect, nowMinutes }: Readonly<{
  ex: Exercise;
  locale: "it" | "en";
  t: (k: string) => string;
  onSelect: (ex: Exercise) => void;
  nowMinutes: number;
}>) {
  const exStart = timeToMinutes(ex.time);
  const isActive = nowMinutes >= exStart && nowMinutes < exStart + ex.duration;

  return (
    <motion.div
      className="flex items-center gap-4 py-2"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-16 sm:w-20 text-right flex-shrink-0">
        <span
          className="text-xs font-semibold"
          style={{ color: isActive ? ex.gradientFrom : "var(--muted)" }}
        >
          {ex.time}
        </span>
      </div>

      <div className="relative flex-shrink-0 w-3 flex justify-center">
        {isActive && (
          <motion.span
            className="absolute rounded-full"
            style={{
              width: 18, height: 18,
              background: ex.gradientFrom,
              top: "50%", left: "50%",
              translateX: "-50%", translateY: "-50%",
              willChange: "transform, opacity",
            }}
            animate={{ scale: [1, 2.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <div
          className={`${isActive ? "w-3.5 h-3.5" : "w-3 h-3"} rounded-full ring-2 ring-[var(--bg)] z-10`}
          style={{ background: `linear-gradient(135deg, ${ex.gradientFrom}, ${ex.gradientTo})` }}
        />
      </div>

      <button
        className="flex-1 glass-card p-3 sm:p-3.5 text-left group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg min-w-0"
        style={isActive ? {
          boxShadow: `0 0 0 2px ${ex.gradientFrom}, 0 8px 40px ${ex.gradientFrom}45, 0 4px 20px rgba(0,0,0,0.15)`,
        } : undefined}
        onClick={() => onSelect(ex)}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${ex.gradientFrom}, ${ex.gradientTo})` }}
          >
            {ex.emoji}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-[var(--ink)] text-xs sm:text-sm truncate">
                {ex.name[locale]}
              </span>
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${ex.gradientFrom}22, ${ex.gradientTo}15)`,
                  color: ex.gradientFrom
                }}
              >
                {ex.duration} min
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] mt-0.5 line-clamp-1">
              {ex.description[locale]}
            </p>
          </div>

          {isActive ? (
            <motion.div
              className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${ex.gradientFrom}, ${ex.gradientTo})` }}
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>▶</span>
              <span>{t("timeline.in_progress")}</span>
            </motion.div>
          ) : (
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="flex-shrink-0 text-[var(--muted)] group-hover:text-[var(--primary)] group-hover:translate-x-0.5 transition-all"
            >
              <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </button>
    </motion.div>
  );
}

function GapRow({ item, locale }: Readonly<{ item: TimelineItem; locale: "it" | "en" }>) {
  return (
    <div className="flex items-center gap-4 py-1.5">
      <div className="w-16 sm:w-20 text-right flex-shrink-0">
        {item.time && <span className="text-[10px] text-[var(--muted)]">{item.time}</span>}
      </div>
      <div className="relative flex-shrink-0 w-3 flex justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--card-border-solid)]" />
      </div>
      <span className="text-xs text-[var(--muted)] italic">{item.label?.[locale]}</span>
    </div>
  );
}

function SleepRow({ item, locale, nowMinutes }: Readonly<{
  item: TimelineItem;
  locale: "it" | "en";
  nowMinutes: number;
}>) {
  const itemMins = item.time ? timeToMinutes(item.time) : null;
  let isSleepNow = false;
  if (itemMins === 0) {
    isSleepNow = nowMinutes < timeToMinutes("06:30");
  } else if (itemMins === timeToMinutes("22:30")) {
    isSleepNow = nowMinutes >= timeToMinutes("22:30");
  }

  return (
    <div className="flex items-center gap-4 py-3">
      <div className="w-16 sm:w-20 text-right flex-shrink-0">
        <span
          className="text-xs font-semibold"
          style={{ color: isSleepNow ? "var(--primary)" : "var(--muted)" }}
        >
          {item.time}
        </span>
      </div>

      <div className="relative flex-shrink-0 w-3 flex justify-center">
        {isSleepNow && (
          <motion.span
            className="absolute rounded-full"
            style={{
              width: 16, height: 16,
              background: "var(--primary)",
              top: "50%", left: "50%",
              translateX: "-50%", translateY: "-50%",
              willChange: "transform, opacity",
            }}
            animate={{ scale: [1, 2.2, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <div
          className={`${isSleepNow ? "w-3 h-3" : "w-2.5 h-2.5"} rounded-full ring-2 ring-[var(--bg)]`}
          style={{
            background: isSleepNow
              ? "linear-gradient(135deg, var(--primary), var(--primary-end))"
              : "var(--card-border-solid)",
          }}
        />
      </div>

      <span className={`text-xs ${isSleepNow ? "font-semibold text-[var(--ink-2)]" : "text-[var(--ink-3)]"}`}>
        {item.label?.[locale]}
      </span>
    </div>
  );
}

function TimelineRow({
  item, locale, t, onSelect, nowLabel, nowMinutes,
}: Readonly<{
  item: TimelineItem;
  locale: "it" | "en";
  t: (k: string) => string;
  onSelect: (ex: Exercise) => void;
  nowLabel: string;
  nowMinutes: number;
}>) {
  if (item.type === "now") return <NowMarker t={t} nowLabel={nowLabel} />;
  if (item.type === "exercise" && item.exercise) {
    return <ExerciseRow ex={item.exercise} locale={locale} t={t} onSelect={onSelect} nowMinutes={nowMinutes} />;
  }
  if (item.type === "gap") return <GapRow item={item} locale={locale} />;
  return <SleepRow item={item} locale={locale} nowMinutes={nowMinutes} />;
}
