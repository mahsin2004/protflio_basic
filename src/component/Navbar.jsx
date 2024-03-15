import { Link } from "react-scroll";
// , Button, Element, Events, animateScroll as scroll, scrollSpy

const Navbar = () => {
  const links = (
    <>
      <Link
        className=" cursor-pointer"
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-80}
        duration={500}
      >
        <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold text-[#495057]">
          Home
        </li>
      </Link>
      <Link
        className=" cursor-pointer"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-68}
        duration={500}
      >
        <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold text-[#495057]">
          My Projects
        </li>
      </Link>
      <Link
        className=" cursor-pointer"
        activeClass="active"
        to="ed&To"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-68}
        duration={500}
      >
        <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold text-[#495057]">
          Education
        </li>
      </Link>
      <Link
        className=" cursor-pointer"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-69}
        duration={500}
      >
        <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold text-[#495057]">
          About Me
        </li>
      </Link>
      <Link
        className=" cursor-pointer"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-60}
        duration={500}
      >
        <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold text-[#495057]">
          Contact Me
        </li>
      </Link>
    </>
  );

  return (
    <div className=" px-5 sticky top-0 z-10 bg-white border-b">
      <div className="max-w-6xl mx-auto w-full border-base-200">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <div className="hidden lg:block">
              <p className="normal-case text-xl text-[#B68C5A] font-bold">My Portfolio</p>
            </div>
          </div>
          <div className="navbar-end">
            <div className=" hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
