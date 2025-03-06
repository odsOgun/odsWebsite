import Nav from '@/components/local/nav';
import HeroImg from '@/assets/img/past-speaker-hero.png';
import olubunmi from '@/assets/img/past-speaker/olubunmi.png';
import harrison from '@/assets/img//past-speaker/harrison.png';
import ibikun from '@/assets/img/past-speaker/ibikun.png';
import Joshua from '@/assets/img//past-speaker/joshua.png';
import odunayo from '@/assets/img/past-speaker/odunayo.png';
import bayo from '@/assets/img/past-speaker/bayo.png';
import tolulope from '@/assets/img/past-speaker/Tolulope.png';
import rahaman from '@/assets/img/past-speaker/rahaman.png';
import joel from '@/assets/img/past-speaker/joel.png';
import lanre from '@/assets/img/past-speaker/lanre.png';
import ilori from '@/assets/img/past-speaker/ilori.png';
import Edidiong from '@/assets/img/past-speaker/Edidiong.png';
import bolaji from '@/assets/img/past-speaker/bolaji.png';
import oluwajoba from '@/assets/img/past-speaker/Oluwajoba.png';
import mohammed from '@/assets/img/past-speaker/mohammed.png';
import freeman from '@/assets/img/past-speaker/freeman.png';
import amedu from '@/assets/img/past-speaker/amedu.png';
import abel from '@/assets/img/past-speaker/abel.png';
import blessing from '@/assets/img/past-speaker/blessing.png';
import onyeka from '@/assets/img/past-speaker/onyeka.png';
import aderenle from '@/assets/img/past-speaker/aderenle.png';
import daniel from '@/assets/img/past-speaker/daniel.png';
import raheem from '@/assets/img/past-speaker/raheem.png';
import owolabi from '@/assets/img/past-speaker/owolabi.png';
import oluwatobi from '@/assets/img/past-speaker/oluwatobi.png';
import oyeniyi from '@/assets/img/past-speaker/oyeniyi.png';
import falola from '@/assets/img/past-speaker/falola.png';
import justice from '@/assets/img/past-speaker/justice.jpeg';


import { useEffect, useRef, useState } from 'react';
import MobileApp from '@/components/local/mobileApp';
import Footer from '@/components/local/footer';
import { ArrowRight } from '@/assets/icons';
import { ArrowLeft } from '@/assets/icons';

const PastSpeakers = () => {
  const Ods23 = [
    {
      title: 'Olubunmi Fabanwo',
      position: 'Affiliate Program Manager',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: olubunmi
    },
    {
      title: 'Harrison Obiefule',
      position: 'Co-lead , superteamNG',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: harrison
    },
    {
      title: 'Ibikun Adeleke',
      position: 'Chief Investment officer , Emergence Capital',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: ibikun
    },
    {
      title: 'Joshua Chibueze',
      position: 'Co-founder, piggyvest',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: Joshua
    },
    {
      title: 'Raheem Yusuf',
      position: 'Vice-president, T & I AFEX. ',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: raheem
    },

    {
      title: 'Justice Eziefule',
      // position: 'SA to governor of Ogun State ,2015- 2023',
      position: 'Co-founder, Metastable Labs',

      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: justice
    },
    {
      title: 'Odunayo Eweniyi',
      position: 'Co-founder, piggyvest',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: odunayo
    },
    {
      title: 'Bayo Omoboriowo',
      position: 'Photographer to the former president.',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: bayo
    }
  ];

  const [selectedYear, setSelectedYear] = useState(0);

  const Ods22 = [
    {
      title: 'Tolulope Famakinwa',
      position: 'Founder of mauzu Africa',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: tolulope
    },
    {
      title: ' Ifeoluwa Oyeniyi',
      position: 'Senior Product Manager, Vigipay ',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: oyeniyi
    },
    {
      title: 'Rahaman Abiola',
      position: 'Head of News, Legit.ng',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: rahaman
    },
    {
      title: 'Joel Ogunsola',
      position: ' CEO Prunedge ',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: joel
    },
    {
      title: 'Lanre Ogundipe',
      position: 'CEO pave, Founder imperial EdTech',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: lanre
    },
    {
      title: 'Ilori julius',
      position: 'CEO, Learners Corner Edu. Tech-hub',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: ilori
    },
    {
      title: 'Edidiong Ekong',
      position: 'Marketing Executive Specialist',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: Edidiong
    },
    {
      title: 'Oluwaseyi Falola',
      position: 'Senior Product Designer, Lazerpay',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: falola
    },
    {
      title: 'Bolaji Ajibare',
      position: 'Founder, The social media Oga',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: bolaji
    },
    {
      title: 'Oluwajoba Olabo',
      position: 'Co-founder Nest innovation Techpark',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: oluwajoba
    }
  ];
  const Ods21 = [
    {
      title: 'Mohammed Jega',
      position: 'Co founder, Domineum',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: mohammed
    },
    {
      title: 'Freeman Osonuga',
      position: 'CEO, AdLoyalthy BN',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: freeman
    },
    {
      title: 'Amedu O. Adebayo',
      position: 'CEO Ckrowd LLC (USA).',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: amedu
    },
    {
      title: 'Abel Adejoh Omachi',
      position: 'Co-founder & CEO pettysave.',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: abel
    },

    {
      title: 'Blessing Abeng',
      position: 'DOC, ingressive for Good',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: blessing
    },
    {
      title: 'Onyeka Akumah',
      position: 'Foundry and CEO farmcrowdy',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: onyeka
    },
    {
      title: 'Aderenle Sonarinwo',
      position: 'Founder, Rele Art Gallery',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: aderenle
    },
    {
      title: 'Daniel Adeyemi',
      position: 'Senior journalist at Techcoba',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: daniel
    }
  ];
  const Ods20 = [
    {
      title: 'Blessing Abeng',
      position: 'Einsteinette limited',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: blessing
    },
    {
      title: 'Oluwatobi Owolabi',
      position: 'Lead, GBG Abeokuta',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: owolabi
    },
    {
      title: 'Oluwatobi Akinpelu',
      position: 'Software engineer farmcrowdy',
      description:
        'I’m a highly motivated and solution oriented software engineer and tech entrepreneur. I use my skills and knowledge to develop and contribute innovative ideas. I am interested in Edtech, Startup Ecosytem, Investment, Blockchain, Artificial Intelligence, Machine Learning and Decentralized Finance.',
      image: oluwatobi
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

  const handleClick = (index: number): void => {
    setSelectedYear(index);
  };

  // Define the types for state variables
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage: number = 8; // Define how many items per page
  const sectionRef = useRef<HTMLDivElement | null>(null); // Ref for the section to scroll to
  const visibleItems = Ods22.slice(currentIndex, currentIndex + itemsPerPage);

  // Handle the 'Previous' button click
  const handlePrev = (): void => {
    if (currentIndex - itemsPerPage >= 0 && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };
  // Handle the 'Next' button click
  const handleNext = (): void => {
    const totalItems: number = 10; // Example total items
    if (currentIndex + itemsPerPage < totalItems && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };
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
          className={` ${showNav ? 'scale-90' : 'scale-100'} transition-all duration-200 ease-linear`}
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
              <span className='font-normal italic'>Past Speakers:</span>
            </h1>
            <p className='text-[#B0C5D6] inter-gf text-base leading-6 pl-6'>
              See the line-up of amazing speakers we have had graced Ogun digital summit over the
              years
            </p>
          </div>
        </div>
      </div>
      <section
        className={`m-auto w-[90%] lg:w-[1280px] py-10 sm:py-[160px] ${showModal !== null ? 'bg-[#101611B2] opacity-7' : ''}`}
      >
        <div className=' max-w-[335px] md:max-w-[669px] mb-14 md:mb-20 '>
          <h3 className='platypi-gf text-center text-[#23323F] md:mb-[16px] font-semibold text-2xl leading-[40px] tracking-[-0.5px] md:text-[34px]  md:text-left  '>
            Our past speakers in the last 4 years.
          </h3>
          <p className='text-center  text-[#627587] text-sm leading-[24px] tracking-[0.2px] font-normal md:text-base md:text-left '>
            For the past 4 years, we have had amazing array of speakers who have have graced Ogun
            digital summit over the years
          </p>
        </div>
        <div className='md:w-[668px]  h-[44px] bg-[#F7F8F8] rounded-[10px] flex justify-between items-center mb-10 md:mb-20 p-[2px] '>
          <button
            className='rounded-[10px] sm:text-sm text-xs font-semibold w-[166px] py-2'
            onClick={() => handleClick(0)}
            style={{
              backgroundColor: selectedYear === 0 ? '#FA6C20' : 'transparent',
              color: selectedYear === 0 ? '#ffff' : '#5A5A5A'
            }}
          >
            ODS 2023
          </button>
          <button
            className='rounded-[10px] sm:text-sm text-xs font-semibold w-[166px] py-2'
            onClick={() => handleClick(1)}
            style={{
              backgroundColor: selectedYear === 1 ? '#FA6C20' : 'transparent',
              color: selectedYear === 1 ? '#ffff' : '#5A5A5A'
            }}
          >
            ODS 2022
          </button>
          <button
            className='rounded-[10px] sm:text-sm text-xs font-semibold w-[166px] py-2'
            onClick={() => handleClick(2)}
            style={{
              backgroundColor: selectedYear === 2 ? '#FA6C20' : 'transparent',
              color: selectedYear === 2 ? '#ffff' : '#5A5A5A'
            }}
          >
            ODS 2021
          </button>
          <button
            className='rounded-[10px] sm:text-sm text-xs font-semibold w-[166px] py-2'
            onClick={() => handleClick(3)}
            style={{
              backgroundColor: selectedYear === 3 ? '#FA6C20' : 'transparent',
              color: selectedYear === 3 ? '#ffff' : '#5A5A5A'
            }}
          >
            ODS 2020
          </button>
        </div>
        {selectedYear === 0 && (
          <div
            className={`m-auto w-[90%] lg:w-[1280px] sm:grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-rows-1  justify-between gap-[24px] md:flex-row  transition-all duration-300 translate-x-  ease-in-out ${showModal ? '' : ''}`}
          >
            {Ods23.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl h-[360px] lg:max-w-[300px] w-auto overflow-hidden sm:mb-0 mb-[16px] cursor-pointer transition-transform transform ${showModal === index ? 'w-[475px] h-[456px] absolute z-30 bg-white pt-[56px] ' : 'h-[360px] w-[300px]'}`}
                style={{
                  backgroundImage: showModal === index ? 'none' : `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`h-[200px] w-[447px] rounded-md mx-auto   ${showModal === index ? 'block' : 'hidden'}`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                <div
                  className={`absolute bottom-0 w-full px-4 py-6 ${showModal === index ? ' ' : 'bg-[#101611]'} text-white transition-all duration-300 ease-in-out ${
                    hoveredIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}
                >
                  <h1 className='font-semibold text-base text-[#F2F9FF] mb-2'>{item.title}</h1>
                  <p className='text-[12px] leading-6 text-[#B0C5D6]'>{item.position}</p>
                  <p
                    className={`text-sm leading-6 text-[#B0C5D6] ${showModal === index ? 'block' : 'hidden'} `}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <>
          {selectedYear === 1 && (
            <div
              ref={sectionRef}
              className={`m-auto w-[90%] lg:w-[1280px] sm:grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-rows-1  justify-between gap-[24px] md:flex-row  transition-all duration-300 translate-x-  ease-in-out ${showModal ? '' : ''}`}
            >
              {visibleItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl h-[360px] lg:max-w-[300px] w-auto overflow-hidden sm:mb-0 mb-[16px] cursor-pointer transition-transform transform ${showModal === index ? 'w-[475px] h-[456px] absolute z-30 bg-white pt-[56px] ' : 'h-[360px] w-[300px]'}`}
                  style={{
                    backgroundImage: showModal === index ? 'none' : `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`h-[200px] w-[447px] rounded-md mx-auto   ${showModal === index ? 'block' : 'hidden'}`}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  ></div>
                  <div
                    className={`absolute bottom-0 w-full px-4 py-6 ${showModal === index ? ' ' : 'bg-[#101611]'} text-white transition-all duration-300 ease-in-out ${
                      hoveredIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                  >
                    <h1 className='font-semibold text-base text-[#F2F9FF] mb-2'>{item.title}</h1>
                    <p className='text-[12px] leading-6 text-[#B0C5D6]'>{item.position}</p>
                    <p
                      className={`text-sm leading-6 text-[#B0C5D6] ${showModal === index ? 'block' : 'hidden'} `}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className='flex justify-center items-center gap-6 mt-10  sm:mt-[64px]'>
            <span
              className={`rounded-full flex justify-center items-center bg-[#CDD5DC] h-[56px] w-[56px] transform -translate-y-1/2 cursor-pointer${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handlePrev}
            >
              <ArrowLeft fill='#2B4155' />
            </span>
            <span
              className={`rounded-full bg-[#CDD5DC] flex justify-center items-center h-[56px] w-[56px] transform -translate-y-1/2 cursor-pointer ${
                currentIndex + itemsPerPage >= visibleItems.length
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              onClick={handleNext}
            >
              <ArrowRight fill='#2B4155' />
            </span>
          </div>
        </>
        <>
          {selectedYear === 2 && (
            <div
              className={`m-auto w-[90%] lg:w-[1280px] sm:grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-rows-1  justify-between gap-[24px] md:flex-row  transition-all duration-300 translate-x-  ease-in-out ${showModal ? '' : ''}`}
            >
              {Ods21.map((item, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl h-[360px] lg:max-w-[300px] w-auto overflow-hidden sm:mb-0 mb-[16px] cursor-pointer transition-transform transform ${showModal === index ? 'w-[475px] h-[456px] absolute z-30 bg-white pt-[56px] ' : 'h-[360px] w-[300px]'}`}
                  style={{
                    backgroundImage: showModal === index ? 'none' : `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`h-[200px] w-[447px] rounded-md mx-auto   ${showModal === index ? 'block' : 'hidden'}`}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  ></div>
                  <div
                    className={`absolute bottom-0 w-full px-4 py-6 ${showModal === index ? ' ' : 'bg-[#101611]'} text-white transition-all duration-300 ease-in-out ${
                      hoveredIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                  >
                    <h1 className='font-semibold text-base text-[#F2F9FF] mb-2'>{item.title}</h1>
                    <p className='text-[12px] leading-6 text-[#B0C5D6]'>{item.position}</p>
                    <p
                      className={`text-sm leading-6 text-[#B0C5D6] ${showModal === index ? 'block' : 'hidden'} `}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
        <>
          {selectedYear === 3 && (
            <div
              className={`m-auto w-[90%] lg:w-[1280px] sm:grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-rows-1  justify-between gap-[24px] md:flex-row  transition-all duration-300 translate-x-  ease-in-out ${showModal ? '' : ''}`}
            >
              {Ods20.map((item, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl h-[360px] lg:max-w-[300px] w-auto overflow-hidden sm:mb-0 mb-[16px] cursor-pointer transition-transform transform ${showModal === index ? 'w-[475px] h-[456px] absolute z-30 bg-white pt-[56px] ' : 'h-[360px] w-[300px]'}`}
                  style={{
                    backgroundImage: showModal === index ? 'none' : `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`h-[200px] w-[447px] rounded-md mx-auto   ${showModal === index ? 'block' : 'hidden'}`}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  ></div>
                  <div
                    className={`absolute bottom-0 w-full px-4 py-6 ${showModal === index ? ' ' : 'bg-[#101611]'} text-white transition-all duration-300 ease-in-out ${
                      hoveredIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                  >
                    <h1 className='font-semibold text-base text-[#F2F9FF] mb-2'>{item.title}</h1>
                    <p className='text-[12px] leading-6 text-[#B0C5D6]'>{item.position}</p>
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
          )}
        </>
      </section>

      <MobileApp />
      <Footer />
    </div>
  );
};

export default PastSpeakers;
