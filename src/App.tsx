import './App.css';
import Hero from './components/local/hero';
import Nav from './components/local/nav';

function App() {
  return (
    <div>
      <div className='container max-md:px-5'>
        <Nav />
      </div>
      <Hero />
    </div>
  );
}

export default App;
