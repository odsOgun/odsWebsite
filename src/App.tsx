import './App.css';
import Hero from './components/local/hero';
import Nav from './components/local/nav';

function App() {
  return (
    <div>
      <div className='container'>
        <Nav />
      </div>
      <Hero />
    </div>
  );
}

export default App;
