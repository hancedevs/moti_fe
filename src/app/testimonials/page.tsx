import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import ClientTestimonials from "@/components/testimonials/ClientTestimonials";
import ClientsSection from "@/components/testimonials/ClientsSection";
import PartnersSection from "@/components/testimonials/PartnersSection";
import TestimonialsCta from "@/components/testimonials/TestimonialsCta";

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <ClientTestimonials
        variant="light"
        sectionId="testimonials"
        badgeLabel="Our Feedback"
      />
      <ClientsSection />
      <PartnersSection />
      <TestimonialsCta />
    </>
  );
}
