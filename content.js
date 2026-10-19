window.VM_CONTENT = {
  references: [
    'Ministério da Previdência Social. Previdência Social concede 546.254 benefícios por incapacidade temporária por transtornos mentais e comportamentais. Agência Gov; jan. 2026.',
    'ONU Brasil / OIT. Brasil: afastamentos por problemas de saúde mental aumentam 134% (dados do Observatório de Segurança e Saúde no Trabalho, SmartLab MPT/OIT). 2025. https://brasil.un.org/pt-br/292926',
    'Bassetti CLA, Welter LS, Montes-Martinez M, et al. Epidemiology and economic burden of sleep disorders in Europe. Eur J Neurol. 2026;33(2):e70463. https://doi.org/10.1111/ene.70463',
    'Castro LS, Poyares D, Leger D, Bittencourt L, Tufik S. Objective prevalence of insomnia in the São Paulo, Brazil epidemiologic sleep study. Ann Neurol. 2013;74(4):537-46. https://doi.org/10.1002/ana.23945',
    'Uehli K, Mehta AJ, Miedinger D, et al. Sleep problems and work injuries: a systematic review and meta-analysis. Sleep Med Rev. 2014;18(1):61-73. https://doi.org/10.1016/j.smrv.2013.01.004',
    'Tufik S, Santos-Silva R, Taddei JA, Bittencourt LR. Obstructive sleep apnea syndrome in the Sao Paulo Epidemiologic Sleep Study. Sleep Med. 2010;11(5):441-6. https://doi.org/10.1016/j.sleep.2009.10.005',
    'Kleinman NL, Brook RA, Doan JF, Melkonian AK, Baran RW. Health benefit costs and absenteeism due to insomnia from the employer\'s perspective: a retrospective, case-control, database study. J Clin Psychiatry. 2009;70(8):1098-104. https://doi.org/10.4088/JCP.08m04264',
    'Swanson LM, Arnedt JT, Rosekind MR, Belenky G, Balkin TJ, Drake C. Sleep disorders and work performance: findings from the 2008 National Sleep Foundation Sleep in America poll. J Sleep Res. 2011;20(3):487-94. https://doi.org/10.1111/j.1365-2869.2010.00890.x',
    'Ministério da Saúde. Vigitel Brasil: vigilância de fatores de risco e proteção para doenças crônicas por inquérito telefônico. Módulo sono (duração do sono < 6 h: 20,2% dos adultos nas capitais e no DF).',
    'Kessler RC, Berglund PA, Coulouvrat C, et al. Insomnia and the performance of US workers: results from the America Insomnia Survey. Sleep. 2011;34(9):1161-71. https://doi.org/10.5665/SLEEP.1230',
    'Meijer MCN, Middelburg RA, Arnold IA, et al. Insomnia as a risk factor for the development of depression and anxiety in primary care: a matched population-based cohort study. Fam Pract. 2026;43:1-8. https://doi.org/10.1093/fampra/cmag019'
  ],
  leaveSeries: {
    source: 'Ministério da Previdência Social (2023–2025); SmartLab MPT/OIT (2022)',
    years: [
      { year: '2022', value: 201000, label: '≈ 201 mil' },
      { year: '2023', value: 283471, label: '283 mil' },
      { year: '2024', value: 472328, label: '472 mil' },
      { year: '2025', value: 546254, label: '546 mil' }
    ]
  },
  nr1Duties: {
    title: 'O que muda para as empresas',
    items: [
      { icon: 'clipboard-check', text: 'Avaliar os riscos psicossociais dos trabalhadores.' },
      { icon: 'heart-handshake', text: 'Incluir a saúde mental nas políticas da empresa.' },
      { icon: 'search-check', text: 'Estar preparada para auditorias e fiscalizações.' }
    ],
    source: 'NR-1, Ministério do Trabalho e Emprego'
  },
  nr1Stats: [
    { number: '26/05/2026', text: 'Riscos psicossociais passam a fazer parte do PGR pela NR-1', source: 'NR-1, Ministério do Trabalho e Emprego' },
    { number: '546.254', text: 'benefícios do INSS por transtornos mentais e comportamentais em 2025', source: 'Ministério da Previdência Social, 2026' }
  ],
  sleepCards: [
    { label: 'No organismo', groups: [{ title: 'Dormir mal afeta', chips: [['brain', 'Memória'], ['scale', 'Julgamento'], ['lightbulb', 'Raciocínio'], ['smile', 'Equilíbrio emocional']] }, { title: 'E aumenta o risco de', chips: [['droplet', 'Diabetes'], ['brain-cog', 'Demência'], ['heart-pulse', 'Problemas cardíacos'], ['gauge', 'Hipertensão arterial']] }] },
    { label: 'Doenças do sono são muito comuns', stats: [
      { number: '15%', text: 'dos adultos de São Paulo têm insônia', source: 'Castro et al., 2013' },
      { number: '33%', text: 'têm apneia obstrutiva do sono', source: 'Tufik et al., 2010' },
      { number: '20%', text: 'dos adultos dormem < 6h por noite', source: 'Vigitel (capitais), Ministério da Saúde' }
    ] },
    { label: 'Impacto para a empresa', stats: [
      { number: '1,62x', text: 'risco de acidente de trabalho', source: 'Uehli et al., 2014' },
      { number: '11,3 dias', text: 'de produtividade perdidos por ano, por trabalhador com insônia', source: 'Kessler et al., 2011' }
    ] },
    { label: 'Na empresa', stats: [
      { text: 'Quem dorme mal vai trabalhar, mas não rende: é o presenteísmo.', highlight: 'presenteísmo', source: 'Swanson et al., 2011' },
      { sublabel: 'No plano de saúde', number: '2x', text: 'custo com benefícios de saúde de quem tem insônia, comparado a quem não tem', source: 'Kleinman et al., 2009' }
    ] }
  ],
  solution: {
    intro: 'A Vocemed leva a expertise de uma médica especialista em sono às empresas que não contam com esse profissional, com um produto diferenciado e capaz de gerar impacto real nas suas atividades.',
    pillars: [
      { icon: 'clipboard-list', title: 'Avaliação do sono', text: 'O primeiro passo: questionários de sono, que podem ser incluídos na avaliação psicossocial da NR-1. O médico do trabalho recebe um relatório com o resultado para compartilhar com o trabalhador.' },
      { icon: 'calendar-range', title: 'Jornada do sono ao longo do ano', text: 'Conteúdo de Medicina do Sono produzido por especialista, com gamificação: hábitos de sono mais saudáveis, sinais que indicam um possível problema médico e orientação sobre como agir.' },
      { icon: 'presentation', title: 'Encontros', text: 'Palestras, workshops presenciais e encontros online, com muita interação com os trabalhadores: para sensibilizar sobre o sono, melhorar hábitos e acompanhar a mudança. Para as empresas que desejam ir além.' }
    ]
  },
  steps: [
    { icon: 'smartphone', text: 'O trabalhador recebe o convite no celular, pelo WhatsApp ou por outra forma de comunicação da empresa, para acessar os questionários.' },
    { icon: 'mic', text: 'A Vocemed conduz a avaliação como uma conversa: faz as perguntas de maneira interativa e o trabalhador responde falando. A voz reduz a fricção no preenchimento.' },
    { icons: ['speech', 'arrow-right', 'clipboard-list'], text: 'Junto com os fatores psicossociais, entram as perguntas sobre sono.\nAssim, a avaliação fica mais completa.' },
    { icon: 'users', text: 'Os dados são tratados com confidencialidade e segurança: os resultados individuais ficam sob sigilo médico, com a medicina do trabalho; a empresa recebe somente dados agregados, prontos para o PGR.' }
  ],
  steps3: [
    { icon: 'smartphone', text: 'O trabalhador recebe o convite no celular, pelo WhatsApp ou por outra forma de comunicação da empresa.' },
    { icons: ['speech', 'arrow-right', 'clipboard-list'], text: 'A Vocemed conduz a avaliação como uma conversa: as perguntas psicossociais e as de sono, e o trabalhador responde falando.' },
    { icon: 'users', text: 'Os dados são tratados com confidencialidade e segurança: os resultados individuais ficam sob sigilo médico, com a medicina do trabalho; a empresa recebe somente dados agregados, prontos para o PGR.' }
  ],
  conversation: [
    { from: 'vocemed', text: 'Olá! Esta é a avaliação de saúde da sua empresa. Você pode responder falando. Vamos começar?' },
    { from: 'worker' },
    { from: 'vocemed', text: 'Como você tem dormido nas últimas semanas?' },
    { from: 'worker' }
  ],
  talks: ['European Congress of Integrative Medicine', 'IESE Business School', 'Congresso da Fundação ORL USP', 'Faculdade de Direito Mackenzie', 'Health Tech Forward']
};
