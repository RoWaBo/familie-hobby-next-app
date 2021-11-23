import { createClient, Entry } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import MainLayout from "../../components/MainLayout";
import Product from "../../types/Product";
import Image from "next/image";
import FormatRichText from "../../components/FormatRichText";

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
            className="object-center object-cover rounded-lg blur-md opacity-60"
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
            <h1 className="mt-7 mb-4 sm:mt-14 capitalize text-2xl sm:text-3xl">
              {product.fields.overskrift}
            </h1>
            <p className="ml-auto text-gray-500">
              {product.sys.createdAt.substring(0, 10)}
            </p>
          </div>
          <FormatRichText>{product.fields.beskrivelse}</FormatRichText>
          {product.fields.infotekstbox && (
            <div className="bg-purple-300 p-4 rounded-md mt-10 w-fit font-medium">
              <FormatRichText className="">{product.fields.infotekstbox}</FormatRichText>
            </div>
          )}
        </div>
      </article>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  const contentfulEntires = await client.getEntries();

  const products = contentfulEntires.items.filter(
    (item) => item.sys.contentType.sys.id === "product"
  );

  const paths = products.map((product) => ({
    params: { id: product.sys.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  const product = await client.getEntry(params?.id);

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
};

export default Product;
