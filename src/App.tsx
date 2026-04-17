import { useEffect } from 'react'
import './App.css'
import { useAppStore } from './store/useAppStore'
import { useReveal } from './hooks/useReveal'
import { useWhatsApp } from './hooks/useWhatsApp'
import {
  WA_LINK, WA_NUMBER,
  HOW_STEPS, DEMO_ITEMS, FEATURES,
  INDUSTRIES, PRICING_PLANS, TESTIMONIALS,
} from './constants'

export default function App() {
  const { theme, toggleTheme, cart, addToCart, removeFromCart, clearCart, cartTotal } = useAppStore()
  const getWhatsApp = useWhatsApp()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useReveal()

  const cartCount = cart.reduce((s, c) => s + c.qty, 0)

  function buildWAOrder() {
    const lines = cart.map(c => `• ${c.name} x${c.qty} — ${c.price}`).join('\n')
    const msg = `Hi! I'd like to order:\n\n${lines}\n\nTotal: KES ${cartTotal().toLocaleString()}`
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <span className="logo">Menu<span>Mtaa</span></span>
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href="#demo" className="btn-outline">View Demo</a>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary nav-cta">Get Your Menu</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <div className="urgency-badge">⚡ Setup in 24–48 hours</div>
          <h1>Turn your menu into a QR code — customers scan and order on <span>WhatsApp</span> instantly</h1>
          <p className="sub">Faster service. More orders. Less waiting. No app needed.</p>
          <div className="cta-row">
            <a href="#demo" className="btn-primary">📲 View Demo</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-ghost">Get Your Menu →</a>
          </div>
          <p className="social-nudge">✅ Trusted by restaurants, salons &amp; cafés across Nairobi</p>
        </div>
        <div className="hero-img-wrap">
          <img src="/hero.png" alt="MenuMtaa demo on phone" className="hero-img" />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries">
        <p className="industries-label">Perfect for</p>
        <div className="industries-row">
          {INDUSTRIES.map(({ icon, label }) => (
            <div className="industry-pill" key={label}>{icon} {label}</div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <h2 className="section-title">How It Works</h2>
        <p className="section-sub">3 steps. No app. No confusion.</p>
        <div className="how-grid">
          {HOW_STEPS.map((s, i) => (
            <div className="how-card reveal" key={i}>
              <div className="how-num">{i + 1}</div>
              <div className="how-icon">{s.icon}</div>
              <h3>{s.label}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">Get Your Menu Now →</a>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section className="demo-section" id="demo">
        <h2 className="section-title">Try a Live Demo</h2>
        <p className="section-sub">This is exactly what your customers will see. Add items and send a real WhatsApp order.</p>
        <div className="demo-wrap">
          <div className="demo-phone">
            <div className="demo-phone-header">
              <span className="demo-biz-name">🍽️ Mama Njeri's Kitchen</span>
              <span className="demo-tag">Demo Menu</span>
            </div>
            <div className="demo-items-list">
              {DEMO_ITEMS.map(item => {
                const inCart = cart.find(c => c.name === item.name)
                return (
                  <div className="demo-item-row" key={item.name}>
                    <div>
                      <span className="demo-item-name">{item.name}</span>
                      <span className="demo-item-price">{item.price}</span>
                    </div>
                    <div className="qty-control">
                      {inCart ? (
                        <>
                          <button onClick={() => removeFromCart(item.name)} aria-label="Remove one">−</button>
                          <span>{inCart.qty}</span>
                          <button onClick={() => addToCart(item)} aria-label="Add one">+</button>
                        </>
                      ) : (
                        <button className="add-btn" onClick={() => addToCart(item)}>Add</button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {cartCount > 0 && (
              <div className="cart-bar">
                <span>{cartCount} item{cartCount > 1 ? 's' : ''} · KES {cartTotal().toLocaleString()}</span>
                <div className="cart-actions">
                  <button className="cart-clear" onClick={clearCart}>Clear</button>
                  <a href={buildWAOrder()} target="_blank" rel="noreferrer" className="btn-primary cart-order">
                    💬 Send Order on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="demo-note">👆 This is a real working demo. Your customers get this exact experience.</p>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="section-title">What You Get</h2>
        <div className="features-grid">
          {FEATURES.map(({ icon, text }) => (
            <div className="feature-card reveal" key={text}>
              <span className="feat-icon">{icon}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="proof">
        <h2 className="section-title">What Clients Say</h2>
        <div className="proof-grid">
          {TESTIMONIALS.map(({ quote, name, biz }) => (
            <div className="proof-card reveal" key={name}>
              <p className="quote">"{quote}"</p>
              <p className="biz-name">— {name}</p>
              <p className="biz">{biz}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <h2 className="section-title">Simple Pricing</h2>
        <p className="section-sub">No hidden fees. Pay once, own it forever.</p>
        <div className="pricing-grid">
          {PRICING_PLANS.map(plan => (
            <div className={`price-card reveal${plan.featured ? ' featured' : ''}`} key={plan.id}>
              {plan.featured && <div className="badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price-tag">{plan.price}</div>
              <div className="price-sub">{plan.sub}</div>
              <div className="price-total"></div>
              <ul>
                {plan.features.map((f: string) => <li key={f}>{f}</li>)}
              </ul>
              <a href={getWhatsApp(plan.id, plan.price)} target="_blank" rel="noreferrer" className="btn-primary full">Get Started →</a>
            </div>
          ))}
        </div>
        <p className="pricing-note">🔒 Setup in 24–48 hours · Free QR code included · Cancel anytime</p>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta reveal">
        <h2>Ready to get more orders?</h2>
        <p>Stop losing customers who ask for prices and disappear. Get your menu live today.</p>
        <div className="cta-row">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">💬 Chat on WhatsApp</a>
          <a href="#demo" className="btn-ghost">Try Demo First ↓</a>
        </div>
        <p className="urgency">⚡ Setup in 24–48 hours · Limited free QR setup for first clients</p>
      </section>

      <footer>
        <span>© 2026 MenuMtaa · Nairobi, Kenya</span>
      </footer>
    </>
  )
}
