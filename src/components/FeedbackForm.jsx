import { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from 'react'
import FeedbackContext from "../context/FeedbackContext";


const FeedbackForm = () => {
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisbaled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisbaled(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length < 10) {
            setMessage('Feedback text must be at least 10 characters long')
            setBtnDisbaled(true)
        } else {
            setBtnDisbaled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

            setText('')
        }
    }

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisbaled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    return (
        <Card reverse={true} centered={true}>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4 place-items-center p-4">
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review"
                    className="border-pink-500 border-2 bg-violet-900 focus:outline-none p-2 
                    rounded-md placeholder:text-white focus:placeholder:text-violet-900
                    " />
                {message && <div className="text-sm text-red-600">{message}</div>}
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </form>
        </Card>
    );
}

export default FeedbackForm;