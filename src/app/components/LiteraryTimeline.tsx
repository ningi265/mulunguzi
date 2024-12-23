'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

const words = [
  { word: 'ubiquitous', definition: 'present, appearing, or found everywhere' },
  { word: 'ephemeral', definition: 'lasting for a very short time' },
  { word: 'serendipity', definition: 'the occurrence and development of events by chance in a happy or beneficial way' },
  { word: 'eloquent', definition: 'fluent or persuasive in speaking or writing' },
  { word: 'enigma', definition: 'a person or thing that is mysterious, puzzling, or difficult to understand' },
]

const timelineEvents = [
  { year: '800 BCE', event: 'Homer\'s Iliad and Odyssey', description: 'These ancient Greek epics are among the oldest extant works of Western literature.' },
  { year: '1st Century BCE', event: 'Virgil\'s Aeneid', description: 'This Latin epic poem is considered one of the greatest works of Latin literature.' },
  { year: '14th Century', event: 'Dante\'s Divine Comedy', description: 'This Italian narrative poem is a cornerstone of European literature.' },
  { year: '16th Century', event: 'Shakespeare\'s Plays', description: 'William Shakespeare\'s works revolutionized English literature and theater.' },
  { year: '1605', event: 'Don Quixote by Cervantes', description: 'Often called the first modern novel, this Spanish masterpiece influenced literature worldwide.' },
  { year: '18th Century', event: 'Rise of the Novel', description: 'Authors like Daniel Defoe and Samuel Richardson popularized the novel as a literary form.' },
  { year: '19th Century', event: 'Romanticism and Realism', description: 'These movements shaped literature with works by authors like Jane Austen, Charles Dickens, and Leo Tolstoy.' },
  { year: '20th Century', event: 'Modernism', description: 'Authors like James Joyce and Virginia Woolf experimented with new literary techniques.' },
  { year: 'Late 20th Century', event: 'Postmodernism', description: 'Writers like Gabriel García Márquez and Toni Morrison challenged traditional narrative structures.' },
  { year: '21st Century', event: 'Digital Literature', description: 'The internet and e-books are changing how literature is created, distributed, and consumed.' },
]

export default function LearningApp() {
  // Language Game State
  const [currentWord, setCurrentWord] = useState(0)
  const [userGuess, setUserGuess] = useState('')
  const [feedback, setFeedback] = useState('')
  const [score, setScore] = useState(0)

  useEffect(() => {
    shuffleWords()
  }, [])

  const shuffleWords = () => {
    const shuffled = [...words].sort(() => Math.random() - 0.5)
    setCurrentWord(0)
    return shuffled
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userGuess.toLowerCase() === words[currentWord].word.toLowerCase()) {
      setFeedback('Correct!')
      setScore(score + 1)
    } else {
      setFeedback(`Incorrect. The correct word is "${words[currentWord].word}".`)
    }
    setUserGuess('')
    if (currentWord < words.length - 1) {
      setCurrentWord(currentWord + 1)
    } else {
      setCurrentWord(0)
      shuffleWords()
    }
  }

  // Literary Timeline State
  const [activeEvent, setActiveEvent] = useState<number | null>(null)

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Language Game Section */}
        <section id="game" className="flex flex-col">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700">Language Learning Game</h2>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Guess the Word</CardTitle>
              <CardDescription>Read the definition and guess the word</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg">{words[currentWord].definition}</p>
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                  placeholder="Enter your guess"
                  className="mb-4"
                />
                <Button type="submit">Submit</Button>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-sm">{feedback}</p>
              <p className="text-sm ml-auto">Score: {score}</p>
            </CardFooter>
          </Card>
        </section>

        {/* Literary Timeline Section */}
        <section id="timeline" className="flex flex-col">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700">Literary History Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-500"></div>
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative mb-10 ${index % 2 === 0 ? 'md:left-1/2 md:ml-8' : 'md:left-0 md:mr-8 md:text-right'}`}>
                <div className="absolute right-full md:right-auto md:left-full top-5 transform translate-x-1/2 md:translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-500"></div>
                <Card 
                  className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-xl p-4 bg-white"
                  onClick={() => setActiveEvent(activeEvent === index ? null : index)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-indigo-600">{event.year}</CardTitle>
                    <CardDescription className="text-lg text-gray-600">{event.event}</CardDescription>
                  </CardHeader>
                  {activeEvent === index && (
                    <CardContent className="mt-4 text-gray-700">
                      <p>{event.description}</p>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
