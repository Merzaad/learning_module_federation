import React, { createContext, useState, useContext } from "react";

interface EventContextType {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const EventContext = createContext<EventContextType | null>(null);

interface EventProviderProps {
  children: React.ReactNode;
}

export function EventProvider({ children }: EventProviderProps) {
  const [state, setState] = useState<number>(0);

  const value: EventContextType = {
    state,
    setState,
  };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
}

export function useEventContext(): EventContextType {
  const context = useContext(EventContext);

  if (context === null) {
    throw new Error("useEventContext must be used within an EventProvider");
  }

  return context;
}

export { EventContext };
