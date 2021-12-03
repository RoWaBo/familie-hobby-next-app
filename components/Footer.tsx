import { IdentificationIcon, UserCircleIcon, HomeIcon, GlobeIcon } from "@heroicons/react/outline";

const Footer: React.FC = () => {

  const listItemStyle = 'flex items-start'

  const iconStyle = 'mr-2'
  const iconHeight = 15
  const iconWidth = 15

  return (
    <footer className="w-full mt-auto sm:w-full p-4 sm:p-5 lg:max-w-7xl lg:mx-auto lg:px-8 border-t border-gray-100 border-opacity-90">
      <ul className="text-xs text-gray-400 flex flex-col sm:justify-around md:flex-row">
        <li className={listItemStyle}>
          <UserCircleIcon height={iconHeight} width={iconWidth} className={iconStyle} />
          Mathilde Mei Jørgensen
        </li>
        <li className={`${listItemStyle} mt-3 md:mt-0`}>
          <IdentificationIcon height={iconHeight} width={iconWidth} className={iconStyle} />
          CVR 30640055
        </li>
        <li className={`${listItemStyle} mt-3 md:mt-0`}>
          <HomeIcon height={iconHeight} width={iconWidth} className={iconStyle} />
          Kreativ Familiehobby
        </li>
        <li className={`${listItemStyle} mt-3 md:mt-0`}>
          <GlobeIcon height={iconHeight} width={iconWidth} className={iconStyle} />
          I det naturskønne Kattinge, Lejre Kommune
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
