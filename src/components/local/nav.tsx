import { ArrowRight, ArrowRightGreen } from '@/assets/icons';
import ODSLogo from '@/assets/svgs/nav/ODSLogo.svg';
import ODSLogoMobile from '@/assets/svgs/nav/ODSLogo2.svg';
import MenuSvg from '@/assets/svgs/nav/menu.svg';
import { useState } from 'react';
import Sitelinks from '@/mock/sitelinks.json';

function Nav() {
  // Define types for navigation items
  interface NavItemProps {
    label: string;
    hasIcon?: boolean;
    icon?: React.ReactNode;
    link?: string;
  }

  const navItems: NavItemProps[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Sponsor', link: '#' },
    { label: 'Store', link: 'https://selar.co/m/ods2024' },
    { label: 'Exhibitors', link: '#' },
    { label: 'Speakers', link: '/speaker' }
  ];

  const [navState, setNavState] = useState<boolean>(false);

  return (
    <nav className='flex items-center justify-center w-full'>
      <div className='flex items-center h-[54px] w-full py-2 max-w-[1120px] px-2 md:h-16 md:py-[10px] md:px-2 max-md:justify-between'>
        <img src={ODSLogo} className='logo md:hidden' alt='ODS logo' />
        <img src={ODSLogoMobile} className='logo max-md:hidden' alt='ODS logo' />

        <div className='flex items-center justify-center flex-1 gap-4 text-sm font-semibold leading-6 text-[#627587] tracking-[0.2px] max-md:hidden'>
          {navItems.map((item, index) => {
            // Determine the target based on the link
            const target = item.link?.startsWith('#') ? '_self' : '_blank';

            return (
              <a href={item?.link} target={target} key={index}>
                <div
                  className={`py-[2px] px-3 cursor-pointer ${
                    item.hasIcon ? 'flex justify-center items-center gap-[10px]' : ''
                  }`}
                >
                  {item.label}
                  {item.icon && item.icon}
                </div>
              </a>
            );
          })}
        </div>

        <a href={Sitelinks.register} target='_blank'>
          <button className='bg-[#178A2D] font-semibold h-10 min-w-[110px] w-[110px] rounded flex justify-center items-center text-white tracking-[0.2px] px-3 max-md:hidden'>
            <span className='text-sm font-semibold'>Register</span>
            <ArrowRight />
          </button>
        </a>

        {/* mobile */}
        <div onClick={() => setNavState(!navState)}>
          <img src={MenuSvg} className='cursor-pointer md:hidden' alt='Hamburger' />
        </div>
      </div>
      {/* mobileNav */}

      <MobileNav />
    </nav>
  );

  function MobileNav() {
    return (
      <div
        className={`mobileNav absolute h-[408px] w-[90vw] bg-white px-5 pt-5 pb-10 md:hidden ${navState ? 'showNav' : ''}`}
      >
        <div className='flex flex-col w-full gap-6'>
          {navItems.map((item, index) => {
            const target = item.link?.startsWith('#') ? '_self' : '_blank';

            return (
              <a
                href={item?.link}
                target={target}
                key={index}
                onClick={() => setNavState(!navState)}
              >
                <div className='flex items-center cursor-pointer h-7'>
                  <div className='font-semibold text-base leading-6 tracking-[0.2px] text-[#627587]'>
                    {item.label}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div className='flex flex-col items-center gap-6 mt-6'>
          <a href={Sitelinks.register} target='_blank' className='w-full'>
            <button className='bg-[#178A2D] font-semibold h-10 w-full rounded flex justify-center items-center tracking-[0.2px] text-white'>
              <span className='text-sm font-semibold'>Register</span>
              <ArrowRight />
            </button>
          </a>
          <a href={Sitelinks.becomeAsponsor} target='_blank' className='w-full'>
            <button className='w-full rounded-[2px] h-6 bg-white flex justify-center items-center gap-2'>
              <span className='text-[#178A2D] text-sm font-semibold'>Become a sponsor</span>
              <ArrowRightGreen />
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
