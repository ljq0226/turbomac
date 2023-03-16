'use client'
import React, { useState } from 'react'

interface Message {
  text: string
  isBot: boolean
}
const ChatGPT: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const sendMessage = async () => {
    if (inputValue.trim() === '')
      return
    const newMessage: Message = {
      text: inputValue.trim(),
      isBot: false,
    }
    setMessages(prevMessages => [...prevMessages, newMessage])
    setInputValue('')
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Authorization': 'Bearer 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',
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: inputValue.trim() }],
            max_tokens: 100,
            model: 'gpt-3.5-turbo',
          }),
        },
      )

      const data = await response.json()

      if (data?.choices?.[0]?.message) {
        const botMessage: Message = {
          text: data.choices[0].message.content.trim(),
          isBot: true,
        }
        setMessages(prevMessages => [...prevMessages, botMessage])
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter')
      sendMessage()
  }

  return (
    <div className="w-full h-full  bg-[#343540] rounded-lg shadow-lg">
      <div className="fixed rounded-t-lg w-full top-0 h-7 bg-[#343540]"></div>
      <div className="flex flex-col px-3 py-6">
        <h1 className="text-2xl font-bold text-gray-100">Chat with GPT!</h1>
        <div className="mt-4 overflow-y-scroll chatlist h-[450px]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start text-white mt-4 ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`p-3 rounded-lg ${message.isBot ? 'bg-primary  rounded-bl-none' : 'bg-gray-500  rounded-br-none'}`}
              >
                <p className="text-sm text-gray-100">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed flex w-full bottom-[30px]">
          <input
            type="text"
            className="py-2 border rounded-lg w-[320px] focus:outline-none focus:ring-2 ring-blue-500"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="px-4 py-2 w-[90px] ml-2 text-white bg-primary rounded-lg disabled:opacity-50"
            disabled={inputValue.trim() === ''}
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>

    </div>
  )
}

export default ChatGPT
