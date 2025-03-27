
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
            <h3 className="text-xl font-medium mb-4">ENGUALEGUAYCHU</h3>
            <p className="text-muted-foreground">
            Descubre, apoya y conecta con los comercios locales que hacen grande a Gualeguaychú.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Páginas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <address className="not-italic text-muted-foreground">

              <p className="mt-2">
                <a href="mailto:info@cityshophaven.com" className="hover:text-primary transition-colors">
                  engualeguaychu@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ENGUALEGUAYCHU. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Creado con <Heart size={14} className="mx-1 text-red-500" /> <a href="https://github.com/vfigunn">por vfigun</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
