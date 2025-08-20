#!/bin/bash

echo "🚀 Iniciando build SPA para Los de Siempre Hub..."

# Limpiar builds anteriores
echo "🧹 Limpiando builds anteriores..."
rm -rf .next out

# Instalar dependencias si es necesario
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm ci
fi

# Build con configuración SPA
echo "🔨 Ejecutando build SPA..."
npm run build

# Verificar que el build fue exitoso
if [ $? -eq 0 ]; then
    echo "✅ Build SPA completado exitosamente!"
    echo "📁 Archivos generados en: out/"
    echo "🌐 Listo para deploy en Vercel"
else
    echo "❌ Error en el build SPA"
    exit 1
fi
