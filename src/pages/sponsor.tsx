import { useState } from 'react';
import speaker from '../assets/img/speaker.png';
import bayo from '../assets/img/bayo.png';
import harrison from '../assets/img/harrison.png';
import ibikun from '../assets/img/ibikun.png';
import joshua from '../assets/img/joshua.png';
import olubunmifabanwo from '../assets/img/olubunmifabanwo.png';
import odunayo from '../assets/img/odunayo.png';
// import smallpastspeakers from '../src/assets/smallpastspeakers.png'
// import pastspeakers from '../src/assets/pastspeakers.png'
// import Speakerscard from '../assets/img/Speakerscard.png'
import mobilespeaker from '../assets/img/mobilespeaker.png';
import MobileApp from '@/components/local/mobileApp';

const Sponsor = () => {
  interface SpeakersData {
    'ODS 2023': string[];
    'ODS 2022': string[];
    'ODS 2021': string[];
  }

  // State to track toggle status
  const [activeYear, setActiveYear] = useState<'ODS 2023' | 'ODS 2022' | 'ODS 2021'>('ODS 2023');

  // Data for the images associated with each year
  const speakersData = {
    'ODS 2023': [olubunmifabanwo, harrison, ibikun],
    'ODS 2022': [joshua, speaker, speaker],
    'ODS 2021': [odunayo, bayo, speaker]
  };

  // List of available years for tabs
  // const years = Object.keys(speakersData);
  const years: Array<keyof SpeakersData> = Object.keys(speakersData) as Array<keyof SpeakersData>;

  // Function to set the active year
  const handleYearClick = (year: keyof SpeakersData) => {
    setActiveYear(year);
  };

  return (
    <div>
      {/* {Hero} */}
      <div className="w-[606px] h-[424px] object-contain  bg-no-repeat bg-[url('src/assets/img/smallpastspeakers.png')]          lg:w-[100%] lg:h-[618px] lg:bg-[url('src/assets/img/pastspeakers.png')] ">
        <h1 className='w-[343px] h-[120px] pl-[16px] pr-[16px] pt-[186px] text-3xl leading-10 tracking-tighter    lg:w-[765px] lg:h-[128px] lg:pt-[389px] lg:ml-[60px] lg:leading-[3.75rem] lg:tracking-wide text-[#F2F9FF] font-semibold lg:text-6xl '>
          <span className='font-light    italic lg:font-normal'>Past Speakers:</span> Leading
          Digital Transformation
        </h1>
        <p className='w-[343px] h-[44px] text-sm pt-[80px] pl-[16px] pr-[16px]    lg:w-[765px] lg:h-[24px] text-[#B0C5D6] lg:pt-[141px] lg:ml-[60px] font-[inter] font-normal lg:text-base leading-6 tracking-wide'>
          Meet the speakers who discussed about diversities and culture in digital transformation{' '}
        </p>
      </div>

      <div>
        <h3 className='w-[218px] h-[68px] font-[Platypi] font-semibold mt-[80px] text-2xl leading-8 ml-[20px]  text-[#23323F] tracking-tighter lg:w-[669px] lg:h-[40px] lg:text-3xl lg:ml-[80px] lg:leading-10'>
          Our past speakers in the last 4 years.
        </h3>
        <p className='w-[335px] h-[110px] font-[inter] font-normal text-sm leading-5 tracking-wide ml-[20px] mt-[8px] text-[#627587] lg:w-[669px] lg:h-[72px] lg:ml-[80px] lg:leading-6 lg:text-base lg:tracking-wide'>
          It all started with a dream in 2019 to bring together startup entrepreneurs, talents,
          creatives and founders with a strong focus to promote youth empowerment, tech
          entrepreneurship and social innovation.
        </p>
      </div>

      {/* {pastspeakers} */}

      <div className='hidden lg:block lg:ml-[80px] lg:mr-[80px] lg:mt-[82px]'>
        {/* Year Buttons */}
        <div className='flex space-x-4 mb-6'>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => handleYearClick(year)}
              className={`${
                activeYear === year ? 'bg-[#FA6C20] text-white' : 'bg-[#F7F8F8] text-[#627587]'
              } pt-2 pr-3 pb-2 pl-2 lg:w-[166px] lg:h-[40px] rounded-lg font-[inter] font-semibold cursor-pointer transition-colors duration-300`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Speaker Cards using Flexbox */}
        <div className='flex flex-wrap justify-between  mt-[80px]'>
          {speakersData[activeYear].map((image, index) => (
            <div key={index} className='w-full lg:w-[30%] mb-8'>
              <img
                src={image}
                alt={`Speaker for ${activeYear}`}
                className='w-[100%] h-[360px] object-cover rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='block lg:hidden'>
        <div className='flex flex-wrap justify-between flex-col gap-[12px] ml-[20px] mr-[20px] object-contain'>
          <div>
            <img src={olubunmifabanwo} alt='Pastspeakers' />
          </div>
          <div>
            <img src={harrison} alt='Pastspeakers' />
          </div>
          <div>
            <img src={ibikun} alt='Pastspeakers' />
          </div>
          <div>
            <img src={joshua} alt='Pastspeakers' />
          </div>
          <div>
            <img src={mobilespeaker} alt='Pastspeakers' />
          </div>
          <div>
            <img src={mobilespeaker} alt='Pastspeakers' />
          </div>
          <div>
            <img src={odunayo} alt='Pastspeakers' />
          </div>
          <div>
            <img src={bayo} alt='Pastspeakers' />
          </div>
        </div>
      </div>
      <div>
        <MobileApp />
      </div>
    </div>
  );
};

export default Sponsor;
