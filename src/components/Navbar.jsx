function Navbar() {
  return (
   <nav className="flex items-center justify-between mx-auto mt-0 max-w-6xl px-10 py-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl shadow-black/20">
      {/* Logo */}
      <div className="text-white text-2xl font-extrabold tracking-wide">
        ☀️ Sky<span className="text-sky-400">Cast</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-10">
        <a
          href="#"
          className="text-white text-2xl font-medium transition-all duration-300 hover:text-sky-300 hover:scale-110"
        >
          Home
        </a>

        <a
          href="#"
          className="text-white text-2xl font-medium transition-all duration-300 hover:text-sky-300 hover:scale-110"
        >
          About
        </a>

        <a
          href="#"
          className="text-white text-2xl font-medium transition-all duration-300 hover:text-sky-300 hover:scale-110"
        >
          Contact
        </a>
      </div>

      {/* Weather Label */}
      <div className="flex items-center gap-2 text-white font-medium bg-white/10 border border-white/20 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/40">
        <span>📍</span>
        <span>Weather Report</span>
      </div>

    </nav>
     
    
  );
}

export default Navbar;