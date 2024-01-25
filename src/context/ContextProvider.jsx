import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)


    return (
        <FeedbackContext.Provider value={{
            isLoading,
        }}>
            {children}
        </FeedbackContext.Provider>
    )

}