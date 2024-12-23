import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function News() {
  const featuredNews = {
    title: "Mulunguzi Students Shine in Research Project Presentations",
    date: "2024-01-20",
    image: "/images/mlunguzi2.jpg", 
    content: "Our talented students mesmerized the audience in the presentations of the research topics showcasing the prowess of Mulunguzi Language Department.",
  };
  
  const newsItems = [
    {
      title: "New Digital Library Resources",
      date: "2024-01-10",
      image: "/images/mlunguzi.jpg",
      content: "Our library now offers access to an extensive collection of e-books and digital literary journals.",
    },
    {
      title: "Upcoming Shakespeare Festival",
      date: "2024-01-05",
      image: "/images/mlunguzi2.jpg", 
      content: "Join us for a day-long celebration of the Shakespearean works, featuring performances, workshops, and guest lectures.",
    },
  ];
  

  return (
    <section id="news" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-indigo-800">Latest News</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <Image src={featuredNews.image} alt={featuredNews.title} width={600} height={400} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-indigo-800">{featuredNews.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{new Date(featuredNews.date).toLocaleDateString()}</p>
              <p className="text-gray-700 mb-4">{featuredNews.content}</p>
              <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300">
                Read more <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex">
                <Image src={item.image} alt={item.title} width={300} height={200} className="w-1/3 object-cover" />
                <div className="p-6 w-2/3">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">{item.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{new Date(item.date).toLocaleDateString()}</p>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

