import { Link } from "react-router-dom";
import Footer from "../components/ui/footer";
import SectionFour from "../components/ui/landingPage/sectionFour";
import profilePic from '../assets/profilePic.jpg';
import { motion } from "framer-motion";
import Helmet from "react-helmet";

const AboutMePage = () => {

    const postPreviewVariants = {
        initial: { x: "-100vw" },
        enter: { x: 0 },
        exit: { x: "-100vw" }
    };

    const animationTransition = {
        duration: 1,
        ease: "easeInOut"
    }


    return (
        <>
            <Helmet>
                <title>About Page I Wayan Pande Putra Yudha</title>
                <meta name="description" content="This is my about page, you can learn more about me here." />
            </Helmet>

            <motion.div
                variants={postPreviewVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                transition={animationTransition}

            >
                <div className="p-5 sm:p-12 md:px-20 lg:px-32">
                    <Link to='/' type="button" className="absolute right-4 sm:right-14 md:right-20 lg:right-32 lg:top-28 top-4 bg-black-700  text-white border-2 border-gray-300  hover:bg-black-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center ">
                        <svg className="h-5 w-5 lg:h-10 lg:w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>

                    <h1 className="text-3xl mt-32 sm:text-5xl leading-relaxed sm:leading-relaxed lg:text-8xl lg:leading-relaxed">I Wayan Pande Putra Yudha</h1>

                    <div className="md:flex gap-11 lg:gap-20">
                        <div className="mt-16 h-[20rem] md:w-[60rem] md:h-[15rem] lg:h-[30rem] lg:w-[40rem]">
                            <img className="h-full mx-auto rounded-xl w-full object-cover object-top" src={profilePic} alt="I Wayan Pande Putra Yudha" />
                        </div>

                        <div className="mt-16 lg:text-xl md:text-sm lg:w-full">
                            <p className="font-normal mb-5 lg:leading-[2.9rem] lg:text-3xl">
                                I am a Web and Android developer based in Bali, Indonesia. Currently I am a Computer Science student at the Udayana University of Bali.
                            </p>
                            <p className=" text-tools&tech lg:mt-14 mt-10">
                                I have a high interest in mobile apps development and web development dedicated to developing and optimizing <span className="font-semibold">interactive</span>, <span className="font-semibold">user-friendly</span>, and <span className="font-semibold">feature-rich</span> websites and apps.
                            </p>
                            <p className=" text-tools&tech lg:mt-14 mt-10">
                                I have developed excellent skills and experience as a front-end and android developer through my degree, and I supplement these skills through my competency in various programming languages and libraries such as <span className="font-semibold">Html</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">Javascript</span>, <span className="font-semibold">Kotlin</span> and <span className="font-semibold">React JS</span>.
                            </p>
                            <p className=" text-tools&tech lg:mt-14 mt-10">
                                Aside from my technical skills, I love learning new things, especially in the programming field ??? looking up some new library or method, transforming it into a simple project, or upgrading past projects using that new insight. I am now looking to further develop and use my skills in a year in industry placement, especially in front-end development and Android development.
                            </p>
                        </div>

                    </div>

                    <div className="md:flex md:gap-52 md:justify-evenly md:items-start mt-16 md:mt-32 md:mb-0 mb-16 lg:mt-56">
                        <h1 className="text-3xl font-medium sm:text-4xl md:inline-flex md:flex-col lg:text-6xl">Tools <span className="md:ml-5 md:mt-2">& Techs</span></h1>
                        <div className="flex gap-20 md:gap-32 mt-10 md:mt-0 text-tools&tech sm:text-xl lg:text-3xl">
                            <ul className="flex flex-col gap-3">
                                <li>Figma</li>
                                <li>Html</li>
                                <li>JS, ES6</li>
                                <li>CSS</li>
                                <li>PHP</li>
                            </ul>
                            <ul className="flex flex-col gap-3">
                                <li>Laravel</li>
                                <li>ReactJS</li>
                                <li>NextJS</li>
                                <li>Kotlin</li>
                                <li>Python</li>
                            </ul>
                        </div>
                    </div>

                    <SectionFour />
                </div>
                <Footer />
            </motion.div>
        </>
    )
}

export default AboutMePage;