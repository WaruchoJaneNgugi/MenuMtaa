import { useState, useEffect } from 'react'
import './App.css'
const WA_LINK = 'https://wa.me/254791847766?text=Hi%2C%20I%20want%20my%20menu%20website'

export default function App() {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      {/* NAV */}
      <nav>
        <span className="logo">Menu<span>Mtaa</span></span>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button className="theme-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
            {dark ? '☀️' : '🌙'}
          </button>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-outline">Chat on WhatsApp</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Turn Your Menu Into Sales — Let Customers Book &amp; Order Instantly on WhatsApp</h1>
          <p className="sub">Beautiful mobile menu websites for salons, cafés &amp; restaurants in Nairobi. Set up in 24 hours.</p>
          <div className="cta-row">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">Get Your Menu Website</a>
            <a href="#demos" className="btn-ghost">See Demo ↓</a>
          </div>
        </div>
        <div className="phone-mockup">
          <div className="phone">
            <div className="phone-screen">
              <div className="mock-header">💇🏾‍♀️ Glam Studio</div>
              <div className="mock-item"><span>Box Braids</span><span>KES 2,500</span></div>
              <div className="mock-item"><span>Gel Nails</span><span>KES 1,200</span></div>
              <div className="mock-item"><span>Locs Retwist</span><span>KES 800</span></div>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="mock-wa-btn">📲 Book on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="problem-solution">
        <div className="problem card">
          <h2>😩 Sound familiar?</h2>
          <ul>
            <li>"How much is a haircut?"</li>
            <li>"Can you send the menu?"</li>
            <li>"Are you open today?"</li>
          </ul>
          <p className="tag">You lose clients every day answering the same questions.</p>
        </div>
        <div className="arrow">→</div>
        <div className="solution card">
          <h2>✅ We fix that</h2>
          <ul>
            <li>Prices visible instantly</li>
            <li>Customers book via WhatsApp</li>
            <li>Diners select orders before waiter arrives</li>
          </ul>
          <p className="tag">One link. Zero confusion. More sales.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <h2 className="section-title">How It Works</h2>
        <div className="how-grid">
          <div className="how-col">
            <h3>💇🏾‍♀️ For Salons</h3>
            {['Customer opens your menu link', 'Selects service + sees price', 'Clicks "Book on WhatsApp"'].map((s, i) => (
              <div className="step" key={i}><span className="step-num">{i + 1}</span><p>{s}</p></div>
            ))}
          </div>
          <div className="how-col">
            <h3>🍽️ For Restaurants</h3>
            {['Customer scans QR code on table', 'Selects food from digital menu', 'Waiter sees order on phone'].map((s, i) => (
              <div className="step" key={i}><span className="step-num">{i + 1}</span><p>{s}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section className="demos" id="demos">
        <h2 className="section-title">Live Demos — Tap to Try</h2>
        <div className="demo-grid">
          <div className="demo-card">
            <div className="demo-label">💇🏾‍♀️ Salon Menu</div>
            <div className="demo-items">
              {[['Box Braids', 'KES 2,500'], ['Gel Nails', 'KES 1,200'], ['Locs Retwist', 'KES 800'], ['Facial', 'KES 1,500']].map(([s, p]) => (
                <div className="demo-row" key={s}><span>{s}</span><span className="price">{p}</span></div>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary full">📲 Book on WhatsApp</a>
          </div>
          <div className="demo-card">
            <div className="demo-label">🍔 Restaurant Menu</div>
            <div className="demo-cat">Breakfast</div>
            <div className="demo-items">
              {[['Mandazi + Chai', 'KES 150'], ['Full English', 'KES 450']].map(([s, p]) => (
                <div className="demo-row" key={s}><span>{s}</span><span className="price">{p}</span></div>
              ))}
            </div>
            <div className="demo-cat">Drinks</div>
            <div className="demo-items">
              {[['Fresh Juice', 'KES 200'], ['Smoothie', 'KES 350']].map(([s, p]) => (
                <div className="demo-row" key={s}><span>{s}</span><span className="price">{p}</span></div>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary full">🛒 Send Order</a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="section-title">What You Get</h2>
        <div className="features-grid">
          {[
            ['📱', 'Mobile-friendly design'],
            ['💬', 'WhatsApp booking integration'],
            ['📷', 'Beautiful menu with images'],
            ['🔗', 'Custom link for Instagram bio'],
            ['✏️', 'Easy menu updates'],
            ['📍', 'QR code for tables'],
          ].map(([icon, text]) => (
            <div className="feature-card" key={text}><span className="feat-icon">{icon}</span><p>{text}</p></div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <h2 className="section-title">Simple Pricing</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Starter</h3>
            <ul>
              <li>Menu website</li>
              <li>WhatsApp booking</li>
              <li>1 design</li>
            </ul>
            <div className="price-tag">KES 7,000 – 9,000</div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary full">Get Started</a>
          </div>
          <div className="price-card featured">
            <div className="badge">Most Popular</div>
            <h3>Pro</h3>
            <ul>
              <li>Everything in Starter</li>
              <li>QR code system</li>
              <li>Order selection system</li>
            </ul>
            <div className="price-tag">KES 10,000 – 15,000</div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary full">Get Started</a>
          </div>
        </div>
      </section>

      

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Ready to Get Your Menu Website?</h2>
        <p>We set you up in 24 hours. Stop losing clients who ask for prices and disappear.</p>
        <div className="cta-row">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary">💬 Chat on WhatsApp</a>
          <a href="#demos" className="btn-ghost">View Demo ↓</a>
        </div>
      </section>

      <footer>
        <span>© 2026 MenuMtaa · Nairobi, Kenya</span>
      </footer>
    </>
  )
}
