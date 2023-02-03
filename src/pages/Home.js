import { motion, AnimatePresence} from "framer-motion";
import AnimatedText from "../component/AnimatedText";
import "../assets/styles.css";
import ArrowImg from "../assets/RightArrow.png"
import ReactImag from "../assets/React.png"
import LaravelImg from "../assets/Laravel.jpg"
import { useState } from "react";
import {Link} from "react-router-dom";
export default function Home()
{
    // Placeholder text data, as if from API
    const placeholderText = [
        { type: "heading1", text: "Hi, My Name Is Ali" },
        {
            type: "heading2",
            text: "I'm a Full Stack Web Developer"
        },
        {
            type: "heading3",
            text: "I use the following technologies for software development:"
        },
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.028
            }
        }
    };

    return (
        <section id="BackGroundGRadiant" className="w-screen h-screen">
            <motion.div
                className="text-center text-xl	md:text-2xl lg:text-3xl"
                initial="hidden"
                animate="visible"
                variants={container}
            >
                <div className="p-12">
                    {placeholderText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />;
                    })}
                </div>
            </motion.div>
            <motion.div className="flex items-center justify-center mb-8"
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                    <motion.ul layout initial={{ borderRadius: 25 }}>
                        {Technologies.map((item , index)=> {
                            return <Item {...item} key={index} />
                        })}
                    </motion.ul>
            </motion.div>
            <motion.div className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <Link to="/projects">
                    <img src={ArrowImg} alt="Arrow" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"/>
                </Link>
            </motion.div>

        </section>
    );
}
function Item(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <img src={props.pics} className="h-6 w-6 rounded-full" alt="Logo"/>
            <motion.div>{props.type}</motion.div>
            <AnimatePresence>{isOpen && <Content {...props} />}</AnimatePresence>
        </motion.li>
    );
}

function Content(props) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>{props.value}</div>
        </motion.div>
    );
}

const Technologies = [
    {type: "Client-Side", value:"React.js, TailwindCss, MaterialUI, FramerMotion", pics:ReactImag},
    {type: "Server-Side", value:"PHP, Laravel, Mysql DB", pics: LaravelImg},
];