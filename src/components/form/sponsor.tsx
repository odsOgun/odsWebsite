import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function SponsorForm() {
  return (
    <div>
      <div className='max-w-[640px] h-[95vh] mx-auto relative z-10 bg-[#FFFFFF] rounded-[20px] p-20 overflow-y-auto'>
        <div className='flex justify-start gap-20 items-center mb-4'>
          <Link to='/sponsor'>
            <BsArrowLeftShort className='text-[#787676] w-6 h-6  ' />
          </Link>
          <h1 className='text-[#000000] text-[20px] md:text-[32px] leading-[31.2px] md:leading-[60px] font-bold text-center'>
            Sponsor Form
          </h1>
          {/* <div></div> */}
        </div>
        <p className='text-[#70707B] text-[14px] text-center leading-[21px] font-normal mb-10'>
          {' '}
          <span className='font-bold'>Want to Sponsor Ogun Digital Summit?</span>  Please fill out the form below and our team will reach out to you in less than 24 hours

        </p>
        <form action=''>
          <div className='flex flex-wrap gap-3 mb-6'>
            <label htmlFor='fullName' className='text-[#70707B] text-[14px] '>
              Full Name
            </label>
            <input
              placeholder='John Doe'
              type='text'
              id='fullName'
              name='fullName'
              className=' border border-[#D9DCE1]  py-[13.5px] px-4  w-full rounded-[5px]'
            />
          </div>
          <div className='flex flex-wrap gap-3 mb-6'>
            <label htmlFor='email' className='text-[#70707B] text-[14px] '>
              Email
            </label>
            <input
              placeholder='johndoe@gmail.com'
              type='email'
              id='email'
              name='email'
              className=' border border-[#D9DCE1] py-[13.5px] px-4 w-full rounded-[5px]'
            />
          </div>
          <div className='flex flex-wrap gap-3 mb-6'>
            <label htmlFor='organisation' className='text-[#70707B] text-[14px] '>
              Organization Name
            </label>
            <input
              placeholder='Enter organization name'
              type='text'
              id='organisation'
              name='organisation'
              className=' border border-[#D9DCE1]  py-[13.5px] px-4  w-full rounded-[5px]'
            />
          </div>
          <div className='flex flex-wrap gap-3 mb-6'>
            <label htmlFor='phoneNumber' className='text-[#70707B] text-[14px] '>
              Phone Number
            </label>
            <PhoneInput
              country={'ng'}
            //   type='tel'
            //   id='phoneNumber'
              placeholder='Enter phone number'
              //   value={form.phoneNumber}
              //   onChange={(phone) =>
              //     handleChange({
              //       target: { name: 'phoneNumber', value: phone }
              //     })
              //   }
            //   className='   w-full rounded-[5px]'
            />
          </div>
          <div className='flex flex-wrap gap-3 mb-6'>
            <label htmlFor='twitterLink' className='text-[#70707B] text-[14px] '>
            Company Twitter  Link
            </label>
            <input
              placeholder='www.x.com/username'
              type='text'
              id='twitterLink'
              name='twitterLink'
              className=' border border-[#D9DCE1]  py-[13.5px] px-4  w-full rounded-[5px]'
            />
          </div>
          <div className='flex flex-wrap gap-3 mb-6'>
            <label htmlFor='linkedinLink' className='text-[#70707B] text-[14px] '>
            Company LinkedIn  Link
            </label>
            <input
              placeholder='www.x.com/username'
              type='text'
              id='linkedinLink'
              name='linkedinLink'
              className=' border border-[#D9DCE1]  py-[13.5px] px-4  w-full rounded-[5px]'
            />
          </div>
          <div className='flex flex-wrap gap-3 mb-10'>
            <label htmlFor='websiteLink' className='text-[#70707B] text-[14px] '>
            Company Website
            </label>
            <input
              placeholder='www.company.com'
              type='text'
              id='websiteLink'
              name='websiteLink'
              className=' border border-[#D9DCE1]  py-[13.5px] px-4  w-full rounded-[5px]'
            />
          </div>
          
          <div className='flex justify-center '>
            <button className='bg-[#178A2D] font-semibold h-10 w-[190px] text-sm text-[#ffff] rounded-[2px] items-center tracking-[0.2px] text-[#23323F] !self-center'>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-[#000000] bg-opacity-70 z-0'></div>
    </div>
  );
}

export default SponsorForm;
