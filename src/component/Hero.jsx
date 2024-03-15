import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-[#F2F2F2] text-[#1F2937]" id="hero">
      <div className="max-w-6xl mx-auto px-8 py-16 lg:py-0 lg:-mt-8">
        <div className="flex flex-col gap-9 lg:gap-12 items-center justify-center lg:min-h-screen ">
          <div className="">
            <div className="flex flex-col text-center justify-center items-center">
              <p className="lg:mb-2 text-lg lg:text-2xl text-[#495057]">
                Hi! I am
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                MD MAHSIN MIA
              </h1>
              <h2 className="text-xl text-[#495057] lg:text-3xl font-semibold pb-3 lg:py-3">
                Frontend Developer
              </h2>
              <a
                href="/Md_Mahsin_Mia-Resume_final.pdf"
                download="Md_Mahsin_Mia-Resume_final.pdf"
              >
                <button className="btn bg-white  border-gray-300">
                  Resume <FaDownload />
                </button>
              </a>
            </div>
          </div>
          <div className="">
            <img
              src="https://i.postimg.cc/hPt2mscT/Mahsin-banner.png"
              className="md:w-[500px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
