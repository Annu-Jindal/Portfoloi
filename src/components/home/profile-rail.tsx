import { certifications, experiences, siteContent, skills } from "@/data/portfolio";

export function ProfileRail() {
  return (
    <>
      <section className="profile-section" id="experience">
        <div className="shell section-heading">
          <div>
            <p className="section-kicker">Profile</p>
            <h2>Education, field exposure, and domain depth in one calm narrative.</h2>
          </div>
          <p>{siteContent.intro}</p>
        </div>

        <div className="shell profile-grid">
          <article className="profile-card profile-card--statement">
            <p className="profile-card__label">About</p>
            <h3>{siteContent.name}</h3>
            <p>
              Pursuing a B.Sc. in Forensic Science at Geeta University, Annu focuses on criminal investigation,
              forensic biology, and digital forensics while building a stronger digital presence for that work.
            </p>
          </article>

          <article className="profile-card profile-card--timeline">
            <p className="profile-card__label">Experience</p>
            <div className="timeline-list">
              {experiences.map((item) => (
                <div className="timeline-list__item" key={`${item.title}-${item.organisation}`}>
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <strong>{item.organisation}</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="profile-card">
            <p className="profile-card__label">Skills</p>
            <div className="pill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>

          <article className="profile-card">
            <p className="profile-card__label">Certifications</p>
            <div className="certificate-list">
              {certifications.map((certification) => (
                <div key={certification}>
                  <strong>{certification}</strong>
                  <span>Evidence-led learning with practical cybersecurity context.</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
