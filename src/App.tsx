import React, { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import BookingBar from './components/BookingBar/BookingBar'
import Layout from './components/Layout/Layout'

function App() {
  const [showFilter, setShowFilter] = useState(false)

  const toggleFilter = () => {
    if (!showFilter) {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
      setShowFilter(true)
    } else {
      setShowFilter(false)
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <div className='App'>
      <Navbar />
      <BookingBar showFilter={toggleFilter} />
      <Layout filter={showFilter} showFilter={toggleFilter} />
    </div>
  )
}

export default App
