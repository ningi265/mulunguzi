'use client'

import { useState } from 'react'
import { BookOpen, Globe, MessageCircle } from 'lucide-react'

const subjects = [
  { 
    name: "English",
    icon: BookOpen, 
    description: "Explore the beauty of the English language through literature, writing, and communication.",
    details: "Our English program includes courses in literature, creative writing, and language composition. We focus on improving both written and oral communication skills to help students excel academically and professionally.",
    resources: ["Shakespeare's Works", "Creative Writing Techniques", "Advanced English Grammar"],
    languageSkills: "Fluency in speaking, reading, and writing English, with an emphasis on academic writing and effective communication."
  },
  { 
    name: "French",
    icon: Globe, 
    description: "Discover the world through the French language and culture.",
    details: "The French program offers comprehensive courses that cover language learning, French literature, and cultural studies. Our students learn how to communicate effectively in French while exploring the rich heritage of French-speaking countries through literature, cinema, and history.",
    resources: ["French Literature", "French Cinema", "Conversational French"],
    languageSkills: "Fluency in speaking, writing, reading, and understanding French, focusing on both language acquisition and cultural insights."
  },
  { 
    name: "Chichewa",
    icon: MessageCircle, 
    description: "Learn Chichewa, one of the main languages of Malawi, and gain a deeper understanding of its culture.",
    details: "Chichewa is a Bantu language spoken by millions in Malawi. Our Chichewa program covers grammar, vocabulary, conversation skills, and cultural context. Students will be able to communicate effectively in daily life and understand the cultural significance of the language in Malawi.",
    resources: ["Chichewa Grammar", "Cultural Context of Chichewa", "Conversational Chichewa"],
    languageSkills: "Mastery in speaking, reading, and writing Chichewa, with a focus on practical communication and cultural understanding."
  },
]

export default function Subjects() {
  const [activeTab, setActiveTab] = useState(0)
  const [showResources, setShowResources] = useState(false)

  const toggleResources = () => {
    setShowResources(prev => !prev)
  }

  return (
    <section id="subjects" className="py-20 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-indigo-800">Our Subjects</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="flex flex-col space-y-4">
              {subjects.map((subject, index) => (
                <button
                  key={index}
                  className={`p-6 text-left rounded-lg transition duration-300 transform hover:scale-105 ${
                    activeTab === index
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center space-x-3">
                    <subject.icon className="w-7 h-7" />
                    <span className="font-semibold text-lg">{subject.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-indigo-800">{subjects[activeTab].name}</h3>
            <p className="text-lg mb-4 text-gray-700">{subjects[activeTab].description}</p>
            <p className="text-gray-600 mb-4">{subjects[activeTab].details}</p>
            <button
              onClick={toggleResources}
              className="text-indigo-600 hover:underline mb-4"
            >
              {showResources ? "Hide Resources" : "Show Resources"}
            </button>
            {showResources && (
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800">Resources:</h4>
                <ul className="list-disc pl-5">
                  {subjects[activeTab].resources.map((resource, index) => (
                    <li key={index} className="text-gray-600">{resource}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-4">
              <h4 className="font-semibold text-indigo-800">Language Skills Focus:</h4>
              <p className="text-gray-600">{subjects[activeTab].languageSkills}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
