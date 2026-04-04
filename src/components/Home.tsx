import { motion } from 'framer-motion';
import Map from './Map';
import Introduction from './Introduction';
import Skills from './Skills';
import Interactivity from './Interactivity';
import type { RefObject } from 'react';

interface HomeProps {
  position: number;
  sliderRef: RefObject<HTMLDivElement>;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  dark: boolean;
}

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
      damping: 15,
    },
  },
};

export default function Home({
  position,
  sliderRef,
  setIsDragging,
  dark,
}: HomeProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col"
    >
      <motion.div variants={item}>
        <Map />
      </motion.div>

      <motion.div variants={item}>
        <Introduction />
      </motion.div>

      <motion.div variants={item}>
        <Skills dark={dark} />
      </motion.div>

      <motion.div variants={item}>
        <Interactivity
          position={position}
          sliderRef={sliderRef}
          setIsDragging={setIsDragging}
        />
      </motion.div>
    </motion.div>
  );
}
