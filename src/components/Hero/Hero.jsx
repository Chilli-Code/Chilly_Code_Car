
import CarPng from "../../assets/Car-VE.png";
import BuildImage from "../../assets/BuildImage.jpeg";
import {FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const bgImage = {
    backgroundImage: `url(${BuildImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
};


const Hero = () => {
    return(
        <main style={bgImage}>
            <div className="bg-gradient-to-r from-primary to bg-primaryDark/90">
                <div className="container text-white">
                    {/* Componentes de la barra de navegación aquí */}
                    <Navbar />
                    {/* Sección de héroe aquí */}
                    <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]">
                        {/* Sección de contenido de texto */}
                        <div className="space-y-8 mt-[100px] md:mt-[20px]">
                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity:1, y: 0 }}
                                transition={{
                                    type: "string",
                                    stiffness: 100,
                                    damping: 10,
                                    delay:1,
                                    duration: 0.4,
                                }}
                                className="space-y-8"
                            >
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight uppercase">
                                Hona <br />
                                <span className="text-transparent text-outline">Sport EV</span>
                                </h1>
                                <button
                                className="outline-btn flex justify-center items-center gap-4 group">
                                    Explore
                                    <FaArrowRight className="group-hover:translate-x-2 transition" />
                                </button>
                                </motion.div>

                                {/* sección de características aquí */}
                                <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity:1, y: 0 }}
                                transition={{
                                    type: "string",
                                    stiffness: 100,
                                    damping: 10,
                                    delay:1.2,
                                    duration: 0.4,
                                }}
                                className="bg-black/40 p-6 space-y-2 lg:max-w-[350px] !mt-[60px]">
                                    <h1 className="text-xl uppercase">Vehicle feactures</h1>
                                    <p className="text-sx leading-loose">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi nemo similique cum blanditiis totam adipisci reiciendis, facere consequatur iste.
                                    </p>
                                </motion.div>
                        </div>
                        {/* Sección de imagen */}
                        <div className="relative">
                            <motion.img
                                initial={{ opacity: 0, x: 200 }}
                                whileInView={{ opacity:1, x: 0, scale:1.4 }}
                                transition={{
                                    duration: 1,
                                }}
                            src={CarPng} alt="" className="w-full relative z-30" />
                            {/* círculo brillante */}
                            <motion.div
                                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                                whileInView={{ opacity:1, y: 0, scale:1 }}
                                transition={{
                                    type: "string",
                                    stiffness: 100,
                                    damping: 10,
                                    delay:0.8,
                                    duration: 0.8,
                                }}
                            className="border-[20px] border-cyan-200 rounded-full h-[180px] w-[180px] md:h-[300px] md:w-[300px]  absolute top-0 left-1/2 glowind-shadow">
                            </motion.div>
                            {/* texto grande aquí */}
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity:1, x: 0 }}
                                transition={{
                                    type: "string",
                                    stiffness: 100,
                                    damping: 10,
                                    delay:1.4,
                                    duration: 0.8,
                                }}
                            className="absolute -top-40 left-0 z-[1]">
                                <h1 className="text-[180px] scale-150 font-bold text-cyan-200/10 leading-none">Sport</h1>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Hero;