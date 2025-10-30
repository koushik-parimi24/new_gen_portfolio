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

// ✅ Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // ✅ React Hook Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // ✅ Submit handler using Formspree API
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
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <DotPattern />
      </div>

      <div className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-lg shadow-lg rounded-xl border border-gray-200 p-8">
        <h1 className="text-3xl font-semibold text-center mb-6 text-indigo-600">
          Get in Touch
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Have a question or want to collaborate? Fill out the form below.
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
    </main>
  );
}
