const Heading: React.FC = ({ children }) => {
  return (
    <h1 className="text-2xl sm:text-4xl leading-9 sm:leading-[3.5rem] text-purple-500 font-medium">
      {children}
    </h1>
  );
};

export default Heading;
