const EducationSkills = () => {
  return (
    <div className=" bg-[#f6fff8] py-16" id="ed&To">
      <div className="md:flex gap-16 max-w-6xl mx-auto px-8 text-[#495057] justify-center">
        <div className="flex-1 mb-5 lg:mb-0">
          <h1 className="text-4xl font-bold pb-6">Experiences</h1>
          <p className="text-xl font-semibold">
            I am actively cultivating my skills and knowledge in the
            ever-evolving field of web development.
          </p>

          <p className="text-xl font-semibold mt-6" >Foundational Concepts:</p>
          <ul className="text-xl mt-2 space-y-3">
            <li>
              1. Grasped fundamental concepts such as HTML, CSS, and JavaScript to
              establish a strong foundation in web development.
            </li>
            <li>
              2. Engaged in hands-on projects and exercises to apply theoretical
              knowledge to practical scenarios.
            </li>
          </ul>

          <p className="text-xl font-semibold mt-6" >Introduction to Responsive Design:</p>
          <ul className="text-xl mt-2 space-y-3">
            <li>
              1. Currently navigating the complexities of popular JavaScript frameworks like React.js, gaining hands-on experience in building dynamic and interactive user interfaces.
            </li>
            <li>
              2. Implemented media queries and flexible grid layouts to create responsive and visually appealing user interfaces.
            </li>
          </ul>

          <p className="text-xl font-semibold mt-6" >JavaScript Frameworks :</p>
          <ul className="text-xl mt-2 space-y-3">
            <li>
              1. Delved into the principles of responsive web design, ensuring websites are accessible and user-friendly across various devices.
            </li>
            <li>
              2. Collaborating with fellow learners on group projects to apply framework concepts to real-world scenarios.
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold pb-6">Education Info</h1>
          <p className="text-xl font-semibold">
            Bachelor of Science in Computer Science and Engineering
          </p>
          <ul className="text-xl mt-2">
            <li>University: University of Brahmanbaria</li>
            <li>Degree: Bachelor of Science</li>
            <li>Major: Computer Science and Engineering</li>
            <li>Location: Brahmanbaria</li>
            <li>Graduation Year: 2026</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationSkills;
