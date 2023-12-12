import { ReactNode } from "react"

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <h1>Aplicação</h1>
      {children}
    </div>
  )
}
