import Nav from '@/components/local/nav';

import HeroImg from '@/assets/img/about-hero.png';
import MapImage from '@/assets/img/about-one.png';
import Image2 from '@/assets/img/about-two.png';
import { useEffect, useRef, useState } from 'react';

function About() {
  const [showNav, setShowNav] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) setShowNav(false);
    else setShowNav(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div>
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
          <img src={HeroImg} alt='hero' className={`w-full h-screen`} />
          <div className='w-1/2 leading-[64px] absolute bottom-16 left-28'>
            <h1 className='text-[60px] platypi-gf text-white font-semibold'>
              <span className='font-normal italic'>About Us: </span>Shaping The Future Tech
              Landscape
            </h1>
          </div>
        </div>
      </div>
      <div className='bg-[#101611]'>
        <div className='max-w-[1120px] w-full px-8 mx-auto py-20 xl:box-content'>
          <div className='py-20 flex justify-between'>
            <div className='md:w-1/2'>
              <h2 className='text-2xl font-semibold text-white md:text-4xl platypi-gf'>
                Why We're Here
              </h2>
              <p className='text-base font-normal tracking-[0.2px] text-[#B0C5D6] my-5'>
                At the Ogun Digital Summit, we don't just embrace the future—we create it. Our
                mission is to ignite a digital renaissance, where innovation thrives and
                opportunities are boundless. We are dedicated to empowering individuals with the
                tools, knowledge, and connections they need to turn bold ideas into reality. By
                bridging the digital divide and fostering a culture of creativity and collaboration,
                we aim to transform challenges into opportunities, building a brighter, more
                inclusive future for all.
              </p>
            </div>
            <img src={MapImage} alt='map' className='w-[285px] h-[248px]' />
          </div>
          <div className='mt-20'>
            <div className='relative flex' style={{ height: boxRef.current?.clientHeight }}>
              <div
                className='w-[747px] absolute h-[498px] rounded-xl my-auto'
                style={{
                  top: (boxRef.current?.clientHeight ?? 0) / 2 - 498 / 2
                }}
              >
                <img src={Image2} alt='image2' className='object-cover' />
              </div>
              <div
                className='bg-[#202020] text-white absolute right-0 w-[505px] p-8 rounded-2xl'
                ref={boxRef}
              >
                <svg
                  width='106'
                  height='65'
                  viewBox='0 0 106 65'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute opacity-15 top-0'
                >
                  <path
                    d='M45.95 41.8501C45.7625 54.5401 35.525 64.6801 23.0675 64.5001C10.6175 64.4851 0.529999 54.2101 0.514999 41.5276V35.7526C-0.0999985 10.8976 19.1375 -9.78742 43.55 -10.4999C45.0764 -10.4841 46.534 -9.86303 47.6028 -8.77318C48.6715 -7.68332 49.264 -6.21381 49.25 -4.68742C49.25 -1.47742 46.7 1.12508 43.55 1.12508C38.026 1.22474 32.6282 2.79404 27.9118 5.67159C23.1954 8.54914 19.3307 12.6311 16.715 17.4976C16.5663 17.7592 16.5233 18.0678 16.595 18.3601C16.6293 18.5067 16.6924 18.645 16.7805 18.7671C16.8686 18.8892 16.98 18.9927 17.1084 19.0715C17.2367 19.1503 17.3793 19.2029 17.5281 19.2262C17.6768 19.2496 17.8287 19.2433 17.975 19.2076C19.8451 18.7235 21.7739 18.5038 23.705 18.5551C36.1625 18.7351 46.1225 29.1676 45.95 41.8501ZM101.555 41.1976C101.728 53.8876 91.775 64.3201 79.3175 64.5001C66.8675 64.4851 56.7725 54.2101 56.7575 41.5276V35.7526C56.15 10.8976 75.3875 -9.77992 99.8 -10.4999C101.326 -10.4841 102.784 -9.86303 103.853 -8.77318C104.922 -7.68332 105.514 -6.21381 105.5 -4.68742C105.5 -1.47742 102.95 1.12508 99.8 1.12508C94.276 1.22474 88.8782 2.79404 84.1618 5.67159C79.4454 8.54914 75.5807 12.6311 72.965 17.4976C72.8143 17.7612 72.7713 18.073 72.845 18.3676C72.8802 18.5135 72.9438 18.651 73.0323 18.7723C73.1208 18.8936 73.2323 18.9962 73.3605 19.0742C73.4887 19.1523 73.6311 19.2042 73.7795 19.2271C73.9278 19.25 74.0792 19.2434 74.225 19.2076C75.89 18.7801 77.6 18.5626 79.3175 18.5551C91.5275 18.7351 101.383 28.7626 101.555 41.1976Z'
                    fill='#ACFAAC'
                  />
                </svg>

                <h1 className='text-4xl platypi-gf font-semibold mb-4'>Letter To You</h1>
                <p className='text-[#B0C5D6] text-base leading-6 mb-4 italic'>
                  Dear Friends and Partners,
                </p>
                <p className='text-[#B0C5D6] text-base leading-6 mb-4 italic'>
                  Welcome to the Ogun Digital Summit. This summit began as a vision—one that seeks
                  to leverage the potential of technology to drive societal progress. Since 2020, we
                  have been on a journey to inspire, educate, and connect individuals with the
                  resources they need to make meaningful contributions to our digital economy.
                </p>
                <p className='text-[#B0C5D6] text-base leading-6 mb-4 italic'>
                  As the convener of this summit, I am proud of the incredible strides we have made
                  together. From empowering young minds to bridging the digital divide in rural
                  communities, our work is a testament to the power of collaboration and shared
                  purpose. But our journey is far from over. Together, we will continue to push the
                  boundaries of what is possible, shaping a future where technology is a force for
                  good in every corner of Ogun State and beyond.
                </p>
                <p className='text-[#B0C5D6] text-base leading-6 mb-4 italic'>
                  Thank you for being a part of this movement.
                </p>
                <p className='text-[#F2F9FF] text-base leading-6'>Warm regards,</p>
                <p className='text-[#F2F9FF] text-base leading-6'>Victor Adeleye</p>
                <p className='text-[#F2F9FF] text-base leading-6'>Convener, Ogun Digital Summit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
