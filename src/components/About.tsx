"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, personalInfo } from "@/lib/data";

const categories = [...new Set(skills.map((s) => s.category))];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold sm:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-accent" />
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent-glow/10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                {personalInfo.education.degree}
              </h3>
              <p className="text-accent font-medium">{personalInfo.education.university}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {personalInfo.education.period}
              </span>
              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                CGPA: {personalInfo.education.cgpa}
              </span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted">
              <span className="font-medium text-foreground">Relevant Coursework: </span>
              {personalInfo.education.coursework}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              {personalInfo.bio.split("\n").map((p, i) => (
                <p key={i}>{p.trim()}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-accent-glow hover:scale-105"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email Me
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:border-accent hover:shadow-lg hover:shadow-accent-glow hover:scale-105"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:border-accent hover:shadow-lg hover:shadow-accent-glow hover:scale-105"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {categories.map((category) => (
              <div key={category}>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {category}
                </h3>
                <div className="space-y-3">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, i) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-muted">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-card overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 0.8,
                              delay: 0.3 + i * 0.03,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full will-change-[width]"
                            style={{
                              background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
