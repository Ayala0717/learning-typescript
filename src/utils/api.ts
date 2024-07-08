interface IndexResponse<T> {
  data: T
}

interface IndexOptions {
  active?: boolean
  limit?: number
}

type IndexFn<T> = (filter?: IndexOptions) => Promise<IndexResponse<T>>

interface ApiService<T> {
  index: IndexFn<T>
}

export function apiService<T>(url: string): ApiService<T> {
  return {
    async index(): Promise<IndexResponse<T>> {
      const response = await fetch(url)
      const data = await response.json()

      return {
        data
      }
    }
  }
}
