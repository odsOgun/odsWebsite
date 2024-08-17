import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';

interface TimeUnit {
  value: number;
  label: string;
}

const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps): JSX.Element => {
  const timeUnits: TimeUnit[] = [
    { value: days, label: 'DAYS' },
    { value: hours, label: 'HRS' },
    { value: minutes, label: 'MIN' },
    { value: seconds, label: 'SEC' }
  ];

  return (
    <div className='flex py-3 pl-3'>
      {timeUnits.map((item) => (
        <div key={item.label} className='flex flex-col w-16 h-12 gap-1 text-center'>
          <div className='text-xl leading-6 font-semibold text-[#F2F9FF] tracking-[-0.5px]'>
            {item.value}
          </div>
          <div className='text-xs leading-5 font-semibold tracking-[3px] text-[#B0C5D6]'>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const CountDown: React.FC = () => {
  return (
    <div className='h-[72px] w-[719px] rounded-2xl bg-[#0E140F] absolute position-center'>
      <div className='flex items-center justify-between w-full'>
        <Countdown date={new Date(2024, 9, 29)} renderer={renderer} />

        <div className='py-[13px] pr-4'>
          <div className='flex flex-col gap-1'>
            <div className='text-sm leading-5 font-semibold text-[#F2F9FF] tracking-[3px]'>
              OCT 29 - Nov 1, 2024
            </div>
            <div className='text-sm leading-[22px] font-normal text-[#B0C5D6] tracking-[0.2px]'>
              June 12 cultural centre, Kuto, Abeokuta Ogun state
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
