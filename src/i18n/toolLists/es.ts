import type { ToolLists } from '../toolLists';

export const es: ToolLists = {
  'base64-encoder': {
    features: [
      'Codifica y decodifica texto conforme a IETF RFC 4648',
      'Carga de archivos con procesamiento solo local por privacidad',
      'Compatibilidad UTF-8 para texto internacional',
      'Imagen a Base64 y descarga de Base64 como archivo',
      'Sin subidas al servidor: toda la codificación ocurre en tu navegador',
      'Resultados inmediatos en Windows, macOS, Linux, Android e iOS',
    ],
    useCases: [
      'Insertar imágenes en CSS o HTML con Base64 estándar',
      'Codificar tokens de API y adjuntos de correo según RFC 4648',
      'Generar data URIs para aplicaciones web',
      'Transportar datos binarios sin que salgan de tu dispositivo',
    ],
  },
  'color-palette': {
    features: [
      'Varias reglas de armonía (complementaria, análoga, triádica, monocromática)',
      'Comprobación de contraste W3C WCAG 2.2 nivel AA (4,5:1 texto normal, 3:1 texto grande)',
      'Referencia de diseño accesible según ADA y Section 508',
      'Exportación a variables CSS, configuración de Tailwind, JSON de Figma y Adobe ASE',
      'Paletas para compartir y trabajar en equipo',
      'Simulación de daltonismo y generación de degradados',
    ],
    useCases: [
      'Diseñar identidades de marca con sistemas de color accesibles',
      'Construir sistemas de diseño que cumplan ADA y Section 508',
      'Verificar la accesibilidad de sitios públicos y privados',
      'Definir colores de material de marketing y fondos degradados',
    ],
  },
  'css-grid-generator': {
    features: [
      'Constructor visual de rejillas según W3C CSS Grid Layout',
      'Tamaños de pista (fr, px, %, auto, minmax) con código limpio',
      'Controles de separación, alineación y áreas con nombre',
      'Vista previa en tiempo real para diseños adaptables',
      'Rejillas anidadas y CSS listo para producción con respaldos',
      'Funciona al instante en Chrome, Safari, Firefox, Edge y Brave',
    ],
    useCases: [
      'Paneles y diseños de artículos con CSS Grid estándar',
      'Galerías de fotos y estructuras de página adaptables',
      'Formularios y sistemas de diseño según la especificación W3C Grid',
      'Enseñanza de frontend y prototipado rápido para estudiantes',
    ],
  },
  'image-compressor': {
    features: [
      'Compresión con pérdida inteligente que conserva la calidad visible',
      'Compatibilidad con JPEG, PNG, WebP y AVIF en navegadores modernos',
      'Compresión Canvas/WebP en el navegador: las imágenes no salen del dispositivo',
      'Optimizado para comercio electrónico y rendimiento web',
      'Ayuda a cumplir objetivos de LCP por debajo de 2,5 segundos',
      'Flujo preparado para procesar varias imágenes',
    ],
    useCases: [
      'Optimizar imágenes del sitio para carga rápida en móvil y fibra',
      'Comprimir imágenes de producto para Shopify, Etsy y Amazon',
      'Reducir recursos de blog antes de publicar',
      'Ahorrar ancho de banda del CDN y servir páginas más rápido',
    ],
  },
  'json-formatter': {
    features: [
      'Resaltado de sintaxis con detección de errores por número de línea',
      'Validación JSON según IETF RFC 8259 para una salida conforme',
      'Vista de árbol plegable para respuestas de API extensas',
      'Alternar minificado y formato para producción y desarrollo',
      'Procesamiento en el navegador: sin subidas y con privacidad total',
      'Funciona al instante en navegadores modernos de Windows, macOS, Linux, Android e iOS',
    ],
    useCases: [
      'Depurar respuestas de API y dar formato a archivos de configuración',
      'Validar JSON conforme a IETF RFC 8259',
      'Explicar la estructura JSON a estudiantes y nuevos desarrolladores',
      'Revisar datos de empresa sin subir cargas sensibles',
    ],
  },
  'markdown-editor': {
    features: [
      'Vista previa en vivo con salida compatible con CommonMark',
      'Resaltado de sintaxis para bloques de código y formato en línea',
      'Tablas, listas de tareas, notas al pie y fórmulas',
      'Exportación a HTML, PDF o Markdown sin formato',
      'Recuento de palabras y tiempo de lectura para creadores de contenido',
      'Funciona sin conexión tras la primera carga, sin registro',
    ],
    useCases: [
      'Escribir documentación técnica y archivos README',
      'Redactar entradas de blog con salida compatible con CommonMark',
      'Crear documentación de API para desarrolladores y estudiantes',
      'Tomar notas y escribir trabajos académicos sin suscripciones',
    ],
  },
  'meta-tag-generator': {
    features: [
      'Metaetiquetas SEO según las guías de fragmentos de Search Central',
      'Etiquetas Open Graph para vistas previas correctas en redes',
      'Etiquetas Twitter Card con imagen, título y descripción',
      'Simulación de vista previa para Facebook, LinkedIn y X',
      'Compatibilidad con URL canónica, viewport y etiquetas robots',
      'Exportación en HTML y JSON lista para usar',
    ],
    useCases: [
      'Mejorar el SEO de un sitio con metaetiquetas conformes',
      'Optimizar cómo se comparte el contenido en redes sociales',
      'Definir metaetiquetas de entradas y páginas de aterrizaje',
      'Entregar proyectos de clientes con etiquetas verificadas de Search Central',
    ],
  },
  'online-ruler': {
    features: [
      'Pulgadas (in) con marcas de 1/16, 1/8, 1/4 y 1/2 de pulgada',
      'Centímetros (cm), milímetros (mm) y píxeles (px) para medidas métricas',
      'Calibración con una tarjeta bancaria o de identidad estándar (ISO/IEC 7810 ID-1: 85,60 × 53,98 mm)',
      'Referencia exacta del NIST (1 pulgada internacional = 25,4 mm)',
      'Sin instalación; funciona al instante en Chrome, Safari, Firefox, Edge y Brave',
      'Funciona en Windows, macOS, Linux, Android e iOS con diseño adaptable',
    ],
    useCases: [
      'Medir interfaces directamente en pantalla',
      'Desarrollo frontend con medidas en pulgadas y píxeles',
      'Comprobar diseños de impresión en tamaños de papel estándar',
      'Mediciones rápidas en móvil y escritorio',
    ],
  },
  'password-generator': {
    features: [
      'Longitud ajustable (4–128)',
      'Selección de conjuntos de caracteres',
      'Exclusión de caracteres ambiguos',
      'Medidor de entropía y fortaleza',
      'Generación por lotes',
      'Modo de frases de contraseña',
      'Solo en el navegador',
    ],
    useCases: [
      'Crear cuentas',
      'Rotar contraseñas',
      'Compartir credenciales en equipo',
      'Contraseñas de WiFi',
      'Claves de cifrado',
    ],
  },
  'qr-generator': {
    features: [
      'Varios tipos de datos (URL, vCard, WiFi, SMS, correo, texto)',
      'Colores propios y salida limpia sin logotipo',
      'Exportación en PNG de alta resolución y SVG',
      'Códigos estáticos que nunca caducan',
      'Sin registro, sin límite de escaneos, sin plan de pago',
      'Funciona por completo en tu navegador: no se sube nada',
    ],
    useCases: [
      'Campañas de marketing',
      'Tarjetas de visita',
      'Registro en eventos',
      'Compartir WiFi',
      'Cartas sin contacto',
    ],
  },
  'regex-tester': {
    features: [
      'Resaltado de coincidencias en tiempo real',
      'Explicación paso a paso de la expresión',
      'Compatibilidad con varios dialectos (JS, Python, PCRE, Go)',
      'Chuleta de referencia',
      'Detalle de los grupos de captura',
      'Solo en el navegador',
    ],
    useCases: [
      'Patrones de validación de formularios',
      'Análisis de registros',
      'Extracción de datos',
      'Enrutado de URL',
      'Saneamiento de entradas',
    ],
  },
  'word-counter': {
    features: [
      'Recuento en tiempo real',
      'Palabras, caracteres, frases y párrafos',
      'Estimación de lectura y de habla',
      'Análisis de densidad de palabras clave',
      'Funciona sin conexión',
      'Sin anuncios ni rastreo',
    ],
    useCases: [
      'Optimizar entradas de blog',
      'Comprobar la extensión de ensayos y trabajos',
      'Planificar contenido SEO',
      'Respetar límites de caracteres en redes sociales',
      'Estimar presupuestos de traducción',
    ],
  },
};
