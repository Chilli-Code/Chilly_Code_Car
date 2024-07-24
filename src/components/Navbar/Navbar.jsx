import Logo from "../../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import {motion } from "framer-motion";

const NavMenu = [
        {
            id:1,
            title: "Home",
            link: "#",
        },
        {
            id:2,
            title: "About us",
            link: "#",
        },        {
            id:3,
            title: "Bikes",
            link: "#",
        },
        {
            id:4,
            title: "Cars",
            link: "#",
        },
];

const Navbar = () => {
    return(
        <main className="absolute top-0 left-0 w-full pt-10 z-20 text-white">
        <motion.div
        initial={{ opacity:0}}
        whileInView={{opacity:1}}
        className="container">
            <div className="flex justify-between items-center">
                {/* Logo section */}
                <div>
                    <img src={Logo} alt="" className="w-[80px] invert" />
                </div>
                {/* Nav Menu section */}
                <div className="hidden md:block">
                    <ul className="flex gap-4">
                    {NavMenu.map((menu) => (
                        <li key={menu.id}>
                            <a href={menu.link} className="inile-block px-6 py-4 uppercase hover:bg-primary duration-200 rounded-md hover:shadow-[0px_0px_20px_8px_#d2e6ff]">{menu.title}</a>
                        </li>
                    ))}
                    </ul>
                </div>
                {/* Hamburger menu */}
                <div className="flex items-center gap-6">
                    <div className="rounded-icons">
                        <GiHamburgerMenu className="text-xl" />
                    </div>
                    <div className="rounded-icons">
                        <FaSearch className="text-xl" />
                    </div>
                </div>
            </div>
        </motion.div>
        </main>
    );
};

export default Navbar;