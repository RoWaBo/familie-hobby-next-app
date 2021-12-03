import { default as NextHead } from 'next/head'

const Head: React.FC = () => {
    return (
        <NextHead>
            <html lang="da" />
            <title>Kreativ Familiehobby</title>
            <link rel="logo" href={"/scissorIcon.svg"} />
            <meta content="Få inspiration til at skabe hyggelige og kreative projekter med hele familien. Vi har også en kollektion af hjemmelavede produkter. " name="description" />
        </NextHead>
    );
}

export default Head;