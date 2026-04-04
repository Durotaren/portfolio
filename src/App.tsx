import { StarsBackground } from './components/StarsBackground';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router';
import { useRef, useState } from 'react';

function App() {
  const [speed, setSpeed] = useState<number>(7);
  const [position, setPosition] = useState<number>(7);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [dark, setDark] = useState(true);

  return (
    <div
      className={`relative w-full h-screen ${isDragging ? 'select-none' : ''}`}
      onMouseMove={(e) => {
        if (isDragging && sliderRef.current) {
          const rect = sliderRef.current.getBoundingClientRect();
          let newPos = ((e.clientX - rect.left) / rect.width) * 100;
          newPos = Math.max(2.3, Math.min(97.7, newPos));
          setPosition(newPos);
          setSpeed(newPos * 1.5);
        }
      }}
      onMouseUp={() => {
        setIsDragging(false);
      }}
    >
      <StarsBackground
        className="absolute inset-0"
        starColor={dark ? '#fff' : '#000'}
        speed={speed}
      />

      <div className="absolute px-6 inset-0 max-w-xl mx-auto flex flex-col">
        <Navigation dark={dark} setDark={setDark} />
        <Outlet context={{ position, sliderRef, setIsDragging }} />
      </div>
    </div>
  );
}

export default App;
