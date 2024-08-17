import { ArrowRight, DownArrow } from '@/assets/icons';
import ODSLogo from '@/assets/svgs/nav/ODSLogo.svg';
import ODSLogoMobile from '@/assets/svgs/nav/ODSLogo2.svg';
import MenuSvg from '@/assets/svgs/nav/menu.svg';

function Nav() {
  const navItems = [
    { label: 'Home', hasIcon: false },
    { label: 'About', hasIcon: true, icon: <DownArrow /> },
    { label: 'Sponsor', hasIcon: false },
    { label: 'Exhibitors', hasIcon: false }
  ];

  return (
    <nav className='flex items-center justify-center w-full '>
      <div className='flex items-center h-16 py-2 md:py-[10px] max-w-[1120px] w-full md:px-2 max-md:justify-between'>
        <img src={ODSLogo} className='logo max-md:hidden' alt='ODS logo' />
        <img src={ODSLogoMobile} className='logo md:hidden' alt='ODS logo' />

        <div className='flex items-center justify-center flex-1 gap-4 text-sm font-semibold leading-6 text-[#627587] tracking-[0.2px] max-md:hidden'>
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`py-[2px] px-3 cursor-pointer ${
                item.hasIcon ? 'flex justify-center items-center gap-[10px]' : ''
              }`}
            >
              {item.label}
              {item.icon && item.icon}
            </div>
          ))}
        </div>

        <button className='bg-[#178A2D] font-semibold h-10 min-w-[110px] w-[110px] rounded flex justify-center items-center text-white tracking-[0.2px] px-3 max-md:hidden'>
          <span className='text-sm font-semibold'>Register</span>
          <ArrowRight />
        </button>

        {/* mobile */}
        <div>
          <img src={MenuSvg} className='cursor-pointer md:hidden' alt='Hamburger' />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
