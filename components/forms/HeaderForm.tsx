'use client'

import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Location } from '../LosDeSeimpreHub';

interface HeaderFormProps {
  currentTime: Date;
  locations: Location[];
  isStatic: boolean;
}

const HeaderForm: React.FC<HeaderFormProps> = ({ currentTime, locations, isStatic }) => {
  if (isStatic) {
    return (
      <div className="relative bg-black">
        <div className="absolute inset-0 bg-red-500/10"></div>
        <div className="relative px-6 py-8 text-center">
          <div className="w-40 h-40 mx-auto mb-4 flex items-center justify-center">
            <img 
              src="/lds-logo1.png" 
              alt="Los de Siempre Logo" 
              className="w-full h-full object-contain"
              width={160}
              height={160}
            />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">🩸🏛️ EL TEMPLO DE LAS ZAPAS 🏛️🩸</p>
          <p className="text-gray-400 text-sm mb-4">Sneakers & Moda • Multi-Local</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black">
      <div className="absolute inset-0 bg-red-500/10"></div>
      <div className="relative px-6 py-8 text-center">
        <div className="w-40 h-40 mx-auto mb-4 flex items-center justify-center">
          <img 
            src="/lds-logo1.png" 
            alt="Los de Siempre Logo" 
            className="w-full h-full object-contain"
            width={160}
            height={160}
          />
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">🩸🏛️ EL TEMPLO DE LAS ZAPAS 🏛️🩸</p>
        <p className="text-gray-400 text-sm mb-4">Sneakers & Moda • Multi-Local</p>
        <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{locations.length} Locales</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{currentTime.toLocaleTimeString('es-AR', { timeStyle: 'short' })}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
