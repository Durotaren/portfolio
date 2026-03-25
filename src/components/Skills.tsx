import HtmlIcon from './icons/HtmlIcon';
import TypeScriptIcon from './icons/TypeScript';
import CssIcon from './icons/CssIcon';

export default function Skills() {
  return (
    <div className="w-full h-[156px] my-6 grid grid-cols-4 grid-rows-2 gap-2">
      <HtmlIcon />
      <TypeScriptIcon />
      <CssIcon />
      <div className="w-full h-full bg-red-500">4</div>
      <div className="w-full h-full bg-red-500">5</div>
      <div className="w-full h-full bg-red-500">6</div>
      <div className="w-full h-full bg-red-500">7</div>
      <div className="w-full h-full bg-red-500">8</div>
    </div>
  );
}
