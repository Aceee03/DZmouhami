import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackItem from './components/FeedbackItem'
import Navbar from './components/Navbar'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import AboutLinkPage from './components/AboutLinkPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <div className="">
          <Navbar />
          <div className='flex flex-col bg-violet-900 p-4'>
            <Routes>
              {/* Main Page */}
              <Route path="/" element={<>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>} />
              {/* About Page Route */}
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <AboutLinkPage />
          </div>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;

