"use client";

import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Projects() {
  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-start px-6">
      <section className="flex flex-col items-center text-center gap-4 w-full">
        <h1 className="text-5xl font-extrabold mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {/* StockTrader Project Card */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-purple-600/40 transition flex flex-col items-center">
            <div className="relative w-[450px] h-[300px] mb-4 bg-gray-800 rounded-lg overflow-hidden">
              <Image src="/stocktrader.png" alt="StockTrader Screenshot" fill className="object-cover rounded-lg" />
            </div>
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-tight">StockTrader</h2>
            <p className="text-gray-400 mb-4 font-light text-base">A stock trading simulator built with Python, Tkinter, and AlphaVantage API.</p>
            <a href="https://github.com/JoelObinnaEze/StockTrader" target="_blank" rel="noopener" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow hover:scale-105 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 transition-all duration-200">View on GitHub</a>
          </div>
          {/* Mamahawk Project Card */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-purple-600/40 transition flex flex-col items-center">
            <div className="relative w-[300px] h-[300px] mb-4 bg-gray-800 rounded-lg overflow-hidden">
              <Image src="/mamahawk.png" alt="Mamahawk Screenshot" fill className="object-cover rounded-lg" />
            </div>
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent tracking-tight">Mamahawk</h2>
            <p className="text-gray-400 mb-4 font-light text-base">A React Native chat engine designed to help users with weight loss goals.</p>
            <a href="https://github.com/JoelObinnaEze/Mamahawk" target="_blank" rel="noopener" className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow hover:scale-105 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 transition-all duration-200">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Social Icons Row above Footer */}
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

      <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center text-gray-500 text-sm mb-6">
        © {new Date().getFullYear()} Joel Obinna-Eze. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
