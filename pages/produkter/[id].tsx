import { createClient, Entry } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import MainLayout from "../../components/MainLayout";
import Product from "../../types/Product";
import Image from "next/image";

interface ProductProps {
  product: Entry<Product>;
}

const Product: React.FunctionComponent<ProductProps> = ({ product }) => {
  const router = useRouter();

  console.log(product);

  return router.isFallback ? (
    <h1>loading...</h1>
  ) : (
    <MainLayout className="flex justify-center sm:block">
      <div className="relative w-96 sm:w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src={"https:" + product.fields.billede.fields.file.url}
          alt={product.fields.billede.fields.title}
          layout="fill"
          quality="10"
          className="object-center object-cover rounded-lg blur-lg"
        />
        <div className="relative m-auto w-96 h-96 bg-gray-200 rounded-lg">
          <Image
            src={"https:" + product.fields.billede.fields.file.url}
            alt={product.fields.billede.fields.title}
            layout="fill"
            quality="20"
            className="object-center object-cover rounded-lg"
            priority
          />
        </div>
      </div>
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
