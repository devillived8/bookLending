import { NavLink } from 'react-router-dom';
import arrowIcon from '../../assets/img/arrow-icon.svg?react';


interface ICardProps {
  name: string;
  role: string;
  description: string;
  imgName: string;
}

export const Card = ({ name, role, description, imgName }: ICardProps) => {
  const ArrowIcon = arrowIcon;
  return (
    <article className='flex gap-4 bg-black/30 rounded-md'>
      <div className='w-full h-64'>
        <img className='w-full h-full object-cover object-top rounded-md' src={imgName} alt={name} />
      </div>
      <div className='flex'>
        <div className='pt-2'>
          <p className='text-white text-lg'>{name}</p>
          <p className='text-accent-red'>{role}</p>
          <p>{description}</p>
        </div>
        <NavLink className='text-accent-red self-center' to="/characters" title='Узнать больше'><ArrowIcon className='w-6 h-6'/></NavLink>
      </div>
    </article>
  );
};
