import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom";
import { DATA } from '../assets/data'
import Footer from "../components/ui/footer";

const setDetail = (name) => {
    return DATA.filter(data => data.name.toLowerCase() === name)
}

const ProjectDetailPage = () => {

    let params = useParams();

    let userDetail = setDetail(params.name.toLowerCase())


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
        <motion.div
            variants={postPreviewVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={animationTransition}
        >
            <Link to='/' type="button" className="absolute right-4 sm:right-14 md:right-20 lg:right-32 lg:top-28 top-4 bg-black-700  text-white border-2 border-gray-300  hover:bg-black-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center ">
                <svg className="h-5 w-5 lg:h-10 lg:w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </Link>

            <div className="p-4 text-black-700 sm:px-14 md:px-20 lg:p-32">
                <div className="flex justify-between items-center py-8 lg:mb-16">
                    <h1 className="text-2xl sm:text-4xl lg:text-6xl">/0{userDetail[0].id} <br /><span className="font-semibold">{userDetail[0].name}</span></h1>
                    <h1 className="text-2xl sm:text-4xl lg:text-6xl self-end">{userDetail[0].date}</h1>
                </div>
                <div className="mb-10 lg:mb-24">
                    <img src={require('../assets/' + userDetail[0].img)} alt="" className="w-full rounded-xl" />
                </div>
                <div className="lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-16">
                    <p className="mb-10 lg:text-2xl lg:w-[200rem]">{userDetail[0].description}</p>
                    <hr className="lg:hidden block mb-10 lg:mb-0" />
                    <div className="mb-10 lg:mb-0">
                        <h2 className="text-xl mb-7 lg:text-3xl font-semibold">My Role</h2>
                        <p className="lg:text-2xl">{userDetail[0].roleDesc}</p>
                    </div>
                    <hr className="lg:hidden block" />
                </div>
                <hr className="hidden lg:block" />
            </div>
            <Footer />
        </motion.div >
    )
}

export default ProjectDetailPage;