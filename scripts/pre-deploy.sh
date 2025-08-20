#!/bin/bash

echo "🚀 Iniciando pre-deploy checks..."

# Verificar directorio actual
echo "📁 Directorio actual: $(pwd)"
echo "📋 Contenido del directorio:"
ls -la

# Verificar que package.json existe
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json no encontrado"
    exit 1
fi

# Verificar que package-lock.json existe
if [ ! -f "package-lock.json" ]; then
    echo "❌ Error: package-lock.json no encontrado"
    exit 1
fi

# Verificar que node_modules existe
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules no encontrado, instalando dependencias..."
    npm ci
fi

echo "✅ Pre-deploy checks completados exitosamente"
