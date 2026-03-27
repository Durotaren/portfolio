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
    <div
      ref={sliderRef}
      className="w-full h-6 border-white rounded-full bg-white relative mt-2"
    >
      <div
        className="w-6 h-6 bg-orange-500 absolute rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${position}%` }}
        onMouseDown={() => {
          setIsDragging(true);
        }}
      ></div>
    </div>
  );
}
