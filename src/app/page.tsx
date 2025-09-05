"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-start px-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 mt-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
        >
          Hi, I&apos;m Joel Obinna-Eze
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed"
        >
          <span className="font-semibold text-purple-300">Full-stack developer</span> based in Calgary, passionate about building beautiful, scalable apps.<br />
          Currently crafting <span className="font-semibold text-pink-400">MamaHawk</span>, a chat-based mobile app to help users lose weight and build healthy habits.<br />
          <span className="text-blue-300">Cloud and data enthusiast.</span> <br />
          <span className="italic">When I&apos;m not coding, you&apos;ll find me gaming or playing ping pong.</span>
          <br />
          <span className="font-bold text-purple-400">Let&apos;s connect!</span> Reach out on GitHub, LinkedIn, or by email.
        </motion.p>
      </section>
      
      {/* Social Icons */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
        <a href="https://github.com/JoelObinnaEze" target="_blank" rel="noopener" title="GitHub">
          <FaGithub className="w-8 h-8 text-purple-400 hover:text-purple-600" aria-label="GitHub" />
        </a>
        <a href="https://linkedin.com/in/joel-obinna-eze-5a1a262a2" target="_blank" rel="noopener" title="LinkedIn">
          <FaLinkedinIn className="w-8 h-8 text-purple-400 hover:text-purple-600" aria-label="LinkedIn" />
        </a>
        <a href="mailto:joelobinnaeze@gmail.com" title="Email">
          <MdEmail className="w-8 h-8 text-purple-400 hover:text-purple-600" aria-label="Email" />
        </a>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center text-gray-500 text-sm mb-6">
        © {new Date().getFullYear()} Joel Obinna-Eze. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
