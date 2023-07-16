interface Props {
  text: string
}

export function NotificationContent({ text }: Props) {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
        {text}
      </p>
      <div className="flex items-center gap-1 text-xs text-zinc-400">
        <span>Convite</span>
        <span> Há 3 min</span>
      </div>
    </div>
  )
}
