import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { dataNavLink } from '../NavBar';
import { AppIcon } from '~/components';

const BottomTab: React.FC = () => {
  const [t] = useTranslation('global');
  const router = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 md:hidden w-full bg-white p-3 flex items-center justify-around shadow-base border-t border-gray-200">
      {dataNavLink.map((nav, index) => {
        const isActive = router.pathname === nav.to;
        return (
          <NavLink
            key={index}
            to={nav.to}
            className={`${isActive ? 'text-black dark:text-white' : 'text-gray-500'} duration-200 p-2`}
          >
            <AppIcon name={isActive ? nav.icon : `${nav.icon}-outline`} className="text-2xl" />
          </NavLink>
        );
      })}
    </nav>
  );
};

export default BottomTab;
