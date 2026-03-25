export default function TailwindIcon() {
  return (
    <div className="w-full h-full rounded-lg group flex flex-col gap-2 items-center justify-center border border-gray-400">
      <svg
        className="w-6 h-6 text-white group-hover:text-blue-600 transition-transform duration-300 group-hover:-translate-y-1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>file_type_tailwind</title>
          <path
            d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
            fill="#ffffff"
          ></path>
        </g>
      </svg>

      <p className="text-white text-xs">TypeScript</p>

      <style>
        {`
          .group:hover path {
            fill: #69f0ff;
          }
        `}
      </style>
    </div>
  );
}
