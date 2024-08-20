export interface SponsorCardProps {
  index?: number;
  title: string;
  image: string;
  description: string;
  bgColor: string;
}

function SponsorCard({ index, title, image, description, bgColor }: SponsorCardProps) {
  return (
    <div
      className='p-6 rounded-[8px] h-fit'
      style={{
        backgroundColor: bgColor,
        transform: index && index % 2 === 0 ? 'rotate(-5deg)' : 'rotate(5deg)'
      }}
    >
      <div>
        <h1 className='font-semibold text-lg text-[#23323F]'>{title}</h1>
        <img src={image} alt={title} className='my-2' />
        <p className='text-sm leading-6 text-[#627587]'>{description}</p>
      </div>
    </div>
  );
}

export default SponsorCard;
