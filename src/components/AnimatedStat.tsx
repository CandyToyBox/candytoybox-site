"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function AnimatedStat({ value, suffix = "", prefix = "", label }: Props) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="font-rajdhani font-bold text-[#95fe7c] text-4xl md:text-5xl leading-none">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      <span className="text-[#8a8fa8] text-sm font-inter">{label}</span>
    </div>
  );
}
