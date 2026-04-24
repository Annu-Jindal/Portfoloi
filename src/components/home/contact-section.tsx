import { siteContent } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>Open to collaborations that value clarity, trust, and thoughtful execution.</h2>
          <p>
            This portfolio now has a clean production-ready foundation for your next step: adding final project images,
            more detailed case studies, and a live deployment on Vercel.
          </p>
        </div>

        <div className="contact-panel">
          <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
          <a href={siteContent.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={siteContent.externalSite} target="_blank" rel="noreferrer">
            Additional Website
          </a>
          <p>{siteContent.location}</p>
        </div>
      </div>
    </section>
  );
}
