"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);

  // ✅ move useMemo ABOVE any conditional returns
  const projects = useMemo(
    () => [
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
        tech: ["React.js", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind CSS"],
        points: [
          "Developed a scalable e-commerce inventory management system with efficient Redux state handling.",
          "Integrated REST APIs and Cloudinary for seamless product image management.",
          "Focused on UI polish, performance, and accessibility for consistent multi-device performance.",
        ],
      },
    ],
    []
  );

  useEffect(() => setMounted(true), []);

  // ✅ Now safe to return conditionally
  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-white text-gray-900 px-6 md:px-12 py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10">
        <DotPattern />
      </div>

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium"
        >
          My Projects
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
          Explore My <span className="text-indigo-600">Latest Creations</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Projects blending performance, scalability, and elegant UI with AI and
          real-time integrations.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-white rounded-2xl">
              <CardHeader className="p-0 relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={i === 0}
                  placeholder="blur"
                  blurDataURL="/projects/placeholder.png"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-indigo-500 font-medium">
                    {project.date}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {project.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-[2px]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

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

              <CardFooter className="px-6 pb-6">
                <ShimmerButton>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
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
