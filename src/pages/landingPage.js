import Footer from "../components/ui/footer";
import SectionFour from "../components/ui/landingPage/sectionFour";
import SectionOne from "../components/ui/landingPage/sectionOne";
import SectionThree from "../components/ui/landingPage/sectionThree";
import SectionTwo from "../components/ui/landingPage/sectionTwo";
import MainNavigation from "../components/ui/mainNavigation"
import { motion } from "framer-motion"
import Helmet from "react-helmet";

const LandingPage = () => {

    const postPreviewVariants = {
        initial: { x: "-100vw" },
        enter: { x: 0 },
        exit: { x: "-100vw" }
    };

    const animationTransition = {
        duration: 1,
        ease: "easeInOut",
    }

    return (
        <>
            <Helmet>
                <title>I Wayan Pande Putra Yudha</title>
                <meta name="description" content="This is my portfolio where my name is I Wayan Pande Putra Yudha and a lot of my friend call me by Yande" />
            </Helmet>

            <motion.div
                variants={postPreviewVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                transition={animationTransition}
                className="relative" >
                <MainNavigation />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <Footer />
            </motion.div>
        </>
    )
}

export default LandingPage;