import { NextResponse } from 'next/server';

// Handles GET requests
export async function GET() {
  return NextResponse.json({ message: 'This is a GET request response' });
}

// Handles POST requests
export async function POST() {
  return NextResponse.json({ message: 'This is a POST request response' });
}
