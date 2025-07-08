import Darkmode from "./Darkmode";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full top-0 bg-tranparent border-b border-b-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <img
          src="src\assets\React-Movie-Icon.png"
          className="w-[50px] h-[50px]"
          alt=""
        />

        <h1 className="text-2xl md:text-4xl font-bold">
          <Link to="">React Movie</Link>
        </h1>
      </div>

      <div>
        <Darkmode />

        <ul className="flex gap-x-4 mt-2 font-semibold">
          <li className="cursor-pointer">
            <a href="#popular">Popular</a>
          </li>

          <li>
            <a href="#top_rated">Top Rated</a>
          </li>

          <li>
            <a href="#upcoming">Upcoming</a>
          </li>

          <li>
            <Link to="">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
