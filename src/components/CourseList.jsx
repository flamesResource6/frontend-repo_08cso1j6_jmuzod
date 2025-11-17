import { useEffect, useState } from 'react'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CourseList() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${BASE_URL}/courses`)
        if (!res.ok) throw new Error('Failed to fetch courses')
        const data = await res.json()
        setCourses(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCourses()
  }, [])

  if (loading) return <p className="text-gray-500">Loading courses...</p>
  if (error) return <p className="text-red-600">{error}</p>

  if (!courses.length) {
    return (
      <div className="bg-indigo-50 border border-dashed border-indigo-200 rounded-lg p-6 text-center">
        <p className="text-indigo-800 font-medium">No courses yet</p>
        <p className="text-indigo-700/80 text-sm mt-1">Create your first course below.</p>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" id="courses">
      {courses.map((c) => (
        <div key={c.id} className="rounded-xl border border-gray-200 p-5 bg-white hover:shadow-sm transition">
          <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-3 mt-1">{c.description || 'No description'}</p>
          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <span>{c.tags?.length || 0} tags</span>
            <span>{c.is_published ? 'Published' : 'Draft'}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
