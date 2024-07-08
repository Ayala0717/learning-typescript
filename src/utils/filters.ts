export function filters<T, K extends keyof T>(state: T, key: K) {
  return state[key]
}
