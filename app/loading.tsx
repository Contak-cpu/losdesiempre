export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        {/* Loading Logo */}
        <div className="w-32 h-32 mx-auto mb-8 flex items-center justify-center overflow-hidden shadow-xl shadow-red-500/30 animate-pulse">
          <img 
            src="/lds-logo1.png" 
            alt="Los de Siempre Logo" 
            className="w-full h-full object-contain"
            width={128}
            height={128}
          />
        </div>
        
        {/* Loading Text */}
        <h1 className="text-2xl font-bold text-red-400 mb-4 animate-pulse">
          Los de Siempre Hub
        </h1>
        
        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Loading Message */}
        <p className="text-gray-400 text-lg animate-pulse">
          🩸🏛️ Cargando EL TEMPLO DE LAS ZAPAS 🏛️🩸
        </p>
        
        {/* Brand */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            Powered by LDS Hub
          </p>
        </div>
      </div>
    </div>
  )
}
