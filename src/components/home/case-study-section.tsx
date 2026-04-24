import { caseStudies } from "@/data/portfolio";

export function CaseStudySection() {
  return (
    <section className="case-study-section" id="case-studies">
      <div className="shell section-heading">
        <div>
          <p className="section-kicker">Selected Work</p>
          <h2>Project storytelling built like a case-study publication.</h2>
        </div>
        <p>
          Instead of thumbnail cards, each project is broken into the four beats that matter: problem, process,
          solution, and result.
        </p>
      </div>

      <div className="shell case-study-list">
        {caseStudies.map((study) => (
          <article className="case-study" key={study.slug}>
            <div className="case-study__meta">
              <span>{study.category}</span>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <ul className="impact-list">
                {study.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="case-study__body">
              <div className="case-beat">
                <p>Problem</p>
                <h4>Framing the challenge with clarity.</h4>
                <span>{study.problem}</span>
              </div>
              <div className="case-beat">
                <p>Process</p>
                <h4>Structured thinking over visual noise.</h4>
                <span>{study.process}</span>
              </div>
              <div className="case-beat">
                <p>Solution</p>
                <h4>Premium presentation with technical credibility.</h4>
                <span>{study.solution}</span>
              </div>
              <div className="case-beat">
                <p>Result</p>
                <h4>Sharper positioning for real opportunities.</h4>
                <span>{study.result}</span>
              </div>
              <div className="tech-row" aria-label={`${study.title} technology stack`}>
                {study.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
