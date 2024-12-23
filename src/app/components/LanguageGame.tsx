'use client'

import { useState, useEffect } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

const words = [
  { word: 'ubiquitous', definition: 'present, appearing, or found everywhere' },
  { word: 'ephemeral', definition: 'lasting for a very short time' },
  { word: 'serendipity', definition: 'the occurrence and development of events by chance in a happy or beneficial way' },
  { word: 'eloquent', definition: 'fluent or persuasive in speaking or writing' },
  { word: 'enigma', definition: 'a person or thing that is mysterious, puzzling, or difficult to understand' },
]

export default function LanguageGame() {
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
      setFeedback('Correct! 🎉')
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

  return (
    <section id="game" className="py-20 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700">Language Learning Game</h2>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-indigo-700">Guess the Word</CardTitle>
            <CardDescription className="text-lg text-gray-500">Read the definition and guess the word</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-lg text-gray-700">{words[currentWord].definition}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                type="text"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                placeholder="Enter your guess"
                className="border-2 border-indigo-500 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full py-3 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Submit
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-gray-500">{feedback}</p>
            <p className="text-sm text-indigo-600 font-semibold">Score: {score}</p>
          </CardFooter>
        </div>
      </div>
    </section>
  )
}
