import type { NextPage } from "next";
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <header>
        <div>
          <h1 className="text-2xl sm:text-4xl text-center leading-9 sm:leading-[3.5rem]">
            Velkommen til <br /> Kreativ Familie Hobby
          </h1>
          <p className="text-base sm:text-lg text-center mt-4">
            Her kan du få inspiration til kreative projekter og se vores udvalg af
            spændende produkter!
          </p>
        </div>
      </header>
    </MainLayout>
  );
};

export default Home;
