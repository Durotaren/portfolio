interface InteractivityProps {
  position: number;
  sliderRef: React.RefObject<HTMLDivElement | null>;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Interactivity({
  position,
  sliderRef,
  setIsDragging,
}: InteractivityProps) {
  return (
    <div className="mt-4 flex flex-col gap-4 border-gray-800 border-1 p-4 rounded">
      <div className="flex flex-col gap-4">
        <p className="text-white font-mono">
          I like to make things engaging and interactive.
        </p>
        <p className="text-gray-400 ">
          Here for example you can control time!{' '}
          <span className="text-white">You don't believe it?</span> Just drag
          the slider and see for yourself!
        </p>
      </div>
      <div
        ref={sliderRef}
        className="w-full h-6 border-white rounded-full bg-gray-500 relative mt-2"
      >
        <div
          className="absolute bg-blue-400 h-6 rounded-full"
          style={
            position > 2.3 ? { width: `${position + 2}%` } : { width: '0%' }
          }
        ></div>
        <div
          className="w-6 h-6 bg-white absolute rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2 hover:cursor-pointer"
          style={{ left: `${position}%` }}
          onMouseDown={() => {
            setIsDragging(true);
          }}
        ></div>
      </div>
    </div>
  );
}
