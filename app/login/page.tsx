import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-shell">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="brand-mark">N</div>
          <span>Northstar Bank</span>
        </div>

        <div className="auth-header">
          <p className="eyebrow">Welcome back</p>
          <h1>Sign in</h1>
        </div>

        <form className="auth-form">
          <label>
            Email
            <input type="email" defaultValue="jordan.smith@example.com" />
          </label>
          <label>
            Password
            <input type="password" defaultValue="password123" />
          </label>

          <div className="remember-row">
            <label className="checkbox-wrap">
              <input type="checkbox" defaultChecked />
              <span>Keep me signed in</span>
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <Link href="/dashboard" className="primary-btn full-width">Continue</Link>
        </form>

        <p className="auth-footer">
          New to Northstar? <Link href="/">Create account</Link>
        </p>
      </div>
    </main>
  );
}
