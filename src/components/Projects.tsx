import { motion } from 'framer-motion';
import Project from './Project';
import portfolio from '../assets/portfolio.png';
import memoryCard from '../assets/memoryCard.png';
import cv from '../assets/cv.png';
import weather from '../assets/weather.png';
import { useOutletContext } from 'react-router';

type ContextType = {
  dark: boolean;
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 14,
    },
  },
};

export default function Projects() {
  const { dark } = useOutletContext<ContextType>();

  return (
    <motion.div
      className="flex flex-col gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={item}
        className="dark:text-white text-black text-2xl"
      >
        My Projects
      </motion.div>
      <motion.div variants={item} className="flex flex-col gap-18 mb-10">
        <motion.div variants={item}>
          <Project
            name="Portfolio"
            description="A custom site built with React, Tailwind and Motion to showcase my experience."
            githubLink="https://github.com/Durotaren/portfolio"
            liveDemoLink="something"
            image={portfolio}
            gradientColor={dark ? '#2F4051' : '#AFD5FF'}
            dark={dark}
          />
        </motion.div>
        <motion.div variants={item}>
          <Project
            name="Memory Card"
            description="A Rick and Morty-themed memory game built with React, featuring shuffled cards, score tracking, and win/loss states."
            githubLink="https://github.com/Durotaren/memory-card"
            liveDemoLink="https://memory-card-rick-morty.vercel.app"
            image={memoryCard}
            gradientColor={dark ? '#2B4D37' : '#A5F3C0'}
            dark={dark}
          />
        </motion.div>
        <motion.div variants={item}>
          <Project
            name="CV Maker"
            description="A simple CV / résumé generator built with React."
            githubLink="https://github.com/Durotaren/cv-application"
            liveDemoLink="https://next-cv-app.vercel.app"
            image={cv}
            gradientColor={dark ? '#483B55' : '#EAD6FF'}
            dark={dark}
          />
        </motion.div>
        <motion.div variants={item}>
          <Project
            name="Weather App"
            description="Real-time weather forecasts with dynamic icons, 5-day outlook, hourly updates, and recent search widgets for any city worldwide."
            githubLink="https://github.com/Durotaren/weather-app"
            liveDemoLink="https://durotaren.github.io/weather-app/"
            image={weather}
            gradientColor={dark ? '#523D27' : '#FFCD98'}
            dark={dark}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
