window.PLAN = window.PLAN || { weeks: [] };
PLAN.weeks.push(
{
  n:36, phase:3,
  theme:"Checkpoint B2: provar o nível",
  goal:"Fazer um mock completo de 30 minutos, medir seu B2 real e identificar exatamente as 3 lacunas que restam.",
  grammar:{ title:"Registro: formal, neutro e informal",
    why:"B2 não é saber mais gramática — é saber escolher o registro. A mesma ideia em e-mail, Slack e conversa tem três formas diferentes.",
    drill:"Reescreva a mesma mensagem em 3 registros. Depois leia as três em voz alta com o tom certo." },
  vocab:["register — registro","formal — formal","informal — informal","neutral — neutro","collocation — colocação","chunk — bloco de linguagem","paraphrase — parafrasear","summarize — resumir","elaborate — detalhar","clarify — esclarecer","emphasize — enfatizar","downplay — minimizar","hedge — atenuar","assert — afirmar","soften — suavizar","imply — insinuar","infer — inferir","convey — transmitir","tone — tom","nuance — nuance","connotation — conotação","denotation — sentido literal","precision — precisão","accuracy — exatidão","fluency — fluência","coherence — coerência","cohesion — coesão","filler — muleta de linguagem","pause — pausa","pace — ritmo","intonation — entonação","stress — ênfase","rhythm — ritmo","connected speech — fala conectada","linking — ligação entre palavras","reduction — redução","contraction — contração","weak form — forma fraca","strong form — forma forte","accent — sotaque","dialect — dialeto","pronunciation — pronúncia","enunciation — articulação","clarity — clareza","confidence — confiança","hesitation — hesitação","self-correction — autocorreção","repair — correção","circumlocution — rodeio","turn-taking — troca de turno","backchannel — sinal de escuta","active listening — escuta ativa","clarification — esclarecimento","confirmation — confirmação","comprehension — compreensão","retention — retenção","recall — recordação","retrieval — recuperação","automaticity — automatismo","exposure — exposição","immersion — imersão","input — insumo","output — produção","feedback — retorno","uptake — assimilação","fossilization — fossilização","plateau — platô","breakthrough — avanço","elevator pitch — apresentação rápida","follow-up question — pergunta de acompanhamento"],
  resources:[
    {name:"Mock completo de 30 min", type:"IA", note:"prompt de entrevistador sênior"},
    {name:"EF SET", type:"Teste", note:"refaça e compare com a semana 12"},
    {name:"Suas gravações antigas", type:"Áudio", note:"ouça a semana 1, 12 e 26"},
  ],
  content:["Mock interview de 30 min","Reavaliação EF SET","Comparação das 4 gravações de checkpoint"],
  days:[
    {d:"Seg", title:"Registro: 3 versões", steps:[["Revisar cards","Anki",7],["Escrever a mesma mensagem em 3 registros","caderno",13],["Ler as 3 em voz alta","drill",12],["Minerar 4 chunks","Anki",8]], out:"3 versões da mesma mensagem."},
    {d:"Ter", title:"Mock completo", steps:[["Revisar cards","Anki",7],["Mock de 30 min com IA","ChatGPT voz",30],["Anotar 3 lacunas","notas",3]], out:"Score + 3 lacunas priorizadas."},
    {d:"Qua", title:"EF SET + comparação", steps:[["Revisar cards","Anki",7],["EF SET","efset.org",30],["Comparar com semana 12","planilha",3]], out:"Progresso numérico registrado."},
    {d:"Qui", title:"Correção cirúrgica", steps:[["Revisar cards","Anki",7],["Criar 10 cards dos 3 erros principais","Anki",15],["Drill oral das formas corretas","drill",10],["Reescrever 5 frases","caderno",8]], out:"10 cards novos de correção."},
    {d:"Sex", title:"Fluência sob pressão", steps:[["Revisar cards","Anki",7],["3 gravações de 60s sem preparo","celular",15],["Ouvir e marcar hesitações","notas",10],["Minerar 3 cards","Anki",8]], out:"Taxa de hesitação medida."},
    {d:"Sáb", title:"Output longo", steps:[["Revisar cards","Anki",7],["Preparar: minha história em 3 atos","notas",5],["Gravar 4 min","celular",20],["Transcrever e analisar","IA",8]], out:"Narrativa pessoal de 4 min, estruturada."},
    {d:"Dom", title:"Plano do sprint final", steps:[["Revisar cards","Anki",7],["Definir as 3 prioridades do sprint","notas",10],["Atualizar o Barril","Drive",13],["Descanso ativo","Netflix",10]], out:"Sprint 37-40 planejado."}
  ]
},
{
  n:37, phase:4,
  theme:"Sprint: behavioral interview nível B2+",
  goal:"Ter 8 histórias STAR prontas, cronometradas e adaptáveis a qualquer pergunta comportamental de big tech.",
  grammar:{ title:"Narrativa com resultado: 'which led to' e 'as a result'",
    why:"História sem resultado é anedota. O que fecha a resposta é a cadeia causa-consequência com número.",
    drill:"Reescreva 5 histórias terminando com as a result / which led to / ultimately + número." },
  vocab:["results — resultados","metrics — métricas","scope — escopo","ownership — senso de dono","ambiguity — ambiguidade","cross-team — entre times","influence without authority — influenciar sem autoridade","conflict resolution — resolução de conflito","mentoring — mentoria","incident leadership — liderança de incidente","roadmap — roteiro","prioritization — priorização","stakeholder management — gestão de interessados","executive presence — presença executiva","storytelling — narrativa","narrative arc — arco narrativo","hook — gancho","context — contexto","turning point — ponto de virada","resolution — resolução","reflection — reflexão","lesson — lição","growth mindset — mentalidade de crescimento","feedback loop — ciclo de feedback","self-awareness — autoconhecimento","humility — humildade","credit sharing — dividir crédito","team success — sucesso do time","business impact — impacto no negócio","revenue impact — impacto na receita","customer impact — impacto no cliente","cost savings — economia de custos","time saved — tempo economizado","efficiency — eficiência","reliability improvement — melhora de confiabilidade","incident reduction — redução de incidentes","adoption — adoção","retention — retenção","conversion — conversão","latency reduction — redução de latência","scale — escala","throughput — vazão","SLA — acordo de nível de serviço","uptime — disponibilidade","on-call — plantão","postmortem — análise pós-incidente","blameless culture — cultura sem culpa","action items — itens de ação","follow-through — execução até o fim","measurable outcome — resultado mensurável","quantifiable result — resultado quantificável","before and after — antes e depois","baseline — linha de base","benchmark — referência","attributed — atribuído","drove — impulsei","led — liderei","owned — fui responsável","delivered — entreguei","shipped — publiquei","launched — lancei","migrated — migrei","reduced — reduzi","improved — melhorei","increased — aumentei","cut — cortei","saved — economizei","scaled — escalei","as a result — como resultado","which led to — o que levou a"],
  resources:[
    {name:"Behavioral interview bank", type:"Site", note:"liste 30 perguntas e mapeie suas 8 histórias"},
    {name:"Exponent — mock behavioral", type:"YouTube", note:"assista 3 mocks completos"},
    {name:"Seu histórico", type:"Documento", note:"8 histórias com números reais"}
  ],
  content:["30 perguntas comportamentais mais comuns","3 mocks behavioral completos","Suas 8 histórias em uma página"],
  days:[
    {d:"Seg", title:"Input: banco de perguntas", steps:[["Revisar cards","Anki",7],["Ler 30 perguntas em voz alta","lista",13],["Mapear quais histórias servem","notas",12],["Minerar 4 chunks","Anki",8]], out:"8 histórias mapeadas para 30 perguntas."},
    {d:"Ter", title:"Resultado com número", steps:[["Revisar cards","Anki",7],["Drill: 10 finais com as a result","Verb Gym",12],["Cronometrar 2 histórias em 90s","celular",13],["Ajustar o que passou do tempo","notas",8]], out:"2 histórias em exatamente 90s."},
    {d:"Qua", title:"Extensivo + benchmarking", steps:[["Revisar cards","Anki",7],["Assistir 1 mock behavioral","Exponent",15],["Anotar a estrutura do candidato","notas",10],["Minerar 4 expressões","Anki",8]], out:"Modelo de resposta copiável."},
    {d:"Qui", title:"Mock behavioral", steps:[["Revisar cards","Anki",7],["Mock de 20 min behavioral","ChatGPT voz",20],["Anotar 3 perguntas que te pegaram","notas",13]], out:"3 respostas novas criadas."},
    {d:"Sex", title:"Pressão e ritmo", steps:[["Revisar cards","Anki",7],["5 perguntas surpresa, 30s cada","ChatGPT voz",15],["Rever as piores","notas",10],["Minerar 3 cards","Anki",8]], out:"Respostas de 30s sem muleta."},
    {d:"Sáb", title:"Output longo", steps:[["Revisar cards","Anki",7],["Gravar 4 histórias seguidas","celular",25],["Autoavaliar com rubrica","checklist",8]], out:"4 histórias auditáveis por um recrutador."},
    {d:"Dom", title:"Revisão + barril", steps:[["Revisar cards","Anki",7],["Re-escuta do mock de quinta","áudio",15],["Reler os 70 termos","lista",10],["Repor o Barril da semana 38","Drive",8]], out:"Barril da semana 38 pronto."}
  ]
},
{
  n:38, phase:4,
  theme:"Sprint: explicação técnica e whiteboard",
  goal:"Explicar qualquer sistema no quadro em 10 minutos, pensando em voz alta em inglês, do requisito ao trade-off.",
  grammar:{ title:"Pensar em voz alta: 'so what I'd do here is...'",
    why:"Entrevista técnica é avaliada pela sua fala, não pelo desenho. Você precisa de conectores de raciocínio em tempo real.",
    drill:"Resolva um problema simples em voz alta por 5 minutos, narrando cada decisão com so/what I'd do/that way." },
  vocab:["whiteboard — quadro branco","draw — desenhar","diagram — diagrama","box — caixa","arrow — seta","flow — fluxo","start from — começar por","walk through — percorrer","step by step — passo a passo","high level — alto nível","low level — baixo nível","zoom out — afastar","zoom in — aproximar","at a high level — em alto nível","under the hood — por baixo do capô","edge case — caso extremo","assumption — premissa","constraint — restrição","requirement — requisito","trade-off — contrapartida","alternative — alternativa","bottleneck — gargalo","single point of failure — ponto único de falha","failure mode — modo de falha","load — carga","traffic — tráfego","scale — escala","shard — particionar","replicate — replicar","cache — cache","queue — fila","retry — nova tentativa","timeout — tempo limite","idempotent — idempotente","consistent — consistente","available — disponível","partition — partição","latency budget — orçamento de latência","throughput target — meta de vazão","capacity — capacidade","estimate — estimativa","back-of-the-envelope — cálculo rápido","order of magnitude — ordem de grandeza","rule of thumb — regra geral","per second — por segundo","per request — por requisição","concurrent users — usuários simultâneos","QPS — consultas por segundo","read/write ratio — proporção leitura/escrita","hot path — caminho crítico","cold path — caminho secundário","data model — modelo de dados","schema — esquema","index — índice","join — junção","denormalize — desnormalizar","normalize — normalizar","API contract — contrato de API","versioning — versionamento","backward compatible — retrocompatível","breaking change — mudança incompatível","deprecation — descontinuação","migration — migração","rollout — implantação","canary — canário","feature flag — sinalizador","monitoring — monitoramento","alert — alerta","dashboard — painel","SLO — objetivo de nível de serviço","error budget — orçamento de erro","postmortem — análise pós-incidente","rollback — reversão","hotfix — correção emergencial","root cause — causa raiz","mitigation — mitigação"],
  resources:[
    {name:"System design interview", type:"YouTube", note:"Gaurav Sen / ByteByteGo — assista pensando em voz alta"},
    {name:"Pramp / interviewing.io", type:"Site", note:"veja gravações reais de entrevista"},
    {name:"Seu diagrama", type:"Papel", note:"desenhe e explique 3 sistemas diferentes"}
  ],
  content:["3 system designs clássicos (URL shortener, feed, chat)","Gravação de entrevista real comentada","Seu próprio diagrama em inglês"],
  days:[
    {d:"Seg", title:"Input: design clássico", steps:[["Revisar cards","Anki",7],["1 system design completo","ByteByteGo",20],["Repetir a explicação","vídeo",5],["Minerar 5 termos","Anki",8]], out:"5 cards de design."},
    {d:"Ter", title:"Pensar em voz alta", steps:[["Revisar cards","Anki",7],["Resolver problema narrando","papel",15],["Gravar 5 min de raciocínio","celular",10],["Ouvir e marcar silêncios","notas",8]], out:"5 min de raciocínio contínuo."},
    {d:"Qua", title:"Extensivo + benchmarking", steps:[["Revisar cards","Anki",7],["Assistir entrevista real","interviewing.io",20],["Anotar 5 frases do entrevistador","notas",5],["Minerar 4 termos","Anki",8]], out:"5 frases de condução de entrevista."},
    {d:"Qui", title:"Mock de design", steps:[["Revisar cards","Anki",7],["Mock system design de 25 min","ChatGPT voz",25],["Anotar feedback","notas",8]], out:"Design completo com 3 trade-offs."},
    {d:"Sex", title:"Fluência sob pressão", steps:[["Revisar cards","Anki",7],["2 problemas em 10 min cada","ChatGPT voz",20],["Comparar com o de quinta","notas",13]], out:"Melhora mensurável em 48h."},
    {d:"Sáb", title:"Output longo", steps:[["Revisar cards","Anki",7],["Desenhar 1 sistema novo","papel",10],["Gravar 5 min explicando","celular",15],["Transcrever e analisar","IA",8]], out:"Vídeo de 5 min de design explicado."},
    {d:"Dom", title:"Revisão + barril", steps:[["Revisar cards","Anki",7],["Re-escuta do mock de quinta","áudio",15],["Reler os 70 termos","lista",10],["Repor o Barril da semana 39","Drive",8]], out:"Barril da semana 39 pronto."}
  ]
},
{
  n:39, phase:4,
  theme:"Sprint: simulação de loop completo",
  goal:"Passar por um loop de entrevista inteiro em inglês: recrutador, behavioral, técnico e perguntas para eles — no mesmo dia.",
  grammar:{ title:"Perguntas que você faz: o inglês de quem escolhe",
    why:"A entrevista também é sua. Perguntas boas em inglês mudam a percepção de senioridade mais do que qualquer resposta.",
    drill:"Escreva 15 perguntas para o entrevistador, em 3 níveis: time, produto e cultura." },
  vocab:["recruiter screen — triagem com recrutador","hiring manager — gestor contratante","behavioral — comportamental","coding — programação","system design — design de sistemas","take-home — desafio para casa","onsite — etapa presencial","virtual onsite — etapa virtual","loop — ciclo de entrevistas","panel — painel","debrief — discussão final","scorecard — ficha de avaliação","hire/no-hire — contratar ou não","strong hire — contratação forte","lean hire — contratação fraca","lean no — recusa fraca","rejection — recusa","feedback — retorno","follow-up — acompanhamento","thank-you note — mensagem de agradecimento","timeline — cronograma","offer — oferta","competing offer — oferta concorrente","expedite — acelerar","recruiter call — ligação com recrutador","compensation discussion — conversa sobre remuneração","team match — encaixe no time","headcount — vaga autorizada","req — requisição de vaga","opening — vaga","referral — indicação","application — candidatura","ATS — sistema de triagem","resume screen — triagem de currículo","phone screen — triagem por telefone","technical screen — triagem técnica","pair programming — programação em par","live coding — código ao vivo","leetcode — plataforma de algoritmos","algorithm — algoritmo","data structure — estrutura de dados","complexity — complexidade","brute force — força bruta","optimize — otimizar","edge cases — casos extremos","test cases — casos de teste","walk through — percorrer","think out loud — pensar em voz alta","clarify requirements — esclarecer requisitos","ask questions — fazer perguntas","pseudocode — pseudocódigo","bug — defeito","debug — depurar","compile — compilar","run — executar","pass — passar","fail — falhar","time complexity — complexidade de tempo","space complexity — complexidade de espaço","Big O — notação Big O","what does success look like — como é o sucesso","how is the team structured — como o time é organizado","what are the biggest challenges — quais os maiores desafios","how do you measure impact — como medem impacto","what's the on-call rotation — como é o plantão","what does the roadmap look like — como é o roteiro","why is this role open — por que a vaga abriu","next steps — próximos passos","offer deadline — prazo da oferta","relocation — mudança"],
  resources:[
    {name:"Loop completo", type:"IA", note:"4 prompts: recruiter, behavioral, technical, perguntas"},
    {name:"Exponent — full mock", type:"YouTube", note:"assista um loop inteiro"},
    {name:"Sua lista de perguntas", type:"Nota", note:"15 perguntas em 3 níveis"}
  ],
  content:["Loop completo simulado em um único dia","3 mocks de empresas diferentes","Sua lista de 15 perguntas"],
  days:[
    {d:"Seg", title:"Recruiter + behavioral", steps:[["Revisar cards","Anki",7],["Mock recruiter screen 10 min","ChatGPT voz",10],["Mock behavioral 20 min","ChatGPT voz",20],["Anotar feedback","notas",3]], out:"2 etapas concluídas com score."},
    {d:"Ter", title:"Técnico + design", steps:[["Revisar cards","Anki",7],["Live coding simulado 20 min","ChatGPT voz",20],["System design 15 min","ChatGPT voz",13]], out:"2 etapas técnicas concluídas."},
    {d:"Qua", title:"Perguntas para eles", steps:[["Revisar cards","Anki",7],["Escrever 15 perguntas","caderno",15],["Ensaiar em voz alta","drill",10],["Minerar 4 chunks","Anki",8]], out:"15 perguntas prontas e ensaiadas."},
    {d:"Qui", title:"Loop completo", steps:[["Revisar cards","Anki",7],["Loop inteiro de 30 min","ChatGPT voz",30],["Anotar 3 pontos fracos","notas",3]], out:"Diagnóstico do loop completo."},
    {d:"Sex", title:"Correção dos fracos", steps:[["Revisar cards","Anki",7],["Refazer as 3 piores respostas","ChatGPT voz",15],["Criar 8 cards de correção","Anki",10],["Drill oral","drill",8]], out:"3 respostas reescritas e treinadas."},
    {d:"Sáb", title:"Output longo", steps:[["Revisar cards","Anki",7],["Gravar 5 min: por que me contratar","celular",20],["Transcrever e analisar","IA",13]], out:"Pitch final de 5 min."},
    {d:"Dom", title:"Revisão + barril", steps:[["Revisar cards","Anki",7],["Re-escuta do loop de quinta","áudio",15],["Reler os 70 termos","lista",10],["Repor o Barril da semana 40","Drive",8]], out:"Barril da semana 40 pronto."}
  ]
},
{
  n:40, phase:4,
  theme:"Avaliação final e plano de manutenção do B2",
  goal:"Medir seu B2 com honestidade, corrigir as últimas lacunas e sair com um plano de manutenção de 12 meses.",
  grammar:{ title:"Consolidação: seu inglês como sistema",
    why:"B2 não é linha de chegada, é um patamar que se mantém com exposição. A gramática agora é só o que você ainda erra sob pressão.",
    drill:"Grave 5 minutos sobre sua trajetória e marque, você mesmo, todo erro de verbo. Compare com a semana 1." },
  vocab:["assessment — avaliação","self-assessment — autoavaliação","CEFR — quadro europeu de níveis","B2 — nível B2","C1 — nível C1","fluency — fluência","accuracy — precisão","range — repertório","coherence — coerência","interaction — interação","pronunciation — pronúncia","vocabulary — vocabulário","grammar — gramática","can-do — capacidade declarada","milestone — marco","goal — objetivo","achievement — conquista","progress — progresso","plateau — platô","next steps — próximos passos","maintenance — manutenção","habit — hábito","routine — rotina","consistency — consistência","accountability — responsabilidade","tracking — acompanhamento","log — registro","journal — diário","review — revisão","reflect — refletir","adjust — ajustar","iterate — iterar","long-term plan — plano de longo prazo","exposure — exposição","immersion — imersão","community — comunidade","speaking partner — parceiro de conversa","language exchange — intercâmbio linguístico","Discord — Discord","open source — código aberto","networking — networking","interview prep — preparação para entrevista","job search — busca de emprego","application — candidatura","portfolio — portfólio","GitHub — GitHub","LinkedIn — LinkedIn","resume — currículo","cover letter — carta de apresentação","referral — indicação","cold outreach — contato frio","follow-up — acompanhamento","offer — oferta","negotiation — negociação","relocation — mudança","visa — visto","onboarding — integração","first 90 days — primeiros 90 dias","ramp up — acelerar aprendizado","feedback — retorno","one-on-one — reunião individual","performance — desempenho","promotion — promoção","career growth — crescimento de carreira","continuous learning — aprendizado contínuo","stay sharp — manter afiado","keep it up — continue assim","never stop — nunca pare","keep in touch — manter contato","give back — retribuir"],
  resources:[
    {name:"EF SET final", type:"Teste", note:"compare com semanas 12 e 36"},
    {name:"Plano de manutenção", type:"Nota", note:"3 hábitos que você mantém para sempre"},
    {name:"Seu arquivo de gravações", type:"Áudio", note:"ouça a semana 1 e a de hoje"}
  ],
  content:["Avaliação final completa","Comparação das 4 gravações de checkpoint","Plano de manutenção de 12 meses"],
  days:[
    {d:"Seg", title:"Autoavaliação honesta", steps:[["Revisar cards","Anki",7],["Gravar 5 min sobre a trajetória","celular",15],["Preencher rubrica B2","checklist",10],["Marcar 3 lacunas restantes","notas",8]], out:"Rubrica preenchida com evidências."},
    {d:"Ter", title:"EF SET final", steps:[["Revisar cards","Anki",7],["EF SET","efset.org",30],["Salvar resultado","pasta",3]], out:"Resultado final registrado."},
    {d:"Qua", title:"Comparação total", steps:[["Revisar cards","Anki",7],["Ouvir gravação da semana 1","arquivo",8],["Ouvir a da semana 40","arquivo",8],["Anotar 10 diferenças","notas",17]], out:"Prova concreta de 40 semanas."},
    {d:"Qui", title:"Últimas correções", steps:[["Revisar cards","Anki",7],["Criar 10 cards das lacunas finais","Anki",15],["Drill oral das formas","drill",18]], out:"10 cards finais."},
    {d:"Sex", title:"Mock final", steps:[["Revisar cards","Anki",7],["Mock completo de 30 min","ChatGPT voz",30],["Comparar com o da semana 36","notas",3]], out:"Score final + evolução em 4 semanas."},
    {d:"Sáb", title:"Plano de manutenção", steps:[["Revisar cards","Anki",7],["Definir 3 hábitos permanentes","notas",10],["Montar rotina de 20 min/dia","planilha",13],["Agendar revisão em 90 dias","calendário",10]], out:"Plano de 12 meses escrito."},
    {d:"Dom", title:"Fechamento", steps:[["Revisar cards","Anki",7],["Escrever carta para você em 6 meses","caderno",15],["Reouvir sua semana 1","arquivo",10],["Celebrar","—",8]], out:"Você concluiu 280 dias de inglês."}
  ]
}
);
