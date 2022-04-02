import androidIcon from "../../../assets/android.png";
import reactIcon from "../../../assets/react.png";
import figmaIcon from "../../../assets/figma.png";
import { motion } from "framer-motion"

const SectionOne = () => {


    const animationAndroid = {
        start: {
            y: "0%"
        },
        end: {
            y: "50%"
        }
    }

    const animationReact = {
        start: {
            y: "0%"
        },
        end: {
            y: "70%"
        }
    }

    const animationFigma = {
        start: {
            y: "100%"
        },
        end: {
            y: "40%"
        }
    }

    const animationTransition = {
        duration: 3,
        yoyo: Infinity,
        ease: "easeInOut"
    }

    const animationTransitionReact = {
        duration: 4,
        yoyo: Infinity,
        ease: "easeInOut"
    }

    const iconAnimation = {
        initial: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const itemOne = {
        hidden: {
            y: "200%",
            color: "#fff",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
            y: 0,
            color: "#242424",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75, delay: 1 }
        }
    };

    const itemTwo = {
        hidden: {
            y: "200%",
            color: "#fff",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.85 }
        },
        visible: {
            y: 0,
            color: "#242424",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.95, delay: 1.5 }
        }
    };


    return (
        <div className="h-screen relative overflow-hidden">
            <div className="flex justify-center flex-col items-center w-full h-96 p-4 absolute top-1/2 -translate-y-1/2 z-30">
                <motion.h1 initial='hidden' animate='visible' variants={itemOne} className="mb-3 xl:mb-14 text-4xl xl:text-8xl sm:text-5xl md:text-6xl">Web & Android</motion.h1>
                <motion.h1 initial='hidden' animate='visible' variants={itemTwo} className="sm:ml-14 text-4xl xl:text-8xl sm:text-5xl md:text-6xl after:content[''] after:w-1 after:h-full after:-right-5 after:bg-blue-500 after:absolute after:animate-blink">Developer</motion.h1>

            </div>
            <div className="relative block h-full w-full">
                <motion.div
                    variants={iconAnimation}
                    initial="initial"
                    animate="enter"
                    exit="start"
                    transition={{ delay: 2.5 }}
                >
                    <motion.div
                        variants={animationAndroid}
                        initial="start"
                        animate="end"
                        transition={animationTransition}
                        className="absolute flex justify-center items-center bottom-12 left-10 md:bottom-20  md:left-40 before:content-[''] before:z-10 before:absolute before:w-14 before:h-14  md:before:w-20  md:before:h-20 group before:bg-green-android before:rounded-full after:content-[''] after:z-10 after:absolute after:w-60 after:h-60 md:after:w-[30rem]  md:after:h-[30rem] after:border-2 after:border-gray-100 after:rounded-full">
                        <img src={androidIcon} alt="android" className="w-11 md:w-14 z-20 select-none" />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={iconAnimation}
                    initial="initial"
                    animate="enter"
                    exit="start"
                    transition={{ delay: 3 }}
                >
                    <motion.div
                        variants={animationReact}
                        initial="start"
                        animate="end"
                        transition={animationTransitionReact}
                        className="absolute flex justify-center items-center top-28 right-32 md:top-32  md:right-80 before:content-[''] before:z-10 before:absolute before:w-14 before:h-14  md:before:w-20  md:before:h-20  before:bg-blue-react before:rounded-full after:content-[''] after:z-10 after:absolute after:w-80 after:h-80 md:after:w-[40rem] md:after:h-[40rem] after:border-2 after:border-gray-100 after:rounded-full">
                        <img src={reactIcon} alt="android" className="w-11 md:w-14 z-20 select-none" />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={iconAnimation}
                    initial="initial"
                    animate="enter"
                    exit="start"
                    transition={{ delay: 3.5 }}
                >
                    <motion.div
                        variants={animationFigma}
                        initial="start"
                        animate="end"
                        transition={animationTransition}
                        className="absolute flex justify-center items-center bottom-52 right-10  md:bottom-40  md:right-44 before:content-[''] before:z-10 before:absolute before:w-14 before:h-14  md:before:w-20  md:before:h-20  before:bg-blue-react before:rounded-full after:content-[''] after:z-10 after:absolute after:w-72 after:h-72 md:after:w-[22rem] md:after:h-[22rem] after:border-2 after:border-gray-100 after:rounded-full">
                        <img src={figmaIcon} alt="android" className="w-11 md:w-14 z-20 select-none" />
                    </motion.div>
                </motion.div>
            </div>

        </div>
    )
}

export default SectionOne;