
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

const Contact: React.FC = () => {
  useEffect(() => {
    // Initialize animations after component mounts
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active');
      }, 100 + index * 100);
    });

    // Add scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal:not(.active)');
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (revealTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">¿Quienes somos?</h1><br></br>
          <p className="text-xl text-muted-foreground">
            Somos un equipo apasionado por nuestra ciudad y su crecimiento. Creemos que cada negocio, grande o pequeño, merece visibilidad y la oportunidad de conectar con más personas.
          </p><br></br>
          <p className="text-xl text-muted-foreground">
            Por eso, creamos este espacio para reunir en un solo lugar toda la información sobre los comercios y emprendimientos locales
          </p><br></br>
          <p className="text-xl text-muted-foreground">
          Nuestro objetivo es facilitar a los habitantes y visitantes el acceso a una guía completa de negocios, fomentando el comercio local y apoyando a los emprendedores de nuestra comunidad.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="reveal glass-card rounded-2xl p-8 shadow-lg">
              <ContactInfo />
            </div>

            <div className="reveal glass-card rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Escriba un mensaje</h2>
              <ContactForm />
            </div>
          </div>

          <div className="mt-20 reveal bg-secondary/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Contactanos</h2>
            <p className="text-muted-foreground mb-4">
            <b>Si tienes un negocio y quieres que forme parte de nuestro directorio, no dudes en contactarnos. Escríbenos y con gusto te ayudaremos a destacar en nuestra plataforma.</b>
            </p>
            <p className="text-muted-foreground mb-4">
            *Si deseas que eliminemos tu negocio de nuestra página, por favor contáctanos.*
            </p>
            <p className="text-muted-foreground mb-4">
              📩 <b><a href="mailto:engualeguaychu@gmail.com">engualeguaychu@gmail.com</a></b>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
