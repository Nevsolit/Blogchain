import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '~/routes/constants';

const NavBar: React.FC = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <nav className="flex gap-md items-center">
      <NavLink to={ROUTES.HOME}>{t('header.nav.home')}</NavLink>
      <NavLink to={ROUTES.BLOG}>{t('header.nav.blog')}</NavLink>
    </nav>
  );
};

export default NavBar;
