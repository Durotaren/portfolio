import { StarsBackground } from './components/StarsBackground';
import Navigation from './components/Navigation';
import Map from './components/Map';

function App() {
  return (
    <div className="relative w-full h-screen">
      <StarsBackground className="absolute inset-0" />

      <div className="absolute px-6 inset-0 max-w-xl mx-auto flex flex-col">
        <Navigation />
        <Map />
      </div>
    </div>
  );
}

export default App;

// speed={speed} key={speed}
// import { useState } from 'react';
// const [speed, setSpeed] = useState(100);
// <button
//   onClick={() => {
//     setSpeed(2);
//   }}
// >
//   Clich ereere
// </button>;
