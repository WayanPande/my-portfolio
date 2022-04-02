import ChipButton from "../../chip/chipButton";

const SectionFour = (props) => {

    return (
        <div className="flex justify-center items-center flex-col py-20 px-5 lg:px-16 lg:h-[100vh] xl:mt-[40rem] md:mt-[5rem]" id="contact">
            <h1 className="text-4xl font-semibold text-center mb-10 xl:text-8xl xl:w-2/3 sm:text-6xl sm:mb-16">Hit me up for Future Project.</h1>
            <a href="mailto:yande554@gmail.com" className="text-xl underline underline-offset-[1rem] xl:mt-20 xl:text-5xl sm:text-3xl">yande554@gmail.com</a>
            <div className="mt-10 flex gap-3 xl:mt-20 xl:gap-10 p-3">
                <ChipButton type="Linkedin" link="https://www.linkedin.com/in/i-wayan-pande-putra-yudha-14070b216/" />
                <ChipButton type="Instagram" link="https://www.instagram.com/sssukiyaki/" />
            </div>

        </div >
    )
}

export default SectionFour;