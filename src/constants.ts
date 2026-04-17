import type { Feature, Industry, MenuItem, PricingPlan, Step, Testimonial } from './types'

export const WA_LINK = `https://wa.me/254791847766?text=${encodeURIComponent('Hi! I want my menu website.\n\nPackage I\'m interested in (Starter / Business / Premium):\nBusiness Name:\nBusiness Type (Restaurant/Salon/Café):\nPhone Number:')}`
export const WA_NUMBER = '254791847766'

export const HOW_STEPS: Step[] = [
  { icon: '📷', label: 'Customer scans QR code', desc: 'On the table, flyer, or Instagram bio — no app needed.' },
  { icon: '🍽️', label: 'They browse & select items', desc: 'Beautiful mobile menu with prices, photos, and categories.' },
  { icon: '💬', label: 'Order sent to WhatsApp', desc: 'One tap and the full order lands in your WhatsApp instantly.' },
]

export const DEMO_ITEMS: MenuItem[] = [
  { name: 'Nyama Choma (500g)', price: 'KES 850', priceNum: 850 },
  { name: 'Ugali + Sukuma', price: 'KES 250', priceNum: 250 },
  { name: 'Pilau (plate)', price: 'KES 350', priceNum: 350 },
  { name: 'Fresh Juice', price: 'KES 150', priceNum: 150 },
  { name: 'Chapati (2 pcs)', price: 'KES 80', priceNum: 80 },
]

export const FEATURES: Feature[] = [
  { icon: '📱', text: 'Works on any phone — no app download' },
  { icon: '💬', text: 'Orders land directly in your WhatsApp' },
  { icon: '📷', text: 'QR code for tables, flyers & Instagram' },
  { icon: '🔗', text: 'Custom link you own forever' },
  { icon: '✏️', text: 'Update your menu anytime, instantly' },
  { icon: '⚡', text: 'Live in 24–48 hours' },
]

export const INDUSTRIES: Industry[] = [
  { icon: '🍔', label: 'Restaurants' },
  { icon: '☕', label: 'Cafés' },
  { icon: '💇🏾♀️', label: 'Salons' },
  { icon: '🍟', label: 'Fast Food' },
  { icon: '🍕', label: 'Takeaways' },
  { icon: '🥗', label: 'Canteens' },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'Starter',
    name: 'Starter',
    price: 'KES 5,100',
    sub: 'setup + KES 1,600/yr domain + KES 2,000/yr hosting',
    features: ['Digital menu website', 'WhatsApp ordering', 'QR code included', 'Custom link'],
  },
  {
    id: 'Business',
    name: 'Business',
    price: 'KES 7,100',
    sub: 'setup + KES 1,600/yr domain + KES 2,000/yr hosting',
    features: ['Everything in Starter', 'Menu updates anytime', 'Priority WhatsApp support', 'Instagram bio link'],
    featured: true,
  },
  {
    id: 'Premium',
    name: 'Premium',
    price: 'KES 11,600',
    sub: 'domain & hosting included · KES 3,600/yr after',
    features: ['Everything in Business', 'Custom branding & design', 'Multiple menu categories', 'Printed QR cards'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'We reduced order delays by half. Customers scan, pick, and we get the order on WhatsApp before they even sit down.', name: 'Mama Njeri', biz: 'Njeri\'s Kitchen, Westlands' },
  { quote: 'My salon clients love it. They see prices before coming in — no more price shock at the counter.', name: 'Aisha M.', biz: 'Glam Studio, Ngong Road' },
  { quote: 'Setup was done in one day. Now I share the QR on my Instagram and orders come in even at night.', name: 'Brian K.', biz: 'Kevo\'s Grill, Kasarani' },
]
