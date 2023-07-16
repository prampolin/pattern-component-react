import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType
}

export function NotificationAction({ icon: Icon, ...rest }: Props) {
  return (
    <button
      type="button"
      {...rest}
      className={twMerge(
        'flex items-center justify-center w-8 h-8 rounded bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 text-zinc-50',
        rest.className,
      )}
    >
      <Icon className="w-3 h-3 text-zinc-50" />
    </button>
  )
}
