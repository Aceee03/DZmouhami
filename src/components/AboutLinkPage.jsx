import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutLinkPage = () => {
    return (
        <div className="flex flex-row justify-end mt-2">
            <Link to="/about">
                <FaQuestion size={30} className="text-white hover:text-pink-500 cursor-pointer" />
            </Link>
        </div>
    );
}

export default AboutLinkPage;