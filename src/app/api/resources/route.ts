import { NextResponse } from 'next/server'

// This is a mock database. In a real application, you would fetch this data from a database.
const mockResources = [
  { id: '1', title: 'Introduction to Shakespeare', type: 'book', link: '/uploads/shakespeare_intro.pdf' },
  { id: '2', title: 'Essay Writing Tips', type: 'video', link: '/uploads/essay_tips.mp4' },
  { id: '3', title: '2023 Literature Past Paper', type: 'paper', link: '/uploads/lit_past_paper_2023.pdf' },
]

export async function GET() {
  // In a real application, you would fetch resources from a database here
  return NextResponse.json(mockResources)
}

