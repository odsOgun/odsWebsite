import Footer from '@/components/local/footer';
import Hero from '@/components/local/hero';
import MobileApp from '@/components/local/mobileApp';
import SectionOne from '@/components/local/sectionOne';
import SectionTwo from '@/components/local/sectionTwo';
import Footer from '@/components/local/footer';
import Merch from '@/components/local/merch';

const Home = () => {
  return (
    <div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <div>
        <MobileApp />
      </div>
      <div>
        <Merch />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
