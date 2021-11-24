import { default as NextHead } from 'next/head'

const Head: React.FC = () => {
    return ( 
        <NextHead>
            <title>Kreativ Familiehobby</title>
            <link rel="icon" href={"/scissorIcon.svg"} />
            <meta content="inspiration til hyggelige og kreative projekter/produkter" />   
        </NextHead>
     );
}
 
export default Head;