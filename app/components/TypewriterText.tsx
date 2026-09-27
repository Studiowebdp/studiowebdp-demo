"use client";

import { useEffect, useState } from "react";

type Props = {
  /** Array di stringhe da alternare */
  strings: string[];
  /** Velocità di digitazione (ms per carattere) */
  typeSpeed?: number;
  /** Velocità di cancellazione (ms per carattere) */
  backSpeed?: number;
  /** Pausa dopo aver scritto tutta la frase (ms) */
  pauseAfterType?: number;
  /** Pausa dopo aver cancellato tutta la frase (ms) */
  pauseAfterDelete?: number;
  /** Classi CSS da applicare al testo */
  className?: string;
};

export default function TypewriterText({
  strings,
  typeSpeed = 60,
  backSpeed = 30,
  pauseAfterType = 1500,
  pauseAfterDelete = 300,
  className = "",
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[stringIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Fase di digitazione
          if (displayed.length < currentString.length) {
            setDisplayed(currentString.slice(0, displayed.length + 1));
          } else {
            // Frase completa: aspetta e inizia a cancellare
            setTimeout(() => setIsDeleting(true), pauseAfterType);
          }
        } else {
          // Fase di cancellazione
          if (displayed.length > 0) {
            setDisplayed(currentString.slice(0, displayed.length - 1));
          } else {
            // Frase cancellata: passa alla successiva
            setIsDeleting(false);
            setStringIndex((prev) => (prev + 1) % strings.length);
            setTimeout(() => {}, pauseAfterDelete);
          }
        }
      },
      isDeleting ? backSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    stringIndex,
    strings,
    typeSpeed,
    backSpeed,
    pauseAfterType,
    pauseAfterDelete,
  ]);

  return (
    <span className={className}>
      {displayed}
      {/* Cursore lampeggiante */}
      <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-1 animate-pulse" />
    </span>
  );
}