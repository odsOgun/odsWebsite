import ODSlogo from '@/assets/img/ODSlogo.png';
import instagram from '@/assets/img/instagram.png';
import twitter from '@/assets/img/twitter.png';
import gmail from '@/assets/img/gmail.png';

const footer = () => {
  return (
    <div>
      <div className='art-bg' />
      <div className=' max-w-[100%] w-full h-96 bg-[#101611]  '>
        <div className='flex justify-center align-center pt-[80px]'>
          <img src={ODSlogo} alt='ogundigitalsummitlogo' />
        </div>

        <div className='flex  justify-center align-center text-base font-semibold  text-[#B0C5D6] pt-[48px] list-none gap-16 leading-6   '>
          <li>About</li>
          <li>Sponsors</li>
          <li>Store</li>
          <li>Exhibitors</li>
        </div>

        <div className=' flex  justify-around align-center pt-[64px]  '>
          <div className='flex justify-center align-center gap-8 w-32  '>
            <img src={instagram} alt='instagramlogo' />
            <img src={twitter} alt='twitterlogo' />
            <img src={gmail} alt='gmaillogo' />
          </div>

          <div className='text-[#627587] w-[450px] text-base leading-6 font-normal'>
            <p>Copyright. 2024 Ogun Digital Summit. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
