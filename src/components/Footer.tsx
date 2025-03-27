
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12 mt-20">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">City Shop Haven</h3>
            <p className="text-muted-foreground">
              Your guide to exploring the unique shops and businesses in our vibrant city.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Shops
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <address className="not-italic text-muted-foreground">
              <p>123 Main Street</p>
              <p>City Center, ST 12345</p>
              <p className="mt-2">
                <a href="mailto:info@cityshophaven.com" className="hover:text-primary transition-colors">
                  info@cityshophaven.com
                </a>
              </p>
              <p>
                <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} City Shop Haven. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> in our City
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
