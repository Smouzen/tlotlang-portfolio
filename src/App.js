import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";
import Clients from "./components/Clients.jsx";
import Contacts from "./components/Contacts.jsx";
import Services from "./components/Services.jsx";
import { useState } from "react";
import ITsupport from "./components/ITsupport.jsx";
import Telcomm from "./components/Telcomm.jsx";

import Partners from "./components/Partners.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode && "dark"}>
      <NavBar className={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white dark:bg-black text-teal-900 dark:text-gray-300">
      
        <Home />

        <About />
        <Telcomm />
        <ITsupport />
        <Services />
        <Clients />
        <Partners />
        <Contacts />
        <SocialLinks />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
