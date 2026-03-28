import githubSvg from '../assets/github.svg';
import emailSvg from '../assets/email.svg';

export default function RecentProjects() {
  return (
    <div className="flex gap-2 mt-2">
      <div className="flex gap-2">
        <div className="flex justify-center items-center gap-3  ">
          <img src={emailSvg} className="w-4 h-4" alt="" />
          <p className="text-[#a3a3a3]">Send me an email</p>
        </div>
        <div className="flex justify-center items-center gap-3  ">
          <img src={githubSvg} className="w-4 h-4" alt="" />
          <p className="text-[#a3a3a3]">Send me an email</p>
        </div>
      </div>
    </div>
  );
}
