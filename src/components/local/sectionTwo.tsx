import { ArrowRight } from '@/assets/icons';
import { useState } from 'react';
import CustomTabBar from '../ui/customTabbar';
import CalendarCard from '../ui/calendarCard';
import SponsorCard, { SponsorCardProps } from '../ui/sponsorCard';
import SectionTwoImg from '@/assets/img/section-two-image.png';
import SectionTwoImg2 from '@/assets/img/section-two-image2.png';
import Sitelinks from '@/mock/sitelinks.json';
import WhatToLookForwardTo from './whatToLookForwardTo';

enum Tabs {
  Conference,
  OffConference,
  All
}

const events = [
  {
    day: 'Tuesday',
    date: '29th October',
    title: 'Startup Pitch Competition',
    items: [
      'Strictly by Invitation',
      'Introduction of Startups in the ecosystem',
      'Startups Pitch',
      'Judges Deliberation'
    ],
    filter: Tabs.OffConference
  },
  {
    day: 'Wednesday',
    date: '30th October',
    title: 'Conference Day 1',
    items: [
      'Art and Culture',
      'Entertainment Industry',
      'Creative Economy',
      'Cultural and Art Exhibition',
      'Outdoor Party',
      'Demos'
    ],
    filter: Tabs.Conference
  },
  {
    day: 'Thursday',
    date: '31th October',
    title: 'Conference Day 2',
    items: [
      'Funding for Business/Startup',
      'Technology and Mental Health',
      'Blockchain Opportunity for Africa',
      'Think Local: Go Global',
      'Free Masterclass Sessions',
      'Announcement of Winners for Startup Competition',
      'Demos from Partners'
    ],
    filter: Tabs.Conference
  },
  {
    day: 'Friday',
    date: '1st November',
    title: 'Founders Mixers',
    items: ['Networking and Dinner', 'For founders, entrepreneurs and talents.'],
    filter: Tabs.OffConference
  }
];

const sponsorCardItems = [
  {
    title: 'Network',
    image: '/img/sponsor1.png',
    description: "Meet the biggest players in Africa's innovation and business community.",
    bgColor: '#E5EEFE'
  },
  {
    title: 'Generate Leads',
    image: '/img/sponsor2.png',
    description: 'Meet future clients and partners for your business.',
    bgColor: '#FEF5E5'
  },
  {
    title: 'Gain Exposure',
    image: '/img/sponsor3.png',
    description:
      "Get your brands in front of the people that matter in Africa's startup and business community.",
    bgColor: '#FEE5E5'
  },
  {
    title: 'Innovate',
    image: '/img/sponsor4.png',
    description: 'Find opportunities to collaborate and create new solutions.',
    bgColor: '#EDFEE5'
  }
] satisfies Array<SponsorCardProps>;

function SectionTwo() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Conference);

  return (
    <div className='bg-white' id='exhibitors'>
      <div className='max-w-[1120px] w-full px-8 mx-auto pt-20 xl:box-content'>
        <div className='w-full mb-20 md:flex md:justify-between md:mb-40'>
          <div className='mb-6 md:basis-1/3 md:mb-0'>
            <img src={SectionTwoImg} alt='SectionTwo' />
          </div>
          <div className='md:basis-1/2'>
            <h1 className='text-[#23323F] text-2xl md:text-4xl platypi-gf font-semibold'>
              Would you like to showcase your startup or business to over 5,000 participants?
            </h1>
            <p className='text-base font-normal tracking-[0.2px] text-[#627587] my-5'>
              Increase your start visibility and reach by booking a boot with us today
            </p>
            <a href={Sitelinks.becomeAnExhibitor} target='_blank'>
              <button className='bg-[#178A2D] font-semibold h-10 min-w-[190px] rounded flex justify-center items-center tracking-[0.2px] text-white'>
                <span className='text-sm font-semibold'>Become an exhibitor</span>
                <ArrowRight />
              </button>
            </a>
          </div>
        </div>

        <div className='w-full md:flex md:justify-between'>
          <div className='md:basis-1/2'>
            <h1 className='text-[#23323F] text-2xl md:text-4xl platypi-gf font-semibold'>
              Take a Masterclass session during Ogun Digital Summit 2024 and make a real impact.
            </h1>
            <p className='text-base font-normal tracking-[0.2px] text-[#627587] my-5'>
              Join our masterclass trainers to help us train young individuals at ODS. It's free and
              we don't charge anyone for this.
            </p>
            <a href={Sitelinks.applyMasterclass} target='_blank'>
              <button className='bg-[#178A2D] font-semibold h-10 w-full max-w-[260px] rounded flex justify-center items-center tracking-[0.2px] text-white'>
                <span className='text-sm font-semibold'>Apply to conduct a masterclass</span>
                <ArrowRight />
              </button>
            </a>
          </div>

          <div className='mt-6 md:basis-1/3 md:mb-0'>
            <img src={SectionTwoImg2} />
          </div>
        </div>

        <div className='my-20 text-center'>
          <div className=''>
            <h2 className='text-[#23323F] text-2xl md:text-4xl platypi-gf font-semibold'>
              Schedule of event
            </h2>
            <p className='text-base font-normal tracking-[0.2px] text-[#627587] my-4'>
              Get to know our agenda to help you plan ahead for this year
            </p>
          </div>
          <div className='flex flex-col items-center justify-center my-10'>
            <CustomTabBar
              tabs={['Conference days', 'Off conference', 'All']}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div
              className={`flex flex-col md:flex-row ${activeTab === Tabs.All ? 'gap-4' : 'gap-10'} my-10 w-full `}
            >
              {events.map((item, index) => (
                <CalendarCard
                  key={index}
                  day={item.day}
                  date={item.date}
                  title={item.title}
                  items={item.items}
                  showConditions={[
                    activeTab === Tabs.All,
                    activeTab === Tabs.Conference && item.filter === Tabs.Conference,
                    activeTab === Tabs.OffConference && item.filter === Tabs.OffConference
                  ]}
                />
              ))}
            </div>
          </div>
        </div>

        <div id='sponsor' className='flex flex-col items-center justify-center'>
          <div className='text-center md:w-2/3'>
            <h2 className='text-[#23323F] text-2xl md:text-4xl platypi-gf font-semibold'>
              Why join us as a Sponsor?
            </h2>
            <p className='text-base font-normal tracking-[0.2px] text-[#627587] my-4'>
              With over 5,000 participants expected to grace Ogun Digital Summit 2024, we’ve got the
              perfect audience for you.
            </p>
            <a href={Sitelinks.becomeAsponsor} target='_blank'>
              <button className='bg-[#178A2D] font-semibold h-10 min-w-[190px] rounded flex justify-center items-center tracking-[0.2px] text-white mx-auto'>
                <span className='text-sm font-semibold'>Become a sponsor</span>
                <ArrowRight />
              </button>
            </a>
          </div>

          <div className='my-20'>
            <div className='flex flex-col items-center gap-10 md:flex-row'>
              {sponsorCardItems.map((item, index) => (
                <SponsorCard
                  key={index}
                  index={index + 2}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  bgColor={item.bgColor}
                />
              ))}
            </div>
          </div>

          <WhatToLookForwardTo />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
