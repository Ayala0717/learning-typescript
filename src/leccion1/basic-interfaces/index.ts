interface Commons {
  id: number
}

interface Dates {
  created_at?: string | Date
  update_at?: string
}

interface Meta {
  meta?: string
}

interface Origin {
  name: string
  url: string
  meta?: Meta
}

interface Characters extends Commons, Dates {
  name: string
  status: string
  type?: string
  gender?: string | number
  origin?: Origin
}

export const characters: Characters = {
  id: 8,
  name: 'aosdaj',
  status: 'dasda',
  type: 'false',
  gender: 2,
  created_at: 'asdasd',
  update_at: 'asdasda',
  origin: {
    name: 'dsasd',
    url: 'dasad',
    meta: {
      meta: 'dadadsa'
    }
  }
}
