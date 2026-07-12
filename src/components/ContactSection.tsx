"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  User,
  FileText,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 overflow-hidden bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-violet-300/20 dark:bg-violet-500/10 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-violet-500">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-violet-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Create Something Amazing
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-violet-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollAnimation className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-violet-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                    BA
                  </div>
                  <div>
                    <div className="text-lg font-bold">Shashank Patil</div>
                    <div className="text-sm text-violet-500 font-medium">
                      Frontend Developer
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision. Feel free
                  to reach out!
                </p>
              </div>
            </div>

            <a
              href="mailto:shashankpatil297@gmail.com"
              className="group flex items-center gap-5 p-5 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-violet-500 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500 transition-colors duration-200 flex-shrink-0">
                <Mail className="w-5 h-5 text-violet-500 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">
                  Email
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  shashankpatil297@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/8007014483"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-5 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-green-500 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-200 flex-shrink-0">
                <FaWhatsapp className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">
                  WhatsApp
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  +91 8007014483
                </div>
              </div>
            </a>

            <div className="group flex items-center gap-5 p-5 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-red-500 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">
                  Location
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Maharashtra, India
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={150}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 md:p-10">
              <h3 className="text-xl font-bold mb-2">Send a Message</h3>
              <p className="text-sm text-slate-500 mb-8">
                Have a question or want to work together? Drop me a message!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-4 text-slate-400 text-sm peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-focus:top-1.5 peer-focus:text-xs transition-all duration-200"
                  >
                    Your Name
                  </label>
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 peer-focus:text-violet-500 transition-colors duration-200" />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-4 text-slate-400 text-sm peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-focus:top-1.5 peer-focus:text-xs transition-all duration-200"
                  >
                    Your Email
                  </label>
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 peer-focus:text-violet-500 transition-colors duration-200" />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 top-4 text-slate-400 text-sm peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-focus:top-1.5 peer-focus:text-xs transition-all duration-200"
                  >
                    Subject
                  </label>
                  <FileText className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 peer-focus:text-violet-500 transition-colors duration-200" />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    rows={4}
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-slate-400 text-sm peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-focus:top-1.5 peer-focus:text-xs transition-all duration-200"
                  >
                    Your Message
                  </label>
                  <MessageSquare className="absolute right-4 top-4 w-4 h-4 text-slate-400 peer-focus:text-violet-500 transition-colors duration-200" />
                </div>

                {error && (
                  <div className="text-sm text-red-500 bg-red-50 dark:bg-red-500/10 rounded-xl px-4 py-3">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full py-4 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 active:from-violet-700 active:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
