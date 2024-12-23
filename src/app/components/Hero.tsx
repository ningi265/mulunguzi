'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-400 to-purple-600">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2018-03-11.jpg-JBd9eCeAWK701EG9VIZPEUk4xEZZSG.jpeg"
          alt="Mulunguzi Secondary School campus view"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/30 via-blue-500/30 to-purple-800/30 z-10"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          {/* Title with gradient effect */}
          <h1 className="text-5xl font-bold mb-6 text-white leading-tight animate-fade-in-up delay-100">
            <span className="block">Explore the World</span>
            <span className="block text-gradient animate-fade-in-up delay-300">Through Words</span>
          </h1>

          {/* Description with animation delay */}
          <p className="text-xl mb-8 text-indigo-100 animate-fade-in-up delay-400">
            Discover the power of language and literature with Mulunguzi Secondary School's Languages Department
          </p>

          {/* Action Buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500 justify-center">
            <a
              href="#subjects"
              className="bg-white text-indigo-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100 transition duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              Explore Our Subjects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#events"
              className="bg-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 transition duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 