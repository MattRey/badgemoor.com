import Hero from '../components/Hero';
import AnchorLinks from '../components/AnchorLinks';
import PageContent from '../components/PageContent';
import HomePage from '../components/pages/home/HomePage';

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
        <div className="h-screen"></div>
        <Hero
          image="/blossom.webp"
          fullScreen={false}
          text="Welcome to Badgemoor"
          textPosition="left"
          textBackground={true}
          id="content"
        />
        <PageContent>
          <HomePage />
        </PageContent>
      </main>
    </div>
  );
}
