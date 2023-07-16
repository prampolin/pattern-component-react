interface Props {
  children: React.ReactNode
}
export function NotificationRoot({ children }: Props) {
  return (
    <div className="flex items-start gap-6 px-6 py-4 border-b last:border-b-0 border-zinc-800 bg-zinc-200 dark:bg-zinc-900">
      {children}
    </div>
  )
}
