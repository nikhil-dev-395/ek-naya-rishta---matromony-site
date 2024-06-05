 import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GradientLink = ({ toWhere, LinkText }) => {
    return (
        <>
            <Link to={toWhere} className=" mr-1 relative inline-flex items-center justify-center p-4 border-2 border-black  rounded-2xl shadow-sm overflow-hidden group hover:bg-blue-100">
                <span className="font-bold text-gray-900 z-10">{LinkText}</span>
                <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="bg-gradient-to-r from-pink-900 via-blue-700 to-violet-600 rounded-xl w-40 h-40 blur-xl transition-all duration-400 opacity-50 animate-pulse group-hover:w-32 group-hover:h-32"></div>
                </div>
            </Link>
        </>
    );
};

GradientLink.propTypes = {
    toWhere: PropTypes.string.isRequired,
    LinkText: PropTypes.string.isRequired,
};

export default GradientLink;
