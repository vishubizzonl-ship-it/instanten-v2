import type { HomeCopy } from './types';

export const home: HomeCopy = {
  howTitle: 'Como funciona o Instanten',
  steps: [
    {
      title: 'Escolha uma ferramenta Instanten',
      body:
        'Abra qualquer utilitário na página inicial sem conta, extensões ou espera. Cada ferramenta funciona no navegador em telemóvel, tablet ou computador.',
    },
    {
      title: 'Execute ou converta ao vivo',
      body:
        'Cole texto, valores ou parâmetros e obtenha um resultado limpo em milissegundos. Conversão, formatação ou cálculo são atualizados em tempo real.',
    },
    {
      title: 'Copie resultados e obtenha ajuda',
      body:
        'Copie resultados precisos com um clique ou abra um guia passo a passo com fórmulas e dicas. Cada guia cita padrões públicos verificáveis.',
    },
  ],
  trustTitle: 'Feito para inspirar confiança, não apenas para ser rápido',
  trustLead:
    'Demasiados sites de ferramentas escondem tarefas simples atrás de pop-ups, scripts pesados e muros de início de sessão. O Instanten mantém cada fluxo limpo, transparente e sem distrações, com padrões públicos reais.',
  trustCards: [
    {
      title: 'Ajuda imediata sem registo',
      body:
        'Cada ferramenta e guia está pronto a usar. Nunca entrega o seu email, inicia testes ou cria uma palavra-passe para resolver uma tarefa rápida.',
    },
    {
      title: 'Entrega online rápida',
      body:
        'As páginas são pré-renderizadas estaticamente com scripts mínimos. Cada ferramenta responde de imediato, mesmo em redes móveis, e cumpre os objetivos Core Web Vitals.',
    },
    {
      title: 'Precisão de conversão verificada',
      body:
        'Os resultados seguem regras padrão em formato pronto a copiar. A régua online usa dimensões ISO/IEC 7810 ID-1 (3,370 × 2,125 polegadas) e a paleta os contrastes WCAG 2.2 AA.',
    },
    {
      title: 'Privacidade no navegador',
      body:
        'O processamento ocorre no navegador sempre que possível e as preferências de tema ficam no armazenamento local do dispositivo. O Instanten não vende nem partilha dados pessoais para publicidade comportamental.',
    },
  ],
  explainTitle: 'Instanten explicado',
  explainLead:
    'Como funcionam as ferramentas instantâneas, o que consegue fazer em segundos e porque os utilitários web rápidos superam downloads pesados.',
  blocks: [
    {
      title: 'O que o Instanten faz',
      paragraphs: [
        'Todos os dias, estudantes, programadores, escritores, designers e equipas enfrentam dezenas de pequenas tarefas digitais: formatar dados, converter instantaneamente, limpar texto, calcular valores ou procurar respostas técnicas. Abrir software pesado para trinta segundos desperdiça tempo.',
        'O Instanten resolve isso num só lugar: um hub rápido e moderno de ferramentas instantâneas gratuitas e tutoriais práticos, sem conta, limite de utilização ou subscrição.',
      ],
    },
    {
      title: 'Porque o Instanten parece tão simples',
      paragraphs: [
        'A velocidade é só metade; a clareza importa igualmente. Cada ferramenta coloca entrada e saída em destaque, com controlos móveis, navegação por teclado e alternância imediata entre modo claro e escuro.',
        'Três regras orientam toda a biblioteca:',
      ],
      bullets: [
        'Início imediato sem peso — páginas HTML estáticas carregam quase instantaneamente em navegadores modernos.',
        'Resultados prontos a copiar e baseados em padrões — JSON Formatter segue IETF RFC 8259, Base64 Encoder IETF RFC 4648, Markdown Editor CommonMark e o gerador de meta tags as orientações Google Search Central e Open Graph.',
        'Contexto prático junto à ferramenta — os guias explicam casos limite e boas práticas para ajuda real.',
      ],
    },
    {
      title: 'Tarefas diárias que conclui com o Instanten',
      bullets: [
        'Formatação e conversão rápidas — transforme unidades, texto estruturado, código ou valores sem erros de cálculo.',
        'Fluxos para programadores e criadores — limpe, inspecione, valide e prepare recursos mais rapidamente.',
        'Ajuda imediata para estudo e escritório — verifique cálculos e siga guias no telemóvel, Chromebook ou PC.',
        'Guias de IA e produtividade — tutoriais práticos no blog do Instanten.',
      ],
      links: [{ label: 'Blog do Instanten', href: '/blog/' }],
    },
    {
      title: 'Porque as ferramentas online superam instaladores pesados',
      paragraphs: [
        'Suites nativas fazem sentido para renderização de vídeo com vários gigabytes, não para utilitários diários. Uma caixa de ferramentas online no navegador elimina problemas de compatibilidade, armazenamento, atualizações em segundo plano e licenças — a mesma ferramenta funciona em Windows, macOS, Linux, Android e iOS.',
        'Saiba mais sobre a nossa filosofia e verificação face a NIST, W3C e IETF na página About.',
      ],
      links: [{ label: 'Sobre nós', href: '/about/' }],
    },
    {
      title: 'Como tirar o melhor partido do Instanten',
      bullets: [
        'Adicione a página inicial aos favoritos para acesso imediato.',
        'Use primeiro entradas limpas e sem formatação para evitar espaços ocultos.',
        'Combine ferramentas com exemplos quando as regras ou casos limite não forem familiares.',
        'Alterne o tema em leituras longas; a preferência fica guardada localmente.',
        'Partilhe ligações permanentes com pré-visualização Open Graph com a equipa.',
        'Sugira novas funcionalidades na página de Contacto.',
      ],
      links: [{ label: 'Contacto', href: '/contact/' }],
    },
  ],
  faqTitle: 'Perguntas frequentes',
  faqs: [
    {
      question: 'O que é o Instanten e em que difere de outros sites de ferramentas online gratuitas?',
      answer:
        'O Instanten é uma coleção de ferramentas online gratuitas em que cada utilitário roda dentro do seu próprio navegador em vez de rodar em um servidor. É essa única decisão de projeto que faz a diferença: nada do que você cola ou envia sai do seu dispositivo, não há barreira de cadastro, nem limite diário, nem plano pago, e cada ferramenta abre como uma página estática utilizável em um segundo mesmo em conexão móvel lenta.',
    },
    {
      question: 'Quais ferramentas online existem neste site agora?',
      answer:
        'No momento são doze: formatador JSON, codificador e decodificador Base64, contador de palavras, gerador de senhas, gerador de QR code, compressor de imagens, paleta de cores, gerador de grade CSS, editor Markdown, gerador de meta tags, régua online e testador de expressões regulares. Elas estão agrupadas em desenvolvimento, design, escrita e utilitários, então você chega à página certa pela grade da página inicial ou com uma única palavra na busca.',
    },
    {
      question: 'Essas ferramentas são realmente gratuitas ou existe um limite escondido?',
      answer:
        'São gratuitas e o limite é exatamente zero: sem contagem regressiva de teste, sem tela de cartão, sem marca d’água, sem teto de exportação e sem fila. Um site de ferramentas gratuitas deve funcionar como um serviço público, então a mesma ferramenta usada dez vezes seguidas na mesma sessão de trabalho dá o mesmo resultado todas as vezes. Não há nada para assinar depois porque não existe nível premium.',
    },
    {
      question: 'É seguro colar senhas, tokens ou documentos de clientes em uma ferramenta online?',
      answer:
        'No Instanten é seguro, porque o processamento acontece no seu navegador com JavaScript simples: o texto ou o arquivo nunca é enviado a um servidor e não fica guardado em lugar nenhum depois que você fecha a aba. Essa é a primeira pergunta a fazer diante de qualquer site de ferramentas gratuitas: se o site envia o que você digitou para o próprio servidor, o conteúdo passa a ser, na prática, uma cópia dos seus dados nas mãos de outra pessoa.',
    },
    {
      question: 'Essas ferramentas de navegador funcionam em celulares e tablets?',
      answer:
        'Sim. Todas as páginas usam layout responsivo com uma única coluna em telas pequenas, áreas de toque de pelo menos 44 pixels e campos dimensionados para o celular não dar zoom de surpresa. Contagem de palavras, geração de QR code, gerador de senhas, compressão de imagens e régua online funcionam igual no Android Chrome, iPhone Safari, iPad, Windows e macOS, no modo claro e no escuro.',
    },
    {
      question: 'Preciso instalar um aplicativo ou criar uma conta?',
      answer:
        'Sem instalação e sem conta. Abra o site, escolha a ferramenta e comece a digitar: o resultado aparece na hora. Como não há login, você não espera e-mail de verificação, não precisa lembrar senha e nenhum perfil é criado a partir do seu uso. A página da ferramenta é autossuficiente e pode ser salva nos favoritos ou adicionada à tela inicial do celular.',
    },
    {
      question: 'As ferramentas continuam funcionando se a conexão cair?',
      answer:
        'Depois que a página carrega, o trabalho em si continua sem conexão, porque formatar, contar, codificar, comprimir e medir rodam localmente no navegador e não em um servidor remoto. Recarregar a página, abrir outro utilitário ou voltar no dia seguinte exige conexão, então, se você for usar de novo no trem ou no avião, deixe a aba aberta.',
    },
    {
      question: 'Qual é a precisão da régua online, do velocímetro e das ferramentas de medição?',
      answer:
        'As ferramentas de medição seguem normas publicadas em vez de estimativas: a régua online é calibrada pelo tamanho do cartão ID-1 de 85,60 por 53,98 milímetros usado por cartões bancários e de identidade no mundo todo, e as conversões de unidades usam definições exatas como 1 polegada igual a 25,4 milímetros. A precisão depende depois do passo de calibração e da densidade da tela, por isso a página sempre mostra o valor atual em pixels por milímetro.',
    },
    {
      question: 'Como escolher a ferramenta certa em um site com muitas opções?',
      answer:
        'Comece pela tarefa, não pelo nome da ferramenta. Se o resultado precisa ser legível ou válido, abra o formatador ou o validador; se algo é encurtado, redimensionado ou codificado, olhe em conversão; se você escreve, conta ou limpa texto, valem as ferramentas de escrita; se confere layout ou cor, as de design. Uma busca de uma palavra na página inicial costuma ser mais rápida do que percorrer categorias.',
    },
    {
      question: 'Por que usar um site de ferramentas em vez de cinco assinaturas dedicadas?',
      answer:
        'Porque a tarefa é pequena e a assinatura não é. Quatro ou cinco assinaturas especializadas custam em silêncio mais do que um plano de streaming e trazem cada uma a sua conta, a sua política de privacidade e o seu ciclo de atualizações. Um único site de ferramentas mantém um endereço, uma linguagem visual e um comportamento de teclado comuns a todos os utilitários, então trocar de tarefa nunca significa aprender outro produto nem lembrar em qual site ficava o bom formatador.',
    },
  ],
};
