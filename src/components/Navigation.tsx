import moonSvg from '../assets/moon.svg';

export default function Navigation() {
  return (
    <nav className="border-2 border-blue-500 w-full h-[32px] mt-6 flex">
      <p className="text-white font-mono font-bold text-2xl mr-auto">
        Ivan Dimitrov
      </p>
      {/* flex h-8 items-center rounded-md px-2 py-0.5 text-center text-md text-muted-foreground hover:text-primary/80 */}
      <ul className="flex items-end text-blue-500 ">
        <li className="px-2 py-0.5 text-muted">blog</li>
        <li className="px-2 py-0.5 text-muted">projects</li>
        <li className="px-2 py-0.5 text-muted">about</li>
      </ul>
      <li className="px-2 py-0.5 text-muted flex justify-center">
        <img src={moonSvg} alt="" className="max-w-[24px]" />
      </li>
    </nav>
  );
}
