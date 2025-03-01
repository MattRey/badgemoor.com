const LocationWidget = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-white">Where we are:</h3>
      <div className="text-gray-300">
        <p>Badgemoor ltd.</p>
        <p>Avon House,</p>
        <p>Kensington Village,</p>
        <p>Avonmore Road,</p>
        <p>W14 8TS</p>
      </div>
      <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
        Privacy Policy
      </a>
    </div>
  );
};

export default LocationWidget; 