
import './App.scss'
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import HomePage from "./sections/HomePage";
import Education from "./sections/Education";
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from "./sections/Footer";
import {useEffect, useState} from "react";

export default function App() {

  const [loading,setLoading] = useState(true)
    useEffect(() => {
      setTimeout(()=> {
        setLoading(false)
      },2000)
    }, []);

  if(loading) return <div className="loading">
  </div>;

  return (
      <>
        <Navbar />
      <div className="container">
        <HomePage />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

      </div>
    </>
  )
}

