import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const SectionThree = () => {
    return (
        <div className="h-[100vh] relative">
            <Parallax speed={15}>
                <img src="https://source.unsplash.com/1280x720?book" alt="" className="sm:rounded-xl  w-40 absolute top-[10rem] xl:w-96  xl:top-[20rem] sm:w-56 sm:left-11 md:w-60 rounded-l-none rounded-r-md" />
            </Parallax>
            <Parallax speed={20}>
                <img src="https://source.unsplash.com/720x1280?website" alt="" className="sm:rounded-xl w-32 right-0 absolute top-[30rem] xl:w-80 xl:top-[30rem] sm:right-5 md:w-40 lg:right-10 rounded-r-none rounded-l-md" />
            </Parallax>
            <Parallax speed={10}>
                <img src="https://source.unsplash.com/1280x720?phone" alt="" className="sm:rounded-xl w-44 absolute top-[40rem] xl:w-[30rem] xl:top-[55rem] xl:left-10 sm:w-52 sm:top-[35rem] sm:left-14 md:w-56 lg:left-24 rounded-l-none rounded-r-md" />
            </Parallax>
            <p className="z-30 w-3/4 absolute top-1/4 text-center left-1/2 -translate-x-1/2 font-mono text-lg xl:text-4xl xl:w-1/2 sm:text-xl md:text-3xl md:w-2/3 lg:w-1/2 ">I have a passion for creating user experiences that are seamless, meaningful and impactful.</p>
            <Link to='/aboutme' >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-32 h-32 bg-black z-30 absolute rounded-full top-[20rem] left-1/2 -translate-x-1/2 md:left-[45%] md:-translate-x-0 flex justify-center items-center xl:top-[30rem] xl:w-40 xl:h-40 md:top-[25rem]">
                    <p className="text-white select-none">About me</p>
                </motion.div>
            </Link>
        </div>
    )
}

export default SectionThree;