import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/shared/Footer'
import SignIn from './components/pages/SignIn'
import ResetPassword from './components/pages/ResetPassword'
import Lawyers from './components/pages/Lawyers'
import LawyerProfile from './components/pages/LawyerProfile'
import BookMeeting from './components/pages/BookMeeting'
import AdminLogin from './components/pages/AdminLogin'
import { ContextProvider } from './context/ContextProvider'
import AdminPanel from './components/pages/AdminPanel'

function App() {

  return (
    <ContextProvider>
      <Router>
        <div className="">
          <Navbar />
          <div className='flex flex-col bg-[FAF6F6]'>
            <Routes>
              <Route path="/" element={<>
                <HomePage />
              </>} />
              <Route path="/lawyers/:id/book" element={<>
                <BookMeeting />
              </>} />
              <Route path="/lawyers" element={<>
                <Lawyers />
              </>} />
              <Route path="/lawyers/:id" element={<>
                <LawyerProfile />
              </>} />
              <Route path="/signin" element={<>
                <SignIn />
              </>} />
              <Route path="/signin/login-admin" element={<>
                <AdminLogin />
              </>} />
              <Route path="/admin-panel" element={<>
                <AdminPanel />
              </>} />
              <Route path="/resetpassword" element={
                <ResetPassword />
              }></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </ContextProvider>
  )
}

export default App;

