export type Theme = 'dark' | 'light'

export type Package = 'Starter' | 'Business' | 'Premium'

export interface MenuItem {
  name: string
  price: string
  priceNum: number
}

export interface CartItem extends MenuItem {
  qty: number
}

export interface PricingPlan {
  id: Package
  name: string
  price: string
  sub: string
  features: string[]
  featured?: boolean
}

export interface Feature {
  icon: string
  text: string
}

export interface Step {
  icon: string
  label: string
  desc: string
}

export interface Testimonial {
  quote: string
  name: string
  biz: string
}

export interface Industry {
  icon: string
  label: string
}
