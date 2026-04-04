import resume from '../assets/files/Ivan-Resume.pdf';

export default function Contacts() {
  return (
    <div className="flex flex-col gap-4 border-gray-600 rounded-md">
      <p className="dark:text-white text-black text-2xl">About me</p>

      <p className="dark:text-white text-black text-lg border-gray-600 rounded-md">
        I’m a web developer focused on building clean, responsive, and
        high-performing web applications. I’ve committed myself to consistent
        daily practice, turning ideas into real, functional projects.
      </p>

      <p className="dark:text-white text-black text-lg border-gray-600 rounded-md">
        I approach development with a problem-solving mindset and strong
        attention to detail, always aiming to write clear, maintainable code.
        I’m a fast learner who quickly adapts to new tools and concepts, and I’m
        currently expanding my skills toward full-stack development while
        working on projects that reflect real-world use cases.
      </p>

      <div className="flex flex-col gap-2">
        <div className="flex items-center group cursor-pointer p-[2px] gap-3  ">
          <svg
            viewBox="0 0 512 512"
            className="w-8 h-8 text-[#a3a3a3] dark:group-hover:text-white group-hover:text-black transition-colors duration-100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345
          c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345
          C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203
          c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958
          c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064
          c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571
          c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637
          L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136
          C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435
          C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959
          l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959
          C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8
          V385.92z"
            />
          </svg>
          <a
            href="mailto:ivan.dimitrov1567@gmail.com"
            className="text-[#a3a3a3] dark:group-hover:text-white group-hover:text-black transition-colors duration-100"
          >
            Send me an email
          </a>
        </div>
        <div className="flex items-center group p-[2px] gap-3 cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-[#a3a3a3] dark:group-hover:text-white group-hover:text-black transition-colors duration-100"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.305.762-1.604-2.665-.3-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.804 5.628-5.476 5.922.43.37.813 1.103.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <a
            href="https://github.com/Durotaren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] dark:group-hover:text-white group-hover:text-black transition-colors duration-100"
          >
            Github
          </a>
        </div>
        <div className="flex items-center group p-[2px] gap-3 cursor-pointer">
          <svg
            fill="currentColor"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45.057 45.057"
            xmlSpace="preserve"
            className="w-8 h-8 text-[#a3a3a3] dark:group-hover:text-white group-hover:text-black transition-colors duration-100"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <g id="_x35_8_24_">
                  {' '}
                  <g>
                    {' '}
                    <path d="M19.558,25.389c-0.067,0.176-0.155,0.328-0.264,0.455c-0.108,0.129-0.24,0.229-0.396,0.301 c-0.156,0.072-0.347,0.107-0.57,0.107c-0.313,0-0.572-0.068-0.78-0.203c-0.208-0.137-0.374-0.316-0.498-0.541 c-0.124-0.223-0.214-0.477-0.27-0.756c-0.057-0.279-0.084-0.564-0.084-0.852c0-0.289,0.027-0.572,0.084-0.853 c0.056-0.281,0.146-0.533,0.27-0.756c0.124-0.225,0.29-0.404,0.498-0.541c0.208-0.137,0.468-0.203,0.78-0.203 c0.271,0,0.494,0.051,0.666,0.154c0.172,0.105,0.31,0.225,0.414,0.361c0.104,0.137,0.176,0.273,0.216,0.414 c0.04,0.139,0.068,0.25,0.084,0.33h2.568c-0.112-1.08-0.49-1.914-1.135-2.502c-0.644-0.588-1.558-0.887-2.741-0.895 c-0.664,0-1.263,0.107-1.794,0.324c-0.532,0.215-0.988,0.52-1.368,0.912c-0.38,0.392-0.672,0.863-0.876,1.416 c-0.204,0.551-0.307,1.165-0.307,1.836c0,0.631,0.097,1.223,0.288,1.77c0.192,0.549,0.475,1.021,0.847,1.422 s0.825,0.717,1.361,0.949c0.536,0.23,1.152,0.348,1.849,0.348c0.624,0,1.18-0.105,1.668-0.312 c0.487-0.209,0.897-0.482,1.229-0.822s0.584-0.723,0.756-1.146c0.172-0.422,0.259-0.852,0.259-1.283h-2.593 C19.68,25.023,19.627,25.214,19.558,25.389z"></path>{' '}
                    <polygon points="26.62,24.812 26.596,24.812 25.192,19.616 22.528,19.616 25.084,28.184 28.036,28.184 30.713,19.616 28,19.616 "></polygon>{' '}
                    <path d="M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.706v4.76h4.992L36.878,42.056L36.878,42.056z"></path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
          <a
            href={resume}
            download="My_Resume.pdf"
            className="text-[#a3a3a3] dark:group-hover:text-white group-hover:text-black transition-colors duration-100"
          >
            Download my Resume
          </a>
        </div>
      </div>
    </div>
  );
}
