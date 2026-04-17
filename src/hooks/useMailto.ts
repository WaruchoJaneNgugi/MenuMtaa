import type { Package } from '../types'

export function useMailto() {
  return (pkg: Package): string => {
    const subject = `MenuMtaa ${pkg} Package Inquiry`
    const body = `Hi,\n\nI'm interested in the MenuMtaa ${pkg} Package.\n\nBusiness Name:\nBusiness Type (Restaurant/Salon/Café):\nPhone Number:\n\nThank you!`
    return `mailto:waruchojanen@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }
}
