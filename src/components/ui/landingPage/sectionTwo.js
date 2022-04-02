import ProjectCard from "../../card/Project-card";
import bluprintImg from '../../../assets/BluprintHome.JPG'
import antrie from '../../../assets/antrie.JPG'
import bbh from '../../../assets/bbh.JPG'

const SectionTwo = () => {

    return (
        <div className="bg-white p-10 xl:p-32" id="project">
            <h1 className="text-black-700 text-2xl xl:text-7xl sm:text-4xl md:text-5xl">Selected Projects</h1>
            <div className="mt-10 sm:mt-0 xl:w-10/12 mx-auto sm:mx-11 md:mx-24">
                <ProjectCard id={1} img={antrie} role="Front-end" name="Antrie" />
                <ProjectCard id={2} img={antrie} role="Front-end" name="Antrie" />
                <ProjectCard id={3} img={bbh} role="Fullstack" name="BBH" />
                <ProjectCard id={4} img={antrie} role="Front-end" name="Antrie" />
            </div>
        </div>
    )
}

export default SectionTwo;