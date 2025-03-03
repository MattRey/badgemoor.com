import Hero from '../components/Hero';
import AnchorLinks from '../components/AnchorLinks';
import PageContent from '../components/PageContent';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col">
        <Hero
          image="/main_bridge.webp"
          fullScreen={true}
          text="Putting an expert in your corner."
          textPosition="centre"
        >
          <AnchorLinks 
            links={[
              { href: '#content' }
            ]}
          />
        </Hero>
        <PageContent>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </PageContent>
      </main>
    </div>
  );
}
