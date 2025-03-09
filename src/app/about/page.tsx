import AnchorLinks from "@/components/AnchorLinks";
import Hero from "../../components/Hero";
import PageContent from "../../components/PageContent";
import TeamContent from "@/components/pages/about/TeamContent";

export default function About() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col">
        <Hero
          image="/blossom.webp"
          fullScreen={true}
          text="About us"
          textPosition="centre"
          textBackground={true}
          imageAlt="Tree blossom"
        >
          <AnchorLinks
            links={[
              { href: "#who", text: "Who We Are" },
              { href: "#fees", text: "Fees" },
              { href: "#clients", text: "Clients" },
            ]}
          />
        </Hero>
        <div className="h-screen"></div>
        <PageContent>
          <TeamContent id="who" />
        </PageContent>
      </main>
    </div>
  );
}
