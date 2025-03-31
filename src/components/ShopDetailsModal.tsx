
import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Webhook } from 'lucide-react';
import { Shop } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ShopDetailsModalProps {
  shop: Shop | null;
  isOpen: boolean;
  onClose: () => void;
}

const ShopDetailsModal: React.FC<ShopDetailsModalProps> = ({
  shop,
  isOpen,
  onClose,
}) => {
  if (!shop) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'restaurantes':
        return 'bg-orange-100 text-orange-800';
      case 'indumentaria':
        return 'bg-blue-100 text-blue-800';
      case 'farmacia':
        return 'bg-green-100 text-green-800';
      case 'optica':
        return 'bg-yellow-100 text-yellow-800';
      case 'electrodomesticos':
        return 'bg-purple-100 text-purple-800';
      case 'educacion':
        return 'bg-red-100 text-red-800';
      case 'automotores':
        return 'bg-sky-100 text-sky-800';
      case 'comestibles':
        return 'bg-lime-100 text-lime-800';
      case 'servicios':
        return 'bg-amber-100 text-amber-800';
      case 'gimnasios':
        return 'bg-orange-300 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <DialogTitle className="text-xl">{shop.name}</DialogTitle>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(shop.category)}`}>
              {shop.category.charAt(0).toUpperCase() + shop.category.slice(1)}
            </span>
          </div>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          {/* Description */}
          <div>
            <h3 className="font-medium mb-2">Información</h3>
            <p className="text-sm text-muted-foreground">{shop.description}</p>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Horarios:</span>
            </h3>
            <div className="space-y-1">
              {shop.openingHours.map((schedule, index) => (
                <div key={index} className="grid grid-cols-2 text-sm">
                  <span className="text-muted-foreground">{schedule.days}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Details */}
          <div>
            <h3 className="font-medium mb-2">Contacto:</h3>
            <div className="space-y-2">

              {shop.contact.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{shop.contact.phone}</span>
                </div>
              )}

              {shop.contact.web && (
                <div className="flex items-center gap-2 text-sm">
                  <Webhook className="h-4 w-4 text-muted-foreground" />
                  <span>{shop.contact.web}</span>
                </div>
              )}

              {shop.contact.instagram && (
                <div className="flex items-center gap-2 text-sm">
                  <Instagram className="h-4 w-4 text-muted-foreground" />
                  <span>{shop.contact.instagram}</span>
                </div>
              )}
              
              {shop.contact.email && (
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{shop.contact.email}</span>
                </div>
              )}
              
              {shop.contact.address && (
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span>{shop.contact.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShopDetailsModal;
