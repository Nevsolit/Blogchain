import { Outlet } from 'react-router-dom';

import { Header } from '../components';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div className="flex flex-col  items-center min-h-[200vh] gap-md">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
