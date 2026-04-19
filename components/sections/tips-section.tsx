"use client";

import { motion } from "framer-motion";
import { tips } from "@/data/tips";
import { useLocale } from "@/providers/locale-provider";

export function TipsSection() {
  const { locale, t } = useLocale();

  return (
    <section id="tips" className="py-8 scroll-mt-20">
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight mb-3">
          {t("tips.title")}
        </h2>
        <p className="text-[var(--ink-2)] text-base max-w-lg mx-auto">
          {t("tips.subtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tips.map((tip, idx) => (
          <motion.div
            key={tip.id}
            className="glass-card p-5 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `linear-gradient(135deg, ${tip.gradientFrom}25, ${tip.gradientTo}18)` }}
              >
                {tip.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="font-semibold text-sm mb-1.5 leading-snug"
                  style={{ color: tip.gradientFrom }}
                >
                  {tip.title[locale]}
                </h3>
                <p className="text-[13px] text-[var(--ink-3)] leading-relaxed">
                  {tip.description[locale]}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
