import React from 'react'
import Questionaire from './pages/Questionaire'
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import ChatBot from './pages/ChatBot'
import Study from './pages/Study'
import Plan from './pages/Plan'
import HomePage from './pages/HomePage'
import Login from './pages/login'
import News from './pages/news'
import Dashboard from './pages/Dashboard'
import TherapyCards from './pages/TherapyCards'

// import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/therapycards' element={<TherapyCards />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/questions' element={<Questionaire />} />
      <Route path='/chatbot' element={<ChatBot />} />
      <Route path='/Study' element={<Study />} />
      <Route path='/Plan' element={<Plan />} />
      <Route path='/News' element={<News />} />
      <Route path='/login' element={<Login />} />
      

      
    </Routes>
  )
}

export default App
