interface MyButtonProps {
  className?: string;
  onClick?: () => void
}

const MyButton: React.FC<MyButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      { ...props }  
      className={`bg-purple-600 hover:bg-purple-700 transition p-4 sm:p-5 rounded-lg text-base sm:text-xl text-white font-medium shadow ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
