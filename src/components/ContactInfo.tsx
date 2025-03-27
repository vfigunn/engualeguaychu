
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6 reveal">
      <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
      
      <div className="flex items-start">
        <MapPin className="mr-4 text-primary" size={22} />
        <div>
          <h3 className="font-medium">Address</h3>
          <p className="text-muted-foreground">123 Main Street, City Center, ST 12345</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Phone className="mr-4 text-primary" size={22} />
        <div>
          <h3 className="font-medium">Phone</h3>
          <p className="text-muted-foreground">
            <a href="tel:+11234567890" className="hover:text-primary transition-colors">
              (123) 456-7890
            </a>
          </p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Mail className="mr-4 text-primary" size={22} />
        <div>
          <h3 className="font-medium">Email</h3>
          <p className="text-muted-foreground">
            <a href="mailto:info@cityshophaven.com" className="hover:text-primary transition-colors">
              info@cityshophaven.com
            </a>
          </p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Clock className="mr-4 text-primary" size={22} />
        <div>
          <h3 className="font-medium">Hours</h3>
          <p className="text-muted-foreground">Monday - Friday: 9AM - 5PM</p>
          <p className="text-muted-foreground">Saturday: 10AM - 2PM</p>
          <p className="text-muted-foreground">Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
