import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center border-2 border-red-500">
          <span className="text-3xl font-bold text-white">404</span>
        </div>
        
        {/* Error Message */}
        <h1 className="text-3xl font-bold text-red-400 mb-4">
          Página no encontrada
        </h1>
        
        <p className="text-gray-300 mb-6 text-lg">
          La página que buscas no existe o ha sido movida. 
          Pero no te preocupes, ¡tenemos muchas otras cosas increíbles para ti!
        </p>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/25"
          >
            <Home className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full bg-gray-800 text-gray-300 py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver atrás
          </button>
        </div>
        
        {/* Help Section */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-sm text-gray-400 mb-3">
            ¿Buscas algo específico? Prueba con:
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link 
              href="/"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              🏠 Inicio
            </Link>
            <Link 
              href="/"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              📱 Catálogos
            </Link>
            <Link 
              href="/"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              💬 Contacto
            </Link>
          </div>
        </div>
        
        {/* Brand */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600">
            🩸🏛️ EL TEMPLO DE LAS ZAPAS 🏛️🩸
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Powered by LDS Hub
          </p>
        </div>
      </div>
    </div>
  )
}
