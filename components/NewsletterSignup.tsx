'use client'
import axios from 'axios'
import { Button } from 'components/ui/button'
import { Loader2, MailIcon } from 'lucide-react'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string
}

const Newsletter = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setLoading(true)
    axios
      .put('/api/newsletter', {
        email: formData.email,
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
    <>
      {success ? (
        <div className="mt-32">
          <h1 className="text-base md:text-4xl font-bold text-center">
            Zapisano pomyślnie.
          </h1>
          <p className="text-sm md:text-xl font-bold text-center">
            Na podany adres e-mail została wysłana wiadomość.
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-xl md:text-4xl  mb-10 text-center mt-20">
            Zapisz się na newsletter
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex justify-center items-center  flex-col gap-5"
          >
            <input
              type="email"
              disabled={loading || success}
              placeholder="Twój adres email"
              className="py-2 px-4 text-sm md:text-base md:py-4 md:px-8 md:min-w-[400px] border-2 max-w-[200px] border-black focus-visible:outline-none"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Zły format adresu email',
                },
              })}
            />

            {errors.email && (
              <p className="text-base md:text-xl font-bold text-red-500 mb-2 text-center">
                {errors.email.message}
              </p>
            )}
            {loading ? (
              <Button disabled>
                <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                <span className=" text-lg text-black">Proszę czekać</span>
              </Button>
            ) : (
              <button
                type="submit"
                className=" text-sm md:text-lg transition duration-300 p-4 border-2  border-black bg-sky-600 hover:bg-sky-500 font-bold"
              >
                {' '}
                Zapisz się
              </button>
            )}
          </form>
        </>
      )}
    </>
  )
}

export default Newsletter
