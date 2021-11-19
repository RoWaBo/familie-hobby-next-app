import { createClient, Entry } from 'contentful';
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router';
import Product from '../../types/Product';

interface ProductProps {
    product: Entry<Product>    
}
 
const Product: React.FunctionComponent<ProductProps> = ({ product }) => {

    const router = useRouter()

    console.log(product);
    
    return router.isFallback ? ( 
        <h1>loading...</h1>
     ) : (
         <h1>Everything is fine</h1>
     )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN,
      });
    
      const contentfulEntires = await client.getEntries();

      const products = contentfulEntires.items.filter(
        item => item.sys.contentType.sys.id === "product"
      );
      
      const paths = products.map(product => ({
          params: { id: product.sys.id }
      }))
      
      return {
        paths,
        fallback: true
      };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_TOKEN,
    });
  
    const product = await client.getEntry(params?.id);
  
    return {
      props: {
        product
      },
      revalidate: 10
    };
  };
  
 
export default Product;