'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error caught by error boundary:', error)
  }, [error])

  return (
          <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        {/* Error Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center border-2 border-red-500">
          <AlertTriangle className="w-12 h-12 text-white" />
        </div>
        
        {/* Error Message */}
        <h1 className="text-3xl font-bold text-red-400 mb-4">
          ¡Algo salió mal!
        </h1>
        
        <p className="text-gray-300 mb-6 text-lg">
          Ha ocurrido un error inesperado. 
          Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo.
        </p>
        
        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300 mb-2">
              Detalles del error (Solo desarrollo)
            </summary>
            <div className="bg-gray-800/50 rounded-lg p-4 text-xs text-gray-300 font-mono">
              <p><strong>Error:</strong> {error.message}</p>
              {error.digest && (
                <p><strong>Digest:</strong> {error.digest}</p>
              )}
              <p><strong>Stack:</strong></p>
              <pre className="whitespace-pre-wrap text-xs">
                {error.stack}
              </pre>
            </div>
          </details>
        )}
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Intentar de nuevo
          </button>
          
          <a 
            href="/"
            className="inline-flex items-center justify-center w-full bg-gray-800 text-gray-300 py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <Home className="w-5 h-5 mr-2" />
            Volver al inicio
          </a>
        </div>
        
        {/* Help Section */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-sm text-gray-400 mb-3">
            Si el problema persiste, contacta con soporte:
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
              href="mailto:soporte@losdesiempre.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              📧 Email
            </a>
          </div>
        </div>
        
        {/* Brand */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600">
            🩸🏛️EL TEMPLO DE LAS ZAPAS🏛️🩸
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Powered by LDS Hub
          </p>
        </div>
      </div>
    </div>
  )
}
