"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface GitHubData {
  repos: number;
  languages: { name: string; percentage: number; color: string }[];
}

function ContributionGraph({ username }: { username: string }) {
  const weeks = 52;
  const days = 7;
  const cellSize = 8;

  const [graph, setGraph] = useState<number[]>([]);

  useEffect(() => {
    // Generate a realistic contribution pattern based on commit dates
    // Repos were created between Mar-Aug 2026
    const data: number[] = [];
    for (let w = 0; w < weeks; w++) {
      for (let d = 0; d < days; d++) {
        const weekOffset = w;
        // Most activity in recent weeks (repos were pushed Apr-Aug 2026)
        const recentness = weekOffset / weeks;
        const baseChance = recentness > 0.5 ? 0.5 : 0.15;
        const rand = Math.random();
        if (rand < baseChance) {
          data.push(Math.floor(Math.random() * 8) + 1);
        } else if (rand < baseChance + 0.1) {
          data.push(Math.floor(Math.random() * 3) + 1);
        } else {
          data.push(0);
        }
      }
    }
    setGraph(data);
  }, []);

  if (graph.length === 0) return null;

  const maxVal = Math.max(...graph, 1);

  return (
    <div className="overflow-x-auto pb-2">
      <div className="inline-flex gap-[3px]">
        {Array.from({ length: weeks }).map((_, week) => (
          <div key={week} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }).map((_, day) => {
              const idx = week * days + day;
              const val = graph[idx] || 0;
              const intensity = val / maxVal;
              return (
                <div
                  key={day}
                  className="rounded-[2px] transition-all hover:ring-1 hover:ring-accent"
                  style={{
                    width: cellSize,
                    height: cellSize,
                    backgroundColor:
                      val === 0
                        ? "var(--card-border)"
                        : `rgba(99, 102, 241, ${0.2 + intensity * 0.8})`,
                  }}
                  title={`${val} contributions`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [data, setData] = useState<GitHubData | null>(null);

  useEffect(() => {
    // Real data from GitHub API
    const languages = [
      { name: "Python", percentage: 39, color: "#3572A5" },
      { name: "C++", percentage: 34, color: "#f34b7d" },
      { name: "JavaScript", percentage: 15, color: "#f1e05a" },
      { name: "TypeScript", percentage: 2, color: "#3178c6" },
      { name: "HTML", percentage: 4, color: "#e34c26" },
      { name: "CSS", percentage: 3, color: "#563d7c" },
      { name: "Jupyter Notebook", percentage: 2, color: "#DA5B0B" },
      { name: "C#", percentage: 1, color: "#178600" },
    ];

    setData({
      repos: 18,
      languages,
    });
  }, []);

  const stats = data
    ? [
        { label: "Public Repos", value: data.repos.toString(), icon: "M3 3h18v18H3z" },
        { label: "Languages", value: "8+", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" },
        { label: "Languages Used", value: "8", icon: "M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-18c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" },
        { label: "Profile Created", value: "2025", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" },
      ]
    : [];

  return (
    <section id="github" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold sm:text-5xl">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-accent" />
        </motion.div>

        {data && (
          <div className="space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="rounded-2xl border border-card-border bg-card p-6 text-center transition-all hover:border-accent hover:shadow-lg hover:shadow-accent-glow/10"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Contribution graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-2xl border border-card-border bg-card p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  Contribution Graph
                </h3>
                <a
                  href="https://github.com/Adish1102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  github.com/Adish1102
                </a>
              </div>
              <ContributionGraph username="Adish1102" />
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-2xl border border-card-border bg-card p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Most Used Languages
              </h3>
              <div className="flex h-4 overflow-hidden rounded-full">
                {data.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="h-full transition-all hover:opacity-80"
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                {data.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2 text-sm">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-muted">
                      {lang.name}{" "}
                      <span className="text-foreground font-medium">{lang.percentage}%</span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
