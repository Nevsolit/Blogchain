import { Link } from 'react-router-dom';
import IMAGES from '~/assets/imgs';
import { ROUTES } from '~/routes/constants';

const Logo: React.FC = () => {
  return (
    <Link to={ROUTES.HOME} className="flex items-center gap-2">
      <div className="bg-black dark:bg-white p-1 rounded-lg flex justify-center items-center">
        <img src={IMAGES.LogoLight} alt="" width={32} height={32} className="dark:hidden" />
        <img src={IMAGES.LogoDark} alt="" width={32} height={32} className="hidden dark:block" />
      </div>
      <h1 className="text-2xl font-bold hidden md:block">BlogChain</h1>
    </Link>
  );
};

export default Logo;
