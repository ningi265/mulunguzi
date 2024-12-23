import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-indigo-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">MULUNGUZI SECONDARY SCHOOL</h3>
            <p className="text-indigo-300 font-semibold mb-2">LANGUAGES DEPARTMENT</p>
            <p className="mb-4">Inspiring future writers, thinkers, and communicators</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-r-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Mulunguzi, Secondary School</p>
            <p>Private Bag, 138</p>
            <p>Zomba</p>
            <p>Phone: (+265) 880-7890</p>
            <p>Email: languages@mulunguzi.edu</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-300 transition duration-300"><Facebook /></a>
              <a href="#" className="hover:text-indigo-300 transition duration-300"><Twitter /></a>
              <a href="#" className="hover:text-indigo-300 transition duration-300"><Instagram /></a>
              <a href="#" className="hover:text-indigo-300 transition duration-300"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-700 text-center">
          <p>&copy; 2025 NyasaTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

