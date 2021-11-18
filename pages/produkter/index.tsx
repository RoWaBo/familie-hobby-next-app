import { GetStaticProps } from "next";
import { createClient } from 'contentful';

interface ProductsProps {
    res: {}
}

const Products: React.FunctionComponent<ProductsProps> = ({ res }) => {

    console.log(res);

    return (
        <h1>Products</h1>
    );
}

export const getStaticProps: GetStaticProps = async () => {

    const clientParams = {
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN
    }

    const client = createClient(clientParams)

    const res = await client.getEntries()

    return {
        props: {
            res
        }
    }
}

export default Products;