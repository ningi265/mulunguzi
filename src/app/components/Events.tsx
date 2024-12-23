import { Calendar, Clock, MapPin } from 'lucide-react'

export default function Events() {
  const events = [
    { title: "Reading Research", date: "2025-01-13", time: "13:00 to 15:00", location: "School Hall", description: "A term-long research and presentations on different topics in English" },
    { title: "Teaching Comprehension Workshop", date: "2025-01-10", time: "08:00", location: "Multipurpose Hall", description: "Hone your comprehension teaching skills with guidance from language experts." },
    { title: "Writer's Workshop Symposium", date: "2024-03-01", time: "16:00", location: "Library", description: "Join us for an exciting display of our students literary works" },
    { title: "Drama Club", date: "2024-03-01", time: "16:00", location: "School Hall", description: "Enjoy our students performance in Macbeth " },
  ]

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-indigo-800">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-indigo-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="bg-indigo-600 text-white p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

