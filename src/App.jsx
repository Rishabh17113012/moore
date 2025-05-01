import React from 'react'
import Navbar from './components/Navbar' 
import Hero from './components/Hero'
import FeatureSection from './components/featuresection'
import BookingExperience from './components/BookingExperience'
import SchedulingWorkflow from './components/SchedulingWorkflow'
import CustomBookingSection from './components/CustomBookingSection'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Hero/>
        <SchedulingWorkflow/>
        <CustomBookingSection/>
        <BookingExperience/>
        <FeatureSection/>
      </main>
    </div>
  )
}

export default App