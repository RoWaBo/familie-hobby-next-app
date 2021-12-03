import { IdentificationIcon, UserCircleIcon, HomeIcon, GlobeIcon } from "@heroicons/react/outline";

const Footer: React.FC = () => {
  return (
    <footer className="w-fit mt-auto mx-auto sm:w-full px-4 py-8 sm:py-10 sm:px-8 lg:max-w-7xl lg:mx-auto lg:px-8 border-t border-gray-100">
      <ul className="text-xs text-gray-400 flex flex-col sm:justify-around sm:flex-row">
        <li className="mr-8 md:mr-[10%]">
          <div className="flex items-start">
            <UserCircleIcon height={15} width={15} className="mr-2" />
            Mathilde Mei Jørgensen
          </div>
          <div className="flex items-start mt-3">
            <IdentificationIcon height={15} width={15} className="mr-2" />
            CVR 30640055
          </div>
        </li>
        <li>
          <div className="flex items-start mt-3 sm:mt-0">
            <HomeIcon height={15} width={15} className="mr-2" />
            Kreativ Familiehobby
          </div>
          <div className="flex items-start mt-3">
            <GlobeIcon height={15} width={15} className="mr-2" />
            I det naturskønne Kattinge, Lejre Kommune
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
