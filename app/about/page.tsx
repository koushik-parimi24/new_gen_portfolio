    "use client";

    import { motion } from "framer-motion";
    import Link from "next/link";
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
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { InteractiveHoverButton2 } from "@/components/ui/InteractiveHoverButton2";
import { ShimmerButton } from "@/components/ui/shimmer-button";
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
        {/* HERO SECTION */}
<section className="relative z-10 grid max-w-7xl mx-auto px-6 md:px-12 py-24 md:grid-cols-2 gap-10 items-center">
  {/* Left - Intro */}
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    <h1 className="text-5xl font-extrabold leading-tight">
      About <span className="text-indigo-400">Koushik Parimi</span>
    </h1>

      <p className="text-gray-900 text-lg max-w-md leading-relaxed">
  A passionate <span className="font-semibold text-indigo-600">Frontend Engineer </span> 
  who loves crafting seamless digital experiences and solving real-world problems 
  through elegant, scalable web solutions.
</p>

    {/* 🌟 Social Buttons */}
    <div className="flex flex-wrap gap-4 pt-4">
      
        <a
          href="https://github.com/koushik-parimi24"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white  transition-all"
        >
          <ShimmerButton className="gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 "
          >
            <path d="M12 .5C5.65.5.5 5.64.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.8 2.73 1.28 3.4.98.1-.76.41-1.28.75-1.58-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.44-2.26 1.16-3.06-.12-.29-.5-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.84 10.84 0 0 1 5.73 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.59.24 2.76.12 3.05.73.8 1.16 1.81 1.16 3.06 0 4.41-2.69 5.37-5.25 5.66.42.36.8 1.07.8 2.16 0 1.56-.02 2.81-.02 3.19 0 .31.21.67.8.56A10.98 10.98 0 0 0 23.5 12C23.5 5.64 18.35.5 12 .5Z" />
          </svg>
            GitHub
          </ShimmerButton>
          
        </a>

        <a
          href="https://www.linkedin.com/in/koushikparimi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all"
        >
        <ShimmerButton className="gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.77 0 5-2.24 5-5V5c0-2.76-2.23-5-5-5ZM7.12 20H3.56V9h3.56v11ZM5.34 7.48c-1.14 0-2.06-.93-2.06-2.08s.92-2.08 2.06-2.08 2.07.93 2.07 2.08-.93 2.08-2.07 2.08ZM20.44 20h-3.56v-5.75c0-1.37-.02-3.14-1.91-3.14-1.91 0-2.2 1.49-2.2 3.04V20h-3.56V9h3.42v1.51h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.33 2.4 4.33 5.52V20Z" />
          </svg>
          LinkedIn  
          </ShimmerButton>
        </a>
    </div>
  </motion.div>

  {/* Right - Terminal Animation */}
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex justify-center"
  >
    <div className="relative">
      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-200 to-purple-200 blur-2xl opacity-60 animate-pulse"></div>
      <Terminal>
        <TypingAnimation>&gt; Initializing portfolio...</TypingAnimation>
        <AnimatedSpan className="text-green-500">✔ Loading components...</AnimatedSpan>
        <AnimatedSpan className="text-green-500">✔ Importing creativity...</AnimatedSpan>
        <AnimatedSpan className="text-green-500">✔ Optimizing UI with React + Tailwind CSS...</AnimatedSpan>
        <AnimatedSpan className="text-green-500">✔ Connecting Supabase & APIs...</AnimatedSpan>
        <AnimatedSpan className="text-green-500">✔ Deploying to Vercel...</AnimatedSpan>
        <TypingAnimation className="text-blue-500">
          🚀 Portfolio ready at: koushikparimi.me
        </TypingAnimation>
        <TypingAnimation className="text-muted-foreground">
          Welcome to my world of code.
        </TypingAnimation>
      </Terminal>
    </div>
  </motion.div>
</section>




        {/* SKILLS SECTION */}

{/* 🚀 SCROLL VELOCITY SKILLS DISPLAY */}
<section className="relative z-10 max-w-9xl mx-auto px-6 md:px-1 py-24">
  <ScrollVelocityContainer className="text-lg md:text-2xl font-semibold text-gray-900 flex flex-col gap-12">


    <ScrollVelocityRow baseVelocity={2} direction={1}>
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


    <ScrollVelocityRow baseVelocity={2} direction={-1}>
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

  <div className="relative pl-8 border-l-2">
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
        <div className="shrink-0 mt-1">{cert.icon}</div>

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
