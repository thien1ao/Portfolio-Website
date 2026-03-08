import { Hero } from "./pages/Hero.jsx";
import { About } from "./pages/About.jsx";
import { Projects } from "./pages/Projects.jsx";
import { Navbar } from "./components/Navbar.jsx";

export default function App() {
  return (
    <>
      <img className="absolute top-0 right-0 opacity-100 -z-10" 
      src="/gradient.png" alt="Gradient.img" />

    <Navbar />
    <Hero />
    <About />
    <Projects />
    </>
  );
}
