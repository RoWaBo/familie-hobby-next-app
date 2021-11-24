import MainLayout from "./MainLayout";
import { IdentificationIcon } from "@heroicons/react/outline";

const listItems = [
  "Mathilde Mei Jørgensen",
  `${<IdentificationIcon />} CVR 30640055`,
  "Kreativ familiehobby",
  "i naturskønne Kattinge, Lejre Kommune",
];

const Footer: React.FC = () => {
  return (
    <MainLayout>
      <footer>
        <ul className="text-sm text-gray-500 md:flex justify-between">
          {listItems.map((item) => ( <>
            <li>{item}</li>
            {console.log(item)}
            </>
          ))}
        </ul>
      </footer>
    </MainLayout>
  );
};

export default Footer;
