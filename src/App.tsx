import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import BookingBar from './components/BookingBar/BookingBar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BookingBar />

      <h1>Welcome</h1>
    </div>
  )
}

export default App
