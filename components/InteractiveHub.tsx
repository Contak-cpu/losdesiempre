'use client'

import React, { useState } from 'react';

const InteractiveHub = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');

  const locations = [
    { 
      id: 'rio-gallegos', 
      name: 'Río Gallegos', 
      status: 'Entrega Inmediata',
      color: '#DC2626',
      icon: '🔥',
      hours: '9:00 - 21:00',
      address: 'Galería Sur 1, Alberdi esquina 9 de julio, Río Gallegos, Santa Cruz',
      phone: '+54 2966 507733',
      whatsapp: 'https://wa.me/5492966312775',
      instagram: 'https://www.instagram.com/losdesiempresneakers8',
      maps: 'https://maps.app.goo.gl/Uwi747RsxGNrhtaT6',
      subtitle: '🩸🏛️EL TEMPLO DE LAS ZAPAS🏛️🩸'
    },
    { 
      id: 'mendoza', 
      name: 'Mendoza', 
      status: 'Stock Disponible',
      color: '#10B981',
      icon: '⚡',
      hours: '10:00 - 20:00',
      address: 'Av. Las Heras 567, Mendoza Capital',
      phone: '+54 261 123456',
      whatsapp: 'https://wa.me/5492611234567',
      instagram: 'https://instagram.com/losdesiempre_mza',
      maps: 'https://maps.app.goo.gl/reMwsRDzSiM4fP6m9',
      subtitle: 'Sneakers & Moda Premium'
    },
    { 
      id: 'cordoba', 
      name: 'Córdoba', 
      status: 'Web + Local',
      color: '#3B82F6',
      icon: '🌟',
      hours: '9:30 - 20:30',
      address: 'Av. Colón 890, Nueva Córdoba',
      phone: '+54 351 123456',
      whatsapp: 'https://wa.me/5493573456964',
      instagram: 'https://www.instagram.com/losdesiempre_cba',
      maps: 'https://maps.app.goo.gl/CsdepfKUpkp1HStY6',
      subtitle: 'Tienda Online + Local Físico'
    }
  ];

  const links = [
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
    }
  ];

  const contacts = [
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
      number: '+54 357 3456964',
      url: 'https://wa.me/5493573456964',
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

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'border-l-red-600 bg-red-50/10';
      case 'medium': return 'border-l-orange-500 bg-orange-50/10';
      default: return 'border-l-gray-500 bg-gray-50/10';
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'catalog': return '🛍️';
      case 'web': return '⚡';
      case 'special': return '⭐';
      case 'premium': return '📈';
      default: return '🛍️';
    }
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  const handleWhatsAppClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleInstagramClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleMapsClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleLinkClick = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const filteredLinks = selectedLocation === 'all' 
    ? links 
    : links.filter(link => link.location === selectedLocation || link.location === 'all');

  const filteredContacts = selectedLocation === 'all' 
    ? contacts 
    : contacts.filter(contact => contact.location === selectedLocation);

  const selectedLocationData = locations.find(loc => loc.id === selectedLocation);

  return (
         <div className="min-h-screen bg-black text-white">
       {/* Header Optimizado para Móviles */}
       <div className="bg-gray-900 border-b border-gray-800 px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
                         {/* Logo y Título - Centrado en móviles */}
             <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
               <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                 <img 
                   src="/lds-logo1.png" 
                   alt="Los de Siempre Logo" 
                   className="w-full h-full object-contain"
                   width={128}
                   height={128}
                 />
               </div>
               <div>
                 <p className="text-xl sm:text-2xl font-bold text-white">🩸🏛️ EL TEMPLO DE LAS ZAPAS 🏛️🩸</p>
               </div>
             </div>
            
                         {/* Stats - Responsive y táctil */}
             <div className="flex items-center space-x-3 sm:space-x-6 text-center">
               <div className="bg-gray-800 rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px] border border-gray-700">
                 <div className="text-xl sm:text-2xl font-bold text-green-400">3</div>
                 <div className="text-xs text-gray-300">Locales</div>
               </div>
               <div className="bg-gray-800 rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px] border border-gray-700">
                 <div className="text-xl sm:text-2xl font-bold text-blue-400">500+</div>
                 <div className="text-xs text-gray-300">Modelos</div>
               </div>
               <div className="bg-gray-800 rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[80px] border border-gray-700">
                 <div className="text-xl sm:text-2xl font-bold text-red-400">24h</div>
                 <div className="text-xs text-gray-300">Envío</div>
               </div>
             </div>
          </div>
        </div>
      </div>

             {/* Filtros de Navegación - Scroll horizontal en móviles */}
       <div className="bg-gray-900 border-b border-gray-800 px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto space-x-2 sm:space-x-3 pb-2 scrollbar-hide">
            <button 
              onClick={() => handleLocationSelect('all')}
                             className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors whitespace-nowrap text-sm sm:text-base min-w-fit ${
                 selectedLocation === 'all' 
                   ? 'bg-red-600 text-white hover:bg-red-700' 
                   : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
               }`}
            >
              🌟 Todos los locales
            </button>
            {locations.map(location => (
              <button
                key={location.id}
                onClick={() => handleLocationSelect(location.id)}
                                 className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors whitespace-nowrap text-sm sm:text-base min-w-fit ${
                   selectedLocation === location.id
                     ? 'bg-red-600 text-white hover:bg-red-700'
                     : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
                 }`}
              >
                {location.icon} {location.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido Principal - Responsive */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Vista "Todos los Locales" */}
        {selectedLocation === 'all' && (
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
              <span className="mr-2">📍</span>
              Nuestros Locales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {locations.map(location => (
                                 <div 
                   key={location.id}
                   onClick={() => handleLocationSelect(location.id)}
                   className="bg-gray-800 border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-gray-700 transition-all cursor-pointer active:scale-95 shadow-lg hover:shadow-xl"
                 >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <span className="text-2xl sm:text-3xl">{location.icon}</span>
                      <div>
                        <h3 className="font-bold text-white text-base sm:text-lg">{location.name}</h3>
                        <span 
                          className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-white"
                          style={{ backgroundColor: location.color }}
                        >
                          {location.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                                         <div className="flex items-start space-x-2 sm:space-x-3">
                       <span className="text-gray-300 text-sm sm:text-base">📍</span>
                       <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{location.address}</span>
                     </div>
                     <div className="flex items-center space-x-2 sm:space-x-3">
                       <span className="text-gray-300 text-sm sm:text-base">🕐</span>
                       <span className="text-gray-300 text-xs sm:text-sm">Lunes a Sábado: {location.hours}</span>
                     </div>
                     {location.subtitle && (
                       <p className="text-xs text-gray-400 italic leading-relaxed">{location.subtitle}</p>
                     )}
                   </div>
                   
                   <div className="flex items-center justify-between">
                     <span className="text-xs text-gray-400">Click para ver más</span>
                     <div className="text-xl sm:text-2xl text-red-600">→</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vista Detallada de Local Específico */}
        {selectedLocation !== 'all' && selectedLocationData && (
          <div className="mb-6 sm:mb-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 sm:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <span className="text-3xl sm:text-4xl">{selectedLocationData.icon}</span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedLocationData.name}</h3>
                    <span 
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white"
                      style={{ backgroundColor: selectedLocationData.color }}
                    >
                      {selectedLocationData.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                 <div className="flex items-start space-x-2 sm:space-x-3">
                   <span className="text-gray-300 text-lg sm:text-xl">📍</span>
                   <div>
                     <p className="text-white font-medium mb-1 text-sm sm:text-base">Dirección</p>
                     <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                       {selectedLocationData.address}
                     </p>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-2 sm:space-x-3">
                   <span className="text-gray-300 text-lg sm:text-xl">🕐</span>
                   <div>
                     <p className="text-white font-medium mb-1 text-sm sm:text-base">Horarios</p>
                     <p className="text-gray-300 text-xs sm:text-sm">Lunes a Sábado: {selectedLocationData.hours}</p>
                     <p className="text-gray-400 text-xs">Domingos: Cerrado</p>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-2 sm:space-x-3">
                   <span className="text-gray-300 text-lg sm:text-xl">📞</span>
                   <div>
                     <p className="text-white font-medium mb-1 text-sm sm:text-base">Teléfono</p>
                     <a 
                       href={`tel:${selectedLocationData.phone}`}
                       className="text-green-600 text-xs sm:text-sm hover:text-green-400 transition-colors"
                     >
                       {selectedLocationData.phone}
                     </a>
                   </div>
                 </div>
              </div>
              
              {/* Botones de Acción - Responsive y táctiles */}
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4">
                <button 
                  onClick={() => handleMapsClick(selectedLocationData.maps)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 active:scale-95"
                >
                                     <span className="text-gray-300 text-lg sm:text-xl">📍</span>
                   <span className="text-sm sm:text-base">Cómo llegar</span>
                </button>
                <button 
                  onClick={() => handleWhatsAppClick(selectedLocationData.whatsapp)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 active:scale-95"
                >
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5" />
                  <span className="text-sm sm:text-base">WhatsApp</span>
                </button>
                <button 
                  onClick={() => handleInstagramClick(selectedLocationData.instagram)}
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 active:scale-95"
                >
                  <img src="/instagram-icon.svg" alt="Instagram" className="w-5 h-5" />
                  <span className="text-sm sm:text-base">Instagram</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Links/Catálogos - Responsive */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">📚 Catálogos y Enlaces</h2>
          <div className="space-y-3 sm:space-y-4">
            {filteredLinks.map(link => (
              <div
                key={link.id}
                onClick={() => handleLinkClick(link.url)}
                                 className={`relative bg-gray-800 border border-gray-700 rounded-xl p-4 sm:p-6 ${getPriorityColor(link.priority)} hover:bg-gray-700 transition-all cursor-pointer active:scale-95 shadow-lg hover:shadow-xl`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1">
                                         <div className="p-2 sm:p-3 bg-gray-700 rounded-lg border border-gray-600 flex-shrink-0">
                      <span className="text-xl sm:text-2xl">{getTypeIcon(link.type)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg text-white mb-1">
                        {link.title}
                      </h3>
                                             <p className="text-gray-300 font-medium mb-2 text-sm sm:text-base">{link.subtitle}</p>
                       <p className="text-gray-400 text-xs sm:text-sm">{link.preview}</p>
                     </div>
                   </div>
                   
                   <div className="text-right flex-shrink-0">
                     <div className="text-xs text-gray-400 font-medium mb-2">{link.clicks} clicks</div>
                                         <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold text-white">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacto Directo - Responsive */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">💬 Contacto Directo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filteredContacts.map(contact => (
              <div
                key={contact.id}
                onClick={() => handleWhatsAppClick(contact.url)}
                                 className="bg-green-900/20 border border-green-700/30 rounded-xl p-4 sm:p-6 flex items-center justify-between hover:bg-green-900/30 transition-all cursor-pointer active:scale-95 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                                     <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white text-xs sm:text-sm truncate">{contact.title}</h3>
                                         <p className="text-gray-300 text-xs sm:text-sm truncate">{contact.number}</p>
                   </div>
                 </div>
                 <div className="flex items-center space-x-2 flex-shrink-0 ml-2 sm:ml-4">
                   <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${contact.online ? 'bg-green-600' : 'bg-gray-500'}`}></div>
                   <span className="text-xs text-gray-400 hidden sm:block whitespace-nowrap">
                     {contact.online ? 'En línea' : 'Ocupado'}
                   </span>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>

              {/* Footer - Responsive */}
        <div className="bg-gray-900 border-t border-gray-800 px-4 sm:px-6 py-6 sm:py-8">
         <div className="max-w-4xl mx-auto text-center">
           <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
             <div className="p-3 sm:p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer active:scale-95 border border-gray-700">
               <span className="text-xl sm:text-2xl">📤</span>
             </div>
             <div className="p-3 sm:p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer active:scale-95 border border-gray-700">
               <span className="text-xl sm:text-2xl">📅</span>
             </div>
           </div>
           <p className="text-gray-400 text-xs sm:text-sm">
             Powered by LDS Hub • Última actualización: Diciembre 2024
           </p>
         </div>
       </div>
    </div>
  );
};

export default InteractiveHub;
