'use client'

import { Inter } from 'next/font/google'
import { Rocket } from 'lucide-react'
import { X, Check } from 'lucide-react'

import { Notification } from '@/components/Notification'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-full p-4">
      <div className="w-full h-screen md:w-1/4 md:h-2/6">
        <div className="flex flex-row items-center justify-between p-3 px-5 rounded-t-lg bg-zinc-900">
          <p className="text-zinc-400">Notificações</p>
          <button type="button" className="px-2 text-xs text-violet-600">
            MARCAR TODAS COMO VISTAS
          </button>
        </div>
        <div className="p-2 px-5 border-b-2 border-black bg-zinc-950">
          <p className="text-sm text-zinc-500">Recents</p>
        </div>
        <div className="border-b-2 border-black bg-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket}></Notification.Icon>
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.Action
                onClick={() => {
                  alert('cancelar')
                }}
                icon={X}
              />
              <Notification.Action
                onClick={() => {}}
                icon={Check}
                className="dark:bg-violet-500 hover:bg-violet-600"
              />
            </Notification.Actions>
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Rocket}></Notification.Icon>
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.Action icon={Check}>fds</Notification.Action>
            </Notification.Actions>
          </Notification.Root>
        </div>
        <div className="p-2 px-5 border-b-2 border-black bg-zinc-950">
          <p className="text-sm text-zinc-500">Antigas</p>
        </div>
        <div className="border-b-2 border-black bg-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket}></Notification.Icon>
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.Action icon={X}>fds</Notification.Action>
            </Notification.Actions>
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Rocket}></Notification.Icon>
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.Action icon={Check}>fds</Notification.Action>
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>
    </main>
  )
}
