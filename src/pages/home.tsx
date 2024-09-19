import Hero from '@/components/local/hero';
import MobileApp from '@/components/local/mobileApp';
import Nav from '@/components/local/nav';
import SectionOne from '@/components/local/sectionOne';
import SectionTwo from '@/components/local/sectionTwo';
import Footer from '@/components/local/footer';

function Home() {
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
