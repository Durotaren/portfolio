import moonSvg from '../assets/moon.svg';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <nav className="w-full h-8 mt-6 flex mb-16">
      <Link
        to={'/'}
        className="text-white font-mono font-bold text-2xl mr-auto"
        viewTransition
      >
        Ivan Dimitrov
      </Link>

      <ul className="flex items-center text-gray-400 ">
        <Link
          to={'/contacts'}
          className="px-2 py-0.5 hover:text-white hover:cursor-pointer transition-colors duration-200"
          viewTransition
        >
          projects
        </Link>
        <Link
          to={'/contacts'}
          className="px-2 py-0.5 hover:text-white hover:cursor-pointer transition-colors duration-200"
          viewTransition
        >
          about
        </Link>
        {/* <Link
          to={'/contacts'}
          className="px-2 py-0.5 hover:text-white hover:cursor-pointer transition-colors duration-200"
          viewTransition
        >
          contacts
        </Link> */}
      </ul>
      <li className="px-2 py-0.5 flex justify-center items-center hover:cursor-pointer">
        <img src={moonSvg} alt="" className="max-w-5" />
      </li>
    </nav>
  );
}
