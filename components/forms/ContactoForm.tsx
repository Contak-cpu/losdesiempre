'use client'

import React from 'react';
import { Contact, Location } from '../LosDeSeimpreHub';

interface ContactoFormProps {
  contacts: Contact[];
  selectedLocation: string;
  locations: Location[];
}

const ContactoForm: React.FC<ContactoFormProps> = ({ 
  contacts, 
  selectedLocation, 
  locations 
}) => {
  const handleWhatsAppClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleInstagramClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handlePhoneClick = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const filteredContacts = selectedLocation === 'all' 
    ? contacts 
    : contacts.filter(contact => contact.location === selectedLocation);

  const getLocationInfo = (locationId: string) => {
    return locations.find(loc => loc.id === locationId);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">💬 Contacto Directo</h2>
        <p className="text-gray-400">
          {selectedLocation === 'all' 
            ? 'Contacta con cualquiera de nuestros locales'
            : `Contacta con ${getLocationInfo(selectedLocation)?.name}`
          }
        </p>
      </div>

      {/* WhatsApp Contacts */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white mb-3">📱 WhatsApp</h3>
        {filteredContacts.map(contact => (
          <div
            key={contact.id}
            onClick={() => handleWhatsAppClick(contact.url)}
            className="bg-green-600/20 border border-green-500/30 rounded-xl p-4 flex items-center justify-between hover:bg-green-600/30 transition-all cursor-pointer"
          >
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-white truncate">{contact.title}</h3>
                <p className="text-sm text-gray-300 truncate">{contact.number}</p>
                {getLocationInfo(contact.location) && (
                  <p className="text-xs text-gray-400 truncate">
                    📍 {getLocationInfo(contact.location)?.name}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
              <div className={`w-3 h-3 rounded-full ${contact.online ? 'bg-green-400' : 'bg-gray-400'}`}></div>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                {contact.online ? 'En línea' : 'Ocupado'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Phone Contacts */}
      {selectedLocation !== 'all' && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white mb-3">📞 Teléfono Directo</h3>
          {locations
            .filter(loc => loc.id === selectedLocation)
            .map(location => (
              <div key={location.id} className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">{location.icon} {location.name}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${location.color} text-white`}>
                    {location.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => handlePhoneClick(location.phone)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>📞</span>
                    <span>{location.phone}</span>
                  </button>
                  <div className="text-center text-xs text-gray-400">
                    Horarios: {location.hours}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Social Media Links */}
      {selectedLocation !== 'all' && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white mb-3">📱 Redes Sociales</h3>
          {locations
            .filter(loc => loc.id === selectedLocation)
            .map(location => (
              <div key={location.id} className="bg-pink-600/20 border border-pink-500/30 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-3">{location.icon} {location.name}</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleInstagramClick(location.instagram)}
                    className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <img src="/instagram-icon.svg" alt="Instagram" className="w-4 h-4" />
                    <span>Instagram</span>
                  </button>
                  <button
                    onClick={() => handleWhatsAppClick(location.whatsapp)}
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Contact Form */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">📧 Envíanos un Mensaje</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Tu nombre completo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Mensaje
            </label>
            <textarea
              rows={4}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="¿En qué podemos ayudarte?"
            ></textarea>
          </div>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
            📤 Enviar Mensaje
          </button>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 text-center">
        <h3 className="text-sm font-medium text-white mb-2">🚨 Contacto de Emergencia</h3>
        <p className="text-xs text-gray-300 mb-3">
          Para consultas urgentes fuera de horario
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
          📞 Llamada de Emergencia
        </button>
      </div>
    </div>
  );
};

export default ContactoForm;
