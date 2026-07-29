export interface Event<TPayload> {
  type: string
  payload: TPayload
}

export interface EventManagerRepository {
  publish<TPayload>(event: Event<TPayload>): void
  subscribe<TPayload>(
    type: string,
    handler: (event: Event<TPayload>) => void,
  ): void
}
