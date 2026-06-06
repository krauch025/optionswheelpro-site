import Link from "next/link";

export function SiteFoot() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-foot">
      <div className="container">
        <div className="site-foot__grid">
          <div className="site-foot__brand">
            <img src="/icon-forest-light-128.png" alt="" />
            <div style={{ fontWeight: 600, fontSize: 15 }}>Wheelright</div>
            <p>Run the options wheel. Run it right. Built for patient, long-term traders by Regular Guy Labs.</p>
          </div>
          <div className="site-foot__col">
            <h4>Product</h4>
            <Link href="/">Overview</Link>
            <Link href="/screenshots">Screenshots</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="site-foot__col">
            <h4>Resources</h4>
            <Link href="/faq">FAQ</Link>
            <Link href="/support">Support</Link>
          </div>
          <div className="site-foot__col">
            <h4>Company</h4>
            <a href="mailto:contact@regularguylabs.com">contact@regularguylabs.com</a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div className="site-foot__bottom">
          <div>© {year} Regular Guy Labs LLC. All rights reserved.</div>
          <div className="legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
