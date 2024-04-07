import { useEffect, useRef, useState } from 'react';

import { ChangeLaguage, ChangeMode, Logo } from '~/components';

import NavBar from '../NavBar';

const Header: React.FC = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY - prevScrollY.current;

      if (scrollDirection > 0 && currentScrollY > 100) {
        setIsHeaderHidden(true);
      } else if (scrollDirection < 0) {
        setIsHeaderHidden(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${isHeaderHidden ? '-translate-y-full ' : 'translate-y-0'} sticky duration-200 top-0 flex justify-between items-center backdrop-blur-[2rem] border-b border-b-gray-200  md:w-4/5 w-full py-md   z-50 "`}
    >
      <Logo />
      <div className="flex gap-md items-center">
        <NavBar />
        <div className="flex gap-2 items-center pl-[22px] ml-2 border-l border-gray-300">
          <ChangeMode />
          <ChangeLaguage />
        </div>
      </div>
    </header>
  );
};

export default Header;
