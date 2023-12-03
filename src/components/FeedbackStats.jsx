import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackStats = () => {

    const { feedback } = useContext(FeedbackContext)
    
    // Calculate Ratings average
    let average = feedback.reduce((acc, item) => {
        return acc + item.rating
    }, 0) / feedback.length

    average = average.toFixed(1)

    return ( 
        <div className="flex flex-row justify-between mt-2 mb-8 text-white font-semibold">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
     );
}

export default FeedbackStats;