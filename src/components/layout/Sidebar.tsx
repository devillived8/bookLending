import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import mailIcon from '../../assets/img/mail-icon.svg?react';
import bookIcon from '../../assets/img/book-icon.svg?react';
import personIcon from '../../assets/img/person-icon.svg?react';
import homeIcon from '../../assets/img/home-icon.svg?react';
import groupIcon from '../../assets/img/group-icon.svg?react';

export const Sidebar = () => {
  const navItems = [
    { name: 'Главная', to: '/', icon: homeIcon },
    { name: 'О книге', to: '/about-book', icon: bookIcon },
    { name: 'Персонажи', to: '/characters', icon: groupIcon },
    { name: 'Об авторе', to: '/about-author', icon: personIcon },
    { name: 'Контакты', to: '/contacts', icon: mailIcon },
  ];

  return (
    <>
      <div className='pt-6'>
        <img src={logo} alt="logo" className="w-30" />
      </div>

      <nav>
        <ul className="flex flex-col gap-8 pl-6 pr-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to} className='text-text-muted hover:text-accent-red transition-colors delay-100 duration-150'>
                <NavLink
                  to={item.to}
                  className="flex gap-4"
                >
                  {Icon && <Icon className="h-6 w-6" />}
                  <p className=''>{item.name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
