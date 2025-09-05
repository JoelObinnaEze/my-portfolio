"use client";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-start px-6">
      <section className="flex flex-col items-center text-center gap-4 mt-8">
        <h1 className="text-5xl font-bold text-purple-500">About Me</h1>
        <p className="text-gray-300 max-w-xl">
          I&apos;m Joel Obinna-Eze, a junior engineer with experience in Python, React, and cloud-native tools. I enjoy building scalable systems and beautiful user experiences.
        </p>
      </section>

      {/* Social Icons Row above Footer */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
        <a href="https://github.com/JoelObinnaEze" target="_blank" rel="noopener" title="GitHub">
          <FaGithub className="w-8 h-8 text-purple-400 hover:text-purple-600" aria-label="GitHub" />
        </a>
        <a href="https://linkedin.com/in/joel-obinna-eze-5a1a262a2" target="_blank" rel="noopener" title="LinkedIn">
          <FaLinkedinIn className="w-8 h-8 text-purple-400 hover:text-purple-600" aria-label="LinkedIn" />
        </a>
      </div>

      <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center text-gray-500 text-sm mb-6">
        © {new Date().getFullYear()} Joel Obinna-Eze. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
