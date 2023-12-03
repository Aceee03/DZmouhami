import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from "./shared/Card";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card reverse={true} centered={false}>
            {/* Rating */}
            <div className="flex absolute w-12 h-12 bg-pink-500 rounded-full -top-4 -left-2">
                <h1 className="font-bold text-white text-2xl absolute left-4 top-2">{item.rating}</h1>
            </div>
            <p className='place-self-center mx-8 text-xs md:text-sm p-8'>
                {item.text}
            </p>
            <div className='flex flex-row-reverse'>
                <button onClick={() => deleteFeedback(item.id)}
                    className="border-none flex self-start justify-self-end my-4 mr-4">
                    <FaTimes />
                </button>
                <button onClick={() => editFeedback(item)}
                    className="border-none flex self-start justify-self-end my-4 mr-2">
                    <FaEdit />
                </button>
            </div>
        </Card>
    );
}

export default FeedbackItem;