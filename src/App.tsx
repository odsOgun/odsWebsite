import './App.css';
import Hero from './components/local/hero';
import Nav from './components/local/nav';
import SectionOne from './components/local/sectionOne';
import SectionTwo from './components/local/sectionTwo';

function App() {
  return (
    <div>
      <div className='container'>
        <Nav />
      </div>
      <Hero />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default App;
