import "../assets/styles.css"
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import projectImg1 from "../assets/School.jpg";
import projectImg2 from "../assets/WiseWord.jpg";
import ArrowImg from "../assets/RightArrow.png"
export default function Projects()
{
    return(
        <section className="h-screen w-screen" id="BackGroundGRadiant">
            <div className="grid grid-cols-2 gap-4">
                <motion.a
                    className="bg-gray-50 p-2 w-full h-full rounded-xl shadow"
                    href="https://github.com/Ali-Fawzi-Lateef/University"
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 0.8 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img src={projectImg1} alt="project1" className="object-cover h-56 w-full "/>
                    <p className="text-2xl text-center font-serif" >School Management System</p>
                    <p className="text-xl text-center font-serif text-gray-500">A web application that is built using:
                        React.js for client-side and php Laravel for the server-side as a restAPI,
                        and TailwindCss with materialUI for styles.</p>

                </motion.a>
                <motion.a
                    className="bg-gray-50 p-2 w-full h-full rounded-xl shadow"
                    href="https://t.me/WiseWord_bot"
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 0.8 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <img src={projectImg2} alt="project1" className="object-contain h-56 w-full "/>
                    <p className="text-2xl text-center font-serif" >Wise Word</p>
                    <p className="text-xl text-center font-serif text-gray-500">A Telegram bot that is built using:
                        PHP the bot gives you an insightful quote whenever you ask for it, there is infinite amount of quotes.</p>
                </motion.a>
            </div>
            <motion.div className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 1.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <Link to="/contact">
                    <img src={ArrowImg} alt="Arrow" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"/>
                </Link>
            </motion.div>
        </section>
    )
}