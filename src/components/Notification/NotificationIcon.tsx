interface NotificationProps {
  icon: React.ElementType
}

export function NotificationIcon({ icon: Icon }: NotificationProps) {
  return <Icon className="w-6 h-6 mt-3 text-violet-500" />
}
