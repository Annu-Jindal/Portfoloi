import { HeroSection } from "@/components/home/hero-section";
import { CaseStudySection } from "@/components/home/case-study-section";
import { ContactSection } from "@/components/home/contact-section";
import { ProfileRail } from "@/components/home/profile-rail";
import { ScrollGallery } from "@/components/home/scroll-gallery";
import { SiteHeader } from "@/components/home/site-header";
import { CustomCursor } from "@/components/ui/custom-cursor";

export function HomePage() {
  return (
    <>
      <CustomCursor />
      <SiteHeader />
      <main>
        <HeroSection />
        <ScrollGallery />
        <CaseStudySection />
        <ProfileRail />
        <ContactSection />
      </main>
    </>
  );
}
