import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import bgImage from '../../assets/img/bg.png';
import Header from './Header';
import { useState } from 'react';

export const Layout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div
      className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header onToggle={handleToggleMenu} isOpen={isOpenMenu}></Header>
      <aside className={`fixed border-r  border-r-accent-red h-full flex flex-col items-center gap-10 bg-black transition-transform delay-100 duration-300  ${isOpenMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar />
      </aside>
      <main className="grid grid-cols-[1fr]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
