import moonSvg from '../assets/moon.svg';

export default function Navigation() {
  return (
    <nav className="w-full h-8 mt-6 flex mb-16">
      <p className="text-white font-mono font-bold text-2xl mr-auto">
        Ivan Dimitrov
      </p>

      <ul className="flex items-center text-gray-400 ">
        <li className="px-2 py-0.5 hover:text-white hover:cursor-pointer trasition-colors duration-200">
          projects
        </li>
        <li className="px-2 py-0.5 hover:text-white hover:cursor-pointer trasition-colors duration-200">
          about
        </li>
        <li className="px-2 py-0.5 hover:text-white hover:cursor-pointer trasition-colors duration-200">
          contacts
        </li>
      </ul>
      <li className="px-2 py-0.5 flex justify-center items-center hover:cursor-pointer">
        <img src={moonSvg} alt="" className="max-w-5" />
      </li>
    </nav>
  );
}
