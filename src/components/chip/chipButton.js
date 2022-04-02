import { motion } from "framer-motion"

const ChipButton = (props) => {
    return (
        <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={props.link}
            target="_blank"
            className="bg-black text-white rounded-3xl px-5 py-3 xl:px-7 xl:py-4 xl:rounded-[30rem] hover:bg-white hover:border-2 hover:text-black border-black cursor-pointer">
            <p className="text-xs xl:text-2xl sm:text-base lg:text-2xl select-none">{props.type}</p>
        </motion.a>
    )
}

export default ChipButton;