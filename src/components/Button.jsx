import { Link } from "react-router-dom";

const Button = ({ path, text}) => {
    return (
        <Link to={path}>
            <button type="button" className="text-base text-white bg-blue-500 px-8 py-2 rounded-full">
                {text}
            </button>
        </Link>
    );
};

export default Button;