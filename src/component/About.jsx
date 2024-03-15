const About = () => {
  return (
    <div
      className="py-10 max-w-6xl mx-auto px-8 min-h-screen flex justify-center items-center lg:py-0 "
      id="about"
    >
      <div className="lg:-mt-14">
        <h1 className="text-4xl font-bold pb-8 text-[#495057]">About Me</h1>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center ">
          <div className="flex-1">
            <img
              className="rounded-xl"
              src="https://i.postimg.cc/rmNFMkbT/banner22.gif"
            />
          </div>
          <div className="flex-1 space-y-7">
            <p className="text-2xl lg:text-3xl font-semibold text-[#1F2937]">
              I am Md Mahsin Mia
            </p>
            <p className="text-xl my-4 text-[#495057]">
              A proficient Frontend Developer skilled in translating design
              concepts into seamless, high-performance user interfaces using
              React.js. Passionate about crafting captivating web experiences
              that resonate with users.
            </p>
            <ul className="text-xl text-[#495057] my-2 space-y-1">
              <li>
                <span className="font-semibold">Full Name:</span> Md Mahsin Mia
              </li>
              <li>
                <span className="font-semibold">Age:</span> 20 Years
              </li>
              <li>
                <span className="font-semibold">Nationality:</span> Bangladesi
              </li>
              <li>
                <span className="font-semibold">Languages:</span> Bangla,
                English
              </li>
              <li>
                <span className="font-semibold">Address:</span> Brahmanbaria,
                Bangladesh
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
