import { ArrowRight, DownArrow } from '@/assets/icons';
import ODSLogo from '@/assets/ODSLogo.svg';

function Nav() {
  const navItems = [
    { label: 'Home', hasIcon: false },
    { label: 'About', hasIcon: true, icon: <DownArrow /> },
    { label: 'Sponsor', hasIcon: false },
    { label: 'Exhibitors', hasIcon: false },
  ];

  return (
    <div className="flex items-center h-16 py-2">
      <img src={ODSLogo} className="logo" alt="ODS logo" />

      <div className="flex items-center justify-center flex-1 gap-4 text-sm font-semibold leading-6 text-[#627587] tracking-[0.2px]">
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

      <button className="bg-[#178A2D] font-semibold h-10 min-w-[110px] w-[110px] rounded flex justify-center items-center text-white">
        <span>Register</span>
        <ArrowRight />
      </button>
    </div>
  );
}

export default Nav;
