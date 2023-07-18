import { Link } from "react-router-dom";
import { GiMartini } from "react-icons/gi";
import { RiGithubFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-8 px-8 py-8 lg:px-12 border-t border-gray-700">
            <Link to="/" className="flex items-center">
                <GiMartini className="w-6 h-6 md:w-8 md:h-8 text-white" />
                <h1 className="text-base text-white leading-none">Sippin</h1>
            </Link>

            <p className="text-base text-white">Alcohol abuse can seriously damage your health. <span className="underline">Please consume with moderation.</span></p>

            <p className="text-base text-white">Coded by Thibault Thomas (theudbaldus)</p>

            <a href="https://github.com/theudbaldus" target="_blank" rel="noreferrer">
                <RiGithubFill className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </a>
        </footer>
    );
};

export default Footer;