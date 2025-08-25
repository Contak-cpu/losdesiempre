import { useState, useEffect } from 'react';

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

export const useColorScheme = () => {
  const [colors, setColors] = useState<ColorScheme>(defaultColors);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Cargar colores del localStorage
    const savedColors = localStorage.getItem('lds-color-scheme');
    if (savedColors) {
      try {
        const parsedColors = JSON.parse(savedColors);
        setColors(parsedColors);
      } catch (error) {
        console.error('Error parsing saved colors:', error);
        setColors(defaultColors);
      }
    }
    setIsLoaded(true);
  }, []);

  // Función para actualizar colores
  const updateColors = (newColors: Partial<ColorScheme>) => {
    const updatedColors = { ...colors, ...newColors };
    setColors(updatedColors);
    localStorage.setItem('lds-color-scheme', JSON.stringify(updatedColors));
  };

  // Función para resetear colores
  const resetColors = () => {
    setColors(defaultColors);
    localStorage.removeItem('lds-color-scheme');
  };

  // Función para obtener una clase de color específica
  const getColor = (colorKey: keyof ColorScheme) => {
    return colors[colorKey];
  };

  // Función para combinar múltiples clases de color
  const combineColors = (...colorKeys: (keyof ColorScheme)[]) => {
    return colorKeys.map(key => colors[key]).join(' ');
  };

  return {
    colors,
    isLoaded,
    updateColors,
    resetColors,
    getColor,
    combineColors,
    // Accesores directos para colores comunes
    mainBg: colors.mainBackground,
    headerBg: colors.headerBackground,
    cardBg: colors.cardBackground,
    footerBg: colors.footerBackground,
    textPrimary: colors.textPrimary,
    textSecondary: colors.textSecondary,
    textAccent: colors.textAccent,
    buttonPrimary: colors.buttonPrimary,
    buttonSecondary: colors.buttonSecondary,
    buttonSuccess: colors.buttonSuccess,
    buttonWarning: colors.buttonWarning,
    buttonDanger: colors.buttonDanger,
    borderPrimary: colors.borderPrimary,
    borderSecondary: colors.borderSecondary,
    accentColor: colors.accentColor,
    successColor: colors.successColor,
    warningColor: colors.warningColor,
    dangerColor: colors.dangerColor,
    infoColor: colors.infoColor,
  };
};
