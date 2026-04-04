import HtmlIcon from './icons/HtmlIcon';
import TypeScriptIcon from './icons/TypeScript';
import CssIcon from './icons/CssIcon';
import TailwindIcon from './icons/TailwindIcon';
import ReactIcon from './icons/ReactIcon';
import JavaScriptIcon from './icons/JavaScriptIcon';
import ViteIcon from './icons/ViteIcon';
import DockerIcon from './icons/DockerIcon';

export default function Skills({ dark }: { dark: boolean }) {
  return (
    <div className="w-full min-h-[156px] my-6 grid grid-cols-4 grid-rows-2 gap-2">
      <HtmlIcon />
      <CssIcon />
      <JavaScriptIcon />
      <TypeScriptIcon />
      <ReactIcon />
      <TailwindIcon />
      <ViteIcon dark={dark} />
      <DockerIcon />
    </div>
  );
}
