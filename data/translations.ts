
export const translations = {
    pt: {
        navLinkLabels: {
            'visao-geral': 'Visão Geral',
            'sumario': 'Sumário Executivo',
            'pesquisa-completa': 'Pesquisa Completa',
            'panorama': 'Panorama Atual',
            'tendencias': 'Tendências',
            'players': 'Principais Players',
            'equidade-racial': 'População Negra',
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
            suggestionTitle: "Experimente perguntar:",
            suggestions: [
                "Resuma os principais desafios do setor",
                "Qual o potencial de biogás do agronegócio?",
                "Compare as tecnologias de purificação",
                "Quais estados lideram a produção?"
            ],
            systemInstruction: "Você é um analista especialista em energia e biogás no Brasil. Suas respostas devem ser informativas, precisas e baseadas exclusivamente no contexto fornecido. Use um tom profissional e amigável. Formate suas respostas usando markdown para melhor legibilidade (listas, negrito, etc.) quando apropriado.",
            contextPrompt: "Use o seguinte contexto sobre o setor de biogás no Brasil para responder a todas as minhas perguntas:\n\n--- INÍCIO DO CONTEXTO ---\n{context}\n--- FIM DO CONTEXTO ---",
            initialModelResponse: "Entendido. Estou pronto para responder perguntas sobre o biogás no Brasil com base no contexto fornecido. Como posso ajudar?",
            errorMessage: "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde."
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
                        'James Whitaker', 'Olivia Grant', 'Ethan Collins', 'Sophia Bennett', 'Daniel Hughes'
                    ]
                },
                execCouncil: {
                    title: 'Conselho Executivo',
                    members: [
                        'Mason Blakewell', 'Harper Linwood', 'Griffin Ashford', 'Isla Kensington', 'Jasper Holloway'
                    ]
                },
                aboutUs: {
                    title: 'Quem Somos?',
                    text: "Somos uma empresa global comprometida em transformar conhecimento e inovação em soluções sustentáveis para o futuro. Nossa proposta e objetivo para a localização no Brasil é o planejamento e a construção de um moderno complexo de usinas de biogás na América do Sul, utilizando os mais recentes avanços em pesquisa e desenvolvimento.\n\nAcreditamos que energia limpa e tecnologia de ponta caminham juntas para impulsionar o progresso econômico, preservar o meio ambiente e gerar valor duradouro para as comunidades onde atuamos."
                }
            },
            executiveSummary: {
                sectionTitle: "Sumário Executivo",
                fullText: `O Brasil vive um ponto de inflexão na transição energética, com o biogás e o biometano emergindo como pilares centrais dessa transformação. Impulsionado por um arcabouço regulatório mais robusto — em especial a Lei do Combustível do Futuro — e pela urgência da descarbonização, o setor avança rapidamente, convertendo resíduos em ativos energéticos de alto valor.\n\nO cenário é reforçado por movimentos estratégicos de gigantes como Petrobrás, Raízen e Orizon, além do aumento expressivo de investimentos de fundos e agentes financeiros. A criação de um mercado cativo para o biometano a partir de 2026, somada ao amadurecimento das tecnologias de purificação e à monetização dos atributos ambientais do gás renovável, estabelece bases sólidas para o crescimento.\n\nEntretanto, a consolidação desse potencial depende de superar gargalos estruturais, como a limitada malha de gasodutos, a falta de padronização no licenciamento ambiental e a necessidade de manter a competitividade frente ao gás natural fóssil.\n\nAté 2030, a perspectiva é posicionar o Brasil como líder global não apenas em produção, mas como referência em economia circular, integrando de forma sinérgica o biometano à agroindústria e ao saneamento.\n\nCom a expansão de plantas em escala industrial e a conversão de passivos ambientais em energia, o país pode transformar seu imenso potencial técnico em motor estratégico para o desenvolvimento sustentável e a segurança energética.`,
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
                title: "População Negra: Desafios e Oportunidades",
                intro: `O setor de biogás avança como um pilar da transição energética no Brasil, mas essa expansão ocorre em meio a uma profunda lacuna: a ausência de dados sobre a participação da população negra. Essa 'zona cega' invisibiliza a equidade racial, arriscando aprofundar desigualdades históricas na nova economia verde.\n\nAnálises baseadas em dados de fontes como o IBGE revelam um cenário de sub-representação drástica. Estima-se que **menos de 10% dos cargos de liderança** no setor sejam ocupados por pessoas negras, em contraste com sua representação de 56,7% na população brasileira. Esse 'funil da desigualdade' se agrava por barreiras sistêmicas no acesso a capital, redes de contato e oportunidades de desenvolvimento.\n\nPara que a transição energética seja verdadeiramente justa e sustentável, é crucial que o setor adote a equidade racial como um pilar estratégico, transformando o biogás não apenas em uma fonte de energia limpa, mas em um motor de desenvolvimento inclusivo.`,
                barriers: {
                    title: "Barreiras Estruturais e Sistêmicas",
                    text: `A sub-representação da população negra no setor de biogás não é resultado de escolhas individuais ou falta de talento, mas sim a consequência de barreiras estruturais e sistêmicas profundamente enraizadas na sociedade e no mercado brasileiro. Essas barreiras operam em múltiplos níveis, desde o acesso a recursos financeiros até a construção de redes profissionais, criando um ambiente que, por padrão, favorece a perpetuação de um status quo homogêneo.\n\nA primeira e mais tangível barreira é o acesso a capital. Empreendedores negros enfrentam uma desvantagem desproporcional na obtenção de crédito e investimento. O Projeto de Lei Complementar (PLP) 215/2021 reconhece essa disparidade, citando que empreendedores negros têm pedidos de financiamento negados com frequência três vezes maior que os brancos. Essa dificuldade afeta a capacidade de escalar projetos de biogás, que são intensivos em capital.\n\nA segunda barreira é o acesso a redes de contato (networking). O setor de energia opera com base em relações de confiança construídas em conferências e comitês técnicos. A homogeneidade racial nos círculos de liderança existentes cria "clubes fechados", onde as oportunidades circulam predominantemente entre pares. Essa exclusão se manifesta de forma visível na representatividade em eventos setoriais, onde uma análise da programação revela uma ausência quase total de palestrantes e mediadores negros, reforçando estereótipos e privando o setor de perspectivas diversas.`,
                    table: {
                        title: "Tabela: Scorecard de Transparência e Ações de DEI nos Principais Players",
                        headers: ["Empresa", "Relatório Sustentabilidade", "Dados Raciais (Equipe)", "Dados Raciais (Liderança)", "Metas Raciais Públicas", "Programa Trainee Afirmativo", "Compras Inclusivas"],
                        rows: [
                            { company: "Raízen", sustainabilityReport: "Sim", workforceData: "Não Específico", leadershipData: "Apenas Gênero", publicGoals: "Não", affirmativeProgram: "Não Específico", inclusivePurchasing: "Não Específico" },
                            { company: "Orizon VR", sustainabilityReport: "Sim", workforceData: "Não Específico", leadershipData: "Não Específico", publicGoals: "Não", affirmativeProgram: "Não Específico", inclusivePurchasing: "Não Específico" },
                            { company: "Gás Verde (Urca)", sustainabilityReport: "Sim", workforceData: "Parcial (Metas em elaboração)", leadershipData: "Parcial (Metas em elaboração)", publicGoals: "Não", affirmativeProgram: "Não Específico", inclusivePurchasing: "Não Específico" },
                            { company: "Solví", sustainabilityReport: "Sim", workforceData: "Não", leadershipData: "Não", publicGoals: "Não", affirmativeProgram: "Não Específico", inclusivePurchasing: "Não Específico" },
                            { company: "Geo Biogás & Carbon", sustainabilityReport: "Sim", workforceData: "Não Específico", leadershipData: "Não Específico", publicGoals: "Não", affirmativeProgram: "Não Específico", inclusivePurchasing: "Sim (Mencionado)" }
                        ]
                    }
                },
                buttonText: "Mais Informações Em Breve"
            },
            currentScenario: {
                title: "Panorama Atual",
                intro: `O panorama do biogás no Brasil em 2024 demonstra um setor em franca expansão e amadurecimento. Com 1.633 plantas em operação ou implementação, um crescimento de 18% em relação ao ano anterior, o país consolida sua posição como um player relevante no cenário global de energias renováveis. A capacidade instalada total atingiu 4,7 bilhões de Nm³/ano, refletindo a crescente viabilidade de projetos de larga escala e a diversificação das fontes de matéria-prima.`,
                summaryStats: [
                    { id: 'plants', label: 'Nº de Plantas de Biogás (2024)', value: '1.633', growth: '+18% vs. 2023', tooltip: 'Este número inclui todas as usinas de biogás em operação, em construção ou em reforma no território brasileiro, conforme o levantamento mais recente. O crescimento reflete a aceleração dos investimentos e a consolidação de políticas de incentivo, demonstrando a expansão contínua do setor.' },
                    { id: 'capacity', label: 'Capacidade Instalada (Biogás)', value: '4,7 Bi Nm³/ano', growth: '+16% vs. 2023', tooltip: 'Representa o volume máximo de biogás que todas as plantas do país podem produzir anualmente, medido em Normal Metro Cúbico (Nm³). Este indicador demonstra o potencial total de geração de energia do parque instalado e seu crescimento é fundamental para atingir as metas de descarbonização.' },
                    { id: 'biomethane', label: 'Produção de Biometano (2023)', value: '74,9 mi m³/ano', growth: 'Dados de 2023', tooltip: 'Refere-se ao volume de biometano (biogás purificado com >90% de metano) efetivamente produzido e comercializado. O biometano é um substituto direto do gás natural fóssil, e seu aumento de produção é um indicador-chave da maturidade e do valor agregado que o setor de biogás está gerando.' },
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
                fullText: {
                    distribution: `A produção de biogás no Brasil está geograficamente distribuída, mas com concentrações de capacidade e de número de plantas que refletem as vocações econômicas regionais. Atualmente, o biogás está presente em 611 municípios de 24 estados brasileiros.¹ O estado do Paraná se destaca como líder em número de plantas, tendo adicionado 102 novas usinas em 2024, impulsionado principalmente pelo agronegócio.¹ Em contrapartida, São Paulo lidera em capacidade instalada, um reflexo da predominância de grandes plantas de saneamento e Resíduos Sólidos Urbanos (RSU) localizadas próximas a grandes centros urbanos. Por outro lado, existe uma vasta capilaridade de plantas de pequeno porte no setor agropecuário, especialmente em estados como Paraná, Minas Gerais e Mato Grosso do Sul.`,
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
                highlightsTitle: "Destaques das Tendências",
                tech: {
                    title: "Inovações Tecnológicas",
                    description: `A viabilidade técnica e econômica dos projetos de biometano está intrinsecamente ligada aos avanços nas tecnologias de purificação (upgrading). O mercado global para estas tecnologias está em franca expansão, com projeções de crescimento de US$ 414,5 milhões em 2025 para US$ 2,157 bilhões em 2033, a uma taxa de crescimento anual composta (CAGR) de 22,9%. No Brasil, empresas de tecnologia como UBE, 3DI Engenharia e Evonik já estão ativas, fornecendo sistemas de membranas de alta eficiência e baixo custo operacional.\n\nParalelamente, a tecnologia dos biodigestores também evolui. Embora os modelos de lagoa coberta ainda sejam comuns, a indústria está migrando para reatores mais sofisticados, como os de mistura completa (CSTR) e os reatores anaeróbios de manta de lodo e fluxo ascendente (UASB), que permitem um controle mais preciso e maior eficiência na conversão da matéria orgânica.`
                },
                businessModels: {
                    title: "Novos Modelos de Negócio",
                    description: `A transformação mais significativa no setor é a mudança de mentalidade: o tratamento de resíduos deixou de ser visto como um passivo ambiental para se tornar o ponto de partida para a criação de ativos energéticos de alto valor. Para superar desafios como a dispersão da matéria-prima, estão surgindo modelos baseados em clusters e hubs de biometano. As Parcerias Público-Privadas (PPPs) também se consolidam como um instrumento eficaz para alavancar grandes projetos, especialmente no setor de saneamento e RSU.`
                },
                finance: {
                    title: "Financiamento Climático e ESG",
                    description: `A crescente demanda por investimentos alinhados aos critérios Ambientais, Sociais e de Governança (ESG) tem sido um poderoso catalisador para o setor. Este interesse é complementado por um forte apoio público, com o BNDES e a FINEP disponibilizando bilhões em linhas de crédito e recursos não reembolsáveis para projetos de transição energética.\n\nA viabilidade financeira dos projetos mais bem-sucedidos dependerá da capacidade de realizar um "empilhamento" (stacking) de receitas, agregando múltiplos fluxos de valor:\nVenda da molécula de gás (commodity).\nMonetização do atributo ambiental (venda de certificados como CBIOs e CGOBs).\nVenda de subprodutos (CO₂ verde, biofertilizantes).\nEconomia de custos operacionais (substituição de combustíveis fósseis).\n\nA capacidade de um projeto de acessar e "empilhar" essas diversas fontes de valor será o fator determinante para sua atratividade junto a investidores e financiadores.`
                },
                techRoutes: [
                    { id: 'membranes', title: 'Separação por Membranas', description: 'Tecnologia compacta e de baixo custo operacional, ideal para projetos de pequeno e médio porte, dominando o mercado com fornecedores como UBE e Evonik.' },
                    { id: 'psa', title: 'Adsorção por Oscilação de Pressão (PSA)', description: 'Tecnologia robusta e eficiente, adequada para plantas de grande escala, como a da Gás Verde em Seropédica, a maior da América Latina.' },
                    { id: 'reactors', title: 'Reatores CSTR e UASB', description: 'Sistemas de biodigestão avançados que permitem maior controle e eficiência na conversão de matéria orgânica, superando os modelos tradicionais de lagoa coberta.' },
                ],
                businessModelExamples: [
                     { id: 'zero-waste', title: 'Resíduo Zero (Gás Verde)', description: 'Modelo de negócio que aproveita todos os subprodutos, incluindo o CO2 purificado, criando múltiplas fontes de receita a partir do lixo.' },
                     { id: 'hubs', title: 'Clusters e Hubs de Biometano', description: 'Agregação da produção de biogás de múltiplos produtores rurais em uma unidade central de purificação para ganhar escala e acesso à infraestrutura.' },
                     { id: 'ppps', title: 'Parcerias Público-Privadas (PPPs)', description: 'Instrumento eficaz para alavancar grandes projetos de saneamento e tratamento de RSU, como os "ecoparques" no Distrito Federal.' },
                ],
                financeHighlights: [
                    { id: 'esg', title: 'Atração de Capital ESG', description: 'Fundos de investimento e private equity buscam alinhar portfólios a metas de descarbonização, aumentando a atividade de fusões e aquisições no setor.' },
                    { id: 'fomento', title: 'Fomento Público (BNDES/FINEP)', description: 'Linhas de crédito bilionárias e subvenções econômicas do Fundo Clima e Programa Mais Inovação reduzem o custo de capital para novos projetos.' },
                    { id: 'stacking', title: 'Empilhamento de Receitas (Stacking)', description: 'Viabilidade financeira alcançada pela soma de múltiplas fontes: venda do gás, CBIOs/CGOBs, subprodutos (CO₂ verde, biofertilizantes) e economia operacional.' },
                ]
            },
            policies: {
                title: "Políticas Públicas & Incentivos",
                intro: "O ecossistema de apoio ao biogás no Brasil é multifacetado, combinando financiamento robusto de bancos de desenvolvimento, programas de incentivo em nível estadual e políticas nacionais que criam mercados e valorizam os atributos ambientais do gás renovável.",
                subsections: [
                    {
                        title: "Financiamento Federal",
                        description: `As principais fontes de financiamento para projetos de biogás e biometano em escala vêm de instituições federais de fomento, que oferecem condições de crédito mais favoráveis e, em alguns casos, recursos não reembolsáveis.\nBNDES (Banco Nacional de Desenvolvimento Econômico e Social): O BNDES é um ator central no financiamento da transição energética. Através de programas como o Fundo Clima, que destinou R$ 10 bilhões em 2024 para projetos de mitigação das mudanças climáticas, o banco financia a implantação de plantas de biogás, a substituição de combustíveis fósseis e a modernização de processos industriais. O financiamento de R$ 150 milhões para o Grupo Piracanjuba é um exemplo claro de como esses recursos estão sendo aplicados para viabilizar projetos de descarbonização na indústria.\nFINEP (Financiadora de Estudos e Projetos): A FINEP foca no apoio à inovação e ao desenvolvimento tecnológico. O Programa Mais Inovação, com um orçamento de R$ 61 bilhões até 2026, oferece tanto linhas de crédito com taxas de juros subsidiadas quanto recursos de subvenção econômica (não reembolsáveis) para empresas que desenvolvem produtos, processos ou serviços inovadores. A FINEP tem editais específicos para a cadeia do biogás, apoiando desde o pré-tratamento da biomassa até o desenvolvimento de novas tecnologias de biodigestão e purificação. Em 2023 e 2024, a FINEP contratou más de R$ 708 milhões em projetos relacionados a biogás/biometano, entre crédito e subvenção.`
                    },
                    {
                        title: "Programas Estaduais",
                        description: `Reconhecendo o potencial do biogás para o desenvolvimento econômico regional, diversos estados criaram seus próprios programas de incentivo, gerando um ambiente competitivo para atrair investimentos.\nParaná: Como líder em número de plantas, o estado possui um dos pacotes de incentivos mais abrangentes. O programa RenovaPR fomenta a geração de energia renovável no campo, enquanto a legislação fiscal concede isenção de ICMS na aquisição de máquinas e equipamentos para usinas de biogás e crédito presumido de 12% nas saídas internas de biogás e biometano.\nSão Paulo: O estado, líder em capacidade instalada, oferece o diferimento do ICMS para operações com biogás e biometano, adiando o recolhimento do imposto e melhorando o fluxo de caixa dos projetos. Além disso, o governo lançou a plataforma digital Conecta Biometano SP, um aplicativo que visa conectar produtores, consumidores, fornecedores de tecnologia e financiadores para facilitar a viabilização de novos projetos.\nCentro-Oeste (Mato Grosso, Goiás, Mato Grosso do Sul): Estados com forte vocação no agronegócio também estão se movimentando. Mato Grosso aprovou a concessão de crédito outorgado de ICMS para a produção de biogás e biometano, com alíquotas de 85% para operações estaduais e 90% para interestaduais. Goiás instituiu o programa GO-GÁS, uma política estadual para incentivar toda a cadeia produtiva. Mato Grosso do Sul avança com o programa MS Renovável e com a regulamentação do mercado de biometano via sua agência reguladora (AGEMS).`
                    },
                    {
                        title: "Incentivos Fiscais",
                        description: `Os incentivos fiscais, principalmente relacionados ao ICMS, são ferramentas poderosas para reduzir tanto o custo de implantação (CAPEX) quanto o custo operacional (OPEX) dos projetos. A isenção ou o diferimento do imposto na compra de equipamentos e componentes, como biodigestores e sistemas de upgrading, diminui o investimento inicial. Já a redução da base de cálculo ou a concessão de crédito presumido na venda do biometano torna o produto final mais competitivo no mercado, facilitando a sua comercialização frente aos combustíveis fósseis.`
                    }
                ]
            },
            marketAndValueChain: {
                title: "Mercado & Cadeia de Valor",
                intro: "A consolidação do mercado de biometano depende da estruturação de uma cadeia de valor eficiente, com precificação competitiva, acesso claro à infraestrutura de distribuição e modelos de contratação que garantam a segurança para investimentos de longo prazo.",
                subsections: [
                    {
                        title: "Preço de Venda e Competitividade",
                        description: `O preço do biometano é o principal desafio para sua ampla adoção. Atualmente, seu custo de produção é superior ao do gás natural de origem fóssil. Estudos de caso para projetos específicos, como a produção de biometanol a partir de biometano, indicam um preço necessário de cerca de US$ 19,45/MMBtu para viabilizar o investimento. Este valor é significativamente maior que o preço da molécula de gás natural.\nA competitividade do biometano, portanto, não pode ser analisada apenas pelo seu valor energético. Seu preço final é composto por duas parcelas: o valor da molécula (que compete com o gás natural) e o valor do atributo ambiental (que monetiza a descarbonização). Empresas com metas ESG e expostas a mercados de carbono estão dispostas a pagar um "prêmio verde" pelo biometano, pois seu uso permite reduzir a pegada de carbono de seus produtos e evitar a compra de créditos de carbono. A precificação desse atributo ambiental, via CBIOs, CGOBs ou certificados do mercado voluntário, é o que permite ao biometano fechar a conta e se tornar competitivo.`
                    },
                    {
                        title: "Tarifas de Injeção e Venda",
                        description: `Para produtores que optam por injetar o biometano na rede de gasodutos, as tarifas de transporte e distribuição são um componente crucial do custo final. Como mencionado, as tarifas de transporte para 2025 apresentam uma tendência de queda, o que é uma notícia positiva para o setor. No entanto, a estrutura tarifária ainda é complexa e pode representar uma barreira, especialmente para produtores de menor porte. A criação de tarifas de injeção incentivadas e de modelos regulatórios mais simples para o acesso à rede é um pleito constante do setor para melhorar a viabilidade econômica da conexão à malha.`
                    },
                    {
                        title: "Canais de Distribuição",
                        description: `A cadeia de valor do biometano se estrutura em torno de três principais canais de distribuição, cada um com sua própria logística e modelo de negócio:\nInjeção na Rede de Gasodutos: Ideal para plantas de grande escala localizadas próximas à malha existente. Permite o acesso a um mercado nacional amplo e diversificado de consumidores industriais e distribuidoras de gás.\nGasoduto Virtual (GNC/GNL): A solução logística para plantas "off-grid". O biometano é comprimido ou liquefeito e transportado por caminhões até o cliente final. Este modelo está viabilizando o mercado no interior do país, atendendo ao agronegócio e a indústrias localizadas fora do alcance dos dutos.\nUso Local: Em muitos projetos agropecuários, o biogás ou biometano é consumido na própria unidade produtiva, seja para gerar eletricidade, calor ou para abastecer a frota de tratores e caminhões, substituindo diesel e GLP e gerando uma economia direta nos custos operacionais.`
                    },
                    {
                        title: "Contratos de Longo Prazo – PPAs de Gás",
                        description: `Para mitigar os riscos de investimento em projetos de capital intensivo, a assinatura de contratos de fornecimento de longo prazo (offtake agreements) é fundamental. Análogos aos Power Purchase Agreements (PPAs) do setor elétrico, esses contratos de gás garantem a venda de um volume definido por um período estendido (geralmente 10 anos ou mais) a um preço pré-acordado ou com uma fórmula de reajuste clara. Exemplos como os contratos da Orizon com a Ultragaz (10 anos) e da Raízen com a Volkswagen e a Yara demonstram como esses acordos fornecem a previsibilidade de receita necessária para destravar o financiamento e viabilizar a construção das plantas.`
                    }
                ]
            },
            infraAndTech: {
                title: "Infraestrutura & Tecnologia",
                intro: "A eficiência e a competitividade do setor de biogás dependem diretamente da tecnologia empregada, tanto na fase de digestão anaeróbia quanto na etapa de purificação para produção de biometano. O mercado brasileiro conta com uma gama crescente de fornecedores nacionais e internacionais que oferecem soluções para diferentes escalas e tipos de substrato.",
                subsections: [
                    {
                        title: "Tecnologias de Digestão",
                        description: `A escolha do biodigestor é uma decisão estratégica que impacta o custo de investimento, a eficiência de produção e a complexidade operacional do projeto. Os principais tipos de digestores encontrados no Brasil são:\nDigestores de Lagoa Coberta (Modelo Canadense): Consistem em lagoas escavadas no solo e cobertas com uma geomembrana para capturar o biogás. São a opção de menor custo de implantação, amplamente utilizada em projetos de suinocultura na região Sul. No entanto, sua eficiência é menor e há pouco controle sobre o processo, que é influenciado pela temperatura ambiente.\nDigestores de Mistura Completa (CSTR): São tanques robustos, geralmente de concreto ou aço, equipados com sistemas de agitação e aquecimento. Permitem um controle preciso do processo, operando em faixas de temperatura ideais (mesofílica ou termofílica), o que resulta em maior eficiência e produção de biogás. São a tecnologia preferida para plantas de grande escala e industriais.\nReatores de Fluxo Ascendente com Manta de Lodo (UASB): Tecnologia altamente eficiente para o tratamento de efluentes líquidos com alta carga orgânica, como a vinhaça e efluentes de frigoríficos. O efluente flui através de uma manta de lodo microbiano, garantindo alta taxa de conversão em biogás em reatores compactos.\nModelos Indiano e Chinês: São digestores de produção contínua, geralmente de alvenaria e parcialmente enterrados, mais comuns em projetos de pequena escala em propriedades rurais.`
                    },
                    {
                        title: "Tecnologias de Upgrading para Biometano",
                        description: `A etapa de upgrading é crucial para transformar o biogás (com 50-60% de metano) em biometano (com mais de 90% de metano), tornando-o apto para injeção na rede de gás ou para uso veicular. As tecnologias mais difundidas no Brasil são:\nSeparação por Membranas: Utiliza membranas poliméricas semipermeáveis que permitem a passagem de gases como CO2 e H2S enquanto retêm o metano. É uma tecnologia compacta, de operação simples e com baixo consumo de energia, ideal para projetos de pequeno e médio porte. Empresas como UBE Industries, Evonik (com suas membranas SEPURAN® Green) e PlanET Biogas Group são fornecedores de destaque desta tecnologia no mercado brasileiro.\nAdsorção por Oscilação de Pressão (PSA): O biogás é pressurizado e passa por colunas preenchidas com um material adsorvente (como peneiras moleculares de carbono) que retém seletivamente o CO2 e outras impurezas, deixando passar o metano. É uma tecnologia robusta e eficiente, adequada para plantas de grande escala. A planta da Gás Verde em Seropédica, a maior da América Latina, utiliza uma combinação de tecnologias, incluindo PSA.\nOutras Tecnologias: Embora menos comuns no Brasil, outras tecnologias incluem a lavagem com água (water wash), onde o CO2 é absorvido pela água sob pressão, e a lavagem química com aminas.`
                    },
                    {
                        title: "Provedores de Tecnologia",
                        description: `O mercado brasileiro de tecnologia para biogás é composto por uma mistura de empresas nacionais e internacionais. No segmento de biodigestores, há fornecedores nacionais consolidados para diferentes escalas, como Geofortes, Rastro Biodigestores, Tecnipar e Acqualimp, que atendem desde projetos residenciais até instalações industriais. Para sistemas de upgrading, a presença de players internacionais como UBE, 3DI Engenharia (parceira da UBE), Evonik e PlanET é forte, trazendo tecnologia de ponta para o país.`
                    }
                ]
            },
            rawMaterialsAndEfficiency: {
                title: "Matérias-Primas & Eficiência Energética",
                intro: "A viabilidade de um projeto de biogás está fundamentalmente ligada à disponibilidade, ao custo e à eficiência de conversão da matéria-prima. O Brasil possui uma diversidade e um volume de resíduos orgânicos que o posicionam de forma única no cenário global.",
                subsections: [
                    {
                        title: "Análise de Potencial por Biomassa",
                        description: `O potencial técnico de produção de biogás no Brasil é vasto, mas varia significativamente conforme o tipo de resíduo. Estudos detalhados da EPE fornecem uma base para essa análise, contrastando o potencial teórico com o aproveitamento real.\nResíduos Agropecuários: Representam o maior potencial volumétrico, mas também o mais disperso.\nSetor Sucroenergético: A vinhaça e a torta de filtro são as matérias-primas com maior potencial para projetos de grande escala, devido à sua alta concentração em um único local (as usinas) e à sua elevada produtividade de biogás.\nDejetos Animais: A suinocultura e a avicultura, por serem sistemas de produção intensiva e confinada, geram resíduos com alta carga orgânica e de fácil coleta, tornando-os ideais para projetos em granjas. A bovinocultura de corte em confinamento e a de leite também apresentam grande potencial. A eficiência de conversão (medida em m3 de metano por quilo de sólidos voláteis) varia entre os tipos de dejeto, sendo geralmente maior para suínos.\nResíduos Sólidos Urbanos (RSU) e Saneamento: Embora representem um volume total menor que o da agropecuária, esses resíduos têm a vantagem de estarem concentrados próximos aos grandes centros consumidores de energia. A fração orgânica do lixo urbano e o lodo de esgoto das Estações de Tratamento de Esgoto (ETEs) são as principais fontes. O aproveitamento energético dos RSU em aterros sanitários já é uma realidade consolidada e lidera a capacidade instalada de produção no país.`
                    },
                    {
                        title: "Custo de Logística e Concentração Energética",
                        description: `O custo de logística da matéria-prima é um fator determinante para a viabilidade econômica do projeto. Para resíduos de baixa densidade energética e alta umidade, como dejetos e vinhaça, o transporte por longas distâncias é proibitivo. Por isso, as plantas de biogás são, via de regra, instaladas no mesmo local onde o resíduo é gerado.\nNo caso dos RSU, o custo de transporte do lixo das cidades até os aterros sanitários já é um componente significativo do serviço de limpeza urbana. Estudos indicam que distâncias de transporte superiores a 100 km podem inviabilizar economicamente a operação de um aterro, o que, por consequência, limita o raio de captação de resíduos para uma planta de biogás associada. A viabilidade depende, portanto, da existência de grandes aterros regionais que concentrem os resíduos de múltiplos municípios.`
                    }
                ]
            },
            productionAndConsumption: {
                title: "Panorama de Produção & Consumo (Projeções 2025-2030)",
                intro: "A trajetória do biogás e, especialmente, do biometano no Brasil aponta para uma fase de crescimento exponencial na segunda metade da década de 2020, impulsionada por um ambiente regulatório favorável e por investimentos massivos de grandes players.",
                subsections: [
                    {
                        title: "Evolução Histórica vs. Projeções",
                        description: `A produção de biogás e biometano no Brasil, embora histórica, só começou a ganhar escala industrial na última década. A produção de biometano, por exemplo, cresceu de forma consistente, saindo de volumes modestos para 74,9 milhões de m3 em 2023. As projeções para os próximos anos são ainda mais otimistas. Com a entrada em operação de dezenas de novas plantas já em construção ou licenciamento, a oferta de biometano no Brasil pode triplicar até o final de 2026. A expectativa é de um crescimento de 107% em 2025 e de 193% entre 2024 e 2026.\nEste crescimento será impulsionado pelos projetos já anunciados por empresas como Raízen, que planeja uma produção massiva a partir de suas usinas, e Orizon, que está convertendo o biogás de seus aterros em biometano. A Lei do Combustível do Futuro, ao estabelecer um mandato de descarbonização para o setor de gás a partir de 2026, cria uma demanda firme que sustenta essas projeções e incentiva novos investimentos.`
                    },
                    {
                        title: "Consumidores Finais",
                        description: `A demanda por biometano está se diversificando, com dois setores emergindo como os principais mercados de crescimento:\nIndústria: Grandes consumidores de gás natural, como as indústrias de cerâmica, vidro, alimentos e química, veem no biometano uma oportunidade para descarbonizar seus processos produtivos e cumprir metas ESG. Empresas como Ambev, L'Oréal, Ternium e Volkswagen já possuem contratos de fornecimento de biometano para substituir o gás natural em suas caldeiras e fornos.\nTransporte Pesado: O biometano é um substituto direto e de baixo carbono para o diesel em caminhões e ônibus. Com a criação de "corredores verdes" e a expansão da rede de postos de abastecimento, o uso de biometano no transporte de cargas e de passageiros tende a crescer significativamente. A Gás Verde, por exemplo, adquiriu 100 caminhões Scania movidos a gás para oferecer uma solução completa de logística verde a seus clientes.`
                    },
                    {
                        title: "Potencial de Exportação",
                        description: `Embora o mercado brasileiro ainda esteja focado em atender à demanda interna, o potencial de exportação de biometano na forma liquefeita (Bio-GNL) começa a ser discutido como uma oportunidade de longo prazo. À medida que a produção ganhar escala e superar a demanda doméstica, o Brasil, com seu vasto potencial de biomassa, poderia se tornar um fornecedor global de gás renovável, atendendo a mercados com metas de descarbonização agressivas, como a Europa e a Ásia.`
                    }
                ]
            },
            globalComparison: {
                title: "Comparativo Global & Perspectivas",
                intro: "A análise do mercado brasileiro de biogás ganha profundidade quando contextualizada no cenário global. Ao comparar o Brasil com mercados líderes e emergentes, é possível extrair lições valiosas e traçar um roadmap mais claro para o desenvolvimento do setor até 2030.",
                subsections: [
                    {
                        title: "Posicionamento Global",
                        description: `O Brasil já figura entre os principais países do mundo em termos de infraestrutura de biogás, sendo o quinto em número de usinas instaladas. No entanto, quando se analisa o volume de produção e a penetração do biometano na matriz energética, o país ainda está atrás dos líderes globais, como a Europa e os Estados Unidos. A grande vantagem competitiva do Brasil não reside em sua posição atual, mas em seu potencial futuro. Nenhum outro país combina uma agroindústria tão poderosa e geradora de resíduos com uma vasta extensão territorial e uma crescente demanda por energia, criando uma oportunidade única para a produção de biogás em uma escala incomparável.`,
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
                    {
                        title: "Lições de Políticas Públicas Globais",
                        description: `A experiência internacional oferece um repertório de políticas públicas bem-sucedidas que podem inspirar e aprimorar a estratégia brasileira:\nUnião Europeia: A Europa demonstra a eficácia de um arcabouço político robusto e de longo prazo. O sucesso de países como Alemanha e Dinamarca foi construído sobre tarifas de incentivo (feed-in tariffs), que garantiam um preço de compra para a energia gerada, e, mais recentemente, sobre metas ambiciosas, como as do plano REPowerEU, que criam uma forte sinalização de mercado para os investidores. A existência de um mercado de carbono maduro (EU-ETS) também ajuda a precificar a externalidade positiva do biometano.\nEstados Unidos: O modelo americano ensina o poder das políticas baseadas em mercado. O Low Carbon Fuel Standard (LCFS), particularly na Califórnia, não prescreve uma tecnologia, mas cria um mercado para a "baixa intensidade de carbono". Combustíveis com menor pegada de carbono, como o biometano (RNG), geram créditos que podem ser vendidos para produtores de combustíveis de alta intensidade (como gasolina e diesel), criando uma forte demanda e um prêmio de preço para o gás renovável.\nChina: A experiência chinesa, embora focada em outra escala, mostra a importância de programas governamentais de longo prazo para a disseminação da tecnologia. Ao subsidiar milhões de biodigestores domésticos por décadas, o governo chinês criou uma cultura de aproveitamento de resíduos e uma base técnica que agora pode ser alavancada para projetos de maior escala.`
                    }
                ]
            },
            roadmapData: {
                title: "Projeção de Cenários para 2030",
                intro: "A análise das tendências atuais, políticas públicas e investimentos em andamento permite traçar três possíveis cenários para o setor de biogás e biometano no Brasil até 2030. Estas projeções servem como uma ferramenta para entender as diferentes trajetórias de crescimento e os fatores que podem influenciá-las.",
                scenarios: {
                    conservative: { 
                        title: "Cenário Conservador", 
                        description: "O crescimento se concentra nos projetos de RSU já contratados e em grandes players. A expansão é limitada por gargalos de infraestrutura, lentidão na harmonização regulatória e competitividade de preço desafiadora.",
                        kpiLabel: "Produção de Biometano",
                        kpi: "1-2 Bi m³/ano"
                    },
                    realistic: { 
                        title: "Cenário Realista", 
                        description: "A Lei do Combustível do Futuro impulsiona novos investimentos, e o gasoduto virtual interioriza o mercado. O Brasil se torna um dos cinco maiores produtores de biometano do mundo.",
                        kpiLabel: "Produção de Biometano",
                        kpi: "3-5 Bi m³/ano"
                    },
                    optimistic: { 
                        title: "Cenário Otimista", 
                        description: "O país valoriza plenamente o atributo ambiental do biometano, avança em tecnologia e se torna um exportador relevante de Bio-GNL, sendo uma referência global em economia circular.",
                        kpiLabel: "Produção de Biometano",
                        kpi: "> 7 Bi m³/ano"
                    },
                }
            },
            referencesData: {
                intro: "Esta seção contém a lista de referências citadas ao longo deste painel analítico. Todas as fontes foram consultadas para garantir a precisão e a relevância dos dados apresentados.",
                list: [
                    { text: "Brasil registrou 1633 plantas de biogás em 2024 – ABEGÁS, acessado em 22 de julho de 2025", url: "https://www.abegas.org.br/arquivos/95755" },
                    { text: "biogás - ABEGÁS, acessado em 22 de julho de 2025", url: "https://www.abegas.org.br/arquivos/tag/biogas" },
                    { text: "Abegás defende adição do gás natural como combustível de transição na Taxonomia Sustentável Brasileira | Café com ESG, 10/06 - Expert XP, acessado em 22 de julho de 2025", url: "https://conteudos.xpi.com.br/esg/abegas-defende-adicao-do-gas-natural-como-combustivel-de-transicao-na-taxonomia-sustentavel-brasileira-cafe-com-esg-10-06/" },
                    { text: "Produção de biocombustíveis cresce no Brasil e alcança recorde histórico - Agência Gov, acessado em 22 de julho de 2025", url: "https://agenciagov.ebc.com.br/noticias/202407/producao-de-biocombustiveis-cresce-no-brasil-e-alcanca-recorde-historico" },
                    { text: "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e ..., acessado em 22 de julho de 2025", url: "https://www.gov.br/anp/pt-br/centrais-de-conteudo/publicacoes/anuario-estatistico/anuario-estatistico-brasileiro-do-petroleo-gas-natural-e-biocombustiveis-2024" },
                    { text: "COMBUSTÍVEL DO FUTURO: ATERROS SANITÁRIOS ATRAIRÃO ..., acessado em 22 de julho de 2025", url: "https://www.abrema.org.br/2025/01/13/combustivel-do-futuro-aterros-sanitarios-atrairao-investimentos-em-biogas-e-biometano/" },
                    { text: "Panorama do Biogás no Brasil em 2024 - CIBiogás, acessado em 22 de julho de 2025", url: "https://materiais.cibiogas.org/panorama-do-biogas-2024" },
                    { text: "Fomento do Governo para produção de energia renovável faz número de usinas de biogás quintuplicar em 8 anos, acessado em 22 de julho de 2025", url: "https://agenciadenoticias.ms.gov.br/fomento-do-governo-para-producao-de-energia-renovavel-faz-numero-de-usinas-de-biogas-quintuplicar-em-8-anos/" },
                    { text: "ESTUDO SOBRE O POTENCIAL DE PRODUÇÃO DE BIOGÁS A PARTIR DE RESÍDUOS SÓLIDOS URBANOS (RSU) NO ESTADO NO RIO DE JANEIRO - Pantheon UFRJ, acessado em 22 de julho de 2025", url: "https://pantheon.ufrj.br/bitstream/11422/25727/1/GMSouza.pdf" },
                    { text: "Biometano pode gerar ao Brasil R$200 bilhões por ano em 2050 - CERNE, acessado em 22 de julho de 2025", url: "https://cerne.org.br/biometano-pode-gerar-ao-brasil-r200-bilhoes-por-ano-em-2050/" },
                    { text: "Panorama do Biogás no Brasil 2024., acessado em 22 de julho de 2025", url: "https://abiogas.org.br/wp-content/uploads/2025/06/PANORAMA-DO-BIOGAS-2024.pdf" },
                    { text: "Panorama do Biogás 2023 – Cibiogás (2024), acessado em 22 de julho de 2025", url: "https://abiogas.com.br/outras-publicacoes/panorama-do-biogas-2023-cibiogas-2024/" },
                    { text: "Challenges for the Biogas and Biomethane Sector in 2025. - YouTube, acessado em 22 de julho de 2025", url: "https://www.youtube.com/watch?v=BMnYXaI2D0g" },
                    { text: "BALANÇO ENERGÉTICO NACIONAL - Empresa de Pesquisa ..., acessado em 22 de julho de 2025", url: "https://www.epe.gov.br/sites-pt/publicacoes-dados-abertos/publicacoes/PublicacoesArquivos/publicacao-885/topico-771/Relat%C3%B3rio%20Final_BEN%202025.pdf" },
                    { text: "Relatório Síntese 2025 - Empresa de Pesquisa Energética - EPE, acessado em 22 de julho de 2025", url: "https://www.epe.gov.br/sites-pt/publicacoes-dados-abertos/publicacoes/PublicacoesArquivos/publicacao-885/topico-767/BEN_S%C3%ADntese_2025_PT.pdf" },
                    { text: "Anuário Estatístico — Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, acessado em 22 de julho de 2025", url: "https://www.gov.br/anp/pt-br/centrais-de-conteudo/publicacoes/anuario-estatistico" },
                    { text: "Atualização de biogás Tamanho e compartilhamento do mercado [2025-2033], acessado em 22 de julho de 2025", url: "https://www.globalgrowthinsights.com/pt/market-reports/biogas-upgrading-market-109596" },
                    { text: "BioValue – Biometano - LNBR - CNPEM, acessado em 22 de julho de 2025", url: "https://lnbr.cnpem.br/biovalue/produtos/biometano/" },
                    { text: "Sistema de membranas potencializa a produção de biometano na UD Itaipu, acessado em 22 de julho de 2025", url: "https://biogaseenergia.com.br/sistema-de-membranas-potencializa-a-producao-de-biometano-na-ud-itaipu" },
                    { text: "Purificação de Biogás c/ Membranas: Entenda a Tecnologia da UBE p/ Biometano (Dr. Biogas Podcast) - YouTube, acessado em 22 de julho de 2025", url: "https://www.youtube.com/watch?v=0BRV7_uB5nk" },
                    { text: "SEPURAN® Green I Membranes for efficient biogas upgrading - Evonik Industries, acessado em 22 de julho de 2025", url: "https://www.membrane-separation.com/pt/upgrading-of-biogas-to-biomethane-with-sepuran-green" },
                    { text: "Purificação de biogás por membranas na UD Itaipu com 3DI Engenharia e UBE Industries - YouTube, acessado em 22 de julho de 2025", url: "https://www.youtube.com/watch?v=7LjMW-XjzDE" },
                    { text: "Embrapa - Tecnologias para o tratamento de resíduos de animais, acessado em 22 de julho de 2025", url: "https://www.embrapa.br/documents/1355242/0/Biog%C3%A1sFert+-+Tecnologias+para+o+tratamento+de+res%C3%ADduos+de+animais.pdf" },
                    { text: "Rio terá usina de \"CO2 verde\" – que vem do lixo - Capital Reset - UOL, acessado em 22 de julho de 2025", url: "https://capitalreset.uol.com.br/empresas/rio-tera-usina-de-co2-verde-que-vem-do-lixo/" },
                    { text: "2025 Melhores do Biogás – Plantas – Saneamento -Gás Verde Seropédica, acessado em 22 de julho de 2025", url: "https://biogasebiometano.com.br/melhores2025gasverdeseropedica/" },
                    { text: "TBG propõe tarifa específica para injeção de biometano na malha de gasodutos - ABEGÁS, acessado em 22 de julho de 2025", url: "https://www.abegas.org.br/arquivos/91999" },
                    { text: "Biometano - Portal Gov.br, acessado em 22 de julho de 2025", url: "https://www.gov.br/mme/pt-br/assuntos/secretarias/petroleo-gas-natural-e-biocombustiveis/eventos/serie-de-workshops-proximos-passos-combustivel-do-futuro-e-novas-politicas-do-setor-de-oleo-e-gas/workshop-biometano/09-mesa-3-claudia-souza-atgas.pdf" },
                    { text: "Parceria público-privada ajuda a alavancar o mercado de biogás - CIBiogás, acessado em 22 de julho de 2025", url: "https://cibiogas.org/noticias/parceria-publico-privada-ajuda-a-alavancar-o-mercado-de-biogas/" },
                    { text: "Projeto tornará gás metano dos resíduos animais em energia sustentável - Canal Solar, acessado em 22 de julho de 2025", url: "https://canalsolar.com.br/projeto-tornara-gas-metano-dos-residuos-animais-em-energia-sustentavel/" },
                ]
            },
        },
    }
};