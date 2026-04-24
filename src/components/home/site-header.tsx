import { siteContent } from "@/data/portfolio";

const navItems = [
  { href: "#story", label: "Story" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a className="brand" href="#top" aria-label={`${siteContent.name} home`}>
          <span className="brand__monogram">AJ</span>
          <span className="brand__text">
            <span>{siteContent.name}</span>
            <span>{siteContent.location}</span>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
