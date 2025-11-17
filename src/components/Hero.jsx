export default function Hero() {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
        A clean LMS for consultancy teams
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Package your expertise into simple courses, share lessons with clients, and book sessions — all in one place.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a href="#quickstart" className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700">Quick start</a>
        <a href="#courses" className="px-5 py-3 rounded-lg bg-white text-gray-800 font-medium border border-gray-200 hover:bg-gray-50">Browse courses</a>
      </div>
    </section>
  )
}
