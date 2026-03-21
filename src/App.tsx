import { StarsBackground } from './components/StarsBackground';

function App() {
  return (
    <div className="relative w-full h-screen">
      <StarsBackground className="absolute inset-0" />

      <div className="absolute inset-0 w-[30vw] mx-auto flex items-center justify-center border-solid border-2">
        <button className="px-6 py-3 w-full bg-white text-black rounded-lg">
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
