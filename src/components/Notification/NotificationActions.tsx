interface Props {
  children: React.ReactNode
}

export function NotificationActions({ children }: Props) {
  return <div className="flex self-center gap-2">{children}</div>
}
