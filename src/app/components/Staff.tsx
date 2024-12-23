'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

const staffMembers = [
  { name: "Mr.Lloyd Ngwira ", role: "Department Head", email: "lngwira@mulunguzi.edu", bio: "Dr. Wordsworth has been leading our department for over a decade, specializing in 20th-century literature." },
  { name: "Mr. Moyenda Chitimbe", role: "Deputy Department Head", email: "tmsukwa@mulunguzi.edu", bio: "Dr. Achebe's expertise in African literature provides students with a global perspective on storytelling and cultural narratives." },
  { name: "Mrs.Tusaghiwe Kamanga ", role: "Teacher of English", email: "tkamanga@mulunguzi.edu", bio: "Mr. Joyce brings his passion for modernist literature to our classrooms, inspiring students with innovative teaching methods." },
  { name: "Mr. Joseph Nkhoma ", role: "Teacher of French", email: "s.nkhoma@mulunguzi.edu", bio: "Ms. Plath's creative writing workshops have produced award-winning student authors for three consecutive years." },
  { name: "Ms. Mary Phwitiko", role: "Chichewa Teacher", email: "mpwitiko@mulunguzi.edu", bio: "Dr. Achebe's expertise in African literature provides students with a global perspective on storytelling and cultural narratives." },
  { name: "Mrs. Tamiwe Lijoni Msukwa", role: "Chichewa Teacher", email: "tmsukwa@mulunguzi.edu", bio: "Dr. Achebe's expertise in African literature provides students with a global perspective on storytelling and cultural narratives." },
  { name: "Mr. Blessings Betha", role: "Teacher of English", email: "bbetha@mulunguzi.edu", bio: "Dr. Achebe's expertise in African literature provides students with a global perspective on storytelling and cultural narratives." },
  { name: "Mrs. Changa Bandula", role: "Teacher of English", email: "tmsukwa@mulunguzi.edu", bio: "Dr. Achebe's expertise in African literature provides students with a global perspective on storytelling and cultural narratives." },
  { name: "Mrs. Grace Sharra", role: "Chichewa Teacher", email: "tmsukwa@mulunguzi.edu", bio: "Dr. Achebe's expertise in African literature provides students with a global perspective on storytelling and cultural narratives." },
  { name: "Mrs. Vitumbiko Njoka Phiri", role: " Teacher of French & English", email: "tmsukwa@mulunguzi.edu", bio: "Dr. Achebe's expertise in African literature provides students with a global perspective on storytelling and cultural narratives." },
  { name: "Ms. Michelle Dzimbiri", role: " Teacher of English", email: "tmsukwa@mulunguzi.edu", bio: "Dr. Achebe's expertise in African literature provides students with a global perspective on storytelling and cultural narratives." },
  { name: "Mr. Hastings  Kaitano", role: " Teacher of English", email: "tmsukwa@mulunguzi.edu", bio: "Dr. Achebe's expertise in African literature provides students with a global perspective on storytelling and cultural narratives." },
  { name: "Mr. Charles  Kasunda", role: "Chichewa Teacher", email: "tmsukwa@mulunguzi.edu", bio: "Dr. Achebe's expertise in African literature provides students with a global perspective on storytelling and cultural narratives." },
]

export default function Staff() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(0)

  const staffPerPage = 3
  const startIndex = currentPage * staffPerPage
  const currentStaff = staffMembers.slice(startIndex, startIndex + staffPerPage)

  const totalPages = Math.ceil(staffMembers.length / staffPerPage)

  const getInitials = (name: string) => {
    const initials = name
      .split(' ')
      .map((part) => part[0])
      .join('')
    return initials.toUpperCase()
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section id="staff" className="py-20 bg-background dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center text-primary dark:text-primary-dark">
          Meet Our Staff
        </h2>
        {/* Staff Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {currentStaff.map((member, index) => (
            <div
              key={index}
              className={`bg-card dark:bg-card-dark rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105 delay-${index * 100} cursor-pointer hover:shadow-xl`}
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              {/* Profile Icon */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary text-primary-foreground dark:bg-primary-dark dark:text-primary-dark-foreground flex items-center justify-center text-2xl font-semibold">
                {getInitials(member.name)}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark">{member.name}</h3>
                <p className="text-muted-foreground dark:text-muted-foreground-dark mt-1">{member.role}</p>
              </div>
              <div className="mt-4 text-center text-muted dark:text-muted-dark">
                <p className="text-sm">{member.bio}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center mt-4 text-primary hover:text-primary-foreground dark:text-primary-dark hover:dark:text-primary-dark-foreground transition duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage > 0 ? currentPage - 1 : currentPage)}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="flex items-center text-lg font-medium">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage < totalPages - 1 ? currentPage + 1 : currentPage)}
            disabled={currentPage === totalPages - 1}
            className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}
