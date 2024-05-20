import { Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { startTransition, useCallback, useEffect } from 'react'
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
          className="py-4 px-8 min-w border-2 md:min-w-[400px]  outline-slate-500"
          {...register('searchTerm', {
            pattern: {
              value: /^[A-Za-z0-9#!%.\-ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/,
              message: 'Nieodpowiednia wartość w polu',
            },
          })}
        />
        <button type="submit" className="p-4 border-2 border-l-0">
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
