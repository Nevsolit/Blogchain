import { Link } from 'react-router-dom';
import { ROUTES } from '~/routes/constants';

const HomeScreen: React.FC = () => {
  return (
    <h1 className="text-3xl font-bold text-red-500">
      Home Screen
      <Link to={ROUTES.BLOG}> to Blog</Link>
    </h1>
  );
};

export default HomeScreen;
