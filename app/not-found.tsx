import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        {/* Logo/Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-black flex items-center justify-center border-2 border-red-500">
          <span className="text-3xl font-bold text-white">404</span>
        </div>
        
        {/* Error Message */}
        <h1 className="text-4xl font-bold text-red-400 mb-4">
          ¡Ups! Página no encontrada
        </h1>
        
        <p className="text-gray-300 mb-8 text-lg">
          La página que buscas no existe o ha sido movida. 
          Pero no te preocupes, ¡tenemos todo lo que necesitas en nuestro hub!
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-xl font-bold text-green-400">3</div>
            <div className="text-xs text-gray-400">Locales</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-xl font-bold text-blue-400">500+</div>
            <div className="text-xs text-gray-400">Modelos</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-xl font-bold text-purple-400">24h</div>
            <div className="text-xs text-gray-400">Envío</div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/25"
          >
            <span className="mr-2">🏠</span>
            Volver al Hub Principal
          </Link>
          
          <div className="inline-flex items-center justify-center w-full bg-gray-800 text-gray-300 py-3 px-6 rounded-lg font-medium border border-gray-700">
            <span className="mr-2">⬅️</span>
            Página Anterior
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 mb-2">
            ¿Necesitas ayuda? Contacta con nosotros:
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <a 
              href="https://wa.me/5492966312775" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              💬 WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/losdesiempresneakers8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              📸 Instagram
            </a>
          </div>
        </div>
        
        {/* Brand */}
        <div className="mt-8 text-center">
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
