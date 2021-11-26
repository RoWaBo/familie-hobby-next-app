import { IdentificationIcon, UserCircleIcon, HomeIcon, GlobeIcon } from "@heroicons/react/outline";

const Footer: React.FC = () => {
  return (
    <footer className="w-fit m-auto sm:w-full p-4 pb-8 sm:px-8 lg:max-w-7xl lg:mx-auto lg:px-8">
      <ul className="text-xs text-gray-400 flex flex-col sm:justify-around sm:flex-row">
        <div className="mr-8 md:mr-[10%]">
          <li className="flex items-start">
            <UserCircleIcon height={15} width={15} className="mr-2" />
            Mathilde Mei Jørgensen
          </li>
          <li className="flex items-start mt-3">
            <IdentificationIcon height={15} width={15} className="mr-2" />
            CVR 30640055
          </li>
        </div>
        <div>
          <li className="flex items-start mt-3 sm:mt-0">
            <HomeIcon height={15} width={15} className="mr-2" />
            Kreativ Familiehobby
          </li>
          <li className="flex items-start mt-3">
            <GlobeIcon height={15} width={15} className="mr-2" />
            I det naturskønne Kattinge, Lejre Kommune
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
