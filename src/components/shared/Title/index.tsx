type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="text-2xl font-semibold">{title}</h1>;
};

export default Title;
