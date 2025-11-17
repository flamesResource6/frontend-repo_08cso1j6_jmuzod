import { useMemo } from 'react'

export default function Header() {
  const envUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white grid place-items-center font-bold">
          C
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Consultancy LMS</h1>
          <p className="text-xs text-gray-500">Backend: {envUrl.replace('https://','').replace('http://','')}</p>
        </div>
      </div>
      <a href="/test" className="text-sm text-indigo-600 hover:text-indigo-700">Check Connection</a>
    </header>
  )
}
