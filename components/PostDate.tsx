import { format, parseISO } from 'date-fns'
import { pl } from 'date-fns/locale'

export default function PostDate({ dateString }: { dateString: string }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, 'dd.MM.yyyy', { locale: pl })}
    </time>
  )
}
