import { useEffect, useRef, useState } from "react";

export function useTypewriter(s: string, delay = 6000, interval = 75) {
  const [idx, setIdx] = useState<number>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log(delay);
    const timeout = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (idx >= s.length) {
      setIdx(s.length);
      return;
    }

    const timeout = setTimeout(() => setIdx(idx + 1), interval);

    return () => clearTimeout(timeout);
  }, [idx, ready]);

  return idx ? s.substring(0, idx) : "";
}
