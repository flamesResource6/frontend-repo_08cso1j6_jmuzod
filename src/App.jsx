import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CourseList from './components/CourseList'
import QuickCreate from './components/QuickCreate'

function App() {
  const [refreshKey, setRefreshKey] = useState(0)
  useEffect(() => {
    const onCreated = () => setRefreshKey((k) => k + 1)
    window.addEventListener('course-created', onCreated)
    return () => window.removeEventListener('course-created', onCreated)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <Header />
        <Hero />
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-4">
            <CourseList key={refreshKey} />
          </div>
          <div>
            <QuickCreate />
          </div>
        </div>
        <footer className="text-center text-sm text-gray-500 py-12">Built for consultants and clients</footer>
      </div>
    </div>
  )
}

export default App
