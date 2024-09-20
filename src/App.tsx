import Footer from './components/local/footer';
import Nav from './components/local/nav';

function App({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='container max-md:px-5'>
        <Nav />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
