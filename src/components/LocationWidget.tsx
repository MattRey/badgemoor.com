import Link from "next/link";

const LocationWidget = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-white">Contact us:</h3>
      <div className="text-gray-300 text-xl">
        <p>Badgemoor Limited,</p>
        <p>91 Twickenham Road,</p>
        <p>Teddington,</p>
        <p>England</p>
        <p>TW11 8AN</p>
        <p>Company number 07120371</p>
      </div>
      <div className="flex flex-col gap-2 text-gray-300 text-xl">
        <p>
          Tel: <a href="tel:+442036740356">+44 20 3674 0356</a>
        </p>
        <p>
          To contact specific team members please{" "}
          <Link href="/about/#who" className="text-white transition-colors">
            click here
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href="/privacy-policy"
          className="text-[var(--primary)] hover:text-white transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/complaints"
          className="text-[var(--primary)] hover:text-white transition-colors"
        >
          Complaints Procedure
        </Link>
      </div>
    </div>
  );
};

export default LocationWidget;
