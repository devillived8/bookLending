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
      <div className="pt-6">
        <img src={logo} alt="logo" className="w-30" />
      </div>

      <nav>
        <ul className="flex flex-col ">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.to}
                className="text-text-muted hover:text-accent-red hover:bg-accent-red/20 pt-4 pb-4 before:bg-accent-red relative pr-6 pl-6 transition-colors delay-100 duration-150 before:absolute before:top-0 before:left-0 before:h-0 before:w-[6px] before:transition-all before:duration-250 before:content-[''] hover:before:h-full 
                
                 "
              >
                <NavLink to={item.to} className="flex gap-4 h-full">
                  {Icon && <Icon className="h-6 w-6" />}
                  <p className="">{item.name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
