type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  kind?: 'default' | 'cricle' | 'rounded' | 'square';
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className, kind = 'default' }) => {
  let buttonStyle;

  switch (kind) {
    case 'cricle':
      buttonStyle = 'border rounded-full p-2';
      break;
    case 'rounded':
      buttonStyle = ' rounded-lg py-[6px] px-4 border-2 border-transparent';
      break;
    case 'square':
      buttonStyle = ' p-2 border-2 border-transparent rounded-lg';
      break;
    default:
      break;
  }

  return (
    <button
      className={`flex outline-none justify-center font-medium duration-200 active:scale-95 items-center ${buttonStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
