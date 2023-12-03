import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from "./FeedbackItem";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';


const FeedbackList = () => {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p className="text-white mx-auto">No feedback yet</p>
    }

    return isLoading ? <Spinner /> : (
        <div className="flex flex-col gap-4">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );

}

export default FeedbackList;