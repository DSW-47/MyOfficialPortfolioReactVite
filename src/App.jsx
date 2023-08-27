import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <>
        <NavBar />
      <div className='mx-auto px-6 md:px-14 lg:px-20'>        
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App
