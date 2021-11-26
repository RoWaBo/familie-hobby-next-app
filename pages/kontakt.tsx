import MainLayout from "../components/MainLayout";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline";

interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
  return (
    <MainLayout>
      {/* <article className="">
                <h1 className="text-2xl sm:text-4xl leading-9 sm:leading-[3.5rem] font-normal">
                    <span className="text-purple-500 font-medium">
                        Kontakt
                    </span>
                </h1>
                <div className="md:flex">
                    <p className="text-base sm:text-lg mt-4 md:mt-6 flex-1 md:mr-8">
                        Hvis du har ris eller ros, skøre ideer og vanvittigt indfald, <br /> så tag endelig kontakt!
                    </p>
                    <ul className="text-base sm:text-lg text-gray-600 mt-6 flex-1">
                        <li className="flex items-center">
                            <span className="sr-only">mobil nummer</span>
                            <PhoneIcon height={20} width={20} className="mr-4" />
                            93 83 80 23
                        </li>
                        <li className="flex items-center mt-3">
                            <span className="sr-only">Mail</span>
                            <MailIcon height={20} width={20} className="mr-4" />
                            mathilde@kreativfamiliehobby.dk
                        </li>
                    </ul>
                </div>
            </article> */}
      <article className="max-w-lg m-auto">
        <h1 className="text-2xl sm:text-4xl leading-9 sm:leading-[3.5rem] font-normal">
          <span className="text-purple-500 font-medium">Kontakt</span>
        </h1>
        <p className="text-base sm:text-lg mt-4 md:mt-6 flex-1 md:mr-8">
          Hvis du har ris eller ros, skøre ideer og vanvittigt indfald, så tag endelig kontakt!
        </p>
        <ul className="text-base sm:text-lg text-gray-600 mt-6 flex-1">
          <li className="flex items-center">
            <span className="sr-only">mobil nummer:</span>
            <PhoneIcon height={20} width={20} className="mr-4" />
            93 83 80 23
          </li>
          <li className="flex items-center mt-3">
            <span className="sr-only">Mail:</span>
            <MailIcon height={20} width={20} className="mr-4" />
            mathilde@kreativfamiliehobby.dk
          </li>
        </ul>
      </article>
    </MainLayout>
  );
};

export default Contact;
