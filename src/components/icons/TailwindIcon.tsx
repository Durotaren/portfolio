export default function TailwindIcon() {
  return (
    <div className="w-full h-full rounded-lg group flex flex-col gap-2 items-center justify-center border border-gray-800">
      <svg
        className="w-7 h-7 text-white group-hover:text-cyan-400 transition duration-300 group-hover:-translate-y-1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" />
      </svg>

      <p className="text-white text-xs">Tailwind CSS</p>
    </div>
  );
}
