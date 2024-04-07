import IonIcon from '@reacticons/ionicons';

type AppIconProp = {
  name: string;
  size?: 'small' | 'large';
  color?: string;
  className?: string;
};

const AppIcon: React.FC<AppIconProp> = ({ name, size, color = 'currentColor', className }) => {
  return <IonIcon name={name as any} size={size} color={color} className={` ${className}`} />;
};

export default AppIcon;
