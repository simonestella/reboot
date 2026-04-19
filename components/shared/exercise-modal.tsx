"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import type { Exercise } from "@/data/exercises";
import { useLocale } from "@/providers/locale-provider";

interface ExerciseModalProps {
  exercise: Exercise | null;
  onClose: () => void;
}

export function ExerciseModal({ exercise, onClose }: ExerciseModalProps) {
  const { locale, t } = useLocale();

  useEffect(() => {
    if (!exercise) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [exercise, onClose]);

  const content = (
    <AnimatePresence>
      {exercise && (
        <motion.div
          data-modal-open
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-[#061220]/75" onClick={onClose} aria-hidden />

          <motion.div
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[var(--modal-border)] bg-[var(--modal-bg)]"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.28), 0 4px 24px rgba(27,142,240,0.12)" }}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div
              className="relative p-4 pb-3 sm:p-6 sm:pb-4 rounded-t-3xl overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${exercise.gradientFrom}18, ${exercise.gradientTo}10)` }}
            >
              <div className="relative flex items-start gap-5">
                {/* Emoji icon */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-4xl"
                  style={{ background: `linear-gradient(135deg, ${exercise.gradientFrom}, ${exercise.gradientTo})` }}
                >
                  {exercise.emoji}
                </div>

                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${exercise.gradientFrom}28, ${exercise.gradientTo}18)`,
                        color: exercise.gradientFrom
                      }}
                    >
                      {exercise.time}
                    </span>
                    <span className="text-xs text-[var(--muted)]">{exercise.duration} min</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--ink)] tracking-tight leading-tight">
                    {exercise.name[locale]}
                  </h2>
                </div>

                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--card-bg)] transition-colors"
                  aria-label={t("timeline.close")}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 pt-4 sm:p-6 sm:pt-5 space-y-4 sm:space-y-5">
              <p className="text-[var(--ink-2)] leading-relaxed text-[15px]">
                {exercise.description[locale]}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: t("timeline.sets"), value: exercise.sets },
                  { label: t("timeline.reps"), value: exercise.reps[locale] },
                  { label: t("timeline.rest_after"), value: exercise.restAfter > 0 ? `${exercise.restAfter} min` : "—" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl p-2.5 sm:p-4 text-center overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${exercise.gradientFrom}10, ${exercise.gradientTo}08)`,
                      border: `1px solid ${exercise.gradientFrom}20`
                    }}
                  >
                    <div className="text-sm sm:text-xl font-bold text-[var(--ink)] leading-tight break-words">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-[var(--muted)] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Muscles */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--ink)] mb-2.5">{t("timeline.muscles")}</h3>
                <div className="flex flex-wrap gap-2">
                  {exercise.muscles[locale].map((m) => (
                    <span
                      key={m}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        background: `linear-gradient(135deg, ${exercise.gradientFrom}18, ${exercise.gradientTo}12)`,
                        color: exercise.gradientFrom,
                        border: `1px solid ${exercise.gradientFrom}25`
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* How to */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--ink)] mb-3">{t("timeline.how")}</h3>
                <ol className="space-y-2.5">
                  {exercise.howTo[locale].map((step, i) => (
                    <li key={step} className="flex gap-3 text-[14px] text-[var(--ink-2)]">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
                        style={{ background: `linear-gradient(135deg, ${exercise.gradientFrom}, ${exercise.gradientTo})` }}
                      >
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(content, document.body);
}
