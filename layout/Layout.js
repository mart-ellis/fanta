import Head from 'next/head'
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="w-screen h-screen">
            <Head>
                <title>Fanta - Be more than one flavour</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/fanta-logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Lora:wght@600&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            { children }
        </div>
    );
}

export default Layout;
