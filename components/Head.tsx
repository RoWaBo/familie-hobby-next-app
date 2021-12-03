import { default as NextHead } from 'next/head'

const Head: React.FC = () => {
    return (
        <NextHead>
            <title>Kreativ Familiehobby</title>
            <link rel="logo" href={"/scissorIcon.svg"} />
            <meta content="Få inspiration til hyggelige og kreative projekter/produkter. Egnet til at hele familien kan være med." name="description" />
        </NextHead>
    );
}

export default Head;