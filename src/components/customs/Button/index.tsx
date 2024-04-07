type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  kind?: 'default' | 'square';
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className, kind = 'default' }) => {
  let buttonStyle;

  switch (kind) {
    case 'default':
      buttonStyle = '';
      break;
    case 'square':
      buttonStyle = 'border rounded-full p-2';
      break;
    default:
      break;
  }

  return (
    <button
      className={`flex justify-center duration-200 active:scale-95 items-center ${buttonStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
