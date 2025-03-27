
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions or want to add your shop to our directory? Get in touch with us.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="reveal glass-card rounded-2xl p-8 shadow-lg">
              <ContactInfo />
            </div>

            <div className="reveal glass-card rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>

          <div className="mt-20 reveal bg-secondary/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">About City Shop Haven</h2>
            <p className="text-muted-foreground mb-4">
              City Shop Haven is a comprehensive directory of local businesses and shops in our city. Our mission is to connect residents and visitors with the diverse array of shops that make our community unique.
            </p>
            <p className="text-muted-foreground mb-4">
              Whether you're looking for a cozy café, a boutique clothing store, or a specialty pharmacy, our platform helps you discover and support local businesses.
            </p>
            <p className="text-muted-foreground">
              We're constantly adding new shops and features to enhance your experience. If you own a local business and would like to be featured in our directory, please contact us using the form above.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
