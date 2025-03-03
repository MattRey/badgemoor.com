import Hero from '../components/Hero';
import AnchorLinks from '../components/AnchorLinks';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col gap-8">
        <Hero
          image="/main_bridge.jpg"
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
      </main>
    </div>
  );
}
