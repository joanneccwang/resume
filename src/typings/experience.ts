interface Product {
  name: string
  time?: string
  bullets: string[]
  imgs?: string[]
  links?: {
    key: string
    href: string
  }[]
}

export interface Company {
  key: string
  time: string
  summary: string[]
  products: Product[]
}
