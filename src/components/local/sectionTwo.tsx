import { ArrowRight } from '@/assets/icons';
import { useState } from 'react';
import CustomTabBar from '../ui/customTabbar';
import CalendarCard from '../ui/calendarCard';

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

function SectionTwo() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Conference);

  return (
    <div className='bg-white'>
      <div className='max-w-[1120px] w-full px-8 mx-auto py-20'>
        <div className='md:flex md:justify-between w-full md:mb-40 mb-20'>
          <div className='md:basis-1/3 mb-6 md:mb-0'>
            <img src='src/assets/img/section-two-image.png' />
          </div>
          <div className='md:basis-1/2'>
            <h1 className='text-[#23323F] text-2xl md:text-4xl platypi-gf font-semibold'>
              Would you like to showcase your startup or business to over 5,000 participants?
            </h1>
            <p className='text-base font-normal tracking-[0.2px] text-[#627587] my-5'>
              Increase your start visibility and reach by booking a boot with us today
            </p>
            <button className='bg-[#178A2D] font-semibold h-10 min-w-[190px] rounded flex justify-center items-center tracking-[0.2px] text-white'>
              <span className='text-sm font-semibold'>Become an exhibitor</span>
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className='md:flex md:justify-between w-full'>
          <div className='md:basis-1/2'>
            <h1 className='text-[#23323F] text-2xl md:text-4xl platypi-gf font-semibold'>
              Take a Masterclass session during Ogun Digital Summit 2024 and make a real impact.
            </h1>
            <p className='text-base font-normal tracking-[0.2px] text-[#627587] my-5'>
              Join our masterclass trainers to help us train young individuals at ODS. It's free and
              we don't charge anyone for this.
            </p>
            <button className='bg-[#178A2D] font-semibold h-10 min-w-[260px] rounded flex justify-center items-center tracking-[0.2px] text-white'>
              <span className='text-sm font-semibold'>Apply to conduct a masterclass</span>
              <ArrowRight />
            </button>
          </div>

          <div className='md:basis-1/3 mt-6 md:mb-0'>
            <img src='src/assets/img/section-two-image2.png' />
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
          <div className='my-10 flex flex-col justify-center items-center'>
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

        <div className='flex justify-center items-center'>
          <div className='w-2/3 text-center'>
            <h2 className='text-[#23323F] text-2xl md:text-4xl platypi-gf font-semibold'>
              Why join us as a Sponsor?
            </h2>
            <p className='text-base font-normal tracking-[0.2px] text-[#627587] my-4'>
              With over 5,000 participants expected to grace Ogun Digital Summit 2024, we’ve got the
              perfect audience for you.
            </p>
            <button className='bg-[#178A2D] font-semibold h-10 min-w-[190px] rounded flex justify-center items-center tracking-[0.2px] text-white mx-auto'>
              <span className='text-sm font-semibold'>Become a sponsor</span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
