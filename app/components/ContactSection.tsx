"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import TypewriterText from "./TypewriterText";
import RevealOnScroll from "./RevealOnScroll";

// ✅ Access Key Web3Forms (già inserita)
const WEB3FORMS_ACCESS_KEY = "e9ace913-f51b-4b15-989b-6f9a0fd2e4c3";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms richiede access_key + subject + from_name
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Nuovo contatto dal sito Studio Web DP");
    formData.append("from_name", "Sito Studio Web DP");

    // Reply-To: se rispondi all'email, rispondi direttamente al cliente
    const email = formData.get("email") as string;
    if (email) formData.append("replyto", email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        console.error("Web3Forms error:", data);
      }
    } catch (error) {
      setStatus("error");
      console.error("Fetch error:", error);
    }
  }

  return (
    <section
      id="contattami"
      className="py-20 md:py-28 bg-slate-50 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12">
          {/* RECAPITI */}
          <RevealOnScroll from="left">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
                Recapiti
              </h2>
              <ul className="space-y-5">
                <li>
                  <a
                    href="tel:+393505439819"
                    className="group flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center shrink-0 transition-colors">
                      <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </span>
                    <span className="font-medium">+39 350 5439819</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@studiowebdp.it"
                    className="group flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </span>
                    <span className="font-medium">info@studiowebdp.it</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-3 text-slate-700">
                    <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </span>
                    <span className="font-medium pt-2">
                      Via Pietro Pagello, 17 — 32100 Belluno (BL)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* FORM */}
          <RevealOnScroll from="right" delay={0.15}>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Parlami del <br />
                <TypewriterText
                  strings={[
                    "tuo progetto.",
                    "tuo e-commerce.",
                    "tuo business.",
                    "tuo nuovo sito.",
                  ]}
                  typeSpeed={100}
                  backSpeed={20}
                  className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
                />
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Compila il modulo qui sotto: ti risponderò personalmente entro
                24 ore per analizzare insieme la tua idea.
              </p>

              {status === "sent" ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-6 text-center">
                  <p className="font-bold text-lg mb-1">
                    ✅ Messaggio inviato!
                  </p>
                  <p className="text-sm">Ti risponderò entro 24 ore.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot anti-spam (Web3Forms lo usa per bloccare i bot) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        required
                        placeholder="Inserisci il tuo nome"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Cognome *
                      </label>
                      <input
                        type="text"
                        name="cognome"
                        required
                        placeholder="Inserisci il tuo cognome"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        placeholder="Inserisci il tuo numero"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Inserisci la tua mail"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                      Il tuo messaggio *
                    </label>
                    <textarea
                      name="messaggio"
                      required
                      rows={6}
                      placeholder="Raccontami di più sul tuo progetto..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition resize-y"
                    />
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-500">
                    <input
                      type="checkbox"
                      required
                      id="privacy"
                      className="mt-0.5 shrink-0 w-4 h-4 accent-blue-600"
                    />
                    <label htmlFor="privacy" className="cursor-pointer">
                      Dichiaro di aver preso visione dell&apos;informativa ai
                      sensi dell&apos;art.13 del Regolamento Europeo 679/2016 e
                      ne esprimo il mio consenso.
                    </label>
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
                      ❌ Errore nell&apos;invio. Riprova o scrivimi direttamente
                      a{" "}
                      <a
                        href="mailto:info@studiowebdp.it"
                        className="underline font-semibold"
                      >
                        info@studiowebdp.it
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-bold py-4 rounded-xl shadow-lg shadow-yellow-200/60 border border-yellow-500/40 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Invio in corso...
                      </>
                    ) : (
                      "Invia la tua richiesta"
                    )}
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}