import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import clickSound from '../assets/sounds/click.mp3';
import Sun from './svgs/Sun';

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
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 dark:text-white text-black absolute transition-all duration-300 ease-in-out ${
            dark
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-0 rotate-180'
          }`}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z"
              fill="currentColor"
            ></path>{' '}
          </g>
        </svg>

        <Sun dark={dark} />
      </div>
    </nav>
  );
}
