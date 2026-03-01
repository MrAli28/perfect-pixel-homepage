import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/faculty-banner.jpg",
    subtitle: "A catalyst to your cadet's well-rounded personality",
    title: "The Ultimate Lifelong Learning",
    highlight: "Experience",
  },
  {
    image: "/images/group-picture.jpg",
    subtitle: "A catalyst to your child's well-rounded personality",
    title: "The Ultimate Lifelong",
    highlight: "Learning Experience",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="cch-overlay" />
          <div className="absolute inset-0 flex items-center">
            <div className="cch-container">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="text-primary-foreground/80 text-sm md:text-base mb-3 font-opensans">
                  {slides[current].subtitle}
                </p>
                <h1 className="text-primary-foreground text-3xl md:text-5xl lg:text-6xl font-bold font-roboto leading-tight mb-1">
                  {slides[current].title}
                </h1>
                <h1 className="text-primary-foreground text-3xl md:text-5xl lg:text-6xl font-bold font-roboto leading-tight mb-6">
                  {slides[current].highlight}
                </h1>
                <a href="#" className="cch-btn-primary">
                  OUR FACILITIES
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-cch-green" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
