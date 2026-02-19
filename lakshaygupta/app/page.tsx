'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, FileText } from 'lucide-react';

const PROFILE = {
  name: "Lakshay Gupta",
  role: "Software Developer",
  location: "Mississauga, ON, Canada",
  bio: [
    "I’m a Computer Science Specialist student at the University of Toronto (expected 2028)",
    "Recently, I’ve worked on course and team projects in Java and Python, including an API-driven recipe app and an ML classifier using decision trees and random forests.",
    "I’m currently looking for opportunities to learn fast and contribute to real-world software."
  ],
  resumeLink: "#",
};

const EXPERIENCE = [
  {
    company: "Lincoln M. Alexander Secondary School",
    title: "Tech Support Team Founder & Developer",
    period: "2023 - 2024",
    description: "Built and maintained a responsive guidance website to centralize resources for 900+ students. Trained a 5-member team on maintenance/troubleshooting to reduce support load. Used Git and a lightweight CI-style workflow to improve update reliability."
  }
];

const PROJECTS = [
  {
    title: "LakshayEats — Food Journal",
    description: "Built modular service layers using Clean Architecture / SOLID. Integrated Spoonacular API via REST; stored user data in Supabase. Wrote unit tests and collaborated via GitHub workflows.",
    tags: ["Java", "REST APIs", "Spoonacular API", "Supabase", "JUnit", "Git"],
    link: "#"
  },
  {
    title: "First-World Country Classifier",
    description: "Built an end-to-end ML pipeline with a 98% classification accuracy. Implemented decision trees and random forests by hand, benchmarking against scikit-learn. Emphasized modularity and reproducibility.",
    tags: ["Python", "Gradio", "sci-kit-learn"],
    link: "#"
  },
  {
    title: "Columns (MIPS Assembly)",
    description: "Implemented a Columns-style falling-block puzzle game in MIPS with menu and gameplay loop. Built difficulty modes by tuning gravity timing and acceleration. Implemented match detection and input controls.",
    tags: ["MIPS Assembly"],
    link: "#"
  },
  {
    title: "ReturnX",
    description: "Top-5 placement out of 34 teams at Hack the Future 2025. Co-designed UX flows in Figma and contributed to product strategy and business analysis. Collaborated with backend developers.",
    tags: ["Figma", "React", "Gemini API"],
    link: "#"
  },
  {
    title: "Text Adventure Game",
    description: "Built branching story paths with inventory logic and CLI interaction.",
    tags: ["Python", "JSON"],
    link: "#"
  },
  {
    title: "Library Management System",
    description: "Implemented role-based access and CRUD workflows via CLI. Added safe input handling and logging, reducing input errors. Implemented authentication and structured persistence in SQLite.",
    tags: ["Python", "PosgresSQL", "CLI"],
    link: "#"
  },
  {
    title: "Recreation of Pong",
    description: "Implemented 3 AI difficulty modes with OOP logic, scoring, and GUI menu.",
    tags: ["Python", "PyGame"],
    link: "#"
  }
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(420px circle at ${mousePosition.x}px ${mousePosition.y}px, color-mix(in srgb, var(--accent-bright), transparent 88%) 0%, transparent 72%)`,
        }}
      />

      <div className="lg:flex lg:justify-between lg:gap-4 relative z-40">
        <header className="reveal lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">
              <Link href="/">{PROFILE.name}</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-accent sm:text-xl">
              {PROFILE.role}
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
              insert tagline
            </p>

            <nav className="mt-12 hidden lg:block" aria-label="Primary">
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-accent">
                <li>
                  <a href="#about" className="inline-block transition-all duration-200 hover:text-accent-bright hover:scale-105 origin-left">About</a>
                </li>
                <li>
                  <a href="#experience" className="inline-block transition-all duration-200 hover:text-accent-bright hover:scale-105 origin-left">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="inline-block transition-all duration-200 hover:text-accent-bright hover:scale-105 origin-left">Projects</a>
                </li>
              </ul>
            </nav>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://linkedin.com/in/lakshaygupta2006"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-accent-bright transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/lakshaygupta"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-accent-bright transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>

            <div className="mt-8">
              <a
                href={PROFILE.resumeLink}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-bright group"
              >
                <FileText className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                <span>View Full Resume</span>
              </a>
            </div>
          </div>

          <footer className="mt-8 flex items-center gap-4 text-slate-400">
            <p className="text-sm">Inspired by Brittany Chiang • Built with Next.js</p>
          </footer>
        </header>

        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <section id="about" className="reveal mb-16 scroll-mt-16 md:mb-24 lg:mb-36" style={{ animationDelay: '80ms' }}>
            <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-secondary">
              About
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              {PROFILE.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </section>

          <section id="experience" className="reveal mb-16 scroll-mt-16 md:mb-24 lg:mb-36" style={{ animationDelay: '160ms' }}>
            <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-secondary">
              Experience
            </h2>
            <div className="flex flex-col gap-6">
              {EXPERIENCE.map((role) => (
                <article
                  key={`${role.company}-${role.period}`}
                  className="group relative rounded-md border border-transparent p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/10 hover:shadow-[0_16px_40px_-26px_var(--accent-glow)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{role.period}</p>
                  <h3 className="mt-2 text-base font-semibold text-secondary transition-colors duration-200 group-hover:text-accent-bright">
                    {role.title} · {role.company}
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">{role.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="reveal mb-16 scroll-mt-16 md:mb-24 lg:mb-36" style={{ animationDelay: '240ms' }}>
            <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-secondary">
              Projects
            </h2>
            <div className="flex flex-col gap-6">
              {PROJECTS.map((project, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col items-start rounded-md border border-transparent p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/10 hover:shadow-[0_16px_40px_-26px_var(--accent-glow)]"
                >
                  <h3 className="text-base font-semibold text-secondary group-hover:text-accent transition-colors">
                    <a href={project.link}>
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent transition-colors duration-200 group-hover:border-accent-bright/60 group-hover:text-accent-bright">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
