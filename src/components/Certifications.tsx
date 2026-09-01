"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-accent" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent-glow/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-foreground">{cert.name}</h3>
              <p className="mt-1 text-sm text-accent">{cert.issuer}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-muted">{cert.platform}</span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
