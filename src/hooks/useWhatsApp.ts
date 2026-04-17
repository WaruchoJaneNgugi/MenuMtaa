import { WA_NUMBER } from '../constants'
import type { Package } from '../types'

export function useWhatsApp() {
  return (pkg: Package, price: string): string => {
    const msg = `Hi! I'd like to book the MenuMtaa *${pkg} Package* (${price}).\n\nBusiness Name:\nBusiness Type (Restaurant/Salon/Café):\nPhone Number:`
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
  }
}
