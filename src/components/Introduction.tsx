import profilePic from '../assets/batman.jpg';

export default function Introduction() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5">
        <img
          src={profilePic}
          alt=""
          className="h-[62px] w-[62px] rounded-full inline-block"
        />
        <div className="flex flex-col gap-1">
          <p className="text-white font-400 text-2xl">
            Hey,I'm Ivan <span>👋</span>
          </p>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
            <p className="text-white">Available for work</p>
          </div>
        </div>
      </div>
      <p className="text-white font-normal font-sans font-size-4">
        I’m a software developer with nearly 2 years of experience. I specialize
        in building clean, responsive interfaces with a strong focus on user
        experience and attention to detail.
        {/* I’m a frontend-focused developer building modern web applications with
        React and TypeScript. I care deeply about clean code, performance, and
        creating smooth user experiences. */}
      </p>
    </div>
  );
}
