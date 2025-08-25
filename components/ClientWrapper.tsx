'use client'

import { useEffect, useState } from 'react'
import LosDeSeimpreHub from './LosDeSeimpreHub'

export default function ClientWrapper() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center overflow-hidden shadow-xl shadow-red-500/30">
            <img 
              src="/lds-logo1.png" 
              alt="Los de Siempre Logo" 
              className="w-full h-full object-contain"
              width={128}
              height={128}
            />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mb-2">
            Los de Siempre
          </h1>
          <p className="text-gray-300 mb-2">🩸🏛️EL TEMPLO DE LAS ZAPAS🏛️🩸</p>
          <p className="text-gray-400 text-sm">Cargando...</p>
        </div>
      </div>
    )
  }

  return <LosDeSeimpreHub />
}
