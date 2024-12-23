'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { MessageCircle, X } from 'lucide-react'

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'support' }[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }])
      setInputMessage('')
      // Simulate a response from support
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. A support representative will be with you shortly.", sender: 'support' }])
      }, 1000)
    }
  }

  return (
    <>
      {!isOpen && (
        <Button
          className="fixed bottom-4 right-4 rounded-full p-4"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 w-80 h-96 flex flex-col">
          <CardHeader className="flex flex-row items-center">
            <CardTitle className="flex-grow">Live Support</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSendMessage} className="w-full flex">
              <Input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow mr-2"
              />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

