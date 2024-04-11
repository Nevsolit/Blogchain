import { useEffect, useRef, useState } from 'react';

import { Button, Logo } from '~/components';

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
      className={`${isHeaderHidden ? '-translate-y-full ' : 'translate-y-0'}  duration-200  p-3 md:p-6 flex justify-between items-center  w-full   z-50 "`}
    >
      <Logo />
      <NavBar />
      <div className="flex gap-4">
        <Button kind="rounded" className="hidden md:block">
          Log in
        </Button>
        <Button kind="rounded" className="bg-black dark:bg-transparent  dark:border-white  text-white">
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
