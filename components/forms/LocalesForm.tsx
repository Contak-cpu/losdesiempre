'use client'

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Location } from '../LosDeSeimpreHub';

interface LocalesFormProps {
  locations: Location[];
  selectedLocation: string;
  onLocationSelect: (locationId: string) => void;
}

const LocalesForm: React.FC<LocalesFormProps> = ({ 
  locations, 
  selectedLocation, 
  onLocationSelect 
}) => {
  const handleWhatsAppClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleInstagramClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Locations Info Section - Detalle de local específico */}
      {selectedLocation !== 'all' && (
        <div className="mb-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            {locations
              .filter(loc => loc.id === selectedLocation)
              .map(location => (
                <div key={location.id} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {location.icon} {location.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${location.color} text-white`}>
                      {location.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">Dirección</p>
                        <p className="text-gray-300 text-sm">{location.address}</p>
                        <button className="text-blue-400 text-xs mt-1 hover:text-blue-300 transition-colors">
                          📍 Ver en Google Maps
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">Horarios</p>
                        <p className="text-gray-300 text-sm">Lunes a Sábado: {location.hours}</p>
                        <p className="text-gray-400 text-xs">Domingos: Cerrado</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">Teléfono</p>
                        <a 
                          href={`tel:${location.phone}`}
                          className="text-green-400 text-sm hover:text-green-300 transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      📍 Cómo llegar
                    </button>
                    <button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                      onClick={() => handleWhatsAppClick(location.whatsapp)}
                    >
                      <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-4 h-4 inline mr-2" />
                      WhatsApp
                    </button>
                    <button 
                      className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-3 rounded-lg font-medium transition-colors"
                      onClick={() => handleInstagramClick(location.instagram)}
                    >
                      <img src="/instagram-icon.svg" alt="Instagram" className="w-4 h-4 inline mr-2" />
                      IG
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* All Locations Overview - Vista general de todos los locales */}
      {selectedLocation === 'all' && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-white mb-4">📍 Nuestros Locales</h2>
          <div className="space-y-3">
            {locations.map(location => (
              <div 
                key={location.id}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:bg-gray-700 transition-all cursor-pointer"
                onClick={() => onLocationSelect(location.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{location.icon}</span>
                      <h3 className="font-bold text-white">{location.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${location.color} text-white`}>
                        {location.status}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{location.address}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{location.hours}</span>
                      </div>
                      {location.subtitle && (
                        <p className="text-xs text-gray-400 italic">{location.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400">Click para ver</span>
                    <div className="text-2xl">→</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-green-400">98%</div>
            <div className="text-xs text-gray-400">Stock Disponible</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-blue-400">24h</div>
            <div className="text-xs text-gray-400">Envío Express</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-purple-400">4.9★</div>
            <div className="text-xs text-gray-400">Calificación</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalesForm;
