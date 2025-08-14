
const ptData = {
    navLinkLabels: {
        'visao-geral': 'Visão Geral',
        'sumario': 'Sumário Executivo',
        'pesquisa-completa': 'Pesquisa Completa',
        'panorama': 'Panorama Atual',
        'tendencias': 'Tendências',
        'players': 'Principais Players',
        'equidade-racial': 'Pessoas Negras no Setor',
        'politicas': 'Políticas Públicas',
        'mercado': 'Mercado & Valor',
        'infra-tech': 'Infra & Tecnologia',
        'materias-primas': 'Matérias-Primas',
        'producao-consumo': 'Produção & Consumo',
        'comparativo-global': 'Comparativo Global',
        'roadmap-2030': 'Cenários 2030',
        'referencias': 'Referências',
    },
    buttons: {
        seeMore: 'Ver mais dados',
        seeLess: 'Ver menos',
    },
    filters: {
        title: "Filtros Interativos",
        region: {
            label: "Região",
            options: {
                brasil: 'Brasil (Todas)',
                sudeste: 'Sudeste',
                sul: 'Sul',
                nordeste: 'Nordeste',
                centro_oeste: 'Centro-Oeste',
                norte: 'Norte'
            }
        },
        sourceType: {
            label: "Fonte",
            options: {
                all: 'Todas as Fontes',
                saneamento: 'Saneamento & RSU',
                industria: 'Indústria',
                agropecuaria: 'Agropecuária'
            }
        }
    },
    aiAssistant: {
        tooltip: "Assistente de IA",
        title: "Análise com IA",
        placeholder: "Pergunte sobre o mercado de biogás...",
        buttonClose: "Fechar",
        errorMessage: "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.",
        suggestionTitle: "Experimente perguntar:",
        suggestions: [
            "Resuma os principais desafios do setor",
            "Qual o potencial de biogás do agronegócio?",
            "Compare as tecnologias de purificação",
            "Quais estados lideram a produção?"
        ],
        systemInstruction: "Você é um analista especialista em energia e biogás no Brasil. Sua respostas devem ser informativas, precisas e baseadas exclusivamente no contexto fornecido. Use um tom profissional e amigável. Formate suas respostas usando markdown para melhor legibilidade (listas, negrito, etc.) quando apropriado.",
        contextPrompt: "Use o seguinte contexto sobre o setor de biogás no Brasil para responder a todas as minhas perguntas:\n\n--- INÍCIO DO CONTEXTO ---\n{context}\n--- FIM DO CONTEXTO ---",
        initialModelResponse: "Entendido. Estou pronto para responder perguntas sobre o biogás no Brasil com base no contexto fornecido. Como posso ajudar?",
    },
    fullResearchSection: {
        title: "Acesse a Pesquisa Completa",
        description: "Explore a análise detalhada, a metodologia e todas as fontes de dados em nosso documento de pesquisa abrangente.",
        buttonText: "Abrir Documento de Pesquisa",
        url: "https://docs.google.com/document/d/1LrOziaPesXZ6aF1ft6JUpvJ8ZAF2keEbGMnG9xsRSis/edit?tab=t.0"
    },
    keywords: [
        'biogás', 'biometano', 'Lei do Combustível do Futuro', 'descarbonização', 'upgrading', 'purificação', 'Petrobrás', 'Raízen', 'Orizon', 'BNDES', 'FINEP', 'gargalos de infraestrutura', 'licenciamento ambiental', 'gás natural', 'economia circular', 'agroindústria', 'saneamento', 'sucroenergético', 'resíduos sólidos urbanos', 'RSU', 'ANP', 'CIBiogás', 'ABiogás', 'MME', 'EPE', 'membranas', 'Pressure Swing Adsorption', 'PSA', 'biodigestores', 'CSTR', 'UASB', 'Gás Verde', 'clusters', 'hubs', 'Parcerias Público-Privadas', 'PPPs', 'hidrogênio verde', 'Fundo Clima', 'Programa Mais Inovação', 'subvenção econômica', 'RenovaPR', 'ICMS', 'crédito presumido', 'diferimento', 'Conecta Biometano SP', 'crédito outorgado', 'GO-GÁS', 'MS Renovável', 'AGEMS', 'CAPEX', 'OPEX', 'prêmio verde', 'CBIOs', 'CGOBs', 'offtake agreements', 'PPAs de Gás', 'GNC', 'GNL', 'Ultragaz', 'Volkswagen', 'Yara', 'digestores de lagoa coberta', 'modelo canadense', 'digestores de mistura completa', 'reatores de fluxo ascendente com manta de lodo', 'modelo indiano', 'modelo chinês', 'separação por membranas', 'adsorção por oscilação de pressão', 'lavagem com água', 'water wash', 'lavagem química', 'UBE Industries', 'Evonik', 'SEPURAN® Green', 'PlanET Biogas Group', 'Geofortes', 'Rastro Biodigestores', 'Tecnipar', 'Acqualimp', 'vinhaça', 'torta de filtro', 'dejetos animais', 'suinocultura', 'avicultura', 'bovinocultura', 'fração orgânica do lixo', 'lodo de esgoto', 'ETEs', 'corredores verdes', 'Ambev', 'L\'Oréal', 'Ternium', 'Scania', 'Bio-GNL', 'REPowerEU', 'EU-ETS', 'Low Carbon Fuel Standard', 'LCFS', 'Renewable Fuel Standard', 'RFS', 'Plano Safra', 'Marco do Saneamento', 'população negra', 'equidade racial', 'justiça ambiental', 'racismo ambiental', 'PNAD Contínua', 'DIEESE', 'Fundo Baobá', 'Black Founders Fund', 'Metha Energia'
    ],
    reportData: {
        title: "Pesquisa e Análise Estratégica: Biogás Brasil",
        subtitle: "Um Panorama do Setor Rumo a 2030",
        companyInfo: {
            tabs: {
                adminCouncil: 'Conselho Administrativo',
                execCouncil: 'Conselho Executivo',
                aboutUs: 'Quem Somos?'
            },
            adminCouncil: {
                title: 'Conselho Administrativo',
                members: [
                    [
                        'Júlio César Balbino',
                        'Dagoberto José Fonseca',
                        'Joaquim Francisco João',
                        'Cláudio Lúcio Claudino',
                        'Elisângela de Jesus Santos',
                        'José Carlos dos Santos'
                    ],
                    [
                        'Alessandra de Cássia Laurindo',
                        'Carlos Alberto dos Santos Corrêa',
                        'Tatiana Pereira de Souza',
                        'Amauri Brandão de Paula',
                        'Washington Lúcio Andrade',
                        'Carlos Alberto do Nascimento'
                    ]
                ]
            },
            execCouncil: {
                title: 'Conselho Executivo',
                members: [
                    [
                        'Dirk Drope',
                        'Andreas Lau',
                        'Phan Thanh Hung',
                        'Dr. Andreas Baumann'
                    ],
                    [
                        'Anja Lau',
                        'Júlio César Balbino',
                        'Joaquim Francisco João',
                        'Dagoberto José Fonseca'
                    ]
                ]
            },
            aboutUs: {
                title: 'Quem Somos?',
                text: "Somos uma empresa global comprometida em transformar conhecimento e inovação em soluções sustentáveis para o futuro. Nossa proposta e objetivo para a localização no Brasil é o planejamento e a construção de um moderno complexo de usinas de biogás na América do Sul, utilizando os mais recentes avanços em pesquisa e desenvolvimento.\n\nAcreditamos que energia limpa e tecnologia de ponta caminham juntas para impulsionar o progresso econômico, preservar o meio ambiente e gerar valor duradouro para as comunidades onde atuamos."
            }
        },
        executiveSummary: {
            sectionTitle: "Sumário Executivo",
            intro: "O Brasil vive um ponto de inflexão na transição energética, com o biogás e o biometano emergindo como pilares centrais da descarbonização. Impulsionado por um arcabouço regulatório robusto e pela urgência da pauta ambiental, o setor avança rapidamente, convertendo resíduos em ativos energéticos de alto valor e posicionando o país para uma liderança global em economia circular.",
            points: [
                {
                    id: 'drivers',
                    title: 'Principais Impulsionadores',
                    text: 'O crescimento é acelerado pela nova Lei do Combustível do Futuro, movimentos estratégicos de gigantes como Petrobrás, Raízen e Orizon, e um aumento expressivo de investimentos. A criação de um mercado cativo para o biometano a partir de 2026 e a monetização de atributos ambientais estabelecem bases sólidas para a expansão.',
                    icon: 'RocketLaunchIcon',
                    color: 'green'
                },
                {
                    id: 'challenges',
                    title: 'Gargalos e Desafios',
                    text: 'A consolidação do potencial depende da superação de desafios estruturais, incluindo a limitada malha de gasodutos, a falta de padronização no licenciamento ambiental e a necessidade de manter a competitividade do biometano frente ao gás natural fóssil.',
                    icon: 'XCircleIcon',
                    color: 'yellow'
                },
                {
                    id: 'vision',
                    title: 'Visão Estratégica',
                    text: 'Até 2030, a perspectiva é posicionar o Brasil como líder global em produção e referência em economia circular, integrando o biometano à agroindústria e ao saneamento, e transformando o potencial técnico do país em um motor para o desenvolvimento sustentável.',
                    icon: 'TrophyIcon',
                    color: 'blue'
                }
            ],
            highlightsTitle: "Destaques do Setor",
            highlights: [
                { 
                    id: 'potential', 
                    label: 'Potencial de Mercado', 
                    value: 'R$ 100 Bi', 
                    icon: 'BanknotesIcon',
                    tooltip: 'Refere-se ao valor econômico total que o setor de biogás e biometano pode movimentar anualmente, incluindo a venda do gás, biofertilizantes, créditos de carbono (CBIOs) e a geração de empregos e serviços em toda a cadeia produtiva.' 
                },
                { 
                    id: 'tech', 
                    label: 'Potencial Técnico', 
                    value: '97 Bi Nm³/ano', 
                    icon: 'PlanetIcon',
                    tooltip: 'Indica o volume máximo teórico de biogás que poderia ser produzido anualmente no Brasil se todos os resíduos orgânicos disponíveis (no agronegócio, saneamento e indústria) fossem aproveitados com a tecnologia atual. "Nm³" significa "Normal Metro Cúbico", uma unidade de medida padrão para gases.'
                },
                { 
                    id: 'investment', 
                    label: 'Investimento em Inovação', 
                    value: 'R$ 60+ Bi', 
                    icon: 'RocketLaunchIcon',
                    tooltip: 'Representa a projeção de investimentos (CAPEX) de fontes públicas (BNDES, FINEP) e privadas destinados à construção de novas plantas, desenvolvimento de tecnologias, infraestrutura e inovação no setor de biogás até 2030.'
                }
            ]
        },
        equityData: {
            title: "Pessoas Negras no Setor",
            intro: "Este relatório apresenta a primeira análise aprofundada sobre a participação da população negra (definida como a soma de pretos e pardos, segundo a metodologia do IBGE) na cadeia de valor do biogás no Brasil. A principal conclusão é a ausência sistêmica e alarmante de recorte racial nos dados setoriais, acadêmicos e corporativos. Essa \"zona cega\" torna a equidade racial um ponto invisível na agenda de crescimento do setor, arriscando perpetuar e aprofundar desigualdades históricas em um dos campos mais promissores da nova economia verde.",
            keyPoints: {
                title: "Cenário de Profunda Sub-representação",
                points: [
                    { id: 'leadership', title: 'Liderança e Gestão', text: 'Estima-se que a participação de pessoas negras em cargos de gerência e direção seja inferior a 10%, contrastando com os 56,7% da população negra no Brasil.' },
                    { id: 'research', title: 'Pesquisa e Academia', text: 'A presença de estudantes negros em cursos STEM ainda é desproporcional, formando um "funil" que limita a entrada de talentos qualificados.' },
                    { id: 'operation', title: 'Operação e Chão de Fábrica', text: 'A participação é presumivelmente alta, mas concentrada em posições de menor remuneração e poder decisório, com rendimento 40% inferior.' },
                    { id: 'entrepreneurship', title: 'Empreendedorismo e Inovação', text: 'O potencial de inovação, demonstrado por startups como a Metha Energia, permanece subaproveitado devido a barreiras de acesso a capital e redes.' }
                ]
            },
            monitoringSuggestions: {
                title: "Infográficos Sugeridos para Dashboard de Monitoramento",
                funnel: {
                    title: "O Funil da Desigualdade Racial no Biogás",
                    data: [
                        { label: 'População Geral', value: 56.7, color: 'bg-purple-400' },
                        { label: 'Força de Trabalho', value: 55.4, color: 'bg-purple-500' },
                        { label: 'Cargos de Liderança (Geral)', value: 33.7, color: 'bg-purple-600' },
                        { label: 'Liderança no Setor (Estimativa)', value: 10, color: 'bg-purple-700' }
                    ]
                },
                suggestions: [
                    { id: 'map', icon: 'MapIcon', title: 'Mapa de Oportunidades para uma Transição Justa', text: 'Um mapa do Brasil destacando os estados com maior potencial de produção de biogás, sobreposto com dados demográficos da concentração da população negra e o mapeamento de iniciativas de fomento ao empreendedorismo negro.' },
                    { id: 'ecosystem', icon: 'UserGroupIcon', title: 'Ecossistema de Apoio à Energia Negra', text: 'Um diagrama de rede mostrando as conexões (e a falta delas) entre fundos de investimento (BNDES, FINEP), universidades, empresas de biogás e organizações de fomento à população negra.' }
                ]
            },
            tabs: {
                methodology: "Metodologia",
                leadership: "Liderança e Gestão",
                scorecard: "Scorecard de Transparência",
                ecosystem: "Ecossistema de Fomento"
            },
            methodology: {
                title: "Superando o Vazio de Dados com Análise de Proxies",
                content: "A tarefa de quantificar a participação da população negra no setor de biogás brasileiro colide frontalmente com um obstáculo primário e definidor: a completa ausência de dados com recorte racial nas fontes setoriais, acadêmicas e corporativas. Este \"apagão de dados\" não é uma mera inconveniência metodológica; é, em si, um achado central deste relatório, revelando que a dimensão da equidade racial simplesmente não faz parte das métricas de acompanhamento e gestão do setor.\n\nPara superar este vazio, este relatório adotou uma metodologia de triangulação de dados e análise de proxies de alta qualidade. A estratégia consiste em utilizar dados demográficos e socioeconômicos robustos e de abrangência nacional para construir um retrato estimado, porém estatisticamente fundamentado, da realidade do setor. As principais fontes utilizadas como proxy foram:\n\n- **Pesquisa Nacional por Amostra de Domicílios Contínua (PNAD Contínua - IBGE):** Fornece dados detalhados sobre a composição da força de trabalho por cor ou raça, setor de atividade, posição na ocupação e rendimento médio.\n- **Censo da Educação Superior (INEP) e Censo Demográfico (IBGE):** Permitem analisar a formação do \"funil\" de talentos em áreas de STEM.\n- **Relatórios de Organizações Especializadas (DIEESE, Instituto Ethos):** Oferecem análises aprofundadas sobre as desigualdades raciais no mercado de trabalho e em posições de alta gestão."
            },
            leadership: {
                title: "Liderança e Gestão: O Topo da Pirâmide",
                content: "A análise da composição da liderança é o indicador mais contundente da equidade em qualquer setor. No setor de biogás brasileiro, as evidências indiretas apontam para um cenário de exclusão racial aguda no topo da pirâmide hierárquica.\n\nDados da PNAD Contínua (2º trimestre de 2024) revelam que, embora a população negra constitua 55,4% da força de trabalho ocupada, ela ocupa apenas 33,7% dos cargos de direção e gerência no geral. Ao se extrapolar essa realidade para o setor de biogás — de alta intensidade de capital e formação técnica especializada — a estimativa deste relatório é que a participação de pessoas negras em cargos de liderança seja inferior a 10%. Essa ausência no mais alto nível de governança corporativa significa que as decisões estratégicas que moldarão o futuro da transição energética no Brasil estão sendo tomadas sem a perspectiva e a vivência de mais da metade da população do país.",
                table: {
                    title: "Tabela 1: O Funil da Desigualdade Racial no Setor de Biogás (Estimativas 2024)",
                    headers: ["Estágio", "% População Negra", "Fonte de Dados"],
                    rows: [
                        ["População Geral do Brasil", "56,7%", "PNAD Contínua (IBGE)"],
                        ["População Ocupada", "55,4%", "PNAD Contínua (IBGE)"],
                        ["Graduados em Nível Superior (25+ anos)", "12,3% (Pardos) / 11,7% (Pretos)", "Censo Demográfico 2022 (IBGE)"],
                        ["Cargos de Direção e Gerência (Geral)", "33,7%", "PNAD Contínua / DIEESE"],
                        ["Cargos de Liderança no Setor de Biogás", "< 10%", "Estimativa do Relatório"]
                    ]
                }
            },
            scorecard: {
                title: "Scorecard de Transparência e Ações de DEI nos Principais Players do Biogás",
                headers: ["Empresa", "Relatório Sustent.", "Dados Raciais (Força de Trabalho)", "Dados Raciais (Liderança)", "Metas Raciais Públicas", "Programa Afirmativo", "Compras Inclusivas"],
                rows: [
                    { name: "Raízen", sustainabilityReport: true, workforceData: false, leadershipData: 'gender_only', publicGoals: false, affirmativeProgram: false, inclusivePurchasing: false },
                    { name: "Orizon VR", sustainabilityReport: true, workforceData: false, leadershipData: false, publicGoals: false, affirmativeProgram: false, inclusivePurchasing: false },
                    { name: "Gás Verde (Urca)", sustainabilityReport: true, workforceData: 'partial', leadershipData: 'partial', publicGoals: false, affirmativeProgram: false, inclusivePurchasing: false },
                    { name: "Solví", sustainabilityReport: true, workforceData: false, leadershipData: false, publicGoals: false, affirmativeProgram: false, inclusivePurchasing: false },
                    { name: "Geo Biogás & Carbon", sustainabilityReport: true, workforceData: false, leadershipData: false, publicGoals: false, affirmativeProgram: false, inclusivePurchasing: true }
                ],
                legend: {
                    true: "Sim",
                    false: "Não Específico / Não",
                    partial: "Parcial (Metas em elaboração)",
                    gender_only: "Apenas Gênero"
                }
            },
            ecosystem: {
                title: "Ecossistema de Fomento e Suas Lacunas",
                content: "Em resposta às desigualdades históricas, um ecossistema de fomento ao desenvolvimento da população negra tem ganhado força no Brasil. No entanto, uma análise desse ecossistema revela uma desconexão significativa com as oportunidades emergentes no setor de biogás.\n\nNo campo do crédito, iniciativas como a linha Empreenda Afro oferecem microcrédito, mas carecem da escala para financiar projetos de biogás. Na educação, programas como o Black STEM (Fundo Baobá) atacam o 'funil do conhecimento', mas seu alcance ainda é limitado e não há foco em bioenergia. No ecossistema de inovação, o Google for Startups Black Founders Fund se destaca, impulsionando startups como a Metha Energia. A lacuna crítica reside na falta de articulação entre essas valiosas iniciativas e o setor de biogás. As pontes entre o capital, o talento e as oportunidades ainda precisam ser construídas, resultando em uma perda mútua de potencial."
            },
            destaques: {
                title: "Destaque no Setor",
                people: [
                    { name: "Kwami Alfama Correia", role: "Ex-CEO da Zeg Biogás, fundador do Instituto Patuá" }
                ]
            }
        },
        currentScenario: {
            title: "Panorama Atual",
            intro: `O panorama do biogás no Brasil demonstra um setor em franca expansão e amadurecimento. Com 1.633 plantas em operação ou implementação (2024), um crescimento de 18% em relação ao ano anterior, o país consolida sua posição como um player relevante no cenário global de energias renováveis. A capacidade instalada total atingiu 4,7 bilhões de Nm³/ano, refletindo a crescente viabilidade de projetos de larga escala e a diversificação das fontes de matéria-prima.`,
            summaryStats: [
                { id: 'plants', label: 'Nº de Plantas de Biogás (2024)', value: '1.633', growth: '+18% vs. 2023', tooltip: 'Este número total inclui 1.587 usinas em plena operação e 46 em fase de implementação. O crescimento reflete a aceleração dos investimentos e a consolidação de políticas de incentivo, demonstrando a expansão contínua do setor.' },
                { id: 'capacity', label: 'Capacidade Instalada (Biogás)', value: '4,7 Bi Nm³/ano', growth: '+16% vs. 2023', tooltip: 'Capacidade total das plantas em operação. Em 2024, as novas usinas adicionaram 641 milhões de Nm³/ano a este total, o que equivale a energia suficiente para abastecer 4,9 milhões de residências.' },
                { id: 'biomethane', label: 'Produção de Biometano (2023)', value: '74,9 mi m³/ano', growth: '+12,3% vs. 2022', tooltip: 'Refere-se ao volume de biometano (biogás purificado com >90% de metano) efetivamente produzido. Este volume representa um crescimento de 12,3% em relação a 2022, confirmando a trajetória ascendente do biocombustível e a maturidade do setor.' },
            ],
            rankings: {
                title: "Rankings Nacionais",
                byPlants: {
                    title: "Top 5 Estados por Nº de Plantas",
                    items: [
                        { name: "Paraná", value: "478 plantas" },
                        { name: "Minas Gerais", value: "251 plantas" },
                        { name: "São Paulo", value: "243 plantas" },
                        { name: "Santa Catarina", value: "200 plantas" },
                        { name: "Mato Grosso do Sul", value: "180 plantas" }
                    ],
                    tooltip: "A liderança de estados como o Paraná em número de plantas é impulsionada pela capilaridade do agronegócio, especialmente na suinocultura e avicultura. Projetos de menor porte, integrados às propriedades rurais, formam a base deste ranking, demonstrando a descentralização e a interiorização da produção de biogás."
                },
                byCapacity: {
                    title: "Top 5 Estados por Capacidade",
                    items: [
                        { name: "São Paulo", value: "1.9 Bi Nm³/ano" },
                        { name: "Rio de Janeiro", value: "1.2 Bi Nm³/ano" },
                        { name: "Paraná", value: "1.2 Bi Nm³/ano" },
                        { name: "Mato Grosso do Sul", value: "1.0 Bi Nm³/ano" },
                        { name: "Goiás", value: "0.8 Bi Nm³/ano" }
                    ],
                    tooltip: "O ranking por capacidade instalada é liderado por estados com grandes projetos de saneamento e Resíduos Sólidos Urbanos (RSU), como São Paulo e Rio de Janeiro. Essas usinas, localizadas perto de grandes centros urbanos, processam um volume massivo de resíduos, resultando em uma produção de biogás em larga escala, fundamental para a viabilidade de projetos de biometano."
                }
            },
            metrics: {
                potentialSucro: "Pot. Sucroenergético",
                capacityPurification: "Cap. de Purificação",
                capacityLandfill: "Cap. em Aterros",
                purificationPlants: "Plantas de Purificação",
                technicalPotential: "Pot. Técnico (2031)"
            },
            metricTooltips: {
                potentialSucro: "Representa o potencial de produção de biogás exclusivamente a partir dos resíduos do setor sucroenergético, como vinhaça e torta de filtro. É uma das fontes mais promissoras para projetos de larga escala.",
                capacityPurification: "Indica a capacidade total instalada das 79 usinas que possuem tecnologia de purificação (upgrading) para transformar biogás em biometano. Este é um indicador-chave da maturidade industrial do setor.",
                capacityLandfill: "Refere-se à capacidade de geração de energia elétrica a partir do biogás capturado em aterros sanitários. É uma métrica importante para o setor de saneamento e Resíduos Sólidos Urbanos (RSU).",
                purificationPlants: "Número total de plantas de biogás que estão equipadas com sistemas de purificação para produzir biometano, um substituto direto do gás natural.",
                technicalPotential: "Projeção do potencial técnico total de produção de biogás no Brasil para o ano de 2031, considerando o aproveitamento de todas as fontes de resíduos disponíveis com a tecnologia projetada para a data."
            },
            analysisTabs: {
                overview: "Visão Geral",
                metrics: "Métricas Detalhadas"
            },
            distributionAnalysis: {
                title: "Distribuição Geográfica e por Substrato",
                sections: [
                    {
                        title: "Líderes Regionais",
                        cards: [
                            { title: "Líder em Nº de Plantas", text: "Paraná, impulsionado pelo agronegócio, com 102 novas usinas em 2024." },
                            { title: "Líder em Capacidade", text: "São Paulo, reflexo de grandes plantas de saneamento e do setor sucroenergético." }
                        ]
                    },
                    {
                        title: "A Dupla Estrutura do Mercado",
                        cards: [
                            { title: "Jogo de Escala (RSU/Saneamento)", text: "Alta concentração de capacidade em poucas e grandes plantas perto de centros urbanos, dominado por grandes players (Orizon, Solví)." },
                            { title: "Jogo de Agregação (Agropecuário)", text: "Vasta capilaridade de plantas de pequeno porte, com desafio logístico de coletar resíduos dispersos." }
                        ]
                    },
                    {
                        title: "Análise por Matéria-Prima",
                        cards: [
                            { title: "RSU & Saneamento", text: "Espinha dorsal da capacidade produtiva, respondendo por 60% do total instalado." },
                            { title: "Agropecuário", text: "Capacidade cresceu 95% na última década, demonstrando um avanço notável." },
                            { title: "Indústria", text: "Contribui com 170 unidades e uma capacidade de 981 milhões de Nm³/ano." }
                        ]
                    }
                ]
            },
            fullText: {
                applications: `Atualmente, a geração de energia elétrica continua sendo o principal uso do biogás produzido no Brasil. Esta preferência se due, em grande parte, à facilidade de comercialização da eletricidade no mercado regulado ou livre, bem como aos mecanismos de compensação de energia (geração distribuída), que oferecem um modelo de negócio mais simples e estabelecido. No entanto, o foco estratégico do setor está migrando rapidamente para a produção de biometano, que possui maior valor agregado e versatilidade de aplicação, podendo substituir o gás natural, o diesel e o GLP.`
            },
            chartTitles: {
                distribution: "Distribuição por Substrato",
                biogasSources: "Fontes de Biogás (% Capacidade)",
            },
        },
        playersData: {
            title: "Movimentos Estratégicos dos Principais Atores",
            intro: "A competição no mercado brasileiro de biometano não é uma disputa entre empresas isoladas, mas sim uma \"batalha de ecossistemas\". O sucesso dependerá da capacidade de cada um em garantir matéria-prima em escala, assegurar contratos de longo prazo e otimizar a logística de entrega ao consumidor final.",
            tabs: {
                overview: 'Visão Geral',
                petrobras: 'Petrobrás',
                raizen: 'Raízen',
                orizon: 'Orizon',
                others: 'Outros Players'
            },
            categories: [
                {
                    id: 'saneamento',
                    title: 'Gigantes do Saneamento e Gestão de Resíduos',
                    icon: 'FactoryIcon',
                    color: 'blue',
                    description: "Empresas como Orizon Valorização de Resíduos, Solví, Veolia, Marquise Ambiental e Estre são players dominantes no segmento de Resíduos Sólidos Urbanos (RSU). Elas controlam grandes aterros sanitários, que funcionam como verdadeiras \"reservas\" de biogás, e estão investindo bilhões de reais para converter esse gás em biometano. A Orizon, em particular, adota uma estratégia agressiva de crescimento, combinando aquisições, como a da Oeste Ambiental, com parcerias estratégicas, como a joint venture com a Gás Verde para duas novas usinas no Rio de Janeiro, e contratos de fornecimento de longo prazo com distribuidoras como a Ultragaz.",
                    players: ['Orizon', 'Solví', 'Veolia', 'Marquise Ambiental', 'Estre', 'Gás Verde'],
                    linkedTab: 'orizon'
                },
                {
                    id: 'agro',
                    title: 'Integradores da Agroindústria',
                    icon: 'LeafIcon',
                    color: 'green',
                    description: "A Raízen, uma joint venture entre a Shell e a Cosan, é o principal expoente deste grupo. Sua estratégia consiste em integrar a produção de biogás e biometano diretamente em suas operações sucroalcooleiras, utilizando resíduos como vinhaça e torta de filtro. A empresa anunciou um plano ambicioso para instalar plantas de biogás em todas as suas 35 usinas nos próximos dez anos, com uma meta de produção de 3 milhões de m3/dia. A Raízen já garantiu a venda de sua produção futura por meio de contratos de longo prazo com clientes de peso como a Yara Fertilizantes e a Volkswagen, que utilizará o biometano em seus processos fabris.",
                    players: ['Raízen (Shell & Cosan)', 'Yara Fertilizantes (Cliente)', 'Volkswagen (Cliente)'],
                    linkedTab: 'raizen'
                },
                {
                    id: 'new',
                    title: 'Novos Entrantes Estratégicos',
                    icon: 'RocketLaunchIcon',
                    color: 'purple',
                    description: "A entrada da Petrobrás no mercado de biometano representa a maior disrupção e validação do setor. A estatal, tradicionalmente focada em combustíveis fósseis, lançou uma chamada pública para adquirir até 700 mil m3/dia de biometano, um volume que pode chegar a ser quatro vezes maior que a produção média diária atual do país. Além de atuar como compradora, a Petrobrás anunciou planos de investir diretamente na produção de biometano, seja de forma independente ou em parceria com empresas já estabelecidas, posicionando-se em ambos os lados do mercado: oferta e demanda.",
                    players: ['Petrobrás'],
                    linkedTab: 'petrobras'
                },
                {
                    id: 'financial',
                    title: 'Players Internacionais e Investidores Financeiros',
                    icon: 'BanknotesIcon',
                    color: 'yellow',
                    description: "O dinamismo do mercado brasileiro tem atraído capital e expertise internacional. Empresas globais de energia e commodities como BP, Cargill e o fundo soberano Mubadala Capital já estão ativos no país. A gestora canadense Brookfield também está buscando ativamente parceiros para um plano de investimento que pode chegar a US$ 300 milhões, com foco inicial em projetos de aterros sanitários e, posteriormente, no setor sucroenergético.",
                    players: ['BP', 'Cargill', 'Mubadala Capital', 'Brookfield'],
                    linkedTab: 'others'
                }
            ],
            strategicMoves: [
                {
                    id: 'petrobras',
                    title: 'Petrobrás',
                    subtitle: 'O Novo Gigante e a Disrupção do Mercado',
                    icon: 'RocketLaunchIcon',
                    color: 'purple',
                    content: [
                        { title: '', description: 'A entrada da Petrobrás no mercado de biometano é o movimento mais disruptivo e a maior validação que o setor poderia receber. Tradicionalmente focada em combustíveis fósseis, a estatal agora se posiciona para ser um player dominante no gás renovável, atuando em duas frentes estratégicas: como grande compradora e como futura produtora.' },
                        { title: 'Estratégia Dupla: Compradora e Produtora', description: 'O Plano Estratégico 2025-2029 da Petrobrás já contempla investimentos em bioprodutos, incluindo o biometano. A estratégia da empresa não é apenas adquirir o gás de terceiros, mas também investir capital (CAPEX) para construir novas plantas de produção. Isso significa que a Petrobrás estará em ambos os lados do balcão: estimulando a oferta como compradora e, ao mesmo tempo, competindo no mercado como produtora.' },
                        { title: 'Criação de Demanda em Larga Escala', description: 'O principal instrumento dessa estratégia é a chamada pública lançada em 2025 para a aquisição de biometano. O volume buscado é massivo e pode ser até quatro vezes maior que a produção média diária atual do país. Ao se comprometer com a compra de grandes volumes, a Petrobrás cria uma demanda firme e de longo prazo, mitigando o risco de mercado para os produtores e, consequentemente, destravando financiamentos para novos projetos.' },
                        { title: 'Modelo de Parcerias', description: 'A Petrobrás reconhece que o mercado de biometano ainda é pulverizado. Por isso, sua estratégia de entrada na produção se baseia fortemente em parcerias com empresas que já atuam no setor. O modelo mais provável é a formação de Sociedades de Propósito Específico (SPEs), nas quais a Petrobrás aportaria capital e sua expertise em gás, enquanto os parceiros entrariam com o controle da matéria-prima e o conhecimento técnico específico do biogás. A estatal já está em conversas com potenciais parceiros para viabilizar esses investimentos.' }
                    ]
                },
                {
                    id: 'raizen',
                    title: 'Raízen',
                    subtitle: 'A Potência da Integração Vertical Agroindustrial',
                    icon: 'LeafIcon',
                    color: 'green',
                    content: [
                        { title: '', description: 'A Raízen, uma gigante do setor sucroenergético, adota uma estratégia de integração vertical completa, transformando suas usinas em verdadeiras biorrefinarias. O objetivo é maximizar o valor de cada parte da cana-de-açúcar, convertendo resíduos, que antes eram um passivo, em produtos de alto valor agregado.' },
                        { title: 'Do Resíduo à Receita', description: 'A estratégia da Raízen é utilizar a vinhaça e a torta de filtro, subprodutos da produção de açúcar e etanol, como matéria-prima para o biogás. A empresa tem um plano ambicioso de instalar até 39 módulos de biogás em seus 35 bioparques até a safra 2030/31. Embora o ritmo de investimento possa ser reavaliado conforme as condições de mercado, a direção estratégica de longo prazo é clara.' },
                        { title: 'Joint Venture Tecnológica', description: 'Para executar essa estratégia, a Raízen conta com a expertise de sua joint venture com a Geo Biogás & Tech, a Raízen Geo Biogás. Essa parceria une o domínio da Raízen sobre a matéria-prima em larga escala com a tecnologia de biodigestão e purificação da Geo, criando um modelo de negócio robusto e replicável.' },
                        { title: 'Garantia de Mercado com Contratos de Longo Prazo', description: 'A Raízen não espera o mercado se desenvolver; ela o cria. A empresa tem sido proativa na assinatura de contratos de offtake de longo prazo, garantindo a venda de sua produção futura para grandes clientes industriais. Os acordos com a Yara Fertilizantes (para produção de hidrogênio e amônia verdes) e com a Volkswagen são exemplos emblemáticos dessa estratégia, que assegura a receita e viabiliza os altos investimentos necessários.' }
                    ]
                },
                {
                    id: 'orizon',
                    title: 'Orizon',
                    subtitle: 'Domínio e Expansão no Setor de RSU',
                    icon: 'FactoryIcon',
                    color: 'blue',
                    content: [
                        { title: '', description: 'A Orizon é a líder consolidada no segmento de Resíduos Sólidos Urbanos (RSU), e sua estratégia competitiva se baseia em controlar a fonte da matéria-prima (os aterros sanitários) e expandir sua capacidade de valorização energética por meio de crescimento orgânico, aquisições e parcerias estratégicas.' },
                        { title: 'Controle da Matéria-Prima', description: 'A principal vantagem competitiva da Orizon é a gestão de 17 "ecoparques" (aterros sanitários) que funcionam como fontes constantes e de longo prazo de biogás. A empresa foca em transformar esse biogás, que já era usado para gerar eletricidade, em biometano, um produto de maior valor.' },
                        { title: 'Crescimento Agressivo via M&A e Parcerias', description: 'A Orizon cresce rapidamente por meio de aquisições de outros aterros e empresas do setor, consolidando sua liderança. Além disso, a empresa adota um modelo de integração horizontal, formando parcerias com especialistas de outros elos da cadeia. A joint venture com a Gás Verde (Grupo Urca Energia) para desenvolver duas novas usinas no Rio de Janeiro é um exemplo de parceria na produção. Já na distribuição, o contrato de 10 anos com a Ultragaz para fornecimento de 150 mil m³/dia de biometano a partir de 2028 ilustra a estratégia de se aliar a um gigante da distribuição para garantir o acesso ao mercado consumidor.' },
                        { title: 'Plano de Investimento Robusto', description: 'A Orizon, através de sua holding de energia Orizon Energia e Gás Renovável (OEGR), planeja implantar pelo menos 10 novas plantas de biometano nos próximos anos. A empresa faz parte de um grupo de grandes players do setor de resíduos que devem investir até R$ 8 bilhões até 2029 para aproveitar as oportunidades criadas pela Lei do Combustível do Futuro.' }
                    ]
                },
                {
                    id: 'others',
                    title: 'Outros Players',
                    subtitle: 'O Ecossistema Competitivo',
                    icon: 'BuildingOffice2Icon',
                    color: 'yellow',
                    content: [
                        { title: '', description: 'Além dos três gigantes, outros players importantes estão moldando o cenário competitivo, muitas vezes através de parcerias e especialização em nichos específicos.' },
                        { title: 'Outras Gigantes de Resíduos', description: 'Empresas como Solví, Veolia e Marquise Ambiental seguem uma estratégia similar à da Orizon, aproveitando o controle sobre aterros para investir em biometano. A Solví, por exemplo, está construindo a maior planta de biometano do Sul do país com financiamento do BNDES e já possui uma unidade com capacidade de 70.000 m³/dia em Caieiras (SP). A Veolia, uma multinacional, tem um plano estratégico de transformar seus centros de resíduos em "Parques Tecnológicos Ambientais", com uma meta global de produzir 8 GW de bioenergia até 2030. A Marquise Ambiental, por sua vez, além de produzir biometano em parceria no Ceará, está investindo na criação de um ciclo completo, utilizando o combustível renovável para abastecer sua própria frota de coleta de resíduos.' },
                        { title: 'Desenvolvedores de Tecnologia e Projetos', description: 'Empresas como a Geo Biogás & Tech são peças-chave no ecossistema, atuando como desenvolvedoras de tecnologia e viabilizadoras de projetos. Elas formam joint ventures estratégicas com detentores de matéria-prima, como a Raízen, a Mitsui (na GeoMit), a Copersucar (para produção de SAF) e o Grupo Crivellaro (resíduos industriais), demonstrando um modelo de negócio baseado em parcerias tecnológicas.' },
                        { title: 'Produtores Independentes e Integradores', description: 'A Gás Verde (Grupo Urca Energia) se destaca como um player ágil e em rápida expansão. Após ser adquirida pela Urca Energia por R$ 1,2 bilhão, a empresa anunciou planos de quintuplicar sua produção, expandindo de sua base em aterros sanitários para novos projetos com vinhaça de cana-de-açúcar. A empresa busca ativamente investidores para acelerar seu crescimento e já formou parcerias importantes, como a já citada com a Orizon.' }
                    ]
                }
            ],
            conclusion: "Em resumo, a competição no mercado brasileiro de biometano não é uma disputa entre empresas isoladas, mas sim uma \"batalha de ecossistemas\". De um lado, a integração vertical da agroindústria (Raízen). De outro, a integração horizontal dos gestores de resíduos, que controlam a fonte e se aliam a especialistas em distribuição (Orizon, Solví). E, como um novo e poderoso centro de gravidade, a Petrobrás, que atuará como um \"criador de mercado\" e um futuro competidor integrado. O sucesso dependerá da capacidade de cada ecossistema em garantir matéria-prima em escala, assegurar contratos de longo prazo e otimizar a logística de entrega ao consumidor final."
        },
        trends2030: {
            title: "Tendências e Vetores de Crescimento até 2030",
            intro: `O horizonte até 2030 para o setor de biogás e biometano no Brasil é marcado por uma confluência de tendências tecnológicas, novos modelos de negócio e um ambiente de investimento favorável, que juntos prometem acelerar a transição do setor de um potencial latente para uma potência energética consolidada.`,
            tech: {
                title: "Inovações Tecnológicas",
                intro: "A viabilidade técnica e econômica dos projetos de biometano está intrinsecamente ligada aos avanços nas tecnologias de purificação (upgrading). O mercado global para estas tecnologias está em franca expansão, com projeções de crescimento de US$ 414,5 milhões em 2025 para US$ 2,157 bilhões em 2033, a uma taxa de crescimento anual composta (CAGR) de 22,9%.",
                upgrading: {
                    title: "Principais Tecnologias de Purificação",
                    modalButtonLabel: "Ver Detalhes",
                    technologies: [
                        { 
                            id: 'membranes', 
                            title: 'Separação por Membranas', 
                            icon: 'MicrochipIcon',
                            summary: 'Tecnologia compacta e de operação simples, ideal para plantas de pequeno e médio porte.', 
                            details: 'Utiliza membranas poliméricas semipermeáveis que permitem a passagem de gases como CO₂ e H₂S enquanto retêm o metano. É uma tecnologia compacta, de operação simples e com baixo consumo de energia. No Brasil, empresas de tecnologia como UBE, 3DI Engenharia e Evonik já estão ativas, fornecendo sistemas de membranas de alta eficiência e baixo custo operacional.'
                        },
                        { 
                            id: 'psa', 
                            title: 'Adsorção por Oscilação de Pressão (PSA)', 
                            icon: 'ArrowPathIcon',
                            summary: 'Tecnologia robusta e altamente eficiente, preferida para projetos de grande escala, garantindo alta pureza do biometano.', 
                            details: 'O biogás é pressurizado e passa por colunas preenchidas com um material adsorvente que retém seletivamente o CO₂ e outras impurezas. Ambas as rotas são eficazes na remoção de dióxido de carbono (CO₂), sulfeto de hidrogênio (H₂S) e outras impurezas do biogás bruto, elevando a concentração de metano (CH₄) para mais de 90%, tornando-o quimicamente análogo ao gás natural.'
                        }
                    ]
                },
                biodigesters: {
                    title: "Evolução dos Biodigestores",
                    modalButtonLabel: "Ver Detalhes",
                    technologies: [
                         { 
                            id: 'common', 
                            title: 'Tecnologias Comuns', 
                            icon: 'CubeTransparentIcon',
                            summary: 'Modelos como lagoas cobertas são de baixo custo, mas oferecem menor controle e eficiência.', 
                            details: 'Embora os modelos de lagoa coberta ainda sejam comuns em projetos rurais de baixo custo, eles oferecem pouco controle sobre parâmetros como temperatura e pH, o que resulta em menor eficiência na conversão da matéria orgânica em biogás.'
                        },
                         { 
                            id: 'advanced', 
                            title: 'Tecnologias Avançadas', 
                            icon: 'BeakerIcon',
                            summary: 'Reatores CSTR e UASB permitem controle preciso do processo, resultando em maior eficiência e produção de biogás.', 
                            details: 'A indústria está migrando para reatores mais sofisticados, como os de mistura completa (CSTR - Continuously Stirred Tank Reactor) e os reatores anaeróbios de manta de lodo e fluxo ascendente (UASB - Upflow Anaerobic Sludge Blanket). Estes sistemas permitem um controle mais preciso, o que é crucial para a viabilidade de plantas de escala industrial.'
                        }
                    ]
                },
                marketGrowth: {
                    title: "Crescimento do Mercado Global de Tecnologias de Upgrading",
                    data: [
                        { year: 2025, value: 414.5 },
                        { year: 2033, value: 2157 }
                    ],
                    cagr: "22,9%",
                    cagrLabel: "CAGR (Taxa de Crescimento Anual Composta)",
                    cagrTooltip: "A Taxa de Crescimento Anual Composta (CAGR) representa a taxa de crescimento média ao longo de um período, suavizando a volatilidade para fornecer uma única taxa constante. É útil para entender o crescimento de um mercado ao longo do tempo."
                }
            },
            businessModels: {
                title: "Novos Modelos de Negócio",
                intro: `A transformação mais significativa no setor é a mudança de mentalidade: o tratamento de resíduos deixou de ser visto como um passivo ambiental para se tornar o ponto de partida para a criação de ativos energéticos de alto valor. Para superar desafios como a dispersão da matéria-prima e viabilizar projetos de larga escala, novos modelos de negócio estão se consolidando.`,
                models: [
                    { 
                        id: 'hubs', 
                        title: 'Clusters e Hubs de Biometano', 
                        description: 'Agregação da produção de biogás de múltiplos produtores rurais em uma unidade central de purificação para ganhar escala, reduzir custos e otimizar o acesso à infraestrutura de gasodutos.', 
                        icon: 'CubeTransparentIcon' 
                    },
                    { 
                        id: 'ppps', 
                        title: 'Parcerias Público-Privadas (PPPs)', 
                        description: 'Instrumento fundamental para alavancar grandes projetos de saneamento e tratamento de RSU, unindo a capacidade de investimento privada à gestão de resíduos do setor público.', 
                        icon: 'BuildingOffice2Icon' 
                    },
                    { 
                        id: 'zero-waste', 
                        title: 'Valorização Integral (Resíduo Zero)', 
                        description: 'Modelo de negócio que aproveita todos os subprodutos do processo, como o CO₂ purificado e os biofertilizantes, criando múltiplas fontes de receita e fortalecendo a economia circular.',
                        icon: 'ArrowPathIcon' 
                    },
                ]
            },
            finance: {
                title: "Financiamento Climático e ESG",
                intro: "A crescente demanda por investimentos ESG, somada ao forte apoio de bancos públicos como BNDES e FINEP, cria um ambiente fértil para o financiamento de projetos de biogás no Brasil.",
                revenueStacking: {
                    title: 'O "Empilhamento" de Receitas (Revenue Stacking)',
                    modalButtonLabel: "Saiba Mais",
                    streams: [
                        { id: 'gas', title: 'Venda do Gás (Commodity)', description: 'Receita principal vinda da comercialização da molécula como produto energético.', icon: 'GasMoleculeIcon', details: 'Este é o fluxo de receita primário, negociado diretamente com consumidores industriais, distribuidoras de gás ou empresas de transporte. O preço da molécula compete diretamente com o gás natural de origem fóssil.' },
                        { id: 'env', title: 'Atributos Ambientais (CBIOs)', description: 'Monetização da descarbonização através da venda de certificados de carbono e outros créditos verdes.', icon: 'LeafIcon', details: 'A geração de receita adicional através da venda de certificados como os Créditos de Descarbonização (CBIOs) no âmbito do RenovaBio e, futuramente, os Certificados de Geração de Biometano (CGOBs) criados pela Lei do Combustível do Futuro, além de créditos no mercado voluntário de carbono.' },
                        { id: 'byproducts', title: 'Venda de Subprodutos', description: 'Geração de valor adicional com a comercialização de CO₂ purificado e biofertilizantes para o agro.', icon: 'ArrowTrendingUpIcon', details: 'A comercialização de produtos de alto valor agregado gerados no processo, como o CO₂ verde (para a indústria de bebidas, por exemplo) e o digestato, que pode ser vendido como biofertilizante, substituindo insumos químicos de alto custo.' },
                        { id: 'opex', title: 'Economia Operacional (OPEX)', description: 'Redução de custos diretos pela substituição de combustíveis fósseis (diesel, GLP) na própria operação.', icon: 'CogIcon', details: 'Em projetos de uso próprio (fazendas, indústrias), a substituição de combustíveis fósseis caros, como diesel e GLP, gera uma economia direta que contribui para o retorno do investimento, funcionando como uma "receita evitada".' }
                    ],
                    conclusion: 'A capacidade de empilhar essas fontes de valor é o fator determinante para a atratividade e viabilidade financeira dos projetos.'
                }
            }
        },
        policies: {
            title: "Políticas Públicas & Incentivos",
            intro: "O ecossistema de apoio ao biogás no Brasil é multifacetado, combinando financiamento robusto de bancos de desenvolvimento, programas de incentivo em nível estadual e políticas nacionais que criam mercados e valorizam os atributos ambientais do gás renovável.",
            tabs: {
                federalFinancing: "Financiamento Federal",
                statePrograms: "Programas Estaduais",
                taxIncentives: "Incentivos Fiscais"
            },
            federalFinancing: {
                title: "Fontes de Financiamento em Larga Escala",
                funds: [
                    {
                        id: 'bndes',
                        title: 'BNDES (Banco Nacional de Desenvolvimento Econômico e Social)',
                        icon: 'BanknotesIcon',
                        value: 'R$ 10 Bi',
                        valueLabel: 'Fundo Clima (2024)',
                        description: 'Financia a implantação de plantas de biogás, substituição de combustíveis fósseis e modernização industrial através de programas como o Fundo Clima.',
                        example: {
                            label: 'Exemplo de Impacto:',
                            text: 'Financiamento de R$ 150 milhões para o Grupo Piracanjuba para descarbonização industrial.'
                        }
                    },
                    {
                        id: 'finep',
                        title: 'FINEP (Financiadora de Estudos e Projetos)',
                        icon: 'RocketLaunchIcon',
                        value: 'R$ 61 Bi',
                        valueLabel: 'Programa Mais Inovação (até 2026)',
                        description: 'Apoia o desenvolvimento tecnológico com crédito subsidiado e subvenções (recursos não-reembolsáveis) para inovações na cadeia do biogás.',
                        example: {
                            label: 'Projetos Contratados:',
                            text: 'Mais de R$ 708 milhões em projetos de biogás/biometano entre 2023-2024.'
                        }
                    }
                ]
            },
            statePrograms: {
                title: "Iniciativas Estaduais Competitivas",
                intro: "Reconhecendo o potencial do biogás para o desenvolvimento regional, diversos estados criaram pacotes de incentivos para atrair investimentos.",
                programs: [
                    {
                        id: 'pr',
                        title: 'Paraná',
                        icon: 'TrophyIcon',
                        benefits: ['RenovaPR para fomento no campo', 'Isenção de ICMS para máquinas e equipamentos', 'Crédito presumido de 12% na venda de biogás']
                    },
                    {
                        id: 'sp',
                        title: 'São Paulo',
                        icon: 'RocketLaunchIcon',
                        benefits: ['Diferimento de ICMS para biogás e biometano', 'Plataforma digital "Conecta Biometano SP"', 'Foco em projetos de grande escala em saneamento']
                    },
                    {
                        id: 'co',
                        title: 'Centro-Oeste (MT, GO, MS)',
                        icon: 'LeafIcon',
                        benefits: ['Crédito outorgado de ICMS (MT)', 'Programa GO-GÁS (GO)', 'Programa MS Renovável e regulação via AGEMS (MS)']
                    }
                ]
            },
            taxIncentives: {
                title: "Impacto dos Incentivos Fiscais",
                intro: "Os incentivos fiscais, principalmente via ICMS, são ferramentas poderosas para reduzir o custo de implantação (CAPEX) e operacional (OPEX), tornando os projetos mais competitivos.",
                cards: [
                    {
                        id: 'capex',
                        title: 'Redução do Custo de Implantação (CAPEX)',
                        icon: 'ArrowsRightLeftIcon',
                        description: 'A isenção ou diferimento do ICMS na compra de equipamentos essenciais, como biodigestores e sistemas de upgrading, diminui significativamente o investimento inicial necessário para construir a planta.'
                    },
                    {
                        id: 'opex',
                        title: 'Aumento da Competitividade (OPEX)',
                        icon: 'ArrowTrendingUpIcon',
                        description: 'A redução da base de cálculo ou a concessão de crédito presumido na venda do biometano torna o preço do produto final mais competitivo, facilitando sua comercialização frente aos combustíveis fósseis.'
                    }
                ]
            }
        },
        marketAndValueChain: {
            title: "Mercado & Cadeia de Valor",
            intro: "A consolidação do mercado de biometano depende da estruturação de uma cadeia de valor eficiente, com precificação competitiva, acesso claro à infraestrutura de distribuição e modelos de contratação que garantam a segurança para investimentos de longo prazo.",
            tabs: {
                pricing: "Preço & Competitividade",
                tariffs: "Tarifas & Acesso à Rede",
                distribution: "Canais de Distribuição"
            },
            pricing: {
                title: "Entendendo o Preço do Biometano",
                formula: {
                    molecule: "Valor da Molécula",
                    attribute: "Atributo Ambiental",
                    finalPrice: "Preço Final Competitivo"
                },
                description: "A competitividade do biometano não vem apenas do seu poder energético, mas da valoração do seu benefício ambiental. Empresas com metas ESG pagam um 'prêmio verde' que viabiliza o preço final.",
                strategy: {
                    title: "Estratégia Chave: Contratos de Longo Prazo",
                    description: "Contratos de longo prazo (PPAs de Gás) são essenciais para garantir receita e destravar financiamentos para novos projetos.",
                    button: "Saiba Mais sobre PPAs de Gás",
                    modal: {
                        title: "Exemplos de PPAs de Gás",
                        content: "Exemplos como os contratos da Orizon com a Ultragaz (10 anos) e da Raízen com a Volkswagen e a Yara demonstram como esses acordos fornecem a previsibilidade de receita necessária para destravar o financiamento e viabilizar a construção das plantas."
                    }
                }
            },
            tariffs: {
                title: "Acesso à Rede e Estrutura Tarifária",
                injection: {
                    title: "Tarifa de Injeção na Rede",
                    description: "Para produtores que se conectam à malha, as tarifas de transporte e distribuição são um custo crucial. A regulação busca simplificar este acesso."
                },
                positive_trend: {
                    title: "Tendência Positiva",
                    description: "As tarifas de transporte para 2025 apresentam tendência de queda, um sinal positivo para o setor.",
                    tooltip: "A redução das tarifas diminui o custo para o produtor e melhora a competitividade do biometano injetado na rede."
                },
                challenge: {
                    title: "Desafio de Acesso",
                    description: "A complexidade tarifária e a capacidade limitada da rede ainda são barreiras para produtores menores.",
                    tooltip: "Iniciativas para 'hubs' de biometano buscam agregar a produção de vários pequenos produtores para superar essa barreira."
                }
            },
            distribution: {
                title: "Como o Biometano Chega ao Mercado",
                channels: [
                    {
                        id: 'grid',
                        title: "Injeção na Rede",
                        icon: 'ArrowsRightLeftIcon',
                        description: "Ideal para plantas de grande escala próximas à malha de gasodutos. Permite acesso a um mercado amplo e diversificado.",
                        pros: "Acesso a mercado amplo; logística simplificada.",
                        cons: "Dependente da infraestrutura existente; altas taxas de conexão."
                    },
                    {
                        id: 'virtual',
                        title: "Gasoduto Virtual (GNC/GNL)",
                        icon: 'CubeTransparentIcon',
                        description: "Solução logística para plantas 'off-grid'. O gás é comprimido ou liquefeito e transportado por caminhões.",
                        pros: "Flexibilidade geográfica; atende ao interior.",
                        cons: "Custo logístico maior; complexidade operacional."
                    },
                    {
                        id: 'local',
                        title: "Uso Local (Auto-produção)",
                        icon: 'CogIcon',
                        description: "O gás é consumido na própria unidade produtiva (fazenda, indústria) para gerar eletricidade, calor ou abastecer frotas.",
                        pros: "Redução de custos diretos (OPEX); independência energética.",
                        cons: "Escala limitada; sem receita de venda de gás."
                    }
                ]
            }
        },
        infraAndTech: {
            title: "Infraestrutura & Tecnologia",
            intro: "A eficiência e a competitividade do setor de biogás dependem diretamente da tecnologia empregada. O mercado brasileiro conta com uma gama crescente de fornecedores nacionais e internacionais que oferecem soluções para diferentes escalas e tipos de substrato.",
            tabs: {
                digestion: "Tecnologias de Digestão",
                upgrading: "Tecnologias de Upgrading",
                providers: "Provedores de Tecnologia"
            },
            digestionTech: {
                title: "Biodigestores: O Coração do Processo",
                technologies: [
                    {
                        id: 'lagoon',
                        title: 'Lagoa Coberta (Modelo Canadense)',
                        icon: 'CubeTransparentIcon',
                        summary: 'Solução de baixo custo, ideal para dejetos líquidos em grande volume, como na suinocultura. Menor controle do processo.',
                        details: 'Consistem em lagoas escavadas no solo e cobertas com uma geomembrana para capturar o biogás. São a opção de menor custo de implantação, amplamente utilizada em projetos de suinocultura na região Sul. No entanto, sua eficiência é menor e há pouco controle sobre o processo, que é influenciado pela temperatura ambiente.'
                    },
                    {
                        id: 'cstr',
                        title: 'Mistura Completa (CSTR)',
                        icon: 'BeakerIcon',
                        summary: 'Reatores robustos com controle preciso de temperatura e agitação, garantindo alta eficiência. Preferidos para plantas industriais e de grande escala.',
                        details: 'São tanques robustos, geralmente de concreto ou aço, equipados com sistemas de agitação e aquecimento. Permitem um controle preciso do processo, operando em faixas de temperatura ideais (mesofílica ou termofílica), o que resulta em maior eficiência e produção de biogás. São a tecnologia preferida para plantas de grande escala e industriais.'
                    },
                    {
                        id: 'uasb',
                        title: 'Reator UASB',
                        icon: 'LayersIcon',
                        summary: 'Altamente eficiente para efluentes líquidos com alta carga orgânica (vinhaça, frigoríficos), utilizando reatores compactos.',
                        details: 'Reatores de Fluxo Ascendente com Manta de Lodo (UASB) são uma tecnologia altamente eficiente para o tratamento de efluentes líquidos com alta carga orgânica, como a vinhaça e efluentes de frigoríficos. O efluente flui através de uma manta de lodo microbiano, garantindo alta taxa de conversão em biogás em reatores compactos.'
                    },
                    {
                        id: 'others',
                        title: 'Outros Modelos',
                        icon: 'BuildingBlocksIcon',
                        summary: 'Modelos como Indiano e Chinês são comuns em projetos de pequena escala e propriedades rurais.',
                        details: 'Os modelos Indiano e Chinês são digestores de produção contínua, geralmente de alvenaria e parcialmente enterrados. São mais comuns em projetos de pequena escala em propriedades rurais, adaptados para necessidades de menor volume e complexidade.'
                    }
                ]
            },
            upgradingTech: {
                title: 'Do Biogás ao Biometano: Tecnologias de Upgrading',
                technologies: [
                    {
                        id: 'membranes',
                        title: 'Separação por Membranas',
                        icon: 'MicrochipIcon',
                        summary: 'Tecnologia compacta e de operação simples, ideal para plantas de pequeno e médio porte. Remove CO₂ e H₂S com membranas poliméricas.',
                        details: 'Utiliza membranas poliméricas semipermeáveis que permitem a passagem de gases como CO₂ e H₂S enquanto retêm o metano (CH₄). É uma tecnologia compacta, de operação simples e com baixo consumo de energia, ideal para projetos de pequeno e médio porte. Empresas como UBE Industries, Evonik (com suas membranas SEPURAN® Green) e PlanET Biogas Group são fornecedores de destaque desta tecnologia no mercado brasileiro.'
                    },
                    {
                        id: 'psa',
                        title: 'Adsorção por Oscilação de Pressão (PSA)',
                        icon: 'ArrowPathIcon',
                        summary: 'Tecnologia robusta e eficiente para plantas de grande escala. Utiliza materiais adsorventes para reter impurezas sob pressão.',
                        details: 'O biogás é pressurizado e passa por colunas preenchidas com um material adsorvente (como peneiras moleculares de carbono) que retém seletivamente o CO₂ e outras impurezas, deixando passar o metano. É uma tecnologia robusta e eficiente, adequada para plantas de grande escala. A planta da Gás Verde em Seropédica, a maior da América Latina, utiliza uma combinação de tecnologias, incluindo PSA.'
                    },
                    {
                        id: 'washing',
                        title: 'Lavagem com Água ou Química',
                        icon: 'WrenchScrewdriverIcon',
                        summary: 'Métodos tradicionais onde impurezas são absorvidas por água pressurizada ou soluções químicas. Menos comuns atualmente no Brasil.',
                        details: 'Embora menos comuns no Brasil, outras tecnologias incluem a lavagem com água (water wash), onde o CO₂ é absorvido pela água sob pressão, e a lavagem química, que utiliza soluções de aminas para remover gases ácidos. Estes métodos podem ter custos operacionais mais altos ou gerar efluentes que precisam de tratamento.'
                    }
                ]
            },
            providers: {
                title: "Ecossistema de Fornecedores",
                intro: "O mercado brasileiro de tecnologia para biogás é composto por uma mistura de empresas nacionais consolidadas e players internacionais de ponta, oferecendo um portfólio completo de soluções.",
                categories: [
                    {
                        id: 'digesters',
                        title: "Fornecedores de Biodigestores",
                        players: ["Geofortes", "Rastro Biodigestores", "Tecnipar", "Acqualimp"]
                    },
                    {
                        id: 'upgrading',
                        title: "Fornecedores de Sistemas de Upgrading",
                        players: ["UBE (via 3DI Engenharia)", "Evonik", "PlanET Biogas Group", "Gás Verde (tecnologia própria/parcerias)"]
                    }
                ]
            }
        },
        rawMaterialsAndEfficiency: {
            title: "Matérias-Primas & Eficiência Energética",
            intro: "A viabilidade de um projeto de biogás está fundamentalmente ligada à disponibilidade, ao custo e à eficiência de conversão da matéria-prima. O Brasil possui uma diversidade e um volume de resíduos orgânicos que o posicionam de forma única no cenário global.",
            potential: {
                title: "Análise de Potencial por Biomassa",
                intro: "O potencial técnico de produção de biogás no Brasil é vasto, mas varia significativamente conforme o tipo de resíduo. A análise a seguir detalha as principais fontes, contrastando o potencial teórico com o aproveitamento real.",
                modalButtonLabel: "Saiba Mais",
                sources: [
                    { id: 'agro', icon: 'LeafIcon', title: 'Resíduos Agropecuários', description: 'Representam o maior potencial volumétrico, porém o mais disperso geograficamente, o que representa um desafio logístico.', color: 'green', details: 'Inclui uma vasta gama de resíduos como palhas, bagaços (exceto cana), e outros restos de culturas. A principal barreira é a baixa densidade e a dispersão, o que eleva os custos de coleta e transporte. A viabilidade econômica depende da criação de "clusters" ou hubs que agreguem a matéria-prima de diversas propriedades.' },
                    { id: 'sucro', icon: 'FireIcon', title: 'Setor Sucroenergético', description: 'Vinhaça e torta de filtro são ideais para projetos de larga escala, devido à alta concentração de resíduos nas usinas e elevada produtividade de biogás.', color: 'yellow', details: 'A vinhaça (efluente da destilação do etanol) e a torta de filtro (resíduo da filtragem do caldo) são geradas em grandes volumes e no mesmo local do processamento da cana. Isso elimina o custo logístico de transporte da biomassa, tornando os projetos altamente atrativos. Grandes players como a Raízen estão investindo massivamente nesta frente.' },
                    { id: 'dejetos', icon: 'CubeTransparentIcon', title: 'Dejetos Animais', description: 'Sistemas de produção intensiva (suinocultura, avicultura) geram resíduos com alta carga orgânica e fácil coleta, ideais para projetos em granjas.', color: 'blue', details: 'Os dejetos da suinocultura e avicultura são particularmente ricos em metano e já estão concentrados nas granjas. Isso facilita a implementação de biodigestores de médio porte na própria fazenda, que podem gerar energia para autoconsumo e biofertilizantes, criando um modelo de economia circular na propriedade.' },
                    { id: 'rsu', icon: 'FactoryIcon', title: 'RSU e Saneamento', description: 'Com volume menor que o agro, têm a vantagem da proximidade aos centros consumidores. O lodo de ETEs e a fração orgânica do lixo são as fontes principais.', color: 'cyan', details: 'Os Resíduos Sólidos Urbanos (RSU) e o lodo de Estações de Tratamento de Esgoto (ETEs) são fontes constantes e concentradas de matéria-prima, localizadas estrategicamente perto de grandes mercados consumidores de energia. A viabilidade desses projetos está atrelada à existência de grandes aterros sanitários e ETEs, sendo o foco de players como Orizon e Solví.' }
                ]
            },
            logistics: {
                title: 'Custo de Logística e Concentração Energética',
                intro: "O custo de transporte da matéria-prima é um fator determinante para a viabilidade econômica do projeto. A instalação das plantas de biogás no local de geração do resíduo é, via de regra, a solução mais eficiente.",
                cards: [
                    { id: 'low_density', title: 'Desafio dos Resíduos Úmidos', text: 'Para resíduos de baixa densidade energética e alta umidade, como dejetos e vinhaça, o transporte por longas distâncias é economicamente proibitivo, exigindo produção local.', icon: 'TruckIcon' },
                    { id: 'rsu_logistics', title: 'O Paradoxo do Lixo Urbano', text: 'O transporte de RSU já é um custo existente. A viabilidade de uma usina de biogás depende de grandes aterros regionais, pois um raio de coleta maior que 100km pode inviabilizar a operação.', icon: 'MapIcon' }
                ]
            }
        },
        productionAndConsumption: {
            title: "Panorama de Produção & Consumo (Projeções 2025-2030)",
            intro: "A trajetória do biogás e, especialmente, do biometano no Brasil aponta para uma fase de crescimento exponencial na segunda metade da década de 2020, impulsionada por um ambiente regulatório favorável e por investimentos massivos de grandes players.",
            growth: {
                title: "Evolução e Projeções de Crescimento",
                description: "A produção de biometano no Brasil, que atingiu 74,9 milhões de m³ em 2023, está prestes a triplicar até 2026. Este salto é sustentado pela entrada em operação de novas plantas (Raízen, Orizon) e pela demanda firme criada pela Lei do Combustível do Futuro.",
                stats: [
                    { value: "74,9 mi m³", label: "Produção (2023)" },
                    { value: "+107%", label: "Projeção Cresc. (2025)" },
                    { value: "+193%", label: "Projeção Cresc. (24-26)" }
                ],
                chartData: [
                    { year: 2023, value: 74.9 },
                    { year: 2024, value: 110 },
                    { year: 2025, value: 227.7 },
                    { year: 2026, value: 322 },
                ]
            },
            consumers: {
                title: "Principais Mercados Consumidores",
                description: "A demanda por biometano está se diversificando, com dois setores emergindo como os principais mercados de crescimento, atraindo empresas que buscam descarbonizar suas operações e cumprir metas ESG.",
                sectors: [
                    { id: 'industry', icon: 'FactoryIcon', title: 'Indústria', text: "Grandes consumidores de gás natural (cerâmica, vidro, alimentos) usam biometano para descarbonizar processos. Empresas como Ambev, L'Oréal e Volkswagen já utilizam o combustível em suas fábricas." },
                    { id: 'transport', icon: 'TruckIcon', title: 'Transporte Pesado', text: "Como substituto direto do diesel, o biometano abastece frotas de caminhões e ônibus, impulsionado pela criação de \"corredores verdes\". A Gás Verde, por exemplo, adquiriu caminhões Scania a gás." }
                ]
            },
            exports: {
                title: "Potencial de Exportação (Bio-GNL)",
                description: "Embora o foco atual seja o mercado interno, a exportação de biometano liquefeito (Bio-GNL) é uma oportunidade de longo prazo. Com a escala de produção, o Brasil pode se tornar um fornecedor global de gás renovável para mercados como Europa e Ásia.",
                icon: 'GlobeAltIcon'
            }
        },
        globalComparison: {
            title: "Comparativo Global & Perspectivas",
            intro: "A análise do mercado brasileiro de biogás ganha profundidade quando contextualizada no cenário global. Ao comparar o Brasil com mercados líderes e emergentes, é possível extrair lições valiosas e traçar um roadmap mais claro para o desenvolvimento do setor até 2030.",
            positioning: {
                title: "Posicionamento Global do Brasil",
                summary: "O Brasil já figura entre os principais países do mundo em termos de infraestrutura de biogás, sendo o quinto em número de usinas instaladas. No entanto, quando se analisa o volume de produção e a penetração do biometano na matriz energética, o país ainda está atrás dos líderes globais. A grande vantagem competitiva do Brasil não reside em sua posição atual, mas em seu potencial futuro: nenhum outro país combina uma agroindústria tão poderosa com uma crescente demanda por energia, criando uma oportunidade única para a produção de biogás em uma escala incomparável.",
                chartTitle: "Comparativo Interativo Global",
                chartLabels: {
                    selectMetric: "Selecionar Métrica",
                    noData: "Dados insuficientes para exibir o gráfico.",
                    viewChart: "Gráfico",
                    viewTable: "Tabela"
                },
                table: {
                    headers: ['Indicador', 'Brasil', 'Alemanha (UE)', 'Dinamarca (UE)', 'EUA', 'China'],
                    rows: [
                        {
                            'Indicador': { value: null, display: 'Nº de Plantas' },
                            'Brasil': { value: 1600, display: '~1.600' },
                            'Alemanha (UE)': { value: 19000, display: '~19.000 (Europa)' },
                            'Dinamarca (UE)': { value: null, display: 'N/A' },
                            'EUA': { value: 2200, display: '~2.200' },
                            'China': { value: 15000000, display: '>15 milhões (maioria doméstica)' }
                        },
                        {
                            'Indicador': { value: null, display: 'Produção Biogás/Biometano (bcm)' },
                            'Brasil': { value: 2.9, display: '~2,9 (Biogás, 2022)' },
                            'Alemanha (UE)': { value: 22, display: '22 (Biogases, Europa, 2023)' },
                            'Dinamarca (UE)': { value: 0.8, display: '~0.8 (Biometano)' },
                            'EUA': { value: 2.3, display: '~2.3 (RNG)' },
                            'China': { value: 18, display: '~18 (Biogás)' }
                        },
                        {
                            'Indicador': { value: null, display: '% Substituição do Gás Natural' },
                            'Brasil': { value: 1, display: '< 1%' },
                            'Alemanha (UE)': { value: 7, display: '~7% (Europa)' },
                            'Dinamarca (UE)': { value: 40, display: '~40%' },
                            'EUA': { value: 0.2, display: '~0.2%' },
                            'China': { value: null, display: 'N/A' }
                        },
                        {
                            'Indicador': { value: null, display: 'Principal Substrato Utilizado' },
                            'Brasil': { value: null, display: 'RSU/Saneamento (capacidade), Agro (nº plantas)' },
                            'Alemanha (UE)': { value: null, display: 'Culturas energéticas, esterco' },
                            'Dinamarca (UE)': { value: null, display: 'Esterco, resíduos industriais' },
                            'EUA': { value: null, display: 'Esterco, aterros sanitários' },
                            'China': { value: null, display: 'Esterco (doméstico)' }
                        },
                        {
                            'Indicador': { value: null, display: 'Principal Política de Fomento' },
                            'Brasil': { value: null, display: 'Lei do Combustível do Futuro, RenovaBio' },
                            'Alemanha (UE)': { value: null, display: 'Tarifas Feed-in, Metas REPowerEU' },
                            'Dinamarca (UE)': { value: null, display: 'Subsídios à produção' },
                            'EUA': { value: null, display: 'LCFS, RFS' },
                            'China': { value: null, display: 'Programas de desenvolvimento rural' }
                        },
                    ]
                }
            },
            lessons: {
                title: "Lições de Políticas Públicas Globais",
                intro: "A experiência internacional oferece um repertório de políticas públicas bem-sucedidas que podem inspirar e aprimorar a estratégia brasileira:",
                items: [
                    {
                        id: 'eu',
                        region: 'União Europeia',
                        icon: 'GermanyFlagIcon',
                        text: "A Europa demonstra a eficácia de um arcabouço político robusto e de longo prazo. O sucesso de países como Alemanha e Dinamarca foi construído sobre tarifas de incentivo (feed-in tariffs) e metas ambiciosas (plano REPowerEU), que criam uma forte sinalização de mercado. Um mercado de carbono maduro (EU-ETS) também ajuda a precificar o benefício ambiental."
                    },
                    {
                        id: 'usa',
                        region: 'Estados Unidos',
                        icon: 'UsaFlagIcon',
                        text: "O modelo americano, especialmente na Califórnia, ensina o poder das políticas baseadas em mercado. O Low Carbon Fuel Standard (LCFS) cria um mercado para a 'baixa intensidade de carbono', onde combustíveis como o biometano geram créditos valiosos, criando uma forte demanda e um prêmio de preço para o gás renovável."
                    },
                    {
                        id: 'china',
                        region: 'China',
                        icon: 'ChinaFlagIcon',
                        text: "A experiência chinesa, embora focada em outra escala, mostra a importância de programas governamentais de longo prazo para a disseminação da tecnologia. Ao subsidiar milhões de biodigestores domésticos por décadas, o governo chinês criou uma cultura de aproveitamento de resíduos e uma base técnica para projetos maiores."
                    }
                ]
            }
        },
        roadmapData: {
            title: "Projeção de Cenários para 2030",
            intro: "A análise das tendências atuais, políticas públicas e investimentos em andamento permite traçar três possíveis cenários para o setor de biogás e biometano no Brasil até 2030. Estas projeções servem como uma ferramenta para entender as diferentes trajetórias de crescimento e os fatores que podem influenciá-las.",
            justificationButton: "Justificativa",
            scenarios: {
                conservative: { 
                    title: "Cenário Conservador", 
                    description: "O crescimento se concentra nos projetos de RSU já contratados e em grandes players. A expansão é limitada por gargalos de infraestrutura, lentidão na harmonização regulatória e competitividade de preço desafiadora.",
                    kpiLabel: "Produção de Biometano",
                    kpi: "1-2 Bi m³/ano",
                    justification: "Este cenário considera que os gargalos de infraestrutura (malha de gasodutos) e a falta de padronização no licenciamento ambiental continuarão a ser barreiras significativas. A expansão se daria principalmente por projetos já em andamento em aterros sanitários e por investimentos pontuais dos grandes players do setor sucroenergético, sem uma aceleração disruptiva do mercado como um todo."
                },
                realistic: { 
                    title: "Cenário Realista", 
                    description: "A Lei do Combustível do Futuro impulsiona novos investimentos, e o gasoduto virtual interioriza o mercado. O Brasil se torna um dos cinco maiores produtores de biometano do mundo.",
                    kpiLabel: "Produção de Biometano",
                    kpi: "3-5 Bi m³/ano",
                    justification: "Neste cenário, a implementação bem-sucedida da Lei do Combustível do Futuro cria uma demanda cativa e previsível, destravando uma onda de novos investimentos. O modelo de 'gasoduto virtual' (transporte por caminhões) ganha escala, permitindo que a produção do agronegócio no interior chegue aos centros consumidores, e a 'guerra regulatória positiva' entre os estados acelera a remoção de barreiras de licenciamento."
                },
                optimistic: { 
                    title: "Cenário Otimista", 
                    description: "O país valoriza plenamente o atributo ambiental do biometano, avança em tecnologia e se torna um exportador relevante de Bio-GNL, sendo uma referência global em economia circular.",
                    kpiLabel: "Produção de Biometano",
                    kpi: "> 7 Bi m³/ano",
                    justification: "Além dos fatores do cenário realista, este cenário pressupõe a criação de um mercado de carbono robusto e integrado no Brasil, que valoriza plenamente o 'prêmio verde' do biometano. A tecnologia nacional avança, reduzindo os custos de produção (CAPEX e OPEX). Com a demanda interna suprida, o Brasil se consolida como um exportador de Bio-GNL para mercados com metas de descarbonização agressivas, como Europa e Ásia."
                },
            }
        },
        referencesData: {
            intro: "A lista a seguir apresenta as principais fontes utilizadas na elaboração deste painel. Para uma bibliografia completa e detalhada, consulte o documento de pesquisa integral.",
            documentLink: {
                text: "Acessar Documento Completo",
                url: "https://docs.google.com/document/d/1LrOziaPesXZ6aF1ft6JUpvJ8ZAF2keEbGMnG9xsRSis/edit?tab=t.0"
            },
            list: [
                {
                    text: "ABEGÁS (2025). Brasil registrou 1633 plantas de biogás em 2024.",
                    url: "https://www.abegas.org.br/arquivos/95755"
                },
                {
                    text: "CIBiogás (2024). Panorama do Biogás no Brasil em 2024.",
                    url: "https://materiais.cibiogas.org/panorama-do-biogas-2024"
                },
                {
                    text: "Global Growth Insights (2025). Atualização de biogás Tamanho e compartilhamento do mercado [2025-2033].",
                    url: "https://www.globalgrowthinsights.com/pt/market-reports/biogas-upgrading-market-109596"
                },
                {
                    text: "Agência Petrobras (2025). Petrobras lança primeira Chamada de Propostas para aquisição de biometano.",
                    url: "https://agencia.petrobras.com.br/w/negocio/petrobras-lanca-primeira-chamada-de-propostas-para-aquisicao-de-biometano"
                },
                {
                    text: "EPE (2023). Potencial Técnico do Biogás de Resíduos.",
                    url: "https://abiogas.org.br/wp-content/uploads/protectedfiles/Potencial%20de%20biog%C3%A1s%20de%20res%C3%ADduos%20no%20horizonte%20decenal%20-%20EPE%20(2023).pdf"
                }
            ]
        },
    },
};

const enData = JSON.parse(JSON.stringify(ptData));
const deData = JSON.parse(JSON.stringify(ptData));

export const translations = {
    pt: {
        ...ptData,
        languageSwitcher: {
            label: 'Idioma',
            comingSoon: 'Funcionalidade de tradução disponível em breve.',
        },
    },
    en: {
        ...enData,
        languageSwitcher: {
            label: 'Language',
            comingSoon: 'Translation functionality available soon.',
        },
    },
    de: {
        ...deData,
        languageSwitcher: {
            label: 'Sprache',
            comingSoon: 'Übersetzungsfunktion in Kürze verfügbar.',
        },
    }
};