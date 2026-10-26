import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface StatItem {
  value: string;
  targetNum?: number;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: '100%',
    targetNum: 100,
    suffix: '%',
    label: 'Recyclable Material',
  },
  {
    value: '99%',
    targetNum: 99,
    suffix: '%',
    label: 'Purity Level',
  },
  {
    value: '100%',
    targetNum: 100,
    suffix: '%',
    label: 'Electrical Conductivity',
  },
  {
    value: '2+',
    targetNum: 2,
    suffix: '+',
    label: 'Usage Types (Industrial +\nCommercial)',
  },
  {
    value: '30%',
    targetNum: 30,
    suffix: '%',
    label: 'Cost Saving vs New Copper',
  },
];

const AnimatedCounter: React.FC<{ target: number; suffix: string; inView: boolean }> = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const increment = target / (duration / 25);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
};

export const StatsBanner: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div ref={ref} className="w-full bg-[#bd606a] border-t border-rose-300/30 text-white select-none relative overflow-hidden">
      {/* Subtle shine background layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer-effect pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-2 sm:py-2.5 md:py-3.5">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/20 gap-x-2 gap-y-2 md:gap-y-0"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className={`flex flex-col items-center justify-center text-center p-1.5 sm:p-2 md:px-3 md:py-1 cursor-default ${
                idx === 4 ? 'col-span-2 md:col-span-1 pt-2 md:pt-1' : ''
              }`}
            >
              <span className="text-base sm:text-xl md:text-2xl lg:text-[26px] font-black tracking-tight text-white drop-shadow-sm font-sans leading-tight">
                {stat.targetNum ? (
                  <AnimatedCounter target={stat.targetNum} suffix={stat.suffix || ''} inView={isInView} />
                ) : (
                  stat.value
                )}
              </span>
              <span className="text-[10px] sm:text-[11px] md:text-xs font-medium text-rose-100/95 leading-tight mt-0.5 text-center px-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
