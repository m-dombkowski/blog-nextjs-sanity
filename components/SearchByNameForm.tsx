import { Search } from 'lucide-react'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
type Inputs = {
  searchTerm: string
}

export default function SearchByNameForm({
  initialDefaultValue,
}: {
  initialDefaultValue: string
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  let router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const formatedSearchTerm = formData.searchTerm
      .split(' ')
      .join('-')
      .toLowerCase()
    router.push(`/search/${formatedSearchTerm}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex mb-10">
        <input
          type="text"
          defaultValue={initialDefaultValue}
          placeholder="Wpisz tytuł którego szukasz"
          className="py-2 px-4 text-sm md:text-base md:py-4 md:px-8 md:min-w-[400px] border-2 max-w-[200px] border-black focus-visible:outline-none"
          {...register('searchTerm', {
            pattern: {
              value: /^[A-Za-z0-9#!%.\-ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/,
              message: 'Nieodpowiednia wartość w polu',
            },
          })}
        />
        <button
          type="submit"
          className="p-4 border-2 border-l-0 border-black bg-sky-600"
        >
          <Search className="h-6 w-6" />
        </button>
      </form>
      {errors.searchTerm && (
        <p className=" text-xl font-bold text-red-500 mb-20">
          {errors.searchTerm.message}
        </p>
      )}
    </>
  )
}
