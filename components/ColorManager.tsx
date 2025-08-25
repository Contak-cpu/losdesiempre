'use client'

import React, { useState, useEffect } from 'react';

interface ColorScheme {
  // Fondos principales
  mainBackground: string;
  headerBackground: string;
  cardBackground: string;
  footerBackground: string;
  
  // Bordes
  borderPrimary: string;
  borderSecondary: string;
  
  // Textos
  textPrimary: string;
  textSecondary: string;
  textAccent: string;
  
  // Botones
  buttonPrimary: string;
  buttonSecondary: string;
  buttonSuccess: string;
  buttonWarning: string;
  buttonDanger: string;
  
  // Estados
  hoverPrimary: string;
  hoverSecondary: string;
  activePrimary: string;
  
  // Especiales
  logoShadow: string;
  accentColor: string;
  successColor: string;
  warningColor: string;
  dangerColor: string;
  infoColor: string;
}

const defaultColors: ColorScheme = {
  // Fondos principales
  mainBackground: 'bg-black',
  headerBackground: 'bg-gray-900',
  cardBackground: 'bg-gray-800',
  footerBackground: 'bg-gray-900',
  
  // Bordes
  borderPrimary: 'border-gray-800',
  borderSecondary: 'border-gray-700',
  
  // Textos
  textPrimary: 'text-white',
  textSecondary: 'text-gray-300',
  textAccent: 'text-gray-400',
  
  // Botones
  buttonPrimary: 'bg-red-600',
  buttonSecondary: 'bg-gray-600',
  buttonSuccess: 'bg-green-600',
  buttonWarning: 'bg-yellow-600',
  buttonDanger: 'bg-red-600',
  
  // Estados
  hoverPrimary: 'hover:bg-red-700',
  hoverSecondary: 'hover:bg-gray-500',
  activePrimary: 'active:bg-red-800',
  
  // Especiales
  logoShadow: 'shadow-red-500/30',
  accentColor: 'text-red-400',
  successColor: 'text-green-400',
  warningColor: 'text-yellow-400',
  dangerColor: 'text-red-400',
  infoColor: 'text-blue-400',
};

const ColorManager = () => {
  const [colors, setColors] = useState<ColorScheme>(defaultColors);
  const [previewMode, setPreviewMode] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>('main');

  // Cargar colores guardados del localStorage
  useEffect(() => {
    const savedColors = localStorage.getItem('lds-color-scheme');
    if (savedColors) {
      setColors(JSON.parse(savedColors));
    }
  }, []);

  // Guardar colores en localStorage
  const saveColors = () => {
    localStorage.setItem('lds-color-scheme', JSON.stringify(colors));
    alert('🎨 Esquema de colores guardado exitosamente!');
  };

  // Resetear a colores por defecto
  const resetColors = () => {
    setColors(defaultColors);
    localStorage.removeItem('lds-color-scheme');
    alert('🔄 Colores reseteados a los valores por defecto');
  };

  // Aplicar colores en tiempo real
  const applyColors = (newColors: Partial<ColorScheme>) => {
    setColors(prev => ({ ...prev, ...newColors }));
  };

  // Generar CSS personalizado
  const generateCustomCSS = () => {
    const css = `
/* CSS Personalizado para Los de Siempre */
:root {
  --main-bg: ${colors.mainBackground.replace('bg-', '')};
  --header-bg: ${colors.headerBackground.replace('bg-', '')};
  --card-bg: ${colors.cardBackground.replace('bg-', '')};
  --footer-bg: ${colors.footerBackground.replace('bg-', '')};
  --border-primary: ${colors.borderPrimary.replace('border-', '')};
  --border-secondary: ${colors.borderSecondary.replace('border-', '')};
  --text-primary: ${colors.textPrimary.replace('text-', '')};
  --text-secondary: ${colors.textSecondary.replace('text-', '')};
  --text-accent: ${colors.textAccent.replace('text-', '')};
  --button-primary: ${colors.buttonPrimary.replace('bg-', '')};
  --button-secondary: ${colors.buttonSecondary.replace('bg-', '')};
  --button-success: ${colors.buttonSuccess.replace('bg-', '')};
  --button-warning: ${colors.buttonWarning.replace('bg-', '')};
  --button-danger: ${colors.buttonDanger.replace('bg-', '')};
  --accent-color: ${colors.accentColor.replace('text-', '')};
  --success-color: ${colors.successColor.replace('text-', '')};
  --warning-color: ${colors.warningColor.replace('text-', '')};
  --danger-color: ${colors.dangerColor.replace('text-', '')};
  --info-color: ${colors.infoColor.replace('text-', '')};
}
    `;
    
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lds-custom-colors.css';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Exportar configuración
  const exportConfig = () => {
    const config = {
      colors,
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      description: 'Esquema de colores personalizado para Los de Siempre'
    };
    
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lds-color-config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Importar configuración
  const importConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const config = JSON.parse(e.target?.result as string);
          if (config.colors) {
            setColors(config.colors);
            alert('📁 Configuración importada exitosamente!');
          }
        } catch (error) {
          alert('❌ Error al importar la configuración');
        }
      };
      reader.readAsText(file);
    }
  };

  const colorSections = [
    {
      id: 'main',
      title: '🎨 Fondos Principales',
      description: 'Colores de fondo de la aplicación',
      colors: [
        { key: 'mainBackground', label: 'Fondo Principal', type: 'background' },
        { key: 'headerBackground', label: 'Fondo del Header', type: 'background' },
        { key: 'cardBackground', label: 'Fondo de Tarjetas', type: 'background' },
        { key: 'footerBackground', label: 'Fondo del Footer', type: 'background' },
      ]
    },
    {
      id: 'borders',
      title: '🔲 Bordes y Líneas',
      description: 'Colores de bordes y separadores',
      colors: [
        { key: 'borderPrimary', label: 'Borde Principal', type: 'border' },
        { key: 'borderSecondary', label: 'Borde Secundario', type: 'border' },
      ]
    },
    {
      id: 'text',
      title: '📝 Tipografía',
      description: 'Colores de texto y contenido',
      colors: [
        { key: 'textPrimary', label: 'Texto Principal', type: 'text' },
        { key: 'textSecondary', label: 'Texto Secundario', type: 'text' },
        { key: 'textAccent', label: 'Texto de Acento', type: 'text' },
      ]
    },
    {
      id: 'buttons',
      title: '🔘 Botones y Controles',
      description: 'Colores de botones y elementos interactivos',
      colors: [
        { key: 'buttonPrimary', label: 'Botón Principal', type: 'background' },
        { key: 'buttonSecondary', label: 'Botón Secundario', type: 'background' },
        { key: 'buttonSuccess', label: 'Botón de Éxito', type: 'background' },
        { key: 'buttonWarning', label: 'Botón de Advertencia', type: 'background' },
        { key: 'buttonDanger', label: 'Botón de Peligro', type: 'background' },
      ]
    },
    {
      id: 'states',
      title: '⚡ Estados y Efectos',
      description: 'Colores para estados hover, active y efectos',
      colors: [
        { key: 'hoverPrimary', label: 'Hover Principal', type: 'hover' },
        { key: 'hoverSecondary', label: 'Hover Secundario', type: 'hover' },
        { key: 'activePrimary', label: 'Active Principal', type: 'active' },
      ]
    },
    {
      id: 'special',
      title: '✨ Colores Especiales',
      description: 'Colores de acento y elementos destacados',
      colors: [
        { key: 'logoShadow', label: 'Sombra del Logo', type: 'shadow' },
        { key: 'accentColor', label: 'Color de Acento', type: 'text' },
        { key: 'successColor', label: 'Color de Éxito', type: 'text' },
        { key: 'warningColor', label: 'Color de Advertencia', type: 'text' },
        { key: 'dangerColor', label: 'Color de Peligro', type: 'text' },
        { key: 'infoColor', label: 'Color de Información', type: 'text' },
      ]
    }
  ];

  const tailwindColors = [
    'black', 'gray-900', 'gray-800', 'gray-700', 'gray-600', 'gray-500', 'gray-400', 'gray-300', 'gray-200', 'gray-100', 'white',
    'red-900', 'red-800', 'red-700', 'red-600', 'red-500', 'red-400', 'red-300', 'red-200', 'red-100',
    'green-900', 'green-800', 'green-700', 'green-600', 'green-500', 'green-400', 'green-300', 'green-200', 'green-100',
    'blue-900', 'blue-800', 'blue-700', 'blue-600', 'blue-500', 'blue-400', 'blue-300', 'blue-200', 'blue-100',
    'yellow-900', 'yellow-800', 'yellow-700', 'yellow-600', 'yellow-500', 'yellow-400', 'yellow-300', 'yellow-200', 'yellow-100',
    'purple-900', 'purple-800', 'purple-700', 'purple-600', 'purple-500', 'purple-400', 'purple-300', 'purple-200', 'purple-100',
    'pink-900', 'pink-800', 'pink-700', 'pink-600', 'pink-500', 'pink-400', 'pink-300', 'pink-200', 'pink-100',
    'indigo-900', 'indigo-800', 'indigo-700', 'indigo-600', 'indigo-500', 'indigo-400', 'indigo-300', 'indigo-200', 'indigo-100',
  ];

  const getColorPreview = (colorKey: string, type: string) => {
    const colorValue = colors[colorKey as keyof ColorScheme];
    const prefix = type === 'background' ? 'bg-' : type === 'text' ? 'text-' : type === 'border' ? 'border-' : type === 'hover' ? 'hover:' : type === 'active' ? 'active:' : type === 'shadow' ? 'shadow-' : '';
    
    return (
      <div className="flex items-center space-x-3">
        <div className={`w-8 h-8 rounded border-2 border-gray-600 ${prefix}${colorValue.replace(prefix, '')}`}></div>
        <span className="text-sm font-mono text-gray-300">{prefix}{colorValue.replace(prefix, '')}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-400 mb-4">🎨 Gestor de Colores</h1>
          <p className="text-xl text-gray-300">Personaliza completamente el esquema de colores de tu aplicación</p>
          <p className="text-sm text-gray-400 mt-2">Los cambios se aplican en tiempo real</p>
        </div>

        {/* Controles principales */}
        <div className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-700">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={saveColors}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                💾 Guardar Colores
              </button>
              <button
                onClick={resetColors}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                🔄 Resetear
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={generateCustomCSS}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📁 Exportar CSS
              </button>
              <button
                onClick={exportConfig}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📤 Exportar Config
              </button>
              <label className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
                📥 Importar Config
                <input
                  type="file"
                  accept=".json"
                  onChange={importConfig}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Navegación de secciones */}
        <div className="flex flex-wrap gap-2 mb-8">
          {colorSections.map(section => (
            <button
              key={section.id}
              onClick={() => setSelectedSection(section.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedSection === section.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Contenido de la sección seleccionada */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario de colores */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-red-400 mb-6">
              {colorSections.find(s => s.id === selectedSection)?.title}
            </h2>
            <p className="text-gray-400 mb-6">
              {colorSections.find(s => s.id === selectedSection)?.description}
            </p>
            
            <div className="space-y-6">
              {colorSections
                .find(s => s.id === selectedSection)
                ?.colors.map(color => (
                  <div key={color.key} className="space-y-3">
                    <label className="block text-sm font-medium text-gray-300">
                      {color.label}
                    </label>
                    <div className="flex items-center space-x-3">
                      <select
                        value={colors[color.key as keyof ColorScheme]}
                        onChange={(e) => applyColors({ [color.key]: e.target.value })}
                        className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        {tailwindColors.map(tailwindColor => (
                          <option key={tailwindColor} value={`${color.type === 'background' ? 'bg-' : color.type === 'text' ? 'text-' : color.type === 'border' ? 'border-' : color.type === 'hover' ? 'hover:bg-' : color.type === 'active' ? 'active:bg-' : color.type === 'shadow' ? 'shadow-' : ''}${tailwindColor}`}>
                            {tailwindColor}
                          </option>
                        ))}
                      </select>
                      {getColorPreview(color.key, color.type)}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Vista previa en tiempo real */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-red-400 mb-6">👁️ Vista Previa</h2>
            <p className="text-gray-400 mb-6">Vista previa de cómo se verán los colores</p>
            
            <div className="space-y-6">
              {/* Header de ejemplo */}
              <div className={`${colors.headerBackground} rounded-lg p-4 border ${colors.borderPrimary}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-full ${colors.cardBackground} flex items-center justify-center ${colors.logoShadow}`}>
                      <span className="text-2xl">🔥</span>
                    </div>
                    <div>
                      <h3 className={`${colors.textPrimary} font-bold`}>EL TEMPLO DE LAS ZAPAS</h3>
                      <p className={`${colors.textSecondary} text-sm`}>Los de Siempre</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className={`${colors.buttonPrimary} ${colors.hoverPrimary} text-white px-3 py-1 rounded text-sm font-medium transition-colors`}>
                      Activo
                    </div>
                    <div className={`${colors.buttonSecondary} ${colors.hoverSecondary} text-white px-3 py-1 rounded text-sm font-medium transition-colors`}>
                      Inactivo
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta de ejemplo */}
              <div className={`${colors.cardBackground} rounded-lg p-4 border ${colors.borderSecondary}`}>
                <h4 className={`${colors.textPrimary} font-bold mb-2`}>Ejemplo de Tarjeta</h4>
                <p className={`${colors.textSecondary} text-sm mb-3`}>Esta es una tarjeta de ejemplo que muestra cómo se verán los colores aplicados.</p>
                <div className="flex space-x-2">
                  <button className={`${colors.buttonSuccess} hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors`}>
                    Éxito
                  </button>
                  <button className={`${colors.buttonWarning} hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors`}>
                    Advertencia
                  </button>
                  <button className={`${colors.buttonDanger} hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors`}>
                    Peligro
                  </button>
                </div>
              </div>

              {/* Estadísticas de ejemplo */}
              <div className="grid grid-cols-3 gap-3">
                <div className={`${colors.cardBackground} rounded-lg p-3 text-center border ${colors.borderSecondary}`}>
                  <div className={`${colors.successColor} text-2xl font-bold`}>3</div>
                  <div className={`${colors.textAccent} text-xs`}>Locales</div>
                </div>
                <div className={`${colors.cardBackground} rounded-lg p-3 text-center border ${colors.borderSecondary}`}>
                  <div className={`${colors.infoColor} text-2xl font-bold`}>500+</div>
                  <div className={`${colors.textAccent} text-xs`}>Modelos</div>
                </div>
                <div className={`${colors.cardBackground} rounded-lg p-3 text-center border ${colors.borderSecondary}`}>
                  <div className={`${colors.dangerColor} text-2xl font-bold`}>24h</div>
                  <div className={`${colors.textAccent} text-xs`}>Envío</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-gray-900 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-red-400 mb-4">💡 Información Importante</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">🎨 Cómo usar:</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Selecciona una sección de colores</li>
                <li>Cambia los colores usando los selectores</li>
                <li>Ve la vista previa en tiempo real</li>
                <li>Guarda tu configuración personalizada</li>
                <li>Exporta CSS o configuración JSON</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">⚠️ Notas:</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Los cambios se guardan en localStorage</li>
                <li>Puedes importar/exportar configuraciones</li>
                <li>El CSS generado es compatible con Tailwind</li>
                <li>Reinicia la app para aplicar cambios globales</li>
                <li>Respeta la accesibilidad de colores</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorManager;
