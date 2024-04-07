import { Link } from 'react-router-dom';
import { ROUTES } from '~/routes/constants';

const Logo: React.FC = () => {
  return (
    <Link to={ROUTES.HOME} className="text-2xl font-bold ">
      <h1 className="text-xl uppercase">BlogChain</h1>
    </Link>
  );
};

export default Logo;
