import AnchorLinks from "@/components/AnchorLinks";
import Hero from "../../components/Hero";
import PageContent from "../../components/PageContent";
import TeamContent from "@/components/pages/about/TeamContent";
import FeesContent from "@/components/pages/about/FeesContent";
import TestimonialsContent from "@/components/pages/about/TestimonialsContent";

export default function About() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col">
        <Hero
          image="/blossom.webp"
          fullScreen={true}
          text="About us"
          textPosition="centre"
          textBackground={false}
          imageAlt="Tree blossom"
        >
          <AnchorLinks
            links={[
              { href: "#who", text: "Who We Are" },
              { href: "#fees", text: "Fees" },
              { href: "#testimonials", text: "Testimonials" },
            ]}
          />
        </Hero>
        <div className="h-screen"></div>
        <PageContent>
          <TeamContent id="who" />
          <FeesContent id="fees" />
          <TestimonialsContent id="testimonials" />
        </PageContent>
      </main>
    </div>
  );
}
