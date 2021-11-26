interface HeadingProps {
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ className, children }) => {
  return (
    <h1
      className={`text-2xl sm:text-4xl leading-9 sm:leading-[3.5rem] text-purple-500 font-medium capitalize ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
