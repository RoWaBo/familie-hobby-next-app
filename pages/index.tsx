import type { NextPage } from "next";
import Image from "next/image";
import MyLink from "../components/MyLink";
import MyButton from "../components/MyButton";
import MainLayout from "../components/MainLayout";
import kidsPlayingImg from "../public/assets/kids_playing.jpg";
import graeskarImg from "../public/assets/graeskar_cropped.jpg";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <article className="md:flex md:items-center">
        <div className="md:mr-8 lg:mr-20 max-w-lg m-auto">
          <h1 className="text-2xl sm:text-4xl leading-9 sm:leading-[3.5rem] font-normal">
            <span className="text-purple-500 font-medium">
              Kreativ Familiehobby
            </span>
          </h1>
          <p className="text-base sm:text-lg mt-4 md:mt-6">
            Få inspiration til hyggelige, kreative projekter, som I nemt kan
            lave hjemme ved spisebordet. Børn ned til 4 år kan være med.
          </p>
          {/* mobile image visible BELOW md */}
          <div className="relative md:hidden w-full h-72 sm:h-80 mt-6 shadow-md rounded-lg overflow-hidden">
            <Image
              src={kidsPlayingImg}
              alt="børn leger"
              layout="fill"
              quality={85}
              priority
              className="object-center object-cover"
            />
          </div>
          <p className="text-base sm:text-lg mt-6">
            Hvis I ikke har det hele selv, kan I bestille små sæsonkasser med
            kreaindhold.
          </p>
          <div className="mt-8 md:mt-11 text-center sm:text-left">
            <MyLink href={`/produkter`}>
              <MyButton> Se vores udvalg af kreakasser </MyButton>
            </MyLink>
          </div>
        </div>
        {/* desktop image visible ABOVE md */}
        <div className="hidden md:relative md:block w-full h-72 sm:h-[500px] lg:m-0 shadow-md rounded-lg overflow-hidden">
          <Image
            src={kidsPlayingImg}
            alt="børn leger"
            layout="fill"
            quality={100}
            priority
            className="object-center object-cover"
          />
        </div>
      </article>
    </MainLayout>
  );
};

export default Home;
