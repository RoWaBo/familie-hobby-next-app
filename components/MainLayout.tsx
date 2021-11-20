
const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="py-9 px-4 sm:py-15 sm:px-8 lg:max-w-7xl lg:mx-auto lg:px-8">
      {children}
    </div>
  );
};

export default MainLayout;
