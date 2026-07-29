import type { Event, EventManagerRepository } from "../domain/types"

export class EventManager {
  repository
  constructor(repository: EventManagerRepository) {
    this.repository = repository
  }
  publish<TPayload>(event: Event<TPayload>) {
    this.repository.publish(event)
  }
  subscribe<TPayload>(type: string, handler: (event: Event<TPayload>) => void) {
    return this.repository.subscribe(type, handler)
  }
}
