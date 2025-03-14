import Hero from '../../components/Hero';
import PageContent from '../../components/PageContent';
import SearchAcquisitionPage from '../../components/pages/search-acquisition/SearchAcquisitionPage';

export default function SearchAcquisition() {
  return (
    <div className="font-[family-name:var(--font-cormorant-garamond)]">
      <main className="flex flex-col">
        <Hero
          image="/street.webp"
          fullScreen={false}
          text="Search & Acquisition"
          textPosition="left"
          textBackground={false}
          imageAlt='Photo of London street'
        />
        <PageContent>
          <SearchAcquisitionPage />
        </PageContent>
      </main>
    </div>
  );
} 