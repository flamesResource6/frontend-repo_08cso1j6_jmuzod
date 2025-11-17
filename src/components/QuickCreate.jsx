import { useState } from 'react'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function QuickCreate() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')

  const createCourse = async (e) => {
    e.preventDefault()
    setBusy(true)
    setMessage('')
    try {
      const res = await fetch(`${BASE_URL}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, consultant_id: 'demo-consultant', tags: [], is_published: false })
      })
      if (!res.ok) throw new Error('Failed to create course')
      const data = await res.json()
      setMessage(`Created course #${data.id}`)
      setTitle('')
      setDescription('')
      window.dispatchEvent(new Event('course-created'))
    } catch (e) {
      setMessage(e.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section id="quickstart" className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-lg font-semibold text-gray-900">Quick create</h3>
      <p className="text-sm text-gray-600 mb-4">Add a course title and optional description.</p>
      <form onSubmit={createCourse} className="grid gap-3">
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Course title" className="w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" required />
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" className="w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" rows={3} />
        <button disabled={busy} className="justify-self-start px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50">
          {busy ? 'Creating...' : 'Create course'}
        </button>
        {message && <p className="text-sm text-gray-700">{message}</p>}
      </form>
    </section>
  )
}
