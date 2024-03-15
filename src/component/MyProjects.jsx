const MyProjects = () => {
  return (
    <div className="max-w-6xl min-h-screen mx-auto py-16 px-8 bg-white" id="projects">
      <h1 className="text-4xl font-bold pb-8 text-[#495057]">My Projects</h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="drop-shadow-md  hover:drop-shadow-xl transition">
          <div className="bg-base-100 rounded-md">
            <figure>
              <img
                src="https://i.postimg.cc/v8nMtX0m/job.png"
                alt="product"
                className="w-full h-[160px]  rounded-lg border-b-2 border-t-2"
              />
            </figure>
            <div className="px-10 py-8 space-y-2 bg-white">
              <div className="text-gray-700">
                <span className="">
                  <span className="font-medium">Project Name:</span> Job
                  Searching Platform
                </span>
              </div>
              <div className="text-gray-700">
                <span className="">
                  <span className="font-medium">Live Link:</span>{" "}
                  <a
                    className="text-[#0077b6]"
                    href="https://jobs-platform-client.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </span>
              </div>
              <div className="text-gray-700 bg-white">
                <span className="">
                  <span className="font-medium">Code Link:</span>{" "}
                  <a
                    className="text-[#0077b6]"
                    href="https://github.com/mahsin2004/jobs-platform-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-shadow-md  hover:drop-shadow-xl transition">
          <div className="bg-base-100 rounded-md">
            <figure>
              <img
                src="https://i.postimg.cc/VLLFqZRy/digonostic.png"
                alt="product"
                className="w-full h-[160px] rounded-lg border-b-2 border-t-2"
              />
            </figure>
            <div className="px-10 py-8 space-y-2 bg-white">
              <div className="text-gray-700">
                <span className="">
                  <span className="font-medium">Project Name:</span> Diagnostic
                  Center Management System
                </span>
              </div>
              <div className="text-gray-700">
                <span className="">
                  <span className="font-medium">Live Link:</span>{" "}
                  <a
                    className="text-[#0077b6]"
                    href="https://b8a12-server-client.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </span>
              </div>
              <div className="text-gray-700">
                <span className="">
                  <span className="font-medium">Code Link:</span>{" "}
                  <a
                    className="text-[#0077b6]"
                    href="https://github.com/mahsin2004/diagonostic-center-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-shadow-md  hover:drop-shadow-xl transition">
          <div className="bg-base-100 rounded-md">
            <figure>
              <img
                src="https://i.postimg.cc/LXJJ4fkb/brand.png"
                alt="product"
                className="w-full h-[160px] rounded-lg border-b-2 border-t-2"
              />
            </figure>
            <div className="px-10 py-8 space-y-2 bg-white">
              <div className="text-gray-700">
                <span className="">
                  <span className="font-medium">Project Name:</span> Cars
                  Collection Shop
                </span>
              </div>
              <div className="text-gray-700">
                <span className="">
                  <span className="font-medium">Live Link:</span>{" "}
                  <a
                    className="text-[#0077b6]"
                    href="https://brand-shop-client-1.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </span>
              </div>
              <div className="text-gray-700">
                <span className="">
                  <span className="font-medium">Code Link:</span>{" "}
                  <a
                    className="text-[#0077b6]"
                    href="https://github.com/mahsin2004/brand-shop-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
