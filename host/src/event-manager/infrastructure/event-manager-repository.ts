import type { Event, EventManagerRepository } from "../domain/types";

export class WindowEventRepository implements EventManagerRepository {
  publish<TPayload>(event: Event<TPayload>) {
    window.dispatchEvent(
      new CustomEvent(event.type, { detail: event.payload }),
    );
  }
  subscribe<TPayload>(type: string, handler: (event: Event<TPayload>) => void) {
    const listener = (e: CustomEvent) => {
      handler({
        type,
        payload: e.detail,
      });
    };
    window.addEventListener(type, listener as EventListener);
    return () => window.removeEventListener(type, listener as EventListener);
  }
}
