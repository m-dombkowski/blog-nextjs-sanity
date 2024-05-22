'use client'
import axios from 'axios'
import { Loader2, MailIcon } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from 'components/ui/button'

const Newsletter = () => {
  const [email, setEmail] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    axios
      .put('/api/newsletter', {
        email: email,
      })
      .then((res: any) => {
        if (res.status === 200) {
          console.log(res)
          setLoading(false)
          setSuccess(true)
        } else {
          setLoading(false)
        }
      })
      .catch((err: any) => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <div className="p-32">
      <h2 className="text-stroke animate-title z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-center text-3xl font-bold text-transparent duration-1000 sm:text-4xl md:text-4xl">
        Join the waitlist for my
      </h2>
      <h1 className="animate-fade-in-3 z-10 cursor-default whitespace-nowrap bg-white bg-gradient-to-r from-purple-300 to-purple-800 bg-clip-text text-center text-4xl font-bold text-transparent duration-1000 sm:text-6xl md:text-5xl">
        Newsletter
      </h1>
      {success ? (
        <div className="flex justify-center items-center pt-12">
          <div className="isolate aspect-video h-32 w-96 flex flex-col justify-center items-center rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
            Thanks for subscribing! 🎉
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full flex justify-center items-center pt-12"
        >
          <div className="min-w-1/2 w-full sm:py-3 shadow-outline-gray focus-within:!shadow-outline-gray-focus group flex items-center gap-x-4 rounded-[9px] bg-[#090D11] py-1 pl-4 pr-1 transition-all duration-300 focus-within:bg-[#15141B] hover:bg-[#15141B] hover:shadow-transparent">
            <MailIcon className="hidden h-6 w-6 text-[#4B4C52] transition-colors duration-300 group-focus-within:text-white group-hover:text-white sm:inline" />
            <input
              disabled={loading || success}
              value={email ?? ''}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              type="email"
              className="flex-1 bg-transparent text-sm text-white placeholder-[#4B4C52] outline-none placeholder:transition-colors placeholder:duration-300 group-focus-within:placeholder-white sm:text-base"
            />
            {loading ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <button
                type="submit"
                className="p-2 bg-zinc-400 text-white rounded-sm"
              >
                {' '}
                Subscribe
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

export default Newsletter
