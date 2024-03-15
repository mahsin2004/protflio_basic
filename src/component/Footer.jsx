import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[#363B3F]">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-5 py-10 ">
        <p className="normal-case text-2xl text-white font-medium">
          My Portfolio
        </p>
        <ul className="grid lg:grid-cols-4 text-white items-center justify-center text-center gap-2">
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
            <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-medium">
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
            <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-medium">
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
            <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-medium">
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
            <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-medium">
              About Me
            </li>
          </Link>
        </ul>
        <div className="flex items-center justify-center gap-3">
          <a href="https://github.com/mahsin2004" target="_blank" rel="noopener noreferrer">
          <p className="p-2 bg-white rounded-full">
            <FaLinkedin className="text-2xl text-blue-600"></FaLinkedin>
          </p>
          </a>
          <a href="https://www.linkedin.com/in/md-mahsin-mia" target="_blank" rel="noopener noreferrer">
          <p className="p-2 bg-white rounded-full">
            <FaGithub className="text-2xl "></FaGithub>
          </p>
          </a>
        </div>
      </div>
      <div className="bg-[#676767] text-center text-white py-3">
        <h1>© Md Mahsin Mia 2023</h1>
      </div>
    </div>
  );
};

export default Footer;
