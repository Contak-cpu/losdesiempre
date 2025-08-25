'use client'

import React, { useState, useCallback } from 'react';
import { ShoppingBag, Star, Zap, TrendingUp, Heart } from 'lucide-react';
import { Link, Location } from '../LosDeSeimpreHub';

interface CatalogosFormProps {
  links: Link[];
  selectedLocation: string;
  locations: Location[];
}

const CatalogosForm: React.FC<CatalogosFormProps> = ({ 
  links, 
  selectedLocation, 
  locations 
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [clickStats, setClickStats] = useState<Record<string, number>>({});

  const filteredLinks = selectedLocation === 'all' 
    ? links 
    : links.filter(link => link.location === selectedLocation || link.location === 'all');

  const handleLinkClick = useCallback((linkId: string, url: string) => {
    setClickStats(prev => ({
      ...prev,
      [linkId]: (prev[linkId] || 0) + 1
    }));
    
    if (url && url !== '#importadas') {
      window.open(url, '_blank');
    }
  }, []);

  const toggleFavorite = useCallback((linkId: string) => {
    setFavorites(prev => 
      prev.includes(linkId) 
        ? prev.filter(id => id !== linkId)
        : [...prev, linkId]
    );
  }, []);

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'border-l-red-500 bg-red-900/10';
      case 'medium': return 'border-l-orange-500 bg-orange-900/10';
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

  const getLocationInfo = (locationId: string) => {
    return locations.find(loc => loc.id === locationId);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">🛍️ Catálogos y Enlaces</h2>
        <p className="text-gray-400">
          {selectedLocation === 'all' 
            ? 'Accede a todos nuestros catálogos y tiendas online'
            : `Catálogos de ${getLocationInfo(selectedLocation)?.name}`
          }
        </p>
      </div>

      {/* Priority Legend */}
      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
        <h3 className="text-sm font-medium text-white mb-3">Leyenda de Prioridades:</h3>
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-300">Alta Prioridad</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-gray-300">Media Prioridad</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <span className="text-gray-300">Baja Prioridad</span>
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="space-y-3">
        {filteredLinks.map(link => (
          <div
            key={link.id}
            onClick={() => handleLinkClick(link.id, link.url)}
            className={`relative group bg-gray-800 rounded-xl p-4 border-l-4 ${getPriorityColor(link.priority)} hover:bg-gray-700 transition-all duration-200 cursor-pointer border border-gray-700`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <div className="p-2 bg-gray-700 rounded-lg border border-gray-600">
                  {getTypeIcon(link.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-bold text-lg text-white group-hover:text-red-300 transition-colors">
                      {link.title}
                    </h3>
                    {getLocationInfo(link.location) && (
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getLocationInfo(link.location)?.color} text-white`}>
                        {getLocationInfo(link.location)?.icon} {getLocationInfo(link.location)?.name}
                      </span>
                    )}
                  </div>
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
                  <div className="text-xs text-gray-400 font-medium">
                    {(clickStats[link.id] || link.clicks).toLocaleString()} clicks
                  </div>
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredLinks.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-xl font-bold text-white mb-2">No hay catálogos disponibles</h3>
          <p className="text-gray-400">
            Para esta ubicación no hay catálogos disponibles en este momento.
          </p>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
        <h3 className="text-sm font-medium text-white mb-3">Acciones Rápidas:</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
            📱 Descargar App
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
            📧 Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogosForm;
