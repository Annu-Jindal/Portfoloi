export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  image?: string;
  palette: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  impact: string[];
  problem: string;
  process: string;
  solution: string;
  result: string;
  stack: string[];
};

export type ExperienceItem = {
  title: string;
  organisation: string;
  period: string;
  description: string;
};

export const siteContent = {
  name: "Annu Jindal",
  role: "Forensic Science Student and Emerging Cyber Forensics Storyteller",
  email: "jindalannu5031@gmail.com",
  linkedin: "https://www.linkedin.com/in/annu-jindal-0890102a3",
  externalSite: "http://chiccstyleverr.free.nf",
  location: "Panipat, Haryana, India",
  heroEyebrow: "Forensic science, cyber investigation, and premium digital storytelling",
  heroTitle: "I build digital experiences that make evidence, insight, and identity unforgettable.",
  heroDescription:
    "A cinematic portfolio for Annu Jindal, shaped around forensic clarity, editorial restraint, and scroll-led storytelling instead of a generic template grid.",
  intro:
    "This portfolio reframes academic depth, cyber investigation, and personal brand into a single immersive narrative. Every section is designed to feel deliberate, composed, and premium.",
  metrics: [
    { value: "2026", label: "Expected Graduation" },
    { value: "04+", label: "Certifications" },
    { value: "03", label: "Cybersecurity Internships" },
    { value: "01", label: "Featured Research Tool" },
  ],
};

export const galleryItems: GalleryItem[] = [
  {
    id: "evidence",
    title: "Evidence Board",
    caption: "Prepared for your real image set with layered reveal motion.",
    palette: "var(--gallery-a)",
  },
  {
    id: "interface",
    title: "Interface Frame",
    caption: "Editorial framing, shadow depth, and cinematic stacking.",
    palette: "var(--gallery-b)",
  },
  {
    id: "fieldwork",
    title: "Field Notes",
    caption: "A visual stage for documentation, process, and credibility.",
    palette: "var(--gallery-c)",
  },
  {
    id: "analysis",
    title: "Analysis Layer",
    caption: "Built to swap placeholder art with your supplied photography later.",
    palette: "var(--gallery-d)",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "drone-forensics",
    title: "Drone Forensics Analysis Tool",
    category: "Featured Case Study",
    year: "2025",
    summary:
      "A focused forensic concept for reconstructing drone activity through telemetry, location trails, and media extraction.",
    impact: [
      "Transforms a technical forensic concept into a clear narrative visitors can understand quickly.",
      "Highlights investigation logic, metadata recovery, and evidentiary value instead of only listing tools.",
      "Positions Annu as someone who can bridge scientific rigor with public-facing clarity.",
    ],
    problem:
      "Drone-related incidents generate fragmented evidence across media, GPS traces, and flight records. Explaining that complexity without losing a non-technical audience is difficult.",
    process:
      "The project was framed around investigative stages: identifying the device source, extracting telemetry artifacts, organizing location metadata, and visualizing a route investigators could interpret with confidence.",
    solution:
      "A guided analysis workflow centered on data extraction, geolocation interpretation, and evidentiary reporting. The portfolio presents it as a premium case study rather than a plain project card.",
    result:
      "The outcome is a more believable portfolio centerpiece: technically grounded, visually refined, and easier for recruiters or collaborators to trust at a glance.",
    stack: ["Python", "GPS Analysis", "Metadata Extraction", "Digital Forensics"],
  },
  {
    slug: "cyber-learning-platform",
    title: "Cyber Forensics Learning Platform",
    category: "Knowledge System",
    year: "2025",
    summary:
      "A content-rich learning experience that packages forensic concepts, tools, and career pathways into a modern editorial system.",
    impact: [
      "Converts a static information-heavy site into a structured story with pacing and hierarchy.",
      "Gives recruiters context on communication, content strategy, and domain understanding.",
      "Creates a scalable architecture ready for future sections, images, and project expansion.",
    ],
    problem:
      "Traditional portfolio layouts flatten research, education, and cybersecurity knowledge into repetitive cards, which makes serious work feel generic.",
    process:
      "The redesign separated narrative moments from reference content, prioritized section rhythm, and introduced stronger visual contrast between study, practice, and career material.",
    solution:
      "Instead of stacking cards, the site now uses cinematic scroll beats, sticky content framing, and case-study storytelling to present expertise with more authority.",
    result:
      "The platform becomes both a personal portfolio and a premium publication surface for forensic education, ready for deeper image-based storytelling.",
    stack: ["Next.js", "TypeScript", "SEO", "Responsive Systems"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: "Cyber Security Intern",
    organisation: "Gurugram Police Cyber Security Cell",
    period: "June 2025 to July 2025",
    description:
      "Worked close to cybercrime investigation workflows, evidence handling, report support, and network-security exposure in a public-sector context.",
  },
  {
    title: "Virtual Intern, Cybersecurity",
    organisation: "CodeAlpha",
    period: "June 2025 to July 2025",
    description:
      "Completed remote cybersecurity assignments including network scanning, vulnerability assessment, and structured audit-oriented practice.",
  },
  {
    title: "Virtual Intern, Cybersecurity",
    organisation: "HackSecure",
    period: "April 2025 to May 2025",
    description:
      "Focused on security research exercises, threat interpretation, and lab-based vulnerability learning with a practical mindset.",
  },
  {
    title: "Legal Intern",
    organisation: "District Court, Panipat",
    period: "July 2024 to August 2024",
    description:
      "Built procedural discipline through legal documentation, case file handling, and real exposure to courtroom workflows.",
  },
];

export const skills = [
  "Digital Forensics",
  "FTK Imager",
  "Autopsy",
  "Wireshark",
  "Volatility",
  "ExifTool",
  "Evidence Handling",
  "Cyber Investigation",
  "Metadata Analysis",
  "Report Writing",
  "Digital Marketing",
  "SEO",
  "Graphic Design",
  "Problem Solving",
];

export const certifications = [
  "CEH",
  "Cyber Security and Investigation",
  "Digital Forensics",
  "Cybersecurity by Hack Secure",
];
