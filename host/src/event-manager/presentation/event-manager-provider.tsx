// presentation/providers/EventProvider.tsx

import { createContext, useContext, useMemo } from "react"
import { EventManager } from "../application/event-manager"
import { WindowEventRepository } from "../infrastructure/event-manager-repository"

const EventContext = createContext<EventManager | null>(null)

interface EventProviderProps {
  children: React.ReactNode
}

export function EventManagerProvider({ children }: EventProviderProps) {
  const eventManager = useMemo(() => {
    const eventManagerRepository = new WindowEventRepository()

    return new EventManager(eventManagerRepository)
  }, [])

  return (
    <EventContext.Provider value={eventManager}>
      {children}
    </EventContext.Provider>
  )
}

export function useEventManager() {
  const context = useContext(EventContext)

  if (!context) {
    throw new Error("useEventManager must be used inside EventProvider")
  }

  return context
}
