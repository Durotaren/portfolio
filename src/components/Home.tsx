import Map from './Map';
import Introduction from './Introduction';
import Skills from './Skills';
import Interactivity from './Interactivity';
import type { RefObject } from 'react';

interface HomeProps {
  position: number;
  sliderRef: RefObject<HTMLDivElement>;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({
  position,
  sliderRef,
  setIsDragging,
}: HomeProps) {
  return (
    <>
      <Map />
      <Introduction />
      <Skills />
      <Interactivity
        position={position}
        sliderRef={sliderRef}
        setIsDragging={setIsDragging}
      />
    </>
  );
}
