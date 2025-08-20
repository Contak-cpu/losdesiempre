#!/bin/bash

echo "🚀 Configurando Los de Siempre Hub..."
echo "======================================"

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18+ primero."
    exit 1
fi

# Verificar versión de Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js versión $NODE_VERSION detectada. Se requiere Node.js 18+"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi

# Crear archivo .env.local si no existe
if [ ! -f .env.local ]; then
    echo "🔧 Creando archivo .env.local..."
    cat > .env.local << EOF
# Configuración del entorno
NEXT_PUBLIC_APP_NAME="Los de Siempre Hub"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_APP_ENV="development"
EOF
    echo "✅ Archivo .env.local creado"
fi

# Verificar que el proyecto compile
echo "🔨 Verificando compilación..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Proyecto compila correctamente"
else
    echo "❌ Error en la compilación"
    exit 1
fi

echo ""
echo "🎉 ¡Setup completado exitosamente!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Ejecuta 'npm run dev' para desarrollo local"
echo "2. Abre http://localhost:3000 en tu navegador"
echo "3. Haz commit y push a GitHub"
echo "4. Conecta con Vercel para despliegue automático"
echo ""
echo "🚀 ¡Los de Siempre Hub está listo para usar!"
