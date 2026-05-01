export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to EventSync
          </h1>
          <p className="text-xl text-gray-600">
            Discover and participate in real-time events
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Upcoming Events
          </h2>
          
          {/* Temporary placeholder - will be replaced with EventList component */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
            <p>Event list will appear here once backend is connected</p>
            <p className="text-sm mt-2">Coming soon...</p>
          </div>
        </section>
      </div>
    </div>
  );
}