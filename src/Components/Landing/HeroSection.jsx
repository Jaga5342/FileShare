const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-purple-50 to-indigo-50">
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Share Your Files</span>
            <span className="block text-purple-700">FileShare</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base text-gray-500 sm:text-lg md:text-xl">
            Upload, manage and share files securely. Anywhere. Anytime.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <button className="px-6 py-3 rounded-md text-white bg-purple-600 hover:bg-purple-700 shadow-lg transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-md bg-white text-gray-700 shadow-lg hover:bg-gray-50 transition">
              Sign In
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src="/Dashboard.png"
            alt="Fileshare dashboard"
            className="w-full rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/10"></div>
        </div>

        <p className="mt-6 text-center text-base text-gray-500">
          All files are encrypted and stored securely with industry-standard protocols.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
