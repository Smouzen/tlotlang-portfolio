import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Contacts from "./components/Contacts.jsx";
import Resume from "./components/Resume.jsx"
function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Home />

        <About />
        <Experience />
        <Resume /> 
        <Contacts />
        <SocialLinks />
      </main>
    </div>
  );
}

export default App;
