import GlobalStyles from './styled-components/GlobalStyles';
import HeroSection from './components/hero';
import Projects from './components/projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <Projects />
    </>
  );
}

export default App;
