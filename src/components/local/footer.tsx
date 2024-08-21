import ODSlogo from '@/assets/img/ODSlogo.png';
import instagram from '@/assets/img/instagram.png';
import twitter from '@/assets/img/twitter.png';
import gmail from '@/assets/img/gmail.png';
import Sitelinks from '@/mock/sitelinks.json';

const footer = () => {
  return (
    <div className='bg-[#101611] '>
      <div className='art-bg' />
      <div className=' max-w-[1120px] mx-auto my-0 w-full p-20 px-8 xl:box-content  '>
        <div className='flex justify-center align-center '>
          <img src={ODSlogo} alt='ogundigitalsummitlogo' />
        </div>

        <div className='flex  justify-center align-center text-base font-semibold  text-[#B0C5D6] pt-[48px] list-none gap-10 md:gap-16 leading-6 max-md:flex-col max-md:items-center  '>
          <li>About</li>
          <li>Sponsors</li>
          <li>Store</li>
          <li>Exhibitors</li>
        </div>

        <div className=' flex  justify-around align-center mt-12 md:mt-[64px] max-md:flex-col  max-md:items-center max-md:gap-12 '>
          <div className='flex justify-center align-center gap-8   '>
            <a href={Sitelinks.instagram} target='_blank'>
              <img src={instagram} alt='instagramlogo' />
            </a>
            <a href={Sitelinks.twitter} target='_blank'>
              <img src={twitter} alt='twitterlogo' />
            </a>
            <a href={Sitelinks.email} target='_blank'>
              <img src={gmail} alt='gmaillogo' />
            </a>
          </div>

          <div className='text-[#627587] text-center text-xs md:text-base leading-[18px] md:leading-6 font-normal tracking-[-0.2px] md:tracking-[0.2px]'>
            <p>Copyright. 2024 Ogun Digital Summit. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
