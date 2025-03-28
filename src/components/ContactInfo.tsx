
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6 reveal">
      <h2 className="text-2xl font-semibold mb-4">Nuestra Información</h2>
      
      <div className="flex items-start">
        <Mail className="mr-4 text-primary" size={22} />
        <div>
          <h3 className="font-medium">Email</h3>
          <p className="text-muted-foreground">
            <a href="mailto:engualeguaychu@gmail.com" className="hover:text-primary transition-colors">
              engualeguaychu@gmail.com
            </a>
          </p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Clock className="mr-4 text-primary" size={22} />
        <div>
          <h3 className="font-medium">Horario de atención</h3>
          <p className="text-muted-foreground">Lunes a Sábados: 9AM - 5PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
