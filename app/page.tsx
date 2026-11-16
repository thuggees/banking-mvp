import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-group">
          <div className="brand-mark">N</div>
          <span>Northstar Bank</span>
        </div>
        <nav className="nav-links">
          <Link href="/login">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Modern banking for everyday life</p>
          <h1>Manage money with confidence.</h1>
          <p className="lead">
            Track spending, move funds instantly, and stay in control with a secure, simple
            digital banking experience.
          </p>
          <div className="cta-row">
            <Link href="/login" className="primary-btn">Open account</Link>
            <Link href="/dashboard" className="secondary-btn">View demo</Link>
          </div>
          <div className="stats-row">
            <div>
              <strong>2.1M+</strong>
              <span>customers</span>
            </div>
            <div>
              <strong>99.98%</strong>
              <span>uptime</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>support</span>
            </div>
          </div>
        </div>

        <div className="card-stack">
          <div className="bank-card primary-card">
            <span className="chip" />
            <div className="card-header">
              <span>Northstar</span>
              <span>VISA</span>
            </div>
            <div className="card-number">•••• 2458</div>
            <div className="card-meta">
              <span>J. Smith</span>
              <span>08/29</span>
            </div>
          </div>

          <div className="mini-panel">
            <div className="mini-header">
              <span>Checking</span>
              <span className="positive">+3.2%</span>
            </div>
            <div className="balance">$18,420.76</div>
            <ul>
              <li>Income: $4,800</li>
              <li>Expenses: $1,260</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="features-grid">
        <article>
          <h3>Instant transfers</h3>
          <p>Send funds between accounts in seconds with secure, trackable transaction history.</p>
        </article>
        <article>
          <h3>Smart budgeting</h3>
          <p>Know exactly where your money is going with spending insights and category tracking.</p>
        </article>
        <article>
          <h3>Protected accounts</h3>
          <p>Multi-layer verification and real-time monitoring keep your hard-earned money safe.</p>
        </article>
      </section>
    </main>
  );
}
