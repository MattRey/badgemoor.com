import Link from "next/link";

const LocationWidget = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-white">Contact us:</h3>
      <div className="text-gray-300">
        <p><a href="tel:+442036740356">+44 20 3674 0356</a></p>
        <p>Avon House,</p>
        <p>Kensington Village,</p>
        <p>Avonmore Road,</p>
        <p>W14 8TS</p>
        <p>To contact specific team members please <Link href="/about" className="text-white hover:text-gray-300 transition-colors">click here</Link></p>
      </div>
      <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
        Privacy Policy
      </a>
    </div>
  );
};

export default LocationWidget; 