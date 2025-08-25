import React from 'react';

const StaticHub = () => {
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
      whatsapp: 'https://wa.me/message/2Z7PPPRU6Q2ZA1',
      instagram: 'https://www.instagram.com/losdesiempre_cba',
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

  return (
         <div className="min-h-screen bg-black text-white">
       {/* Header Mejorado */}
       <div className="bg-gray-900 border-b border-gray-800 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo y Título */}
            <div className="flex items-center space-x-4">
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
                <p className="text-2xl sm:text-3xl font-bold text-white">🩸🏛️ EL TEMPLO DE LAS ZAPAS 🏛️🩸</p>
              </div>
            </div>
            
            {/* Stats en línea */}
            <div className="flex items-center space-x-6 text-center">
              <div className="bg-gray-800 rounded-lg p-3 min-w-[80px] border border-gray-700">
                <div className="text-2xl font-bold text-green-400">3</div>
                <div className="text-xs text-gray-300">Locales</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 min-w-[80px] border border-gray-700">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-xs text-gray-300">Modelos</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 min-w-[80px] border border-gray-700">
                <div className="text-2xl font-bold text-red-400">24h</div>
                <div className="text-xs text-gray-300">Envío</div>
              </div>
            </div>
          </div>
        </div>
      </div>

             {/* Filtros de Navegación Mejorados */}
       <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto space-x-3 pb-2">
            <button className="px-6 py-3 rounded-full bg-[#DC2626] text-white font-medium hover:bg-red-700 transition-colors whitespace-nowrap">
              🌟 Todos los locales
            </button>
            {locations.map(location => (
              <button
                key={location.id}
                className="px-6 py-3 rounded-full bg-[#4B5563] text-[#E5E7EB] font-medium hover:bg-[#6B7280] transition-colors whitespace-nowrap"
              >
                {location.icon} {location.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Vista "Todos los Locales" */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-2">📍</span>
            Nuestros Locales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map(location => (
              <div 
                key={location.id}
                className="bg-[#374151] border border-[#4B5563] rounded-xl p-6 hover:bg-[#4B5563] transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{location.icon}</span>
                    <div>
                      <h3 className="font-bold text-white text-lg">{location.name}</h3>
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: location.color }}
                      >
                        {location.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-[#E5E7EB] text-lg">📍</span>
                    <span className="text-[#E5E7EB] text-sm leading-relaxed">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#E5E7EB] text-lg">🕐</span>
                    <span className="text-[#E5E7EB] text-sm">Lunes a Sábado: {location.hours}</span>
                  </div>
                  {location.subtitle && (
                    <p className="text-xs text-[#9CA3AF] italic leading-relaxed">{location.subtitle}</p>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#9CA3AF]">Click para ver más</span>
                  <div className="text-2xl text-[#DC2626]">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vista Detallada de Local Específico (Ejemplo con Río Gallegos) */}
        <div className="mb-8">
          <div className="bg-[#374151] border border-[#4B5563] rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">🔥</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">Río Gallegos</h3>
                  <span className="px-4 py-2 rounded-full text-sm font-medium text-white bg-[#DC2626]">
                    Entrega Inmediata
                  </span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-[#E5E7EB] text-xl">📍</span>
                <div>
                  <p className="text-white font-medium mb-1">Dirección</p>
                  <p className="text-[#E5E7EB] text-sm leading-relaxed">
                    Galería Sur 1, Alberdi esquina 9 de julio, Río Gallegos, Santa Cruz
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-[#E5E7EB] text-xl">🕐</span>
                <div>
                  <p className="text-white font-medium mb-1">Horarios</p>
                  <p className="text-[#E5E7EB] text-sm">Lunes a Sábado: 9:00 - 21:00</p>
                  <p className="text-[#9CA3AF] text-xs">Domingos: Cerrado</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-[#E5E7EB] text-xl">📞</span>
                <div>
                  <p className="text-white font-medium mb-1">Teléfono</p>
                  <a 
                    href="tel:+542966507733"
                    className="text-[#10B981] text-sm hover:text-green-400 transition-colors"
                  >
                    +54 2966 507733
                  </a>
                </div>
              </div>
            </div>
            
            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex-1 bg-[#3B82F6] hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                📍 Cómo llegar
              </button>
              <button className="flex-1 bg-[#10B981] hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 inline mr-2" />
                WhatsApp
              </button>
              <button className="flex-1 bg-[#EC4899] hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                <img src="/instagram-icon.svg" alt="Instagram" className="w-5 h-5 inline mr-2" />
                Instagram
              </button>
            </div>
          </div>
        </div>

        {/* Links/Catálogos */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📚 Catálogos y Enlaces</h2>
          <div className="space-y-4">
            {links.map(link => (
              <div
                key={link.id}
                className={`relative bg-[#374151] border border-[#4B5563] rounded-xl p-6 ${getPriorityColor(link.priority)} hover:bg-[#4B5563] transition-all cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="p-3 bg-[#4B5563] rounded-lg border border-[#6B7280]">
                      <span className="text-2xl">{getTypeIcon(link.type)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white mb-1">
                        {link.title}
                      </h3>
                      <p className="text-[#E5E7EB] font-medium mb-2">{link.subtitle}</p>
                      <p className="text-[#9CA3AF] text-sm">{link.preview}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xs text-[#9CA3AF] font-medium mb-2">{link.clicks} clicks</div>
                    <div className="w-10 h-10 bg-[#DC2626] rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacto Directo */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">💬 Contacto Directo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contacts.map(contact => (
              <div
                key={contact.id}
                className="bg-[#10B981]/20 border border-[#10B981]/30 rounded-xl p-6 flex items-center justify-between hover:bg-[#10B981]/30 transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-14 h-14 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-7 h-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white text-sm truncate">{contact.title}</h3>
                    <p className="text-[#E5E7EB] text-sm truncate">{contact.number}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                  <div className={`w-3 h-3 rounded-full ${contact.online ? 'bg-[#10B981]' : 'bg-[#6B7280]'}`}></div>
                  <span className="text-xs text-[#9CA3AF] whitespace-nowrap">
                    {contact.online ? 'En línea' : 'Ocupado'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

             {/* Footer */}
       <div className="bg-gray-900 border-t border-gray-800 px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
                         <div className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700">
               <span className="text-2xl">📤</span>
             </div>
             <div className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700">
               <span className="text-2xl">📅</span>
             </div>
          </div>
          <p className="text-[#9CA3AF] text-sm">
            Powered by LDS Hub • Última actualización: Diciembre 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaticHub;
