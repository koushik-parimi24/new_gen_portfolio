"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LoaderFour } from "../components/ui/loader";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Whenever the route (pathname) changes → show loader briefly
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust duration
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-[9999]"
        >
          <LoaderFour />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
