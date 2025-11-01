"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CoolMode } from "@/components/CoolMode";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Globe } from "@/components/ui/globe";
// ✅ Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});
const globeConfig = {
  particleRadius: 0.003,
  globeRadius: 0.8,
  atmosphereColor: "#ffffff",
  atmosphereOpacity: 0.1,
  primaryColor: "#6366f1", // Indigo
  secondaryColor: "#6366f1",
  arcAmplitude: 0.3,
  arcFrequency: 3,
  arcProbability: 0.2,
  arcIn: 0.3,
  arcOut: 0.3,
};
// Sample arc data for the globe
const sampleArcs = [
  { startLat: 34.0522, startLng: -118.2437, endLat: 51.5074, endLng: -0.1278 }, // LA to London
  { startLat: 40.7128, startLng: -74.006, endLat: 35.6895, endLng: 139.6917 }, // NYC to Tokyo
  { startLat: -33.8688, startLng: 151.2093, endLat: 1.3521, endLng: 103.8198 }, // Sydney to Singapore
  { startLat: 51.5074, startLng: -0.1278, endLat: -33.8688, endLng: 151.2093 }, // London to Sydney
  { startLat: 19.076, startLng: 72.8777, endLat: 40.7128, endLng: -74.006 }, // Mumbai to NYC
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // ✅ React Hook Form setup (unchanged)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // ✅ Submit handler (unchanged)
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("https://formspree.io/f/mgvpzqry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 3000);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <DotPattern />
      </div>

      {/* ✅ New Two-Column Layout Wrapper */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 ">
        
        {/* ✅ Left Column: Globe & Title */}
        <div className="flex-1 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-4 ml-26">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            I'm always open to new opportunities and collaborations. Whether you
            have a question, a project idea.
          </p>
          <div className="relative w-full max-w-lg h-[400px] lg:h-[650px]">
            <Globe globeConfig={globeConfig} data={sampleArcs} />
          </div>
        </div>

        {/* ✅ Right Column: Form */}
        <div className="flex-1 w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-lg shadow-lg rounded-xl border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-600">
              Get in Touch
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm">
              Fill out the form below.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="you@example.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message here..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button with CoolMode */}
                <CoolMode>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </CoolMode>

                {/* Success / Error Messages */}
                {submitted && (
                  <p className="text-center text-green-600 font-medium text-sm mt-2">
                    ✅ Message sent successfully!
                  </p>
                )}
                {error && (
                  <p className="text-center text-red-600 font-medium text-sm mt-2">
                    ❌ Failed to send message. Please try again later.
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}
