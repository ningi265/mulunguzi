import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  const filePath = path.join(uploadDir, file.name)

  try {
    await writeFile(filePath, buffer)
    console.log(`Uploaded file saved to ${filePath}`)

    // Here you would typically save the file metadata to a database
    // For this example, we'll just return a success message

    return NextResponse.json({ success: true, message: 'File uploaded successfully' })
  } catch (error) {
    console.error('Error saving file:', error)
    return NextResponse.json({ success: false, message: 'Error saving file' }, { status: 500 })
  }
}

