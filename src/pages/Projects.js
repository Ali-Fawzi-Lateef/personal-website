import "../assets/styles.css"
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import projectImg from "../assets/project_1.jpg";
import ArrowImg from "../assets/right-arrow.png"
export default function Projects()
{
    function RedirectToGithub() {
        window.location.replace('https://tailwindcss.com/docs/grid-template-columns');

    }

    return(
        <section className="h-screen w-screen" id="BackGroundGRadiant">
            <div className="grid grid-cols-2 gap-4 p-12">
                <motion.button
                    className="bg-gray-50 p-2  rounded-xl shadow"
                    onClick={RedirectToGithub}
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 0.8 }}
                    transition={{
                        duration: 0.8,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img src={projectImg} alt="project1"/>
                    <span className="text-2xl" >University Management System</span>
                </motion.button>
                <motion.button
                    className="bg-gray-50 p-2  rounded-xl shadow"
                    onClick={RedirectToGithub}
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 0.8 }}
                    transition={{
                        duration: 0.8,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img src={projectImg} alt="project1"/>
                    <span className="text-2xl" >University Management System</span>
                </motion.button>
            </div>
            <motion.div className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <Link to="/contact">
                    <img src={ArrowImg} alt="Arrow" className="h-5 w-5 sm:h-7 sm:w-7 lg:w-10 lg:h-10 xl:h-12 xl:w-12 "/>
                </Link>
            </motion.div>
        </section>
    )
}