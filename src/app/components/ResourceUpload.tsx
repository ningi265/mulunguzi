'use client'

import { useState } from 'react'
import { Upload, CheckCircle, AlertCircle } from 'lucide-react'

export default function ResourceUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<'success' | 'error' | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setUploadStatus(null)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setUploadStatus('success')
      } else {
        setUploadStatus('error')
      }
    } catch (error) {
      console.error('Upload error:', error)
      setUploadStatus('error')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-indigo-800">Upload Resource</h3>
      <div className="mb-4">
        <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
          Select file to upload
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
        />
      </div>
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {uploading ? (
          <span className="flex items-center justify-center">
            <Upload className="animate-spin mr-2" />
            Uploading...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            <Upload className="mr-2" />
            Upload Resource
          </span>
        )}
      </button>
      {uploadStatus === 'success' && (
        <p className="mt-2 text-green-600 flex items-center">
          <CheckCircle className="mr-2" /> Upload successful!
        </p>
      )}
      {uploadStatus === 'error' && (
        <p className="mt-2 text-red-600 flex items-center">
          <AlertCircle className="mr-2" /> Upload failed. Please try again.
        </p>
      )}
    </div>
  )
}

