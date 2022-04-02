import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "../helper/scrollToTop";
import NotFoundPage from "../pages/404";
import AboutMePage from "../pages/aboutMePage";
import LandingPage from "../pages/landingPage";
import ProjectDetailPage from "../pages/projectDetailPage";


const AnimatedRoute = () => {

    const location = useLocation();


    return (
        <AnimatePresence exitBeforeEnter  >
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<LandingPage />} />
                <Route path='/project/:name' element={<ProjectDetailPage />} />
                <Route path="/aboutme" element={<AboutMePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoute;