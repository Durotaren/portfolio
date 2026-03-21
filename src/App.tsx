import { StarsBackground } from './components/StarsBackground';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="relative w-full h-screen">
      <StarsBackground className="absolute inset-0" />

      <div className="absolute px-6 inset-0 max-w-xl mx-auto flex justify-center border-solid border-2 border-red-500">
        <Navigation />
      </div>
    </div>
  );
}

export default App;
