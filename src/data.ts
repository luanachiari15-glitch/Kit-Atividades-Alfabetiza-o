/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, TimelineItem, TestimonialItem, BonusItem, ContentItem, PainItem, AudienceItem } from './types';

export const PAIN_ITEMS: PainItem[] = [
  {
    id: 'pain-1',
    emoji: '😔',
    text: 'Você senta cheia de esperança — em 10 minutos a criança trava, vira choro e a culpa fica em você. De novo.'
  },
  {
    id: 'pain-2',
    emoji: '🌙',
    text: 'Você passa madrugadas garimpando atividades no Google e Pinterest. Imprime tudo. Sem sequência, sem método. Nada funciona.'
  },
  {
    id: 'pain-3',
    emoji: '💭',
    text: 'O pensamento não te larga: "Por que todo mundo já está lendo e o meu não?" Essa culpa pesa.'
  },
  {
    id: 'pain-4',
    emoji: '💸',
    text: 'Já gastou tempo e dinheiro em materiais que prometeram tudo e entregaram nada.'
  },
  {
    id: 'pain-5',
    emoji: '⏳',
    text: 'E no fundo você sabe: quanto mais a criança atrasa, mais difícil vai ser recuperar.'
  }
];

export const STATISTICS = [
  { id: 'stat-1', value: '3 semanas', text: 'Do zero à leitura de palavras completas', color: 'text-emerald-500' },
  { id: 'stat-2', value: '98%', text: 'Das crianças dominam sílabas simples em até 21 dias', color: 'text-blue-500' },
  { id: 'stat-5', value: '92%', text: 'Dominam BRA, NHA e LHA em menos de 2 semanas com o silabário complexo — o pulo do gato.', color: 'text-indigo-500' },
  { id: 'stat-3', value: '0h', text: 'De planejamento — imprime e aplica na hora', color: 'text-orange-500' },
  { id: 'stat-4', value: '4.9/5', text: 'Nota média de +8.000 avaliações verificadas', color: 'text-amber-500' },
  { id: 'stat-6', value: 'R$ 0', text: 'De risco real. Garantia incondicional de 7 dias. Se não amar, devolvemos cada centavo.', color: 'text-rose-500' }
];

export const AUDIENCE_ITEMS: AudienceItem[] = [
  { id: 'aud-1', text: 'Você é mãe e quer alfabetizar em casa, sem precisar ser professora' },
  { id: 'aud-2', text: 'Você é professora e está exausta de montar tudo do zero' },
  { id: 'aud-3', text: 'Sua criança trava em BRA, NHA, LHA e você não sabe o que fazer' },
  { id: 'aud-4', text: 'Você quer material alinhado à BNCC de verdade, não Pinterest' },
  { id: 'aud-5', text: 'Você não tem horas para preparar atividade toda semana' },
  { id: 'aud-6', text: 'Você quer resultado sem gastar fortuna' }
];

export const CONTENT_ITEMS: ContentItem[] = [
  {
    id: 'content-1',
    title: 'Silabário Simples Completo',
    description: 'O passo a passo exato para a criança formar as primeiras palavras sozinha — do BA·BE·BI até juntar tudo com confiança.',
    icon: '📘',
    colorClass: 'bg-blue-50 border-blue-100 text-blue-600',
    textColor: 'text-blue-600'
  },
  {
    id: 'content-2',
    title: 'Sílabas Complexas (BRA, NHA, LHA...)',
    description: 'A virada do jogo. O método que elimina o travamento e leva à leitura fluente sem susto.',
    icon: '📗',
    colorClass: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    textColor: 'text-emerald-600'
  },
  {
    id: 'content-3',
    title: 'Português Completo',
    description: 'Leitura, escrita e compreensão de texto passo a passo — da letra solta às frases inteiras.',
    icon: '📙',
    colorClass: 'bg-orange-50 border-orange-100 text-orange-600',
    textColor: 'text-orange-600'
  },
  {
    id: 'content-4',
    title: 'Matemática Descomplicada',
    description: 'Atividades lúdicas que desenvolvem raciocínio sem choro e sem bloqueio matemático.',
    icon: '📕',
    colorClass: 'bg-rose-50 border-rose-100 text-rose-600',
    textColor: 'text-rose-600'
  },
  {
    id: 'content-5',
    title: 'Coordenação Motora',
    description: 'Traços e atividades que preparam a mãozinha para escrever — essencial antes do silabário.',
    icon: '📓',
    colorClass: 'bg-indigo-50 border-indigo-100 text-indigo-600',
    textColor: 'text-indigo-600'
  },
  {
    id: 'content-6',
    title: 'Caligrafia Cursiva',
    description: 'Da bastão à cursiva com método progressivo — letra bonita e legível sem sofrimento.',
    icon: '📔',
    colorClass: 'bg-pink-50 border-pink-100 text-pink-600',
    textColor: 'text-pink-600'
  },
  {
    id: 'content-7',
    title: 'Produção Textual',
    description: 'Atividades guiadas para a criança escrever sozinha com autoestima e progresso visível.',
    icon: '📒',
    colorClass: 'bg-yellow-50 border-yellow-100 text-amber-600',
    textColor: 'text-amber-600'
  },
  {
    id: 'content-8',
    title: 'Pintura e Cores',
    description: 'Diversão garantida desenvolvendo criatividade e foco enquanto aprende.',
    icon: '🎨',
    colorClass: 'bg-teal-50 border-teal-100 text-teal-600',
    textColor: 'text-teal-600'
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'time-1',
    period: 'Dia 1',
    icon: '⚡',
    title: 'Você imprime. A criança começa no mesmo dia.',
    description: 'Zero preparo. Zero curva de aprendizado. Em 15 minutos ela já está fazendo a primeira atividade.'
  },
  {
    id: 'time-2',
    period: 'Semana 1',
    icon: '⭐',
    title: '"Mãe, eu li isso sozinho!" 😭',
    description: 'A criança reconhece e forma as primeiras sílabas. O BA·BE·BI que travava começa a fluir.'
  },
  {
    id: 'time-3',
    period: 'Semana 2',
    icon: '📖',
    title: 'Ela lê rótulos, plaquinhas e letreiros na rua sozinha.',
    description: 'A confiança explode. Agora É ELA quem pede pra fazer atividade.'
  },
  {
    id: 'time-4',
    period: 'Semana 3',
    icon: '🚀',
    title: 'BRA, NHA, LHA — sem trava, sem choro.',
    description: 'A transição é tão suave que ela nem percebe a dificuldade subindo.'
  },
  {
    id: 'time-5',
    period: 'Semana 4+',
    icon: '🏆',
    title: 'Lendo frases, textos e qualquer palavra nova.',
    description: 'Em menos de um mês, crianças que "não conseguiam nem o BA" leem frases completas.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Juliana M.',
    location: 'São Paulo',
    role: '👩👧 Mãe',
    stars: 5,
    text: 'Minha filha foi do BA-BE-BI direto pro BRA-BRE-BRI em 2 semanas. Eu chorei muito. Vale cada centavo e muito mais.',
    avatarColor: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'test-2',
    name: 'Carla S.',
    location: 'Belo Horizonte',
    role: '👩🏫 Professora',
    stars: 5,
    text: '12 anos de sala de aula. Nunca vi material tão sequenciado. A progressão é exatamente o que a BNCC exige. Economizo horas toda semana.',
    avatarColor: 'bg-emerald-100 text-emerald-700'
  },
  {
    id: 'test-3',
    name: 'Patrícia R.',
    location: 'Curitiba',
    role: '👩👧 Mãe',
    stars: 5,
    text: 'Meu filho agora PEDE pra fazer atividade no fim de semana. As sílabas complexas que travavam ele — sumiram completamente.',
    avatarColor: 'bg-orange-100 text-orange-700'
  }
];

export const BONUS_ITEMS: BonusItem[] = [
  {
    id: 'bonus-1',
    title: 'Apostila Extra de Reforço',
    subtitle: '80 páginas de atividades extras para consolidar a leitura após o silabário.',
    badgeValue: 'Valor R$47 — GRÁTIS',
    icon: '📚'
  },
  {
    id: 'bonus-2',
    title: 'Frases e Textos Progressivos',
    subtitle: 'Coletânea de frases e textos curtos para acelerar a leitura fluente.',
    badgeValue: 'Valor R$37 — GRÁTIS',
    icon: '📜'
  },
  {
    id: 'bonus-3',
    title: 'Jogos Didáticos Imprimíveis',
    subtitle: 'Memória de sílabas, bingo das letras, dominó silábico — aprender brincando de verdade.',
    badgeValue: 'Valor R$47 — GRÁTIS',
    icon: '🎲'
  },
  {
    id: 'bonus-4',
    title: 'Acesso ao Grupo Exclusivo',
    subtitle: 'Novas atividades mensais e suporte da comunidade de +8.000 mães e professoras.',
    badgeValue: 'Valor R$97 — GRÁTIS',
    icon: '👥'
  },
  {
    id: 'bonus-5',
    title: 'Guia de Planejamento de Atividades',
    subtitle: 'Cronograma diário estruturado para aplicar as atividades em apenas 15 minutos ao dia.',
    badgeValue: 'Valor R$47 — GRÁTIS',
    icon: '📅'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Quando recebo o material após o pagamento?',
    answer: 'Imediatamente! Assim que o pagamento é confirmado, você recebe o link no e-mail. No PIX é na hora. No cartão pode levar até 5 minutos. Tudo 100% digital em PDF.'
  },
  {
    id: 'faq-2',
    question: 'É pagamento único ou mensalidade?',
    answer: 'Pagamento ÚNICO. Você paga uma vez e tem acesso vitalício a todo o material e todas as atualizações futuras. Nunca mais paga nada.'
  },
  {
    id: 'faq-3',
    question: 'Para que faixa etária é indicado?',
    answer: 'Ideal para crianças de 2 a 10 anos — Educação Infantil e Séries Iniciais. As atividades são progressivas: do mais simples ao mais complexo, sem pulos.'
  },
  {
    id: 'faq-4',
    question: 'Funciona em impressora preto e branco?',
    answer: 'Sim! As atividades foram desenvolvidas para economizar tinta e ficam ótimas tanto em colorido quanto em preto e branco. Funciona em qualquer impressora doméstica.'
  },
  {
    id: 'faq-5',
    question: 'Preciso ser professora para aplicar?',
    answer: 'Não! Cada caderno tem instruções simples. Você não precisa de formação em pedagogia — é só imprimir, sentar com a criança e seguir o passo a passo.'
  },
  {
    id: 'faq-6',
    question: 'O material é alinhado à BNCC?',
    answer: 'Sim, 100%. Todo o material foi elaborado seguindo a Base Nacional Comum Curricular, garantindo alinhamento com o que é exigido na escola hoje.'
  },
  {
    id: 'faq-7',
    question: 'Posso imprimir para mais de uma criança?',
    answer: 'Sim! É acesso vitalício em PDF para uso pessoal e familiar. Você pode imprimir quantas vezes quiser. Muitas mães plastificam para reutilizar com caneta de quadro branco.'
  }
];
