'use client'

import React from 'react';
import { TrendingUp, Users, ShoppingBag, Star, Zap, Calendar } from 'lucide-react';
import { Link, Location } from '../LosDeSeimpreHub';

interface StatsFormProps {
  links: Link[];
  locations: Location[];
  selectedLocation: string;
}

const StatsForm: React.FC<StatsFormProps> = ({ 
  links, 
  locations, 
  selectedLocation 
}) => {
  const getLocationInfo = (locationId: string) => {
    return locations.find(loc => loc.id === locationId);
  };

  const getFilteredLinks = () => {
    if (selectedLocation === 'all') return links;
    return links.filter(link => link.location === selectedLocation || link.location === 'all');
  };

  const getTotalClicks = () => {
    return getFilteredLinks().reduce((total, link) => total + link.clicks, 0);
  };

  const getTopPerformingLinks = () => {
    return getFilteredLinks()
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 5);
  };

  const getLocationStats = () => {
    return locations.map(location => {
      const locationLinks = links.filter(link => link.location === location.id);
      const totalClicks = locationLinks.reduce((total, link) => total + link.clicks, 0);
      const avgClicks = locationLinks.length > 0 ? Math.round(totalClicks / locationLinks.length) : 0;
      
      return {
        ...location,
        totalClicks,
        avgClicks,
        linkCount: locationLinks.length
      };
    });
  };

  const getPriorityDistribution = () => {
    const filteredLinks = getFilteredLinks();
    const distribution = {
      high: filteredLinks.filter(link => link.priority === 'high').length,
      medium: filteredLinks.filter(link => link.priority === 'medium').length,
      low: filteredLinks.filter(link => link.priority === 'low').length
    };
    return distribution;
  };

  const getTypeDistribution = () => {
    const filteredLinks = getFilteredLinks();
    const distribution = {
      catalog: filteredLinks.filter(link => link.type === 'catalog').length,
      web: filteredLinks.filter(link => link.type === 'web').length,
      premium: filteredLinks.filter(link => link.type === 'premium').length,
      special: filteredLinks.filter(link => link.type === 'special').length
    };
    return distribution;
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">📊 Estadísticas y Métricas</h2>
        <p className="text-gray-400">
          {selectedLocation === 'all' 
            ? 'Vista general de todas las métricas'
            : `Estadísticas de ${getLocationInfo(selectedLocation)?.name}`
          }
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-green-400 mb-1">
            {getTotalClicks().toLocaleString()}
          </div>
          <div className="text-xs text-gray-400">Total Clicks</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {getFilteredLinks().length}
          </div>
          <div className="text-xs text-gray-400">Enlaces</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {Math.round(getTotalClicks() / Math.max(getFilteredLinks().length, 1))}
          </div>
          <div className="text-xs text-gray-400">Promedio</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
          <div className="text-2xl font-bold text-orange-400 mb-1">
            {locations.length}
          </div>
          <div className="text-xs text-gray-400">Locales</div>
        </div>
      </div>

      {/* Top Performing Links */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <span>Top 5 Enlaces Más Visitados</span>
        </h3>
        <div className="space-y-3">
          {getTopPerformingLinks().map((link, index) => (
            <div key={link.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  #{index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">{link.title}</h4>
                  <p className="text-xs text-gray-400">{link.subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-400">{link.clicks.toLocaleString()}</div>
                <div className="text-xs text-gray-400">clicks</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <Users className="w-5 h-5 text-blue-400" />
          <span>Rendimiento por Local</span>
        </h3>
        <div className="space-y-3">
          {getLocationStats().map(location => (
            <div key={location.id} className="p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{location.icon}</span>
                  <h4 className="font-medium text-white">{location.name}</h4>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${location.color} text-white`}>
                  {location.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-400">{location.totalClicks.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Total Clicks</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-400">{location.avgClicks}</div>
                  <div className="text-xs text-gray-400">Promedio</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-400">{location.linkCount}</div>
                  <div className="text-xs text-gray-400">Enlaces</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Priority and Type Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Priority Distribution */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>Distribución por Prioridad</span>
          </h3>
          <div className="space-y-3">
            {Object.entries(getPriorityDistribution()).map(([priority, count]) => (
              <div key={priority} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${
                    priority === 'high' ? 'bg-red-500' : 
                    priority === 'medium' ? 'bg-orange-500' : 'bg-gray-500'
                  }`}></div>
                  <span className="text-gray-300 capitalize">{priority}</span>
                </div>
                <div className="text-white font-medium">{count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Type Distribution */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-purple-400" />
            <span>Distribución por Tipo</span>
          </h3>
          <div className="space-y-3">
            {Object.entries(getTypeDistribution()).map(([type, count]) => (
              <div key={type} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300 capitalize">{type}</span>
                </div>
                <div className="text-white font-medium">{count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-blue-400" />
          <span>Actividad Reciente</span>
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white text-sm">Nuevo catálogo agregado</h4>
                <p className="text-xs text-gray-400">Hace 2 horas</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-white text-sm">Pico de visitas en Córdoba</h4>
                <p className="text-xs text-gray-400">Hace 1 día</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">📊 Exportar Datos</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
            📈 PDF Report
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
            📊 Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsForm;
