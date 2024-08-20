import { ArrowRight } from '@/assets/icons';
import { useState } from 'react';
import CustomTabBar from '../ui/customTabbar';
import CalendarCard from '../ui/calendarCard';
import SponsorCard, { SponsorCardProps } from '../ui/sponsorCard';

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
    image: 'src/assets/img/sponsor1.png',
    description: "Meet the biggest players in Africa's innovation and business community.",
    bgColor: '#E5EEFE'
  },
  {
    title: 'Generate Leads',
    image: 'src/assets/img/sponsor2.png',
    description: 'Meet future clients and partners for your business.',
    bgColor: '#FEF5E5'
  },
  {
    title: 'Gain Exposure',
    image: 'src/assets/img/sponsor3.png',
    description:
      "Get your brands in front of the people that matter in Africa's startup and business community.",
    bgColor: '#FEE5E5'
  },
  {
    title: 'Innovate',
    image: 'src/assets/img/sponsor4.png',
    description: 'Find opportunities to collaborate and create new solutions.',
    bgColor: '#EDFEE5'
  }
] satisfies Array<SponsorCardProps>;

const whatToLookForwardItems = [
  {
    title: 'Top Speakers',
    description:
      'We will feature leading founders, government ministers, enterprise tech leaders and high profile entrepreneurs recognised locally and globally.',
    image: 'src/assets/img/top-speakers.png'
  },
  {
    title: 'Fresh Insights',
    description:
      'We will feature leading founders, government ministers, enterprise tech leaders and high profile entrepreneurs recognised locally and globally.',
    image: 'src/assets/img/fresh-insight.png'
  },
  {
    title: 'Free Masterclass Sessions',
    description:
      'Gain full knowledge on growing your career globally, getting remote international gigs and also learn how to increase sales if you run a startup/business for free.',
    image: 'src/assets/img/free-masterclass.png'
  },
  {
    title: 'Exploring Other Sectors',
    description:
      'We will be diverse this year as we also intend to explore opportunities in Art, culture and entertainment sector and the role technology plays',
    image: 'src/assets/img/explore.png'
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

        <div className='flex justify-center items-center flex-col'>
          <div className='md:w-2/3 text-center'>
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

          <div className='my-20'>
            <div className='flex flex-col md:flex-row gap-10 items-center'>
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

          <div className='flex flex-col md:flex-row justify-between my-20'>
            <h2 className='text-[#23323F] text-2xl md:text-4xl platypi-gf font-semibold md:basis-2/5'>
              What to look forward to for this year's event
            </h2>
            <div className='md:basis-2/5'>
              <p className='text-base font-normal tracking-[0.2px] text-[#627587] my-4'>
                We're back with the most exciting and largest technology event in Ogun State. It all
                starts here, wherever you sit in the ecosystem, you'll find the insights,
                inspiration and connections that you need to thrive.
              </p>
              <button className='bg-[#178A2D] font-semibold h-10 min-w-[120px] rounded flex justify-center items-center tracking-[0.2px] text-white leading-6'>
                <span className='text-sm font-semibold'>Register</span>
                <ArrowRight />
              </button>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between gap-4'>
            {whatToLookForwardItems.map((item, index) => (
              <div
                key={index}
                className='rounded-2xl p-6 h-[380px] flex'
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(16, 22, 17, 0.3), rgba(16, 22, 17, 0.7), rgba(16, 22, 17, 1)), url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className='text-white text-left h-fit mt-auto'>
                  <h1 className='font-semibold text-base text-[#F2F9FF] mb-2'>{item.title}</h1>
                  <p className='text-sm leading-6 text-[#B0C5D6]'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
