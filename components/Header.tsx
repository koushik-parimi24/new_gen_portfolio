"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CoolMode } from "@/components/CoolMode";
import { Download } from 'lucide-react';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activateCool, setActivateCool] = useState(false);

  // Detect scroll
  useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable cool mode after a short burst
  useEffect(() => {
    if (activateCool) {
      const timeout = setTimeout(() => setActivateCool(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [activateCool]);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent backdrop-blur-none border-b-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`flex items-center justify-between ${
            scrolled ? "h-14" : "h-16"
          } transition-all duration-300`}
        >
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
           Personal Portolio
          </Link>

          {/* NAV LINKS (center) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10">
            <Link
              href="/"
              className="text-gray-700 font-medium hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 font-medium hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 font-medium hover:text-black transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 font-medium hover:text-black transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA BUTTON (right) */}
          <motion.div
            animate={{
              scale: scrolled ? 0.95 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* ✅ Wrapped button with CoolMode */}
            <CoolMode options={{ particleCount: 20 }}>  
<button
  onClick={() => window.open("https://vevxdyokovrxyxrhrqhj.supabase.co/storage/v1/object/public/resume/Koushik%20resume.pdf", "_blank")}
  className={`hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
    scrolled
      ? "bg-black text-white hover:bg-gray-900"
      : "bg-indigo-600 text-white hover:bg-indigo-700"
  }`}
>
  <Download className="w-4 h-4" />
  Download Resume
</button>

            </CoolMode>
          </motion.div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-md border-t border-gray-200"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              >
                About
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              >
                Contact
              </Link>
            <button
  onClick={() =>
    window.open(
      "https://vevxdyokovrxyxrhrqhj.supabase.co/storage/v1/object/public/resume/Koushik%20resume.pdf",
      "_blank"
    )
  }
  className={`flex items-center justify-center gap-2 w-full px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
    scrolled
      ? "bg-black text-white hover:bg-gray-900"
      : "bg-indigo-600 text-white hover:bg-indigo-700"
  }`}
>
  <Download className="w-4 h-4 shrink-0" />
  <span className="truncate">Download Resume</span>
</button>

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
