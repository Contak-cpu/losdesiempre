'use client'

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Zap } from 'lucide-react';
import LocalesForm from './forms/LocalesForm';
import CatalogosForm from './forms/CatalogosForm';
import ContactoForm from './forms/ContactoForm';
import StatsForm from './forms/StatsForm';
import HeaderForm from './forms/HeaderForm';

export type Location = {
  id: string;
  name: string;
  status: string;
  color: string;
  icon: string;
  hours: string;
  address: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  subtitle: string;
};

export type Link = {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  location: string;
  type: string;
  priority: string;
  preview: string;
  clicks: number;
};

export type Contact = {
  id: string;
  title: string;
  number: string;
  url: string;
  location: string;
  online: boolean;
};

const LosDeSeimpreHub = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState<'locales' | 'catalogos' | 'contacto' | 'stats'>('locales');

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const locations: Location[] = [
    { 
      id: 'rio-gallegos', 
      name: 'Río Gallegos', 
      status: 'Entrega Inmediata',
      color: 'bg-red-600',
      icon: '🔥',
      hours: '9:00 - 21:00',
      address: 'Galería Sur 1, Alberdi esquina 9 de julio, Río Gallegos, Santa Cruz',
      phone: '+54 2966 507733',
      whatsapp: 'https://wa.me/5492966312775',
      instagram: 'https://www.instagram.com/losdesiempresneakers8',
      subtitle: '🩸🏛️EL TEMPLO DE LAS ZAPAS🏛️🩸'
    },
    { 
      id: 'mendoza', 
      name: 'Mendoza', 
      status: 'Stock Disponible',
      color: 'bg-blue-600',
      icon: '⚡',
      hours: '10:00 - 20:00',
      address: 'Av. Las Heras 567, Mendoza Capital',
      phone: '+54 261 123456',
      whatsapp: 'https://wa.me/5492611234567',
      instagram: 'https://instagram.com/losdesiempre_mza',
      subtitle: 'Sneakers & Moda Premium'
    },
    { 
      id: 'cordoba', 
      name: 'Córdoba', 
      status: 'Web + Local',
      color: 'bg-green-600',
      icon: '🌟',
      hours: '9:30 - 20:30',
      address: 'Av. Colón 890, Nueva Córdoba',
      phone: '+54 351 123456',
      whatsapp: 'https://wa.me/message/2Z7PPPRU6Q2ZA1',
      instagram: 'https://www.instagram.com/losdesiempre_cba',
      subtitle: 'Tienda Online + Local Físico'
    }
  ];

  const links: Link[] = [
    {
      id: 'cat-rio',
      title: 'CATÁLOGO RIO GALLEGOS',
      subtitle: 'Entrega inmediata',
      url: 'https://drive.google.com/drive/folders/1-9LEqQxxen-DgPsaMCPYWXc-W3X6D5fX',
      location: 'rio-gallegos',
      type: 'catalog',
      priority: 'high',
      preview: '🔥 EL TEMPLO DE LAS ZAPAS - Stock completo',
      clicks: 1250
    },
    {
      id: 'cat-mendoza',
      title: 'CATÁLOGO MENDOZA',
      subtitle: 'Entrega inmediata',
      url: 'https://drive.google.com/drive/folders/15xdRnHSVlpwEI2clalDHgni8C9aX7IsK',
      location: 'mendoza',
      type: 'catalog',
      priority: 'high',
      preview: '⚡ 200+ modelos en stock',
      clicks: 980
    },
    {
      id: 'cat-cordoba-drive',
      title: 'CATÁLOGO CÓRDOBA',
      subtitle: 'Google Drive',
      url: 'https://drive.google.com/drive/folders/1D09lBpNP-vdQtjBglw4VRIkNRufI2hIz',
      location: 'cordoba',
      type: 'catalog',
      priority: 'high',
      preview: 'Catálogo completo actualizado',
      clicks: 750
    },
    {
      id: 'cat-cordoba-web',
      title: 'CÓRDOBA WEB',
      subtitle: 'Tienda online completa',
      url: 'https://losdesiempresneakerscba.com/?fbclid=PAZXh0bgNhZW0CMTEAAafIXUpcFWwmC9XROuRg58p1t9NLJuG70nuelviAeQi9t-DsC7Ca8bGQOkO__g_aem_Dy-ci7a_bZZ1P_DMn5oOgA',
      location: 'cordoba',
      type: 'web',
      priority: 'high',
      preview: '🌟 Envíos a todo el país',
      clicks: 2100
    },
    {
      id: 'buenos-timbos',
      title: 'BUENOS TIMBOS',
      subtitle: 'Mendoza - Línea Premium',
      url: 'https://drive.google.com/drive/folders/1NP5XM-XYa7LCb_GVn_q3I8JA3lxpeZdw',
      location: 'mendoza',
      type: 'premium',
      priority: 'medium',
      preview: '👑 Ediciones limitadas y exclusivas',
      clicks: 420
    },
    {
      id: 'importadas',
      title: 'Zapatillas Importadas',
      subtitle: 'Por encargo especial',
      url: '#importadas',
      location: 'all',
      type: 'special',
      priority: 'medium',
      preview: 'Nike, Adidas, Jordan exclusivos',
      clicks: 560
    }
  ];

  const contacts: Contact[] = [
    {
      id: 'whatsapp-rio',
      title: 'WhatsApp Río Gallegos',
      number: '+54 2966 507733',
      url: 'https://wa.me/5492966312775',
      location: 'rio-gallegos',
      online: true
    },
    {
      id: 'whatsapp-cordoba',
      title: 'WhatsApp Córdoba',
      number: '+54 351 123456',
      url: 'https://wa.me/message/2Z7PPPRU6Q2ZA1',
      location: 'cordoba',
      online: true
    },
    {
      id: 'whatsapp-mendoza',
      title: 'WhatsApp Mendoza',
      number: '+54 261 123456',
      url: 'https://wa.me/5492611234567',
      location: 'mendoza',
      online: false
    }
  ];

  const handleLocationSelect = (locationId: string) => {
    if (!isClient) return;
    setSelectedLocation(locationId);
  };

  const handleSectionChange = (section: typeof activeSection) => {
    setActiveSection(section);
  };

  // Renderizado estático inicial sin interactividad
  if (!isClient) {
    return (
      <div className="min-h-screen bg-black text-white">
        <HeaderForm 
          currentTime={currentTime}
          locations={locations}
          isStatic={true}
        />
        <div className="px-6 space-y-4">
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <h3 className="font-bold text-lg text-white">Cargando...</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <HeaderForm 
        currentTime={currentTime}
        locations={locations}
        isStatic={false}
      />

      {/* Navigation Tabs */}
      <div className="px-6 mb-6 bg-black">
        <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
          <button
            onClick={() => handleSectionChange('locales')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeSection === 'locales'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            📍 Locales
          </button>
          <button
            onClick={() => handleSectionChange('catalogos')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeSection === 'catalogos'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🛍️ Catálogos
          </button>
          <button
            onClick={() => handleSectionChange('contacto')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeSection === 'contacto'
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            💬 Contacto
          </button>
          <button
            onClick={() => handleSectionChange('stats')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeSection === 'stats'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            📊 Estadísticas
          </button>
        </div>
      </div>

      {/* Location Filter - Solo visible en secciones relevantes */}
      {(activeSection === 'locales' || activeSection === 'catalogos' || activeSection === 'contacto') && (
        <div className="px-6 mb-6 bg-black">
          <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
            <button
              onClick={() => handleLocationSelect('all')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedLocation === 'all'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              🌟 Todos los locales
            </button>
            {locations.map(location => (
              <button
                key={location.id}
                onClick={() => handleLocationSelect(location.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedLocation === location.id
                    ? `${location.color} text-white`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {location.icon} {location.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic Content Based on Active Section */}
      <div className="px-6">
        {activeSection === 'locales' && (
          <LocalesForm 
            locations={locations}
            selectedLocation={selectedLocation}
            onLocationSelect={handleLocationSelect}
          />
        )}
        
        {activeSection === 'catalogos' && (
          <CatalogosForm 
            links={links}
            selectedLocation={selectedLocation}
            locations={locations}
          />
        )}
        
        {activeSection === 'contacto' && (
          <ContactoForm 
            contacts={contacts}
            selectedLocation={selectedLocation}
            locations={locations}
          />
        )}
        
        {activeSection === 'stats' && (
          <StatsForm 
            links={links}
            locations={locations}
            selectedLocation={selectedLocation}
          />
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-8 text-center border-t border-gray-800 mt-8">
        <p className="text-sm text-gray-500">
          Powered by LDS Hub • Última actualización: {new Date().toLocaleDateString('es-AR')}
        </p>
      </div>
    </div>
  );
};

export default LosDeSeimpreHub;
