"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold sm:text-5xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-accent" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 w-4 h-4 rounded-full bg-accent border-4 border-background z-10 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2" />

                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""} pl-8 md:pl-0`}>
                  <div className="inline-block rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent-glow/10">
                    <div className={`flex flex-wrap items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-sm font-medium text-accent mb-2">{exp.company}</p>
                    <p className="text-sm leading-relaxed text-muted mb-4">{exp.description}</p>

                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-accent/5 px-2 py-0.5 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {"certificate" in exp && exp.certificate && (
                      <div className={`mt-4 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium text-accent transition-all hover:border-accent hover:bg-accent/20 hover:shadow-lg hover:shadow-accent-glow/10"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="7" />
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                          </svg>
                          View Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
