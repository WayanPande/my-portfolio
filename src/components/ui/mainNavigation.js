import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const MainNavigation = () => {

    const item = {
        hidden: {
            y: "-200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 4.35 }
        },
        visible: {
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 4.45 }
        }
    };

    return (
        <motion.header variants={item} initial='hidden' animate='visible' className="p-4 sm:px-16 md:px-10 md:pt-8 absolute w-full z-40">
            <nav className="flex justify-between">
                <li className="list-none text-sm sm:text-base md:text-lg lg:text-2xl">
                    <Link to='/' >
                        <p>Wayan</p>
                        <p>Pande</p>
                    </Link>
                </li>
                <li className="list-none text-sm sm:text-base md:text-lg lg:text-2xl">
                    <a href="#project">
                        <p>Projects</p>
                    </a>
                </li>
                <li className="list-none text-sm sm:text-base md:text-lg lg:text-2xl">
                    <Link to='/aboutme'>About me</Link>
                </li>
                <li className="list-none text-sm sm:text-base md:text-lg lg:text-2xl">
                    <Link to='#contact'>Contact</Link>
                </li>
            </nav>
        </motion.header>
    )
}

export default MainNavigation