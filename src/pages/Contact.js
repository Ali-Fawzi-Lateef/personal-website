import "../assets/styles.css"
import AnimatedText from "../component/AnimatedText";
import {motion} from "framer-motion";
export default function Contact()
{
    // Placeholder text data, as if from API
    const placeholderText = [
        {
            type: "heading1",
            text: "Contact me"
        },
        {
            type: "heading2",
            text: "Email: alifawzi@alifawzi.ninja"
        },
        {
            type: "heading2",
            text: "Phone Number: 07732720330"
        },
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.028
            }
        }
    };
    return(
        <section className="h-screen w-screen" id="BackGroundGRadiant">
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
        </section>
    );
}