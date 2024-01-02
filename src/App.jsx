import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

function App() {

  return (
      <Router>
        <div className="">
          <Navbar />
          <div className='flex flex-col bg-[FAF6F6]'>
            <Routes>
              <Route path="/" element={<>
                <HomePage />
              </>} />
            </Routes>
          </div>
        </div>
      </Router>
  )
}

export default App;

