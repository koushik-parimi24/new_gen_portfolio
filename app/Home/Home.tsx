"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RetroGrid } from "@/components/ui/retro-grid" // ✅ from Magic UI
import { AuroraText } from "@/components/ui/aurora-text"
import { Highlighter } from "@/components/ui/highlighter"
import { BlurFade } from "@/components/ui/blur-fade"
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { InteractiveHoverButton2 } from "@/components/ui/InteractiveHoverButton2"

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-fuchsia-50 text-white">
      {/* 🌀 Magic UI Retro Grid Background */}
      <RetroGrid className="absolute inset-0 z-0 opacity-50" />

      {/* 🧭 Hero Section */}
      <section className="relative z-10 grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12">
        {/* ✨ Left Side - Text */}
        <BlurFade>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
            Hi, I’m <AuroraText>Koushik</AuroraText> 👋
          </h1>

<p className="text-gray-800 text-lg max-w-md">
  A{" "}

  <Highlighter action="highlight" color="#87CEFA">
    frontend developer
  </Highlighter>{" "}
  passionate about crafting interactive{" "}
  , delightful, and modern web experiences using{" "}
  <Highlighter action="underline" color="#A855F7">
    React
  </Highlighter>
  ,{" "}
  <Highlighter action="underline" color="#3B82F6">
    Tailwind
  </Highlighter>
  , and{" "}
  <Highlighter action="underline" color="#22D3EE">
    Magic UI
  </Highlighter>
  .
</p>
          <div className="flex gap-4">
            <InteractiveHoverButton className="text-black">
              <Link href="/projects">
            View My Work 
            </Link>
            </InteractiveHoverButton>
           <InteractiveHoverButton2 className="text-black"><Link href="/contact">Contact Me</Link></InteractiveHoverButton2>
          </div>
        </motion.div>
        </BlurFade>

        {/* 🧍 Right Side - Avatar / Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-2xl opacity-60 animate-pulse"></div>

            {/* 👇 Replace with your image in /public/avatar.png */}
            <Image
              src="/avatar.png"
              alt="Koushik Avatar"
              width={350}
              height={350}
              className="relative z-10 rounded-full border-4 border-white/20 shadow-xl"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
