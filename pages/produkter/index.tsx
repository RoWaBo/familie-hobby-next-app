import { GetStaticProps } from "next";
import { ContentfulCollection, createClient, Entry } from "contentful";
import Product from "../../types/Product";
import Link from "next/link";
import FormatRichText from "../../components/FormatRichText";
import Image from 'next/image'

interface ProductsProps {
  contentfulEntires: ContentfulCollection<Entry<Product>>;
}

const Products: React.FunctionComponent<ProductsProps> = ({
  contentfulEntires,
}) => {
  // FILTERING ENTRIES FROM CONTENTFUL
  const products = contentfulEntires.items.filter(
    item => item.sys.contentType.sys.id === "product"
  );
  // const standardProducts = products.filter(
  //   item => item.fields.type === "produkt"
  // );
  // const kreakassenProducts = products.filter(
  //   item => item.fields.type === "kreakassen"
  // );

  // console.log(products);
  // console.log(standardProducts);
  // console.log(kreakassenProducts);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-9 px-4  sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid justify-items-center grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <article key={product.sys.id} className="shadow rounded-md hover:shadow-lg transition-shadow pb-1">
              <Link href={`/produkter/${product.sys.id}`}>
                <a>
                  <div className="relative w-full h-80 xl:h-72 bg-gray-200 rounded-t-lg overflow-hidden">
                    <Image
                      src={'https:' + product.fields.billede.fields.file.url}
                      alt={product.fields.billede.fields.title}
                      layout='fill'
                      quality='10'
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <div className="flex items-baseline mt-4">
                      <h2>{product.fields.overskrift}</h2>
                      <p className="ml-auto text-gray-500">{product.sys.createdAt.substring(0, 10)}</p>
                    </div>
                    <FormatRichText textLimit={130} className="mt-1">
                      {product.fields.beskrivelse}
                    </FormatRichText>
                  </div>
                </a>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  const contentfulEntires = await client.getEntries();

  return {
    props: {
      contentfulEntires,
    },
    revalidate: 60,
  };
};

export default Products;
