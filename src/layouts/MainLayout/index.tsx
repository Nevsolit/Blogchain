import { Outlet } from 'react-router-dom';

import { Header } from '../components';
import { ChangeMode } from '~/components';
import BottomTab from '../components/BottomTab';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div className="flex flex-col pb-16 items-center gap-md">
      <Header />
      <Outlet />
      <ChangeMode />
      <BottomTab />
    </div>
  );
};

export default MainLayout;
