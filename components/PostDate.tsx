import { format, parseISO } from 'date-fns'
import { pl } from 'date-fns/locale'

export default function PostDate({ dateString }: { dateString: string }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className=" text-base md:text-base mr-3">
      {format(date, 'dd.MM.yyyy', { locale: pl })}
    </time>
  )
}
