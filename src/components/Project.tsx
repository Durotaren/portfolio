interface ProjectProps {
  name: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
  image: string;
  gradientColor: string;
}
export default function Project({
  name,
  description,
  githubLink,
  liveDemoLink,
  image,
  gradientColor,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full group overflow-hidden">
        <div
          className={`relative bg-gradient-to-t from-[#111010] to-[#202021] h-[335px] transition-colors duration-300 rounded-md`}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundImage = `linear-gradient(to top, #0C0C0E, ${gradientColor})`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundImage = `linear-gradient(to top, #111010, #202021)`)
          }
        >
          <img
            className="aboluste w-full h-[350px] translate-y-4 group-hover:translate-y-0 transition-translate duration-600"
            src={image}
          ></img>
        </div>
      </div>
      <p className="dark:text-white text-black text-lg mt-1">{name}</p>
      <p className="text-[#a3a3a3] text-sm">{description}</p>
      <div className="flex gap-4 pt-1">
        <a
          className="flex justify-center items-center gap-2 border-2 dark:border-white border-black px-[16px] py-[8px] rounded-md dark:hover:bg-[#262626] hover:bg-[#F5F5F5] transition-colors duration-200 cursor-pointer dark:text-white text-black noopener noreferrer"
          href={githubLink}
          target="_blank"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 dark:text-white text-black transition-colors"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.305.762-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.804 5.628-5.476 5.922.43.37.813 1.103.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          Source
        </a>
        <a
          className="flex justify-center items-center gap-2 dark:bg-white bg-black rounded-md hover:bg-[#2E2E2E] dark:hover:bg-[#E2E2E2] transition-colors duration-200 px-[20px] py-[8px] cursor-pointer dark:text-black text-white noopener noreferrer"
          href={liveDemoLink}
          target="_blank"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="0.00024000000000000003"
            className="w-6 h-6 transition-colors"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g id="style=stroke" clipPath="url(#clip0_1_1828)">
                {' '}
                <g id="web">
                  {' '}
                  <path
                    id="vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4425 2.44429C10.0752 3.64002 9.32073 6.25569 8.89915 8.83258C9.99331 9.00921 11.0621 9.12209 12 9.12209C12.9379 9.12209 14.0067 9.00921 15.1009 8.83258C14.6793 6.25569 13.9248 3.64002 13.5575 2.44429C13.0509 2.3624 12.5307 2.31977 12 2.31977C11.4693 2.31977 10.9491 2.3624 10.4425 2.44429ZM15.3337 2.90893C15.737 4.305 16.2958 6.42828 16.6448 8.54737C18.1513 8.23703 19.5727 7.85824 20.605 7.56109C19.4986 5.42102 17.6172 3.74662 15.3337 2.90893ZM21.2129 9.01933C20.1222 9.33683 18.5423 9.76328 16.8594 10.1057C16.9295 10.7564 16.9709 11.3958 16.9709 12C16.9709 12.8816 16.8827 13.8411 16.7445 14.8058C18.759 14.3858 20.6068 13.849 21.5557 13.5575C21.6376 13.0509 21.6802 12.5307 21.6802 12C21.6802 10.959 21.5162 9.95751 21.2129 9.01933ZM21.0911 15.3337C19.9166 15.6729 18.229 16.1219 16.4634 16.4634C16.1219 18.229 15.6729 19.9166 15.3337 21.0911C17.9978 20.1138 20.1138 17.9978 21.0911 15.3337ZM13.5576 21.5557C13.849 20.6068 14.3858 18.759 14.8058 16.7445C13.8411 16.8827 12.8816 16.9709 12 16.9709C11.1184 16.9709 10.1589 16.8827 9.19423 16.7445C9.61421 18.759 10.151 20.6068 10.4425 21.5557C10.9491 21.6376 11.4693 21.6802 12 21.6802C12.5307 21.6802 13.0509 21.6376 13.5576 21.5557ZM8.66629 21.0911C8.32707 19.9166 7.8781 18.229 7.53658 16.4634C5.77099 16.1219 4.08335 15.6729 2.90891 15.3337C3.88622 17.9978 6.00216 20.1138 8.66629 21.0911ZM2.44429 13.5575C3.39316 13.849 5.24101 14.3858 7.25548 14.8058C7.1173 13.8411 7.02907 12.8816 7.02907 12C7.02907 11.3958 7.07048 10.7564 7.14056 10.1057C5.45769 9.76328 3.87779 9.33683 2.78712 9.01933C2.48383 9.95751 2.31977 10.959 2.31977 12C2.31977 12.5307 2.3624 13.0509 2.44429 13.5575ZM3.39504 7.56109C4.42731 7.85824 5.84865 8.23703 7.35522 8.54737C7.70416 6.42827 8.26303 4.305 8.66626 2.90893C6.38282 3.74662 4.50139 5.42102 3.39504 7.56109ZM8.68924 10.3888C8.63137 10.9544 8.59884 11.4968 8.59884 12C8.59884 12.9399 8.71224 14.012 8.88985 15.1102C9.98798 15.2878 11.0601 15.4012 12 15.4012C12.9399 15.4012 14.012 15.2878 15.1102 15.1102C15.2878 14.012 15.4012 12.9399 15.4012 12C15.4012 11.4968 15.3686 10.9544 15.3108 10.3888C14.1776 10.5703 13.0348 10.6919 12 10.6919C10.9652 10.6919 9.82236 10.5703 8.68924 10.3888ZM9.67273 0.991173C10.4243 0.833026 11.2029 0.75 12 0.75C12.7971 0.75 13.5757 0.833026 14.3273 0.991174C18.0108 1.76627 21.0281 4.34097 22.42 7.75174C22.9554 9.06356 23.25 10.4983 23.25 12C23.25 12.7971 23.167 13.5757 23.0088 14.3273C22.0943 18.6736 18.6736 22.0943 14.3273 23.0088C13.5757 23.167 12.7971 23.25 12 23.25C11.2029 23.25 10.4243 23.167 9.67273 23.0088C5.32644 22.0943 1.90572 18.6736 0.991173 14.3273C0.833026 13.5757 0.75 12.7971 0.75 12C0.75 10.4972 1.04509 9.06132 1.58123 7.74866C2.97369 4.33943 5.99026 1.76604 9.67273 0.991173Z"
                    fill="currentColor"
                    className="transition-colors"
                  ></path>{' '}
                </g>{' '}
              </g>{' '}
              <defs>
                {' '}
                <clipPath id="clip0_1_1828">
                  {' '}
                  <rect width="24" height="24" fill="white"></rect>{' '}
                </clipPath>{' '}
              </defs>{' '}
            </g>
          </svg>
          Visit
        </a>
      </div>
    </div>
  );
}
// `linear-gradient(to top, #F9F9F9, ${gradientColor})`;
// #E4E3E6;
// #F8F9FA;
