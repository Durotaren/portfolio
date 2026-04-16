import { Link } from 'react-router';

export default function Error() {
  return (
    <div className="flex flex-col dark:text-white text-black text-lg">
      <p>Oops! It looks like you tried to open a page that doesn't exist.</p>
      <Link
        className="flex justify-center items-center w-[220px] text-center gap-2 border-2 dark:border-white border-black px-[16px] py-[8px] mt-3 rounded-md dark:hover:bg-[#262626] hover:bg-[#F5F5F5] transition-colors duration-200 cursor-pointer dark:text-white text-black"
        to="/"
      >
        Click here to go back
      </Link>
    </div>
  );
}
