import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import clickSound from '../assets/sounds/click.mp3';
import Sun from './svgs/Sun';
import Moon from './svgs/Moon';

interface NavigationProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation({ dark, setDark }: NavigationProps) {
  const audioRef = useRef(new Audio(clickSound));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <nav className="w-full h-8 mt-6 flex items-center mb-16">
      <Link
        to={'/'}
        className="text-black font-mono font-bold text-2xl mr-auto dark:text-white "
        viewTransition
      >
        Ivan Dimitrov
      </Link>

      <ul className="flex items-center text-gray-400 ">
        <Link
          to={'/projects'}
          className="px-2 py-0.5 hover:text-black dark:hover:text-white hover:cursor-pointer transition-colors duration-200"
          viewTransition
        >
          projects
        </Link>
        <Link
          to={'/about'}
          className="px-2 py-0.5 hover:text-black dark:hover:text-white hover:cursor-pointer transition-colors duration-200"
          viewTransition
        >
          about
        </Link>
      </ul>
      <div
        className="w-5 h-5 mx-2 py-0.5 flex justify-center items-center hover:cursor-pointer relative"
        onClick={() => {
          setDark((prev) => !prev);
          audioRef.current.currentTime = 0;
          audioRef.current.volume = 0.3;
          audioRef.current.play();
        }}
      >
        <Moon dark={dark} />
        <Sun dark={dark} />
      </div>
    </nav>
  );
}
