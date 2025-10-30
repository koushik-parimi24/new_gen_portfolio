    "use client";

    import { motion } from "framer-motion";
    import Image from "next/image";
    import { RetroGrid } from "../../components/ui/retro-grid";
    import { BlurFade } from "@/components/ui/blur-fade"
    import { Highlighter } from "../../components/ui/highlighter";
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
    import { Badge } from "@/components/ui/badge";
    import { Trophy, Cloud, Award, Brain } from "lucide-react";
    import {
  SiJavascript,
  SiPython,
  SiReact,
  SiRedux,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiAwsamplify,
  SiGooglecloud,
  SiGit,
  SiFigma,
  SiPostman,
  SiSalesforce,
  SiChartdotjs,
} from "react-icons/si";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../../components/ui/terminal"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
    export default function AboutPage() {
    const skills = [
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Supabase",
        "AWS",
        "Google Cloud",
        "CI/CD",
    ];

    return (
        <main className="relative min-h-screen overflow-hidden  text-black">
        <RetroGrid className="absolute inset-0 z-0 opacity-40" />

        {/* HERO SECTION */}
        <section className="relative z-10 grid max-w-7xl mx-auto px-6 md:px-12 py-24 md:grid-cols-2 gap-10 items-center">
            {/* Left - Intro */}
            <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            
            className="space-y-6"
            >
            <h1 className="text-5xl font-extrabold leading-tight">
                About <span className="text-indigo-400">Koushik Parimi</span>
            </h1>
            <p className="text-gray-900 text-lg max-w-md leading-relaxed">
                An aspiring{" "}
                <Highlighter action="highlight" color="#22D3EE">
                software engineer
                </Highlighter>{" "}
                passionate about{" "}
                <Highlighter action="underline" color="#FF9800">
                problem solving
                </Highlighter>{" "}
                and{" "}
                <Highlighter action="highlight" color="#A855F7">
                full-stack development
                </Highlighter>
                . I love building scalable, efficient software solutions and
                collaborating in fast-paced environments.
            </p>
            </motion.div>

            {/* Right - Avatar */}
            <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
            >
            <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-200 to-purple-200 blur-2xl opacity-60 animate-pulse"></div>
 <Terminal>
      <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>
      <AnimatedSpan className="text-green-500">
        ✔ Preflight checks.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Verifying framework. Found Next.js.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Validating Tailwind CSS.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Validating import alias.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Writing components.json.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Checking registry.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Updating tailwind.config.ts
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Updating app/globals.css
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Installing dependencies.
      </AnimatedSpan>
      <AnimatedSpan className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
      </AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>
      <TypingAnimation className="text-muted-foreground">
        You may now add components.
      </TypingAnimation>
    </Terminal>
            </div>
            </motion.div>
        </section>

        {/* SKILLS SECTION */}

{/* 🚀 SCROLL VELOCITY SKILLS DISPLAY */}
<section className="relative z-10 max-w-9xl mx-auto px-6 md:px-1 py-24">
  <ScrollVelocityContainer className="text-lg md:text-2xl font-semibold text-gray-900 flex flex-col gap-12">

    {/* Row 1 — Left to Right */}
    <ScrollVelocityRow baseVelocity={10} direction={1}>
      <div className="flex items-center gap-8">
        Java
        <SiJavascript /> JavaScript
        <SiPython /> Python
        <SiReact /> React
        <SiRedux /> Redux Toolkit
        <SiAngular /> Angular
        <SiTailwindcss /> Tailwind CSS
        <SiNodedotjs /> Node.js
        <SiMongodb /> MongoDB
        <SiMysql /> MySQL
      </div>
    </ScrollVelocityRow>

    {/* Row 2 — Right to Left */}
    <ScrollVelocityRow baseVelocity={10} direction={-1}>
      <div className="flex items-center gap-8">
        <SiAwsamplify /> AWS
        <SiGooglecloud /> Google Cloud
        <SiGit /> Git
        <SiFigma /> Figma
        <SiPostman /> Postman
        <SiSalesforce /> Salesforce
        <SiChartdotjs /> Chart.js
        🧠 DSA
        💡 OOPS
        ⚙️ Problem Solving
      </div>
    </ScrollVelocityRow>
  </ScrollVelocityContainer>
</section>
        {/* EDUCATION SECTION */}
<BlurFade>
    <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-16">
    <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
  <div className="space-y-8">
    {[
      {
        degree: "B.Tech - Computer Science Engineering",
        school: "Guru Nanak Institute of Technology, Hyderabad",
        date: "2022 – 2026",
        score: "CGPA: 8.2 / 10",
      },
      {
        degree: "Intermediate - MPC",
        school: "Narayana Junior College, Hyderabad",
        date: "2020 – 2022",
        score: "Percentage: 96%",
      },
      {
        degree: "SSC",
        school: "Nagarjuna Model School",
        date: "2019 – 2020",
        score: "Percentage: 100%",
      },
    ].map((edu, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 }}
        viewport={{ once: true }}
      >
        <Card className="relative border border-gray-200 shadow-sm hover:shadow-md transition-all bg-white/80 backdrop-blur-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl text-indigo-600">{edu.degree}</CardTitle>
              <Badge variant="secondary">{edu.date}</Badge>
            </div>
            <CardDescription className="text-gray-700 mt-1">{edu.school}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">{edu.score}</p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</section>
</BlurFade>
        {/* CERTIFICATIONS */}
<section className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24">
  <h2 className="text-3xl font-bold mb-16 text-center text-gray-900">
    Certifications & Achievements
  </h2>

  <div className="relative pl-8 border-l-2 border-indigo-400/40">
    {/* Animated Glow Line */}
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "100%" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-indigo-400 via-purple-500 to-transparent rounded-full shadow-[0_0_15px_3px_rgba(99,102,241,0.3)]"
    />

    {[
      {
        title: "Google Cloud Computing Foundations",
        desc: "Completed via Credly — learned core cloud architecture, networking, and DevOps fundamentals.",
        icon: <Cloud className="w-6 h-6 text-indigo-500" />,
        year: "2025",
        link: "https://www.credly.com/badges/4098b259-59a8-4a7f-9f3e-6aae850f4803/linked_in_profile",
      },
      {
        title: "AWS Certified Cloud Practitioner",
        desc: "Validated AWS fundamentals including global infrastructure, pricing, and cloud concepts.",
        icon: <Award className="w-6 h-6 text-yellow-500" />,
        year: "June 2025",
        link: "https://drive.google.com/file/d/1RqwPT_uauhZtSM_5Pi8hhjJse5Negc-F/view",
      },
      {
        title: "IBM SkillBuild – Generative AI: Prompt Engineering",
        desc: "Mastered effective prompt design and AI-powered workflow automation techniques.",
        icon: <Brain className="w-6 h-6 text-purple-500" />,
        year: "Aug 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/2A5WFJT9AZMY",
      },
      {
        title: "🏆 HackArena Winner (E-commerce Theme)",
        desc: "Won HackArena 2025 for building an innovative e-commerce platform prototype.",
        icon: <Trophy className="w-6 h-6 text-orange-500" />,
        year: "2025",
        link: "#",
      },
    ].map((cert, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
        viewport={{ once: true }}
        className="relative mb-12 flex items-start gap-4 group"
      >
        <div className="flex-shrink-0 mt-1">{cert.icon}</div>

        {/* Text */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {cert.title}
          </h3>
          <p className="text-gray-600 text-sm">{cert.desc}</p>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-indigo-500 hover:underline mt-1"
          >
            View Certificate →
          </a>
          <p className="text-xs text-gray-400 mt-1">{cert.year}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
        </main>
    );
    }
