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
    <div className="mt-6 flex flex-col gap-4 border-gray-600 border-1 p-4 rounded">
      <div className="flex flex-col gap-1">
        <p className="text-gray-400">
          I like to make things engaging and interactive.
        </p>
        <p className="text-gray-400">
          Here for example you can control time! Don't trust me? Just drag the
          circle and see for yourself!
        </p>
      </div>
      <div
        ref={sliderRef}
        className="w-full h-6 border-white rounded-full bg-gray-500 relative mt-2"
      >
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
