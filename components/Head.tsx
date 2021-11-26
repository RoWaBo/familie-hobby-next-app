import { default as NextHead } from 'next/head'

const Head: React.FC = () => {
    return ( 
        <NextHead>
            <title>Kreativ Familiehobby</title>
            <link rel="logo" href={"/scissorIcon.svg"} />
            <meta content="få inspiration til hyggelige og kreative projekter/produkter" />   
        </NextHead>
     );
}
 
export default Head;