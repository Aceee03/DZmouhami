import { createContext, useState, useEffect } from "react"


const FeedbackContext = createContext()

export const ContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [lawyersList, setLawyersList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [users, setUsers] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
        fetchLawyers()
    }, [])

    // Fetch lawyers
    const fetchLawyers = async () => {
        const response = await fetch("http://localhost:5501/lawyers")
        const lawyersData = await response.json()
        const lawyersWithIds = lawyersData.map((lawyer, index) => ({
            ...lawyer,
            id: index + 1
        }));
        setLawyersList(lawyersWithIds)
    }
    // Fetch users
    const fetchUsers = async () => {
        const response = await fetch("http://localhost:5502/users")
        const usersData = await response.json()
        setUsers(usersData)
    }

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch("http://localhost:5500/ratings?_sort=id&_order=desc")
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    // Delete a feedback item
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Add a user
    const addUser = async (newUser) => {
        const response = await fetch('http://localhost:5502/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        const data = await response.json()

        setUsers([newUser, ...users])
    }

    // Add a feedback item
    const addFeedback = async (newFeedback) => {
        const response = await fetch('http://localhost:5500/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedback([newFeedback, ...feedback])
    }

    // Edit a feedback item
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    // Update a feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) =>
                (item.id === id ? { ...item, ...updItem } : item)
            )
        )
    }


    return (
        <FeedbackContext.Provider value={{
            feedback: feedback,
            feedbackEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
            addUser,
            lawyersList,
            setLawyersList,
            users,
            setUsers,
            isLoggedIn,
            setIsLoggedIn
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext