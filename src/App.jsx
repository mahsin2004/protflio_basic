import About from "./component/About"
import Contact from "./component/Contact"
import EducationSkills from "./component/EducationSkills"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import MyProjects from "./component/MyProjects"
import Navbar from "./component/Navbar"


function App() {

  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <MyProjects></MyProjects>
      <EducationSkills></EducationSkills>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
