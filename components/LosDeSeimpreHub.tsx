'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, Phone, Clock, ShoppingBag, Star, Zap, Calendar, TrendingUp, Heart, Share2 } from 'lucide-react';

const LosDeSeimpreHub = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [favorites, setFavorites] = useState<string[]>([]);
  const [clickStats, setClickStats] = useState<Record<string, number>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const locations = [
    { 
      id: 'rio-gallegos', 
      name: 'Río Gallegos', 
      status: 'Entrega Inmediata',
      color: 'from-red-500 to-pink-500',
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
      color: 'from-purple-500 to-blue-500',
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
      color: 'from-green-500 to-teal-500',
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

  const handleLinkClick = useCallback((linkId: string, url: string) => {
    if (!isClient) return;
    
    setClickStats(prev => ({
      ...prev,
      [linkId]: (prev[linkId] || 0) + 1
    }));
    
    if (url && url !== '#importadas') {
      window.open(url, '_blank');
    }
  }, [isClient]);

  const toggleFavorite = useCallback((linkId: string) => {
    if (!isClient) return;
    
    setFavorites(prev => 
      prev.includes(linkId) 
        ? prev.filter(id => id !== linkId)
        : [...prev, linkId]
    );
  }, [isClient]);

  const handleLocationSelect = useCallback((locationId: string) => {
    if (!isClient) return;
    setSelectedLocation(locationId);
  }, [isClient]);

  const handleWhatsAppClick = useCallback((url: string) => {
    if (!isClient) return;
    window.open(url, '_blank');
  }, [isClient]);

  const handleInstagramClick = useCallback((url: string) => {
    if (!isClient) return;
    window.open(url, '_blank');
  }, [isClient]);

  const filteredLinks = selectedLocation === 'all' 
    ? links 
    : links.filter(link => link.location === selectedLocation || link.location === 'all');

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'border-l-red-500 bg-red-900/20';
      case 'medium': return 'border-l-orange-500 bg-orange-900/20';
      default: return 'border-l-gray-500 bg-gray-800/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'catalog': return <ShoppingBag className="w-5 h-5" />;
      case 'web': return <Zap className="w-5 h-5" />;
      case 'special': return <Star className="w-5 h-5" />;
      case 'premium': return <TrendingUp className="w-5 h-5" />;
      default: return <ShoppingBag className="w-5 h-5" />;
    }
  };

  // Renderizado estático inicial sin interactividad
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        {/* Header estático */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-black/40"></div>
          <div className="relative px-6 py-8 text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-black/90 border-3 border-red-500/60 flex items-center justify-center overflow-hidden shadow-xl shadow-red-500/30 p-1">
              <div className="w-full h-full bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center text-white font-bold text-2xl border-2 border-red-500">
                LDS
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mb-2">
              Los de Siempre
            </h1>
            <p className="text-gray-300 mb-2">🩸🏛️ EL TEMPLO DE LAS ZAPAS 🏛️🩸</p>
            <p className="text-gray-400 text-sm mb-4">Sneakers & Moda • Multi-Local</p>
          </div>
        </div>

        {/* Contenido estático básico */}
        <div className="px-6 space-y-4">
          {links.slice(0, 3).map(link => (
            <div key={link.id} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <h3 className="font-bold text-lg text-white">{link.title}</h3>
              <p className="text-sm text-gray-300">{link.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-black/40 animate-pulse"></div>
        <div className="relative px-6 py-8 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-black/90 border-3 border-red-500/60 flex items-center justify-center overflow-hidden shadow-xl shadow-red-500/30 p-1">
            <img 
              src="https://instagram.fcor2-1.fna.fbcdn.net/v/t51.2885-19/451075842_3739983412911649_6894408099793424640_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45MDQuYzIifQ&_nc_ht=instagram.fcor2-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QGdesYPvd0eRS5sG8HBvpOgdUZFHQBP06YEhiX_bpyTTk7irMKC6bOOT0L9EDMFXM&_nc_ohc=rzZFnUBmjqcQ7kNvwEV3Njv&_nc_gid=CwY69bCBjIxeqTLs6PnzZQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfXgC9DYiicxVqJTvmsvdX1ocvBSKpEiIXo5QYnGC04osQ&oe=68ABF20B&_nc_sid=7a9f4b" 
              alt="Los de Siempre Logo" 
              className="w-full h-full object-cover rounded-full"
              crossOrigin="anonymous"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center text-white font-bold text-2xl border-2 border-red-500" style={{display: 'none'}}>
              LDS
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mb-2">
            Los de Siempre
          </h1>
          <p className="text-gray-300 mb-2">🩸🏛️ EL TEMPLO DE LAS ZAPAS 🏛️🩸</p>
          <p className="text-gray-400 text-sm mb-4">Sneakers & Moda • Multi-Local</p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>3 Locales</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{currentTime.toLocaleTimeString('es-AR', { timeStyle: 'short' })}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Filter */}
      <div className="px-6 mb-6">
        <div className="flex overflow-x-auto space-x-3 pb-2">
          <button
            onClick={() => handleLocationSelect('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedLocation === 'all'
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25'
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
                  ? `bg-gradient-to-r ${location.color} text-white`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {location.icon} {location.name}
            </button>
          ))}
        </div>
      </div>

      {/* Locations Info Section */}
      {selectedLocation !== 'all' && (
        <div className="px-6 mb-6">
          <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
            {locations
              .filter(loc => loc.id === selectedLocation)
              .map(location => (
                <div key={location.id} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {location.icon} {location.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${location.color} text-white`}>
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
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                      onClick={() => handleWhatsAppClick(location.whatsapp)}>
                      💬 WhatsApp
                    </button>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-3 rounded-lg font-medium transition-colors"
                      onClick={() => handleInstagramClick(location.instagram)}>
                      📸 IG
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* All Locations Overview */}
      {selectedLocation === 'all' && (
        <div className="px-6 mb-6">
          <h2 className="text-lg font-bold text-white mb-4">📍 Nuestros Locales</h2>
          <div className="space-y-3">
            {locations.map(location => (
              <div 
                key={location.id}
                className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-700/40 transition-all cursor-pointer"
                onClick={() => handleLocationSelect(location.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{location.icon}</span>
                      <h3 className="font-bold text-white">{location.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${location.color} text-white`}>
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
      <div className="px-6 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">98%</div>
            <div className="text-xs text-gray-400">Stock Disponible</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">24h</div>
            <div className="text-xs text-gray-400">Envío Express</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">4.9★</div>
            <div className="text-xs text-gray-400">Calificación</div>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="px-6 space-y-3">
        {filteredLinks.map(link => (
          <div
            key={link.id}
            onClick={() => handleLinkClick(link.id, link.url)}
            className={`relative group bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border-l-4 ${getPriorityColor(link.priority)} hover:bg-gray-700/80 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 border border-gray-700/50`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <div className="p-2 bg-gray-700/80 rounded-lg border border-gray-600">
                  {getTypeIcon(link.type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white group-hover:text-red-300 transition-colors drop-shadow-sm">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-medium">{link.subtitle}</p>
                  <p className="text-xs text-gray-400 mt-1">{link.preview}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(link.id);
                  }}
                  className={`p-2 rounded-full transition-colors ${
                    favorites.includes(link.id)
                      ? 'text-red-400 hover:text-red-300'
                      : 'text-gray-500 hover:text-gray-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(link.id) ? 'fill-current' : ''}`} />
                </button>
                
                <div className="text-right">
                  <div className="text-xs text-gray-400 font-medium">{link.clicks} clicks</div>
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-white">→</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Click ripple effect */}
            <div className="absolute inset-0 bg-red-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="px-6 mt-8 mb-6">
        <h2 className="text-xl font-bold mb-4 text-center">💬 Contacto Directo</h2>
        <div className="space-y-3">
          {contacts
            .filter(contact => selectedLocation === 'all' || contact.location === selectedLocation)
            .map(contact => (
            <div
              key={contact.id}
              onClick={() => handleWhatsAppClick(contact.url)}
              className="bg-green-600/20 border border-green-500/30 rounded-xl p-4 flex items-center justify-between hover:bg-green-600/30 transition-all cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{contact.title}</h3>
                  <p className="text-sm text-gray-300">{contact.number}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${contact.online ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                <span className="text-xs text-gray-400">
                  {contact.online ? 'En línea' : 'Ocupado'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-8 text-center border-t border-gray-800">
        <div className="flex justify-center space-x-4 mb-4">
          <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Calendar className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Powered by LDS Hub • Última actualización: {new Date().toLocaleDateString('es-AR')}
        </p>
      </div>
    </div>
  );
};

export default LosDeSeimpreHub;
