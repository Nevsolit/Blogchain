import { Link } from 'react-router-dom';
import { ROUTES } from '~/routes/constants';

const BlogScreen: React.FC = () => {
  return (
    <h1 className="text-3xl font-bold">
      Blog Screen
      <Link to={ROUTES.HOME}> to Home</Link>
    </h1>
  );
};

export default BlogScreen;
