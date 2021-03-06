import { createClient, Entry } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import MainLayout from "../../components/MainLayout";
import Product from "../../types/Product";
import Image from "next/image";
import FormatRichText from "../../components/FormatRichText";
import Heading from "../../components/Heading";

interface ProductProps {
  product: Entry<Product>;
}

const Product: React.FunctionComponent<ProductProps> = ({ product }) => {
  const router = useRouter();

  return router.isFallback ? (
    <h1>loading...</h1>
  ) : (
    <MainLayout>
      <article>
        <div className="relative w-full xsm:h-[400px] h-80 bg-gray-200 rounded-lg">
          <Image
            src={"https:" + product.fields.billede.fields.file.url}
            alt={product.fields.billede.fields.title}
            layout="fill"
            quality={1}
            className="object-center object-cover rounded-lg blur-none sm:blur-md opacity-60"
          />

          <div className="relative m-auto w-full sm:top-4 sm:w-[400px] xsm:h-[400px] h-full bg-gray-200 rounded-lg shadow-lg">
            <Image
              src={"https:" + product.fields.billede.fields.file.url}
              alt={product.fields.billede.fields.title}
              layout="fill"
              quality={20}
              className="object-center object-cover rounded-lg"
              priority
            />
          </div>
        </div>
        <div className="max-w-xl m-auto">
          <div className="flex items-baseline">
            <Heading className="mt-7 mb-4 sm:mt-14">
              {product.fields.overskrift}
            </Heading>
            <p className="ml-auto text-gray-400">
              {product.sys.createdAt.substring(0, 10)}
            </p>
          </div>
          <FormatRichText>{product.fields.beskrivelse}</FormatRichText>
          {product.fields.infotekstbox && (
            <div className="bg-purple-100 p-4 rounded-md mt-10 w-fit font-medium">
              <FormatRichText className="">
                {product.fields.infotekstbox}
              </FormatRichText>
            </div>
          )}
        </div>
      </article>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (
    typeof process.env.CONTENTFUL_SPACE_ID !== "undefined" &&
    typeof process.env.CONTENTFUL_TOKEN !== "undefined"
  ) {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_TOKEN,
    });

    const contentfulEntries = await client.getEntries();

    const products = contentfulEntries.items.filter(
      (item) => item.sys.contentType.sys.id === "product"
    );

    const paths = products.map((product) => ({
      params: { id: product.sys.id },
    }));

    return {
      paths,
      fallback: true,
    };
  }
  return {
    paths: [{ params: { id: "not found" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (
    typeof process.env.CONTENTFUL_SPACE_ID !== "undefined" &&
    typeof process.env.CONTENTFUL_TOKEN !== "undefined" &&
    typeof params?.id === "string"
  ) {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_TOKEN,
    });

    const product = await client.getEntry(params.id);

    return {
      props: {
        product,
      },
      revalidate: 10,
    };
  }
  return {
    notFound: true,
  };
};

export default Product;
