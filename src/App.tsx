import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import BookingBar from './components/BookingBar/BookingBar'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BookingBar />
      <Layout />
    </div>
  )
}

export default App
