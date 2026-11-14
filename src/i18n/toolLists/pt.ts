import type { ToolLists } from '../toolLists';

export const pt: ToolLists = {
  'base64-encoder': {
    features: [
      'Codifica e descodifica texto conforme à IETF RFC 4648',
      'Carregamento de ficheiros com processamento apenas local, por privacidade',
      'Suporte UTF-8 para texto internacional',
      'Imagem para Base64 e descarregamento do Base64 como ficheiro',
      'Sem envios para servidor: toda a codificação acontece no navegador',
      'Resultados imediatos em Windows, macOS, Linux, Android e iOS',
    ],
    useCases: [
      'Incorporar imagens em Base64 em CSS ou HTML',
      'Codificar tokens de API e anexos de e-mail segundo a RFC 4648',
      'Gerar data URIs para aplicações web',
      'Transportar dados binários sem sair do dispositivo',
    ],
  },
  'color-palette': {
    features: [
      'Várias regras de harmonia (complementar, análoga, triádica, monocromática)',
      'Verificação de contraste W3C WCAG 2.2 nível AA (4,5:1 texto normal, 3:1 texto grande)',
      'Referência de design acessível para ADA e Section 508',
      'Exportação em variáveis CSS, configuração Tailwind, JSON Figma e Adobe ASE',
      'Paletas para partilhar e colaborar',
      'Simulação de daltonismo e geração de gradientes',
    ],
    useCases: [
      'Criar identidades de marca com sistemas de cor acessíveis',
      'Construir sistemas de design conformes com ADA e Section 508',
      'Verificar acessibilidade em sites públicos e privados',
      'Definir cores de materiais de marketing e fundos em gradiente',
    ],
  },
  'css-grid-generator': {
    features: [
      'Construtor visual de grelhas segundo W3C CSS Grid Layout',
      'Tamanhos de faixa (fr, px, %, auto, minmax) com código limpo',
      'Controlos de espaçamento, alinhamento e áreas com nome',
      'Pré-visualização em tempo real para layouts responsivos',
      'Grelhas aninhadas e CSS pronto para produção com fallbacks',
      'Funciona de imediato no Chrome, Safari, Firefox, Edge e Brave',
    ],
    useCases: [
      'Painéis e layouts de artigos com CSS Grid padrão',
      'Galerias de fotos e estruturas de página responsivas',
      'Formulários e sistemas de design segundo a especificação W3C Grid',
      'Ensino de frontend e prototipagem rápida',
    ],
  },
  'image-compressor': {
    features: [
      'Compressão com perdas inteligente que preserva a qualidade visível',
      'Suporte JPEG, PNG, WebP e AVIF nos navegadores modernos',
      'Compressão Canvas/WebP no navegador: as imagens não saem do dispositivo',
      'Otimizado para comércio eletrónico e desempenho web',
      'Ajuda a cumprir metas de LCP abaixo de 2,5 segundos',
      'Fluxo preparado para várias imagens',
    ],
    useCases: [
      'Otimizar imagens do site para carregamento rápido',
      'Comprimir imagens de produto para Shopify, Etsy e Amazon',
      'Reduzir recursos do blog antes de publicar',
      'Poupar largura de banda do CDN e servir páginas mais rápidas',
    ],
  },
  'json-formatter': {
    features: [
      'Realce de sintaxe com deteção de erros e número de linha',
      'Validação JSON segundo IETF RFC 8259',
      'Vista de árvore recolhível para respostas de API extensas',
      'Alternar entre minificar e formatar para produção e desenvolvimento',
      'Processamento no navegador: sem envios e com privacidade total',
      'Funciona de imediato nos navegadores modernos de Windows, macOS, Linux, Android e iOS',
    ],
    useCases: [
      'Depurar respostas de API e formatar ficheiros de configuração',
      'Validar JSON face à IETF RFC 8259',
      'Explicar a estrutura JSON a estudantes e novos programadores',
      'Inspecionar dados empresariais sem enviar conteúdos sensíveis',
    ],
  },
  'markdown-editor': {
    features: [
      'Pré-visualização ao vivo com saída compatível com CommonMark',
      'Realce de sintaxe para blocos de código e formatação em linha',
      'Tabelas, listas de tarefas, notas de rodapé e fórmulas',
      'Exportação em HTML, PDF ou Markdown simples',
      'Contagem de palavras e tempo de leitura para criadores de conteúdo',
      'Funciona offline após o primeiro carregamento, sem registo',
    ],
    useCases: [
      'Escrever documentação técnica e ficheiros README',
      'Preparar artigos de blog compatíveis com CommonMark',
      'Criar documentação de API para programadores e estudantes',
      'Tomar notas e escrever trabalhos académicos sem subscrições',
    ],
  },
  'meta-tag-generator': {
    features: [
      'Metaetiquetas SEO segundo as orientações de snippets da Search Central',
      'Etiquetas Open Graph para pré-visualizações sociais corretas',
      'Etiquetas Twitter Card com imagem, título e descrição',
      'Simulação de pré-visualização no Facebook, LinkedIn e X',
      'URL canónico, viewport e etiquetas robots',
      'Exportação em HTML e JSON pronta a usar',
    ],
    useCases: [
      'Melhorar o SEO do site com metaetiquetas conformes',
      'Otimizar a partilha social para o público certo',
      'Definir metaetiquetas de artigos e landing pages',
      'Entregar projetos de clientes com etiquetas Search Central verificadas',
    ],
  },
  'online-ruler': {
    features: [
      'Polegadas (in) com marcas de 1/16, 1/8, 1/4 e 1/2 de polegada',
      'Centímetros (cm), milímetros (mm) e píxeis (px) para medidas métricas',
      'Calibração com um cartão bancário ou de identidade padrão (ISO/IEC 7810 ID-1: 85,60 × 53,98 mm)',
      'Referência exata do NIST (1 polegada internacional = 25,4 mm)',
      'Sem instalação; funciona de imediato no Chrome, Safari, Firefox, Edge e Brave',
      'Funciona em Windows, macOS, Linux, Android e iOS com layout responsivo',
    ],
    useCases: [
      'Medir uma interface diretamente no ecrã',
      'Desenvolvimento frontend com medidas em polegadas e píxeis',
      'Verificar designs de impressão em formatos de papel padrão',
      'Medições rápidas no telemóvel e no computador',
    ],
  },
  'password-generator': {
    features: [
      'Comprimento ajustável (4–128)',
      'Escolha de conjuntos de caracteres',
      'Exclusão de caracteres ambíguos',
      'Indicador de entropia e força',
      'Geração em lote',
      'Modo de frase-passe',
      'Apenas no navegador',
    ],
    useCases: [
      'Criação de contas',
      'Rotação de palavras-passe',
      'Partilha de credenciais em equipa',
      'Palavras-passe de Wi-Fi',
      'Chaves de cifra',
    ],
  },
  'qr-generator': {
    features: [
      'Vários tipos de dados (URL, vCard, Wi-Fi, SMS, e-mail, texto)',
      'Cores personalizadas e saída limpa sem logótipo',
      'Exportação em PNG de alta resolução e SVG',
      'Códigos estáticos que nunca expiram',
      'Sem registo, sem limite de leituras, sem plano pago',
      'Funciona totalmente no navegador: nada é enviado',
    ],
    useCases: [
      'Campanhas de marketing',
      'Cartões de visita',
      'Check-in em eventos',
      'Partilha de Wi-Fi',
      'Menus sem contacto',
    ],
  },
  'regex-tester': {
    features: [
      'Realce de correspondências em tempo real',
      'Explicação passo a passo da expressão',
      'Suporte para vários dialetos (JS, Python, PCRE, Go)',
      'Folha de referência rápida',
      'Detalhe dos grupos de captura',
      'Apenas no navegador',
    ],
    useCases: [
      'Padrões de validação de formulários',
      'Análise de registos',
      'Extração de dados',
      'Encaminhamento de URL',
      'Limpeza de entradas',
    ],
  },
  'word-counter': {
    features: [
      'Contagem em tempo real',
      'Palavras, caracteres, frases e parágrafos',
      'Estimativa de tempo de leitura e de fala',
      'Análise de densidade de palavras-chave',
      'Funciona offline',
      'Sem publicidade nem rastreio',
    ],
    useCases: [
      'Otimizar artigos de blog',
      'Verificar a extensão de ensaios e trabalhos',
      'Planear conteúdo SEO',
      'Respeitar limites de caracteres nas redes sociais',
      'Estimar orçamentos de tradução',
    ],
  },
};
