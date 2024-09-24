import Nav from '@/components/local/nav';
import HeroImg from '@/assets/img/speaker-hero.png';
import speaker1 from '@/assets/img/Speaker1.png';
import speaker2 from '@/assets/img/speaker2.png';
import speaker3 from '@/assets/img/speaker3.png';
import speaker4 from '@/assets/img/speaker4.png';
import speaker5 from '@/assets/img/speaker5.png';
// import speaker6 from '@/assets/img/speaker6.png';
import speaker7 from '@/assets/img/speaker7.png';
import speaker8 from '@/assets/img/speaker8.png';
import speaker9 from '@/assets/img/speaker9.png';
import master1 from '@/assets/img/master1.png';
import master2 from '@/assets/img/master2.png';
import master3 from '@/assets/img/master3.png';
import master4 from '@/assets/img/master5.png';
import Guest from '@/assets/img/guest.png';
import Guest1 from '@/assets/img/guest1.png';
import Guest2 from '@/assets/img/guest2.png';
import Guest3 from '@/assets/img/guest3.png';
import Guest4 from '@/assets/img/guest4.png';
import { useEffect, useState } from 'react';
import MobileApp from '@/components/local/mobileApp';
import Footer from '@/components/local/footer';
import { ArrowRight } from '@/assets/icons';

const Speakers = () => {
  const whatToLookForwardItems = [
    {
      title: 'Mohammed Jega',
      position: 'Director, Vogue Pay',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: speaker1
    },
    {
      title: 'Dr Gbonjubolaabiri Abiri',
      position: 'CEO, Redi-Med Services',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: speaker2
    },
    {
      title: 'Abegunade Olamilekan',
      position: 'Comedian',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: speaker3
    },
    {
      title: 'Bayo Omoboriowo',
      position: 'Photographer',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: speaker4
    },
    {
      title: 'Kiki Osinbajo',
      position: 'CEO, Ciar',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: speaker5
    },
    // {
    //   title: 'Niyi Fagbemi',
    //   position: 'Travel Film Maker',
    //   description:
    //     'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
    //   image: speaker6
    // },
    {
      title: 'Adenrele Sonariwo',
      position: 'Entrepreneur and Art curator',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: speaker7
    },
    {
      title: 'Rahaman Abiola',
      position: 'Editor-in-Chief - Legit.ng',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: speaker8
    },
    {
      title: 'Niyi Fagbemi',
      position: 'Travel Film Maker',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: speaker9
    }
  ];

  const Master = [
    {
      title: 'Omolara Dada',
      position: 'Growth Lead, Anchor',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: master1
    },
    {
      title: 'Sodiq Akinjobi',
      position: 'CEO, Grazac',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: master2
    },
    {
      title: 'Kutaje O. Joseph',
      position: 'CEO, Grazac',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: master3
    },
    {
      title: 'Ibiniyi Obikoya',
      position: 'Tech Lead, Korapay',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: master4
    }
  ];

  const [showNav, setShowNav] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showModal] = useState<number | null>(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setShowNav(currentScrollPos > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation and Hero Section */}
      <div className='h-screen'>
        <div
          className={`bg-white w-full max-md:px-5 fixed ${showNav ? 'top-0' : '-top-20'} z-50
          transition-all duration-200 ease-linear`}
        >
          <Nav />
        </div>
        <div
          className={`${showNav ? 'scale-90' : 'scale-100'} transition-all duration-200 ease-linear`}
        >
          <div
            className='w-full h-screen bg-red-50'
            style={{
              backgroundImage: `url(${HeroImg})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          ></div>

          <div className='md:w-[55%] md:leading-[64px] absolute bottom-16 md:left-28'>
            <h1 className='md:text-[60px] platypi-gf md:leading-[64px] text-white font-semibold text-4xl p-6'>
              <span className='font-normal italic'>Past Speakers:</span> Leading Digital
              Transformation
            </h1>
            <p className='text-[#B0C5D6] inter-gf text-base leading-6 pl-6'>
              Meet the speakers who discussed about diversities and culture in digital
              transformation
            </p>
          </div>
        </div>
      </div>

      {/* Speaker Cards Section */}
      <section className={`py-10 ${showModal !== null ? 'bg-[#101611B2] opacity-7' : ''}`}>
        <div
          className={`m-auto w-[90%] lg:w-[948px] sm:grid md:grid-cols-3 sm:grid-cols-2 grid-rows-1  justify-between gap-4 md:flex-row sm:py-[160px] ${showModal ? '' : ''}`}
        >
          {whatToLookForwardItems.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl h-[360px] lg:w-[300px] w-auto overflow-hidden sm:mb-0 mb-[16px] cursor-pointer transition-transform transform ${showModal === index ? 'w-[475px] h-[456px] absolute z-30 bg-white pt-[56px] ' : 'h-[360px] w-[300px]'}`}
              style={{
                backgroundImage: showModal === index ? 'none' : `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`h-[200px] w-[447px] rounded-md mx-auto ${showModal === index ? 'block' : 'hidden'}`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div
                className={`absolute bottom-0 w-full p-6 ${showModal === index ? ' ' : 'bg-[#101611]'} text-white transition-all duration-300 ease-in-out ${
                  hoveredIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-full'
                }`}
              >
                <h1 className='font-semibold text-base text-[#F2F9FF] mb-2'>{item.title}</h1>
                <p className='text-sm leading-6 text-[#B0C5D6]'>{item.position}</p>
                <p
                  className={`text-sm leading-6 text-[#B0C5D6] ${showModal === index ? 'block' : 'hidden'} `}
                >
                  {item.description}
                </p>
                {/* <span
                  className={`flex items-center text-[12px] leading-6 text-[#ACFAAC]  ${showModal === index ? "hidden" : "block"}`}
                  onClick={() => setShowModal(index)}
                >
                  Read More
                  <ArrowRightGreen />
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='md:py-[100px] m-auto lg:ml-[160px]'>
        <div className='xl:w-[505px] xl:mx-0  mx-auto w-[90%]  md:mb-[80px] mb-[40px]'>
          <h1 className=' md:w-[358px] text-[34px] platypi-gf leading-10 font-semibold text-[#23323F] md:text-4xl platypi-gf'>
            Our numbers in the last 4 years.
          </h1>
          <p className='text-base font-normal tracking-[0.2px] text-[#627587] my-5'>
            It all started with a dream in 2019 to bring together startup entrepreneurs, talents,
            creatives and founders with a strong focus to promote youth empowerment, tech
            entrepreneurship and social innovation.
          </p>
          <a href='#' target='_blank'>
            <button className='bg-[#178A2D] font-semibold h-10 min-w-[190px] rounded-[2px] flex justify-center items-center tracking-[0.2px] text-[#23323F]'>
              <span className='text-sm text-[#ffff] font-semibold'>View past Speakers</span>
              <ArrowRight fill='#ffff ' />
            </button>
          </a>
        </div>
        <div>
          <div className=' '>
            <div className='xl:w-[855px] xl:m-0 w-[90%] sm:block hidden m-auto'>
              <img src={Guest} alt='one' />
            </div>
            <div className='flex flex-col justify-center sm:hidden items-center gap-[19px] w-[90%] mx-auto'>
              <div className='w-auto'>
                <img src={Guest1} alt='one' />
              </div>
              <div className='w-auto'>
                <img src={Guest2} alt='one' />
              </div>
              <div className='w-auto'>
                <img src={Guest3} alt='one' />
              </div>
              <div className='w-auto'>
                <img src={Guest4} alt='one' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={``}>
        <div className=' mx-auto flex flex-col gap-4 w-full max-w-[335px] md:max-w-[558px] md:mb-[80px] mb-[40px] '>
          <h3 className='platypi-gf text-center text-[#23323F] font-semibold text-2xl leading-[34px] tracking-[-0.5px] md:text-[40px] md:leading-[48px] md:tracking-[-1px]  changeFont-wh213o '>
            Masterclass Trainers
          </h3>
          <p className='text-center text-[#627587] text-sm leading-[22px] tracking-[0.2px] font-normal md:text-base  '>
            Meet our masterclass trainers who will help us train young individuals at ODS. It’s free
            and we don’t charge anyone for this.
          </p>
        </div>
        <div
          className={`md:flex flex-row justify-center  items-center gap-[19px] md:w-[80%] w-{90%} mx-auto`}
        >
          {Master.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl h-[360px] md:w-[300px] w-[90%] md:m-0 mb-[16px] mx-auto  overflow-hidden cursor-pointer transition-transform transform ${showModal === index ? 'w-[475px] h-[456px] absolute z-30 bg-white pt-[56px] ' : 'h-[360px] w-[300px]'}`}
              style={{
                backgroundImage: showModal === index ? 'none' : `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`h-[200px] w-[447px] rounded-md mx-auto ${showModal === index ? 'block' : 'hidden'}`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div
                className={`absolute bottom-0 w-full p-6 ${showModal === index ? ' ' : 'bg-[#101611]'} text-white transition-all duration-300 ease-in-out ${
                  hoveredIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-full'
                }`}
              >
                <h1 className='font-semibold text-base text-[#F2F9FF] mb-2'>{item.title}</h1>
                <p className='text-sm leading-6 text-[#B0C5D6]'>{item.position}</p>
                <p
                  className={`text-sm leading-6 text-[#B0C5D6] ${showModal === index ? 'block' : 'hidden'} `}
                >
                  {item.description}
                </p>
                {/* <span
                  className={`flex items-center text-[12px] leading-6 text-[#ACFAAC]  ${showModal === index ? "hidden" : "block"}`}
                  onClick={() => setShowModal(index)}
                >
                  Read More
                  <ArrowRightLightGreen />
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Speakers;
