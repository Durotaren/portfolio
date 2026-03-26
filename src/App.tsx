import { StarsBackground } from './components/StarsBackground';
import Navigation from './components/Navigation';
import Map from './components/Map';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Interactivity from './components/Interactivity';
import { useState } from 'react';

function App() {
  const [speed, setSpeed] = useState(7);
  return (
    <div className="relative w-full h-screen">
      <StarsBackground className="absolute inset-0" speed={speed} />

      <div className="absolute px-6 inset-0 max-w-xl mx-auto flex flex-col">
        <Navigation />
        <Map />
        <Introduction />
        <Skills />
        <Interactivity />
        <button
          className="text-white opacity-0"
          onClick={() => {
            setSpeed(Math.random() * 50);
          }}
        >
          Click here
        </button>
      </div>
    </div>
  );
}

export default App;
