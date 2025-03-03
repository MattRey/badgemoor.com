import Hero from '../../components/Hero';
import PageContent from '../../components/PageContent';
export default function SearchAcquisition() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col gap-8">
        <Hero
          image="/street.webp"
          fullScreen={false}
          text="Search & Acquisition"
          textPosition="left"
          textBackground={true}
          imageAlt='Photo of London street'
        />
        <PageContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </PageContent>
      </main>
    </div>
  );
} 