import { useRouter } from "next/dist/client/router";
import Link from 'next/link';
import useDarkMode from "../utils/useDarkMode";
import DarkModeIcon from "../components/DarkModeIcon";
import BackIcon from "../components/BackIcon";

const Navbar = () => {
    
    const router = useRouter();
    const isHome = router.route === '/'
    const isProduct = router.route.includes('product')
    
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <div className="fixed w-full flex justify-between items-center px-5 md:px-10 xl:px-40 py-3 bg-none z-10">
            <Link href="/">
                <a>
                    <BackIcon className={isHome ? "invisible" : "visible"}/>
                </a>
            </Link>
            <div className="w-20 lg:w-24 flex items-center">
                <img src="/fanta-logo.png" className="max-w-full" />
            </div>
            <DarkModeIcon handleClick={() => setTheme(colorTheme)}/>
        </div>
    );
}

export default Navbar;
