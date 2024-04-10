import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import { ROUTES } from '~/routes/constants';

const dataNavLink = [
  {
    to: ROUTES.HOME,
    name: 'header.nav.home',
  },
  {
    to: ROUTES.BLOG,
    name: 'header.nav.blog',
  },
  {
    to: ROUTES.BLOG,
    name: 'header.nav.discover',
  },
  {
    to: ROUTES.BLOG,
    name: 'header.nav.about',
  },
];

const NavBar: React.FC = () => {
  const [t] = useTranslation('global');
  const router = useLocation();

  return (
    <nav className="md:flex gap-md items-center hidden gap-8 duration-200 lg:gap-12 font-medium">
      {dataNavLink.map((nav, index) => {
        const isActive = router.pathname === nav.to;
        return (
          <NavLink
            key={index}
            to={nav.to}
            className={`${isActive ? 'text-black dark:text-white' : 'text-gray-500'} duration-200`}
          >
            {t(nav.name)}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavBar;
