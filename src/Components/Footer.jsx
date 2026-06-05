const Footer = () => {
  return (
    <footer className="bg-[#2A0434] border-t border-fuchsia-500/20 py-6">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left */}
          <p className="text-sm text-gray-300">
            © 2026 Aditi Srivastava
          </p>

          {/* Center */}
          <p className="text-sm text-gray-300 text-center">
            Designed & Developed with 🤍 by Aditi
          </p>

          {/* Right Empty for Balance */}
          <div className="hidden md:block w-[140px]"></div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;