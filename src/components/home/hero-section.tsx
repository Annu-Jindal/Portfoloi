import { siteContent } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{siteContent.heroEyebrow}</p>
          <h1>{siteContent.heroTitle}</h1>
          <p className="hero-description">{siteContent.heroDescription}</p>
          <div className="hero-actions">
            <a className="button button--solid" href="#case-studies">
              Explore the work
            </a>
            <a className="button button--ghost" href="#contact">
              Start a conversation
            </a>
          </div>
        </div>
        <aside className="hero-panel">
          <p className="hero-panel__label">Current Positioning</p>
          <p className="hero-panel__body">{siteContent.role}</p>
          <div className="metric-grid">
            {siteContent.metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <span>{metric.value}</span>
                <small>{metric.label}</small>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
