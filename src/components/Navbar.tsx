
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-medium transition-opacity duration-300 hover:opacity-80"
          >
            City Shop Haven
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition duration-300 hover:text-primary ${
                location.pathname === "/" ? "text-primary font-medium" : ""
              }`}
            >
              Shops
            </Link>
            <Link
              to="/contact"
              className={`transition duration-300 hover:text-primary ${
                location.pathname === "/contact" ? "text-primary font-medium" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container px-6 mx-auto flex flex-col space-y-4">
          <Link
            to="/"
            className={`py-2 transition duration-300 hover:text-primary ${
              location.pathname === "/" ? "text-primary font-medium" : ""
            }`}
          >
            Shops
          </Link>
          <Link
            to="/contact"
            className={`py-2 transition duration-300 hover:text-primary ${
              location.pathname === "/contact" ? "text-primary font-medium" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
