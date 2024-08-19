import './App.css';
import Hero from './components/local/hero';
import MobileApp from './components/local/mobileApp';
import Nav from './components/local/nav';
import SectionOne from './components/local/sectionOne';
import SectionTwo from './components/local/sectionTwo';

function App() {
  return (
    <div>
      <div className='container max-md:px-5'>
        <Nav />
      </div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <div>
        <MobileApp />
      </div>
    </div>
  );
}

export default App;
