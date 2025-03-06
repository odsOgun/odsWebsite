import { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
interface ModalProps {
  
  onClose: () => void;
  openModal: () => void

 
}
function SponsorForm({ onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organisation: '',
    phoneNumber: '',
    twitterLink: '',
    linkedinLink: '',
    websiteLink: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    organisation: '',
    phoneNumber: '',
    twitterLink: '',
    linkedinLink: '',
    websiteLink: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhoneChange = (phone: string) => {
    setFormData({
      ...formData,
      phoneNumber: phone
    });
  };
  const Regex = /^(https?:\/\/)?(www\.)?(linkedin\.com\/.*|twitter\.com\/.*|x\.com\/.*)$/i;
  const validate = () => {
    let valid = true;
    let errors = {
      fullName: '',
      email: '',
      organisation: '',
      phoneNumber: '',
      twitterLink: '',
      linkedinLink: '',
      websiteLink: ''
    };

    if (!formData.fullName) {
      errors.fullName = 'Full Name is required';
      valid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }

    if (!formData.organisation) {
      errors.organisation = 'Organization Name is required';
      valid = false;
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
      valid = false;
    }

    if (!formData.linkedinLink.trim() || !Regex.test(formData.linkedinLink)) {
      errors.linkedinLink = 'Enter a valid LinkedIn URL.';
    }
    if (!formData.twitterLink.trim() || !Regex.test(formData.twitterLink)) {
      errors.twitterLink = 'Enter a valid Twitter/X  URL.';
    }
    if (!formData.websiteLink.trim() || !Regex.test(formData.websiteLink)) {
      errors.websiteLink = 'Enter a valid company URL.';
    }
    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      // try {
      //   const response = await fetch('https://your-backend-endpoint.com/api/sponsors', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(formData)
      //   });
      //   if (response.ok) {
      //     // Handle successful response
      //     console.log('Form submitted successfully');
      //     openModal();
      //   } else {
      //     // Handle error response
      //     console.error('Form submission failed');
      //   }
      // } catch (error) {
      //   console.error('Error submitting form:', error);
      // }
    }
  };

  return (
    <div>
      <div className='max-w-[640px] h-[95vh] mx-auto relative z-10 bg-[#FFFFFF] rounded-[20px] p-8 md:p-20 overflow-y-auto'>
        <div className='flex justify-center sm:justify-start gap-20 items-center mb-4'>
          <div onClick={onClose} >
            <BsArrowLeftShort className='cursor-pointer text-[#787676] w-6 h-6  ' />
          </div>
          <h1 className='text-[#000000] text-[20px] md:text-[32px] leading-[31.2px] md:leading-[60px] font-bold text-center'>
            Sponsor Form
          </h1>
        </div>
        <p className='text-[#70707B] text-[14px] text-center leading-[21px] font-normal mb-10'>
          <span className='font-bold'>Want to Sponsor Ogun Digital Summit?</span> Please fill out
          the form below and our team will reach out to you in less than 24 hours
        </p>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-wrap gap-3 mb-6'>
            <label htmlFor='fullName' className='text-[#70707B] text-[14px] '>
              Full Name
            </label>
            <input
              placeholder='John Doe'
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className='border border-[#D9DCE1] py-[13.5px] px-4 w-full rounded-[5px]'
            />
            {errors.fullName && <p className='text-red-500 text-xs'>{errors.fullName}</p>}
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
              value={formData.email}
              onChange={handleChange}
              className='border border-[#D9DCE1] py-[13.5px] px-4 w-full rounded-[5px]'
            />
            {errors.email && <p className='text-red-500 text-xs'>{errors.email}</p>}
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
              value={formData.organisation}
              onChange={handleChange}
              className='border border-[#D9DCE1] py-[13.5px] px-4 w-full rounded-[5px]'
            />
            {errors.organisation && <p className='text-red-500 text-xs'>{errors.organisation}</p>}
          </div>
          <div className='flex flex-wrap gap-3 mb-6'>
            <label htmlFor='phoneNumber' className='text-[#70707B] text-[14px] '>
              Phone Number
            </label>
            <PhoneInput
              country={'ng'}
              placeholder='Enter phone number'
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
            />
            {errors.phoneNumber && <p className='text-red-500 text-xs'>{errors.phoneNumber}</p>}
          </div>
          <div className='flex flex-wrap gap-3 mb-6'>
            <label htmlFor='twitterLink' className='text-[#70707B] text-[14px] '>
              Company Twitter Link
            </label>
            <input
              placeholder='www.x.com/username'
              type='text'
              id='twitterLink'
              name='twitterLink'
              value={formData.twitterLink}
              onChange={handleChange}
              className='border border-[#D9DCE1] py-[13.5px] px-4 w-full rounded-[5px]'
            />
            {errors.twitterLink && <p className='text-red-500 text-xs'>{errors.twitterLink}</p>}
          </div>
          <div className='flex flex-wrap gap-3 mb-6'>
            <label htmlFor='linkedinLink' className='text-[#70707B] text-[14px] '>
              Company LinkedIn Link
            </label>
            <input
              placeholder='www.x.com/username'
              type='text'
              id='linkedinLink'
              name='linkedinLink'
              value={formData.linkedinLink}
              onChange={handleChange}
              className='border border-[#D9DCE1] py-[13.5px] px-4 w-full rounded-[5px]'
            />
            {errors.linkedinLink && <p className='text-red-500 text-xs'>{errors.linkedinLink}</p>}
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
              value={formData.websiteLink}
              onChange={handleChange}
              className='border border-[#D9DCE1] py-[13.5px] px-4 w-full rounded-[5px]'
            />
            {errors.websiteLink && <p className='text-red-500 text-xs'>{errors.websiteLink}</p>}
          </div>
          <div className='flex justify-center'>
            <button className='bg-[#178A2D] font-semibold h-10 w-[190px] text-sm text-[#ffff] rounded-[2px] items-center tracking-[0.2px] text-[#23323F] !self-center'>
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <div className='absolute top-0 left-0 w-full h-full bg-[#000000] bg-opacity-70 z-0'></div> */}
    </div>
  );
}

export default SponsorForm;
