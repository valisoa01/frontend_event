export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to EventSync
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and participate in real-time events. Ask questions, upvote, and engage with speakers during live sessions.
          </p>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card p-6">
            <div className="text-primary-500 text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Smart Planning</h3>
            <p className="text-gray-600">View multi-track schedules and identify live sessions at a glance.</p>
          </div>
          
          <div className="card p-6">
            <div className="text-primary-500 text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">Live Q&A</h3>
            <p className="text-gray-600">Ask questions in real-time and upvote your favorites.</p>
          </div>
          
          <div className="card p-6">
            <div className="text-primary-500 text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">Personal Schedule</h3>
            <p className="text-gray-600">Save favorite sessions and build your personal agenda.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to explore events?
          </h2>
          <p className="text-gray-600 mb-6">
            Browse upcoming events and start your interactive experience .
          </p>
          <button className="btn-primary">
            Browse Events
          </button>
        </section>
      </div>
    </div>
  );
}