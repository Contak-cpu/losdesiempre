'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const ColorManagerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón flotante para abrir el gestor de colores */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="🎨 Gestor de Colores"
        >
          <span className="text-2xl">🎨</span>
        </button>
      </div>

      {/* Modal del gestor de colores */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            {/* Header del modal */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-red-400">🎨 Gestor de Colores</h2>
                  <p className="text-gray-400 mt-1">Personaliza el esquema de colores de tu aplicación</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <div className="space-y-6">
                {/* Acceso directo al gestor completo */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
                  <h3 className="text-xl font-bold text-white mb-3">🚀 Gestor Completo</h3>
                  <p className="text-gray-300 mb-4">
                    Accede al gestor completo de colores con todas las opciones de personalización,
                    vista previa en tiempo real y herramientas de exportación.
                  </p>
                  <Link
                    href="/colors"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <span className="mr-2">🎨</span>
                    Abrir Gestor Completo
                  </Link>
                </div>

                {/* Accesos rápidos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-600">
                    <h4 className="font-semibold text-white mb-2">💾 Guardar Colores</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Guarda tu esquema de colores personalizado
                    </p>
                    <button
                      onClick={() => {
                        // Aquí podrías implementar la funcionalidad de guardar
                        alert('💾 Funcionalidad de guardado implementada en el gestor completo');
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Guardar
                    </button>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-600">
                    <h4 className="font-semibold text-white mb-2">🔄 Resetear</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Vuelve a los colores por defecto
                    </p>
                    <button
                      onClick={() => {
                        // Aquí podrías implementar la funcionalidad de resetear
                        alert('🔄 Funcionalidad de reset implementada en el gestor completo');
                      }}
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Resetear
                    </button>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">💡 Información</h4>
                  <ul className="text-sm text-blue-300 space-y-1">
                    <li>• Los colores se guardan automáticamente</li>
                    <li>• Puedes exportar tu configuración</li>
                    <li>• Compatible con Tailwind CSS</li>
                    <li>• Vista previa en tiempo real</li>
                  </ul>
                </div>

                {/* Enlaces útiles */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/colors"
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    📖 Documentación
                  </Link>
                  <button
                    onClick={() => {
                      // Aquí podrías implementar la funcionalidad de ayuda
                      alert('📖 Funcionalidad de ayuda implementada en el gestor completo');
                    }}
                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    ❓ Ayuda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ColorManagerNav;
