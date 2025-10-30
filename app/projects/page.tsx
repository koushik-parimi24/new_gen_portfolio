"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { SparklesText } from "../../components/ui/sparkles-text"
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function ProjectsPage() {
  const projects = [
    {
      title: "IntervueAI – AI Interview Platform",
      link: "https://intervueai.koushikparimi.me",
      image: "/projects/pj1.png",
      date: "2025",
      tech: [
        "React.js",
        "Vite",
        "Node.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Ant Design",
        "Supabase",
        "Azure OpenAI",
        "Vercel",
      ],
      points: [
        "Built an AI-powered interview platform that automates question generation and real-time answer evaluation, improving interview prep efficiency by 60%.",
        "Integrated Azure OpenAI to dynamically generate technical questions and deliver instant feedback with 95%+ accuracy.",
        "Implemented Supabase authentication and real-time database, enabling secure multi-user sessions and reducing backend setup time by 40%.",
        "Deployed on Vercel, optimizing API calls and caching to reduce average response latency to under 1.5 seconds.",
      ],
    },
    {
      title: "Watchroo – Movie Discovery Platform",
      link: "https://watchroo.koushikparimi.me",
      image: "/projects/pj2.png",
      date: "2025",
      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "TMDB API",
        "Supabase",
        "ShadCN/UI",
      ],
      points: [
        "Built a responsive movie and TV discovery platform featuring a modern glassmorphic UI.",
        "Integrated TMDB API to fetch trending, popular, and personalized content with live search.",
        "Added Supabase OAuth authentication and wishlist system, increasing user engagement by 45%.",
        "Optimized API handling and UI rendering to achieve <1.2s load time across devices.",
      ],
    },
    {
      title: "ProdXr – Inventory Manager",
      link: "https://github.com/koushik-parimi24/E-commerce-Inventory-Manager",
      image: "/projects/pj-3.png",
      date: "2024",
      tech: [
        "React.js",
        "Redux Toolkit",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      points: [
        "Developed a scalable e-commerce inventory management system with efficient Redux state handling.",
        "Integrated REST APIs and Cloudinary for seamless product image management.",
        "Focused on UI polish, performance, and accessibility for consistent multi-device performance.",
      ],
    },
  ];

  return (
    
    <main className="relative min-h-screen bg-white text-gray-900 px-6 md:px-12 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <DotPattern/>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium"
        >
          My Projects
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
          Explore My <SparklesText><span className="text-indigo-600">Latest Creations</span></SparklesText> 
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Here are some of the projects I’ve built recently — combining AI, real-time data, and clean design to solve real-world problems.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="group overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white backdrop-blur-md rounded-2xl">
              {/* Image */}
              <CardHeader className="p-0 overflow-hidden">
                <div className="relative w-full h-48">
<Image
  src={project.image}
  alt={project.title}
  fill
  loading={i === 0 ? "eager" : "lazy"}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover transition-transform duration-500 group-hover:scale-105"
/>
                </div>
              </CardHeader>

              {/* Content */}
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-indigo-500 font-medium">{project.date}</span>
                </div>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2">
                  {project.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-[2px]" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-all"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Footer */}
              <CardFooter className="px-6 pb-6">
                <ShimmerButton>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project →
                </Link>
                </ShimmerButton>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
