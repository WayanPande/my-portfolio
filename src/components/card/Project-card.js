import ReactParallaxTilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const ProjectCard = (props) => {

    return (
        <div s className="mt-14 sm:mt-24 xl:mt-40">
            <ReactParallaxTilt
                className='project-card'
                perspective={10000}
                scale={1.01}
            >
                <Link to={`/project/${props.name.toLowerCase()}`} ><img src={props.img} className="rounded-xl shadow-xl object-cover w-full h-{230}" alt="" /></Link>
                <motion.div exit={{ opacity: 0 }} className="text-black-700 mt-3 flex justify-between xl:text-3xl xl:mt-6 project-card__inner">
                    <p className="sm:text-lg md:text-xl lg:text-3xl">/0{props.id} <span className="font-semibold">{props.name}</span></p>
                    <p className="sm:text-lg md:text-xl lg:text-3xl">{props.role} dev</p>
                </motion.div>
            </ReactParallaxTilt>
        </div>

    )
}

export default ProjectCard;