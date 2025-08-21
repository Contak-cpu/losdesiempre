import React from 'react';

const StaticHub = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Header */}
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
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <span>📍</span>
              <span>3 Locales</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🕐</span>
              <span>Online</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Disponible</span>
            </div>
          </div>
        </div>
      </div>

      {/* All Locations Overview */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-bold text-white mb-4">📍 Nuestros Locales</h2>
        <div className="space-y-3">
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg">🔥</span>
                  <h3 className="font-bold text-white">Río Gallegos</h3>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-red-500 to-pink-500 text-white">
                    Entrega Inmediata
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-sm">
                    <span>📍</span>
                    <span className="text-gray-300">Galería Sur 1, Alberdi esquina 9 de julio, Río Gallegos, Santa Cruz</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>🕐</span>
                    <span className="text-gray-300">9:00 - 21:00</span>
                  </div>
                  <p className="text-xs text-gray-400 italic">🩸🏛️EL TEMPLO DE LAS ZAPAS🏛️🩸</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg">⚡</span>
                  <h3 className="font-bold text-white">Mendoza</h3>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    Stock Disponible
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-sm">
                    <span>📍</span>
                    <span className="text-gray-300">Av. Las Heras 567, Mendoza Capital</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>🕐</span>
                    <span className="text-gray-300">10:00 - 20:00</span>
                  </div>
                  <p className="text-xs text-gray-400 italic">Sneakers & Moda Premium</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg">🌟</span>
                  <h3 className="font-bold text-white">Córdoba</h3>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-green-500 to-teal-500 text-white">
                    Web + Local
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-sm">
                    <span>📍</span>
                    <span className="text-gray-300">Av. Colón 890, Nueva Córdoba</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>🕐</span>
                    <span className="text-gray-300">9:30 - 20:30</span>
                  </div>
                  <p className="text-xs text-gray-400 italic">Tienda Online + Local Físico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border-l-4 border-l-red-500 bg-red-900/20 border border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className="p-2 bg-gray-700/80 rounded-lg border border-gray-600">
                <span>🛍️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-white drop-shadow-sm">
                  CATÁLOGO RIO GALLEGOS
                </h3>
                <p className="text-sm text-gray-300 font-medium">Entrega inmediata</p>
                <p className="text-xs text-gray-400 mt-1">🔥 EL TEMPLO DE LAS ZAPAS - Stock completo</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 font-medium">1250 clicks</div>
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-white">→</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border-l-4 border-l-red-500 bg-red-900/20 border border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className="p-2 bg-gray-700/80 rounded-lg border border-gray-600">
                <span>🛍️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-white drop-shadow-sm">
                  CATÁLOGO MENDOZA
                </h3>
                <p className="text-sm text-gray-300 font-medium">Entrega inmediata</p>
                <p className="text-xs text-gray-400 mt-1">⚡ 200+ modelos en stock</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 font-medium">980 clicks</div>
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-white">→</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border-l-4 border-l-red-500 bg-red-900/20 border border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className="p-2 bg-gray-700/80 rounded-lg border border-gray-600">
                <span>🛍️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-white drop-shadow-sm">
                  CATÁLOGO CÓRDOBA
                </h3>
                <p className="text-sm text-gray-300 font-medium">Google Drive</p>
                <p className="text-xs text-gray-400 mt-1">Catálogo completo actualizado</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 font-medium">750 clicks</div>
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-white">→</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border-l-4 border-l-red-500 bg-red-900/20 border border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className="p-2 bg-gray-700/80 rounded-lg border border-gray-600">
                <span>⚡</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-white drop-shadow-sm">
                  CÓRDOBA WEB
                </h3>
                <p className="text-sm text-gray-300 font-medium">Tienda online completa</p>
                <p className="text-xs text-gray-400 mt-1">🌟 Envíos a todo el país</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 font-medium">2100 clicks</div>
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-white">→</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border-l-4 border-l-orange-500 bg-orange-900/20 border border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className="p-2 bg-gray-700/80 rounded-lg border border-gray-600">
                <span>📈</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-white drop-shadow-sm">
                  BUENOS TIMBOS
                </h3>
                <p className="text-sm text-gray-300 font-medium">Mendoza - Línea Premium</p>
                <p className="text-xs text-gray-400 mt-1">👑 Ediciones limitadas y exclusivas</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 font-medium">420 clicks</div>
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-white">→</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border-l-4 border-l-orange-500 bg-orange-900/20 border border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1">
              <div className="p-2 bg-gray-700/80 rounded-lg border border-gray-600">
                <span>⭐</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-white drop-shadow-sm">
                  Zapatillas Importadas
                </h3>
                <p className="text-sm text-gray-300 font-medium">Por encargo especial</p>
                <p className="text-xs text-gray-400 mt-1">Nike, Adidas, Jordan exclusivos</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 font-medium">560 clicks</div>
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-white">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-6 mt-8 mb-6">
        <h2 className="text-xl font-bold mb-4 text-center">💬 Contacto Directo</h2>
        <div className="space-y-3">
          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">WhatsApp Río Gallegos</h3>
                <p className="text-sm text-gray-300">+54 2966 507733</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-xs text-gray-400">En línea</span>
            </div>
          </div>

          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">WhatsApp Córdoba</h3>
                <p className="text-sm text-gray-300">+54 351 123456</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-xs text-gray-400">En línea</span>
            </div>
          </div>

          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">WhatsApp Mendoza</h3>
                <p className="text-sm text-gray-300">+54 261 123456</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <span className="text-xs text-gray-400">Ocupado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-8 text-center border-t border-gray-800">
        <div className="flex justify-center space-x-4 mb-4">
          <div className="p-3 bg-gray-800 rounded-full">
            <span>📤</span>
          </div>
          <div className="p-3 bg-gray-800 rounded-full">
            <span>📅</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Powered by LDS Hub • Última actualización: Diciembre 2024
        </p>
      </div>
    </div>
  );
};

export default StaticHub;
