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
        'As leituras seguem padrões públicos: a direção e a inclinação vêm do W3C DeviceOrientation Event, o rumo da Qibla da API Geolocation do W3C, e as velocidades usam conversões SI exatas (1 nó = 1,852 km/h).',
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
      title: 'O que cada instrumento mede de facto',
      paragraphs: [
        'A bússola online transforma o sensor de orientação do telemóvel ou do portátil numa direção em graus. É a forma mais rápida de responder a «para onde estou a olhar» sem abrir uma segunda aplicação: o mostrador acompanha o dispositivo quando roda e o número mantém-se legível enquanto a agulha se move. Como lê um magnetómetro, colunas, molduras metálicas e capas magnéticas por perto desviam a leitura.',
        'O nível de bolha mostra a inclinação nos dois eixos ao mesmo tempo, pelo que pode verificar uma prateleira, um quadro ou uma máquina de lavar sem ter um nível físico à mão. Dois valores em graus e uma bolha visível indicam se a superfície está nivelada no comprimento e na largura, algo que um único tubo de bolha nunca mostra.',
        'O velocímetro indica a velocidade em km/h, mph e nós em simultâneo, convertida com fatores SI exatos para que os três números nunca se contradigam. Lê a posição comunicada pelo navegador: útil no carro, na bicicleta ou no barco, sem conta, sem rastreio e sem instalação.',
        'O localizador de Qibla calcula o rumo de círculo máximo das suas coordenadas até Meca e apresenta-o como direção de bússola. Não é o mesmo que «apontar a leste»: o rumo correto muda conforme o local onde está, e a página indica o valor usado para que o possa confirmar.',
      ],
    },

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
        'Leituras em que pode confiar — direção e inclinação do W3C DeviceOrientation Event, rumo da Qibla da API Geolocation do W3C e velocidades com conversões SI exatas entre km/h, mph e nós.',
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
        'Saiba mais sobre a nossa filosofia e a verificação de cada instrumento face às especificações do W3C citadas na página About.',
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
    {
      title: 'De onde vêm as leituras e onde elas param',
      paragraphs: [
        'Cada instrumento do Instanten lê algo que o seu dispositivo já mede. A bússola e o nível leem o evento de orientação exposto pelo navegador, o velocímetro lê variações da posição comunicada e o localizador de Qibla combina essa posição com uma fórmula de círculo máximo. Nada é enviado, nada fica guardado entre visitas e nenhum resultado vem de um servidor: por isso cada página continua a funcionar depois de fechar e reabrir o separador.',
        'Daí vem também o limite honesto. Um sensor de telemóvel não é um instrumento topográfico calibrado: um magnetómetro desvia-se perto de metais e ímanes, uma posição do navegador pode acertar a poucos metros ou a algumas centenas conforme o sinal, e um portátil inclinado comunica a inclinação de forma diferente de um telemóvel deitado. Por isso cada página diz o que mediu em vez de prometer precisão de laboratório.',
        'As leituras aparecem na unidade adequada. Direção e inclinação em graus, velocidade em simultâneo em km/h, mph e nós com fatores SI exatos, e a página de Qibla indica o rumo em graus a partir do norte com a distância calculada. Se um número parecer errado, verifique primeiro o sensor e não a conta.',
      ],
      bullets: [
        'Nada é enviado: cada leitura é calculada dentro da página.',
        'Unidades e o padrão que as sustenta junto ao número.',
        'Os limites do sensor são explicados na página, não numa nota de rodapé.',
        'Pode recalibrar o dispositivo e voltar a ler o mesmo valor para comparar.',
      ],
    },

  ],
  faqTitle: 'Perguntas frequentes',
  faqs: [],
};
