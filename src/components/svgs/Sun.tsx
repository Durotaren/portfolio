interface SunProps {
  dark: boolean;
}

export default function Sun({ dark }: SunProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
      className={`w-5 h-5 absolute transition-all duration-300 ease-in-out ${
        dark ? 'opacity-0 scale-0 rotate-180' : 'opacity-100 scale-100 rotate-0'
      }`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="#000000"
          strokeWidth="1.5"
        ></circle>{' '}
        <path
          d="M12 2V4"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{' '}
        <path
          d="M12 20V22"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{' '}
        <path
          d="M4 12L2 12"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{' '}
        <path
          d="M22 12L20 12"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{' '}
        <path
          d="M19.7778 4.22266L17.5558 6.25424"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{' '}
        <path
          d="M4.22217 4.22266L6.44418 6.25424"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{' '}
        <path
          d="M6.44434 17.5557L4.22211 19.7779"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{' '}
        <path
          d="M19.7778 19.7773L17.5558 17.5551"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{' '}
      </g>
    </svg>
  );
}
