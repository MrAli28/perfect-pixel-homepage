import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 134, label: "International University Acceptances 2025" },
  { value: 100, label: "Cambridge O-Level Results 2025", suffix: "%" },
  { value: 100, label: "Cambridge A-Level Results 2025", suffix: "%" },
  { value: 1560, label: "SAT Highest Individual Score" },
];

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="cch-stat-number">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-cch-light-gray">
      <div className="cch-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <CountUp end={stat.value} suffix={stat.suffix} />
              <p className="text-cch-body-text text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="cch-btn-primary">
            School Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
