window.PLAN = window.PLAN || { weeks: [] };
PLAN.weeks.push(
{
  n:16, phase:2,
  theme:"Bugs e incidentes: contar o que deu errado",
  goal:"Narrar um incidente técnico com clareza: o que aconteceu, o que causou, o que você fez e o que aprendeu — em 2 minutos.",
  grammar:{ title:"Past continuous vs. past simple + 'turned out'",
    why:"Incidente é narrativa no passado: we were deploying when the alert fired. E o verbo que todo dev americano usa é it turned out that...",
    drill:"Conte 3 incidentes em 6 frases cada, usando when/while e turned out. Sem escrever, só falando." },
  vocab:["bug — defeito","defect — defeito","issue — problema","error — erro","exception — exceção","stack trace — rastro de pilha","log — registro","reproduce — reproduzir","steps to reproduce — passos para reproduzir","root cause — causa raiz","root cause analysis — análise de causa raiz","incident — incidente","outage — queda do serviço","downtime — indisponibilidade","severity — severidade","critical — crítico","minor — menor","regression — regressão","hotfix — correção emergencial","patch — correção","rollback — reverter","revert — reverter","deploy — implantar","release — lançamento","monitor — monitorar","alert — alerta","threshold — limite","spike — pico","latency — latência","timeout — tempo esgotado","crash — travamento","freeze — congelamento","memory leak — vazamento de memória","CPU usage — uso de CPU","disk space — espaço em disco","network — rede","firewall — firewall","permission — permissão","access — acesso","debug — depurar","breakpoint — ponto de parada","step through — percorrer passo a passo","isolate — isolar","narrow down — restringir","bisect — bissectar","suspect — suspeitar","hypothesis — hipótese","workaround — solução alternativa","temporary fix — correção temporária","permanent fix — correção definitiva","postmortem — análise pós-incidente","action item — item de ação","blameless — sem culpa","timeline — linha do tempo","impact — impacto","affected users — usuários afetados","mitigation — mitigação","on-call — de plantão","escalate — escalar","page someone — acionar alguém","triage — triagem","it turned out — acabou que","it was caused by — foi causado por","we should have — deveríamos ter","it might be — pode ser que","fix forward — corrigir adiante","it's on fire — está pegando fogo","back to normal — de volta ao normal","false alarm — alarme falso","edge case — caso extremo"],
  resources:[
    {name:"Incident postmortems (públicos)", type:"Blog", note:"leia 2 postmortems reais e sublinhe o vocabulário"},
    {name:"Darknet Diaries", type:"Podcast", note:"histórias de falhas e ataques, ritmo de conversa"},
    {name:"Template de postmortem", type:"Nota", note:"preencha um com um bug seu"}
  ],
  content:["Postmortem público de uma empresa grande (ex: Cloudflare)","Vídeo: como times fazem blameless postmortem","Áudio: você narrando seu pior bug"],
  days:[
    {d:"Seg", title:"Input: narrativa de incidente", steps:[["Revisar cards","Anki",7],["Vídeo de postmortem real","YouTube",13],["Repetir a narrativa em voz alta","vídeo",12],["Minerar 6 chunks","Anki",8]], out:"6 cards de incidente."},
    {d:"Ter", title:"Past continuous + when", steps:[["Revisar cards","Anki",7],["Drill: 10 frases com when/while","Verb Gym",10],["Shadowing do vídeo","YouTube",13],["Gravar seu pior bug em 90s","celular",10]], out:"90s com 4 past continuous corretos."},
    {d:"Qua", title:"Extensivo + postmortem", steps:[["Revisar cards","Anki",7],["Ouvir Darknet Diaries","podcast",15],["Ler um postmortem em voz alta","blog",10],["Minerar 4 termos","Anki",8]], out:"Entendeu a estrutura de um postmortem real."},
    {d:"Qui", title:"Roleplay de incidente", steps:[["Revisar cards","Anki",7],["Roleplay: war room de incidente","ChatGPT voz",12],["Escrever update de status","caderno",10],["Correção com IA","IA",11]], out:"Update de incidente em 4 linhas, tom calmo."},
    {d:"Sex", title:"Série + ritmo de tensão", steps:[["Revisar cards","Anki",7],["Cena de crise em série","Netflix",15],["Drill: entonação de urgência","Youglish",10],["Minerar 3 cards","Anki",8]], out:"10 frases de urgência sem soar robô."},
    {d:"Sáb", title:"Output longo", steps:[["Revisar cards","Anki",7],["Preparar: timeline do seu incidente","notas",5],["Gravar 3 min em formato postmortem","celular",20],["Transcrever e analisar","IA",8]], out:"3 min com causa, impacto e prevenção."},
    {d:"Dom", title:"Revisão + barril", steps:[["Revisar cards","Anki",7],["Re-escuta do vídeo de segunda","YouTube",15],["Reler os 70 termos em voz alta","lista",10],["Repor o Barril da semana 17","Drive",8]], out:"Barril da semana 17 pronto."}
  ]
},
{
  n:17, phase:2,
  theme:"Code review: escrever como um profissional americano",
  goal:"Escrever comentários de code review e PR descriptions claros, educados e diretos — e entender o feedback que você recebe.",
  grammar:{ title:"Voz passiva + hedging na escrita",
    why:"Código é sempre sujeito passivo (the endpoint was deprecated) e review educado é cheio de could/would/might. Sem isso, você soa ou infantil ou grosso.",
    drill:"Transforme 10 frases ativas em passivas. Depois reescreva 10 ordens como sugestões educadas." },
  vocab:["pull request — solicitação de merge","diff — diferença","change — mudança","commit — commit","branch — ramificação","merge conflict — conflito de merge","review — revisão","reviewer — revisor","approve — aprovar","request changes — solicitar mudanças","comment — comentário","thread — discussão encadeada","resolve — resolver","nit — detalhe pequeno","non-blocking — não bloqueante","blocking — bloqueante","suggestion — sugestão","refactor — refatorar","rename — renomear","extract — extrair","inline — embutir","simplify — simplificar","edge case — caso extremo","test coverage — cobertura de testes","assertion — asserção","mock — simulação","fixture — dado fixo de teste","lint — análise estática","formatting — formatação","naming convention — convenção de nomes","readability — legibilidade","maintainability — manutenibilidade","performance — desempenho","security — segurança","vulnerability — vulnerabilidade","dependency update — atualização de dependência","breaking change — mudança incompatível","backward compatible — retrocompatível","deprecate — descontinuar","document — documentar","docstring — documentação de função","changelog — registro de mudanças","release notes — notas de versão","description — descrição","summary — resumo","context — contexto","screenshots — capturas de tela","steps to reproduce — passos para reproduzir","expected vs actual — esperado vs real","acceptance criteria — critérios de aceite","LGTM — parece bom para mim","ship it — pode publicar","small nit — detalhe pequeno","optional — opcional","consider — considere","I'd suggest — eu sugeriria","could we — poderíamos","what if — e se","just to confirm — só para confirmar","from my perspective — do meu ponto de vista","in this case — neste caso","that said — dito isso","on the other hand — por outro lado","thanks for the review — obrigado pela revisão","addressed — resolvido","updated — atualizado","PTAL — por favor, revise de novo","bump — subir versão","rebase — rebasar","approve and merge — aprovar e mesclar"],
  resources:[
    {name:"Como escrever um bom PR", type:"Blog", note:"guia do GitHub sobre pull requests"},
    {name:"Conventional Comments", type:"Site", note:"conventionalcomments.org — padrão de comentários"},
    {name:"Repos open source", type:"GitHub", note:"leia 20 comentários de review reais"}
  ],
  content:["PR real de um repo grande (leia a discussão)","Guia de conventional comments","Texto: 5 comentários seus traduzidos e reescritos"],
  days:[
    {d:"Seg", title:"Input: reviews reais", steps:[["Revisar cards","Anki",7],["Ler 20 comentários de review","GitHub",13],["Anotar as 10 fórmulas mais usadas","notas",12],["Minerar 5 chunks","Anki",8]], out:"5 cards de code review."},
    {d:"Ter", title:"Passiva + hedging", steps:[["Revisar cards","Anki",7],["Drill: 10 ativas → passivas","Verb Gym",10],["Drill: 10 ordens → sugestões","drill",13],["Reescrever 5 comentários seus","caderno",10]], out:"5 comentários reescritos no padrão americano."},
    {d:"Qua", title:"Extensivo + README", steps:[["Revisar cards","Anki",7],["Ouvir episódio sobre code review","podcast",15],["Ler um README em voz alta","GitHub",10],["Minerar 4 termos","Anki",8]], out:"Entendeu 80% de um README técnico."},
    {d:"Qui", title:"Escrita + correção", steps:[["Revisar cards","Anki",7],["Escrever PR description de um projeto seu","caderno",12],["Pedir correção e versão sênior","IA",13],["Ler a versão final em voz alta","drill",8]], out:"PR description publicável."},
    {d:"Sex", title:"Série + tom escrito", steps:[["Revisar cards","Anki",7],["Cena de escritório","Netflix",15],["Drill: ler comentários com entonação","GitHub",10],["Minerar 3 cards","Anki",8]], out:"10 comentários lidos com tom correto."},
    {d:"Sáb", title:"Output longo", steps:[["Revisar cards","Anki",7],["Preparar: revisar um código imaginário","notas",5],["Gravar 3 min dando review falado","celular",20],["Transcrever e analisar","IA",8]], out:"3 min de review oral, educado e específico."},
    {d:"Dom", title:"Revisão + barril", steps:[["Revisar cards","Anki",7],["Re-escuta do podcast de quarta","podcast",15],["Reler os 70 termos em voz alta","lista",10],["Repor o Barril da semana 18","Drive",8]], out:"Barril da semana 18 pronto."}
  ]
},
{
  n:18, phase:2,
  theme:"Small talk remoto: o que se fala antes da reunião",
  goal:"Sustentar 3 minutos de conversa informal no início de uma call — clima, fim de semana, séries, planos — sem travar.",
  grammar:{ title:"Question tags e short answers",
    why:"Nativo não responde yes. Responde Yeah, totally / Not really / I guess so. E usa tags (right?, isn't it?) para manter a conversa viva.",
    drill:"Responda 15 perguntas com short answers naturais. Depois faça 10 perguntas com tags." },
  vocab:["small talk — conversa informal","catch up — colocar em dia","how's it going — como vai","what's up — e aí","not much — nada demais","same old — a mesma coisa","how was your weekend — como foi o fim de semana","any plans — algum plano","long weekend — feriado prolongado","weather — clima","commute — deslocamento","traffic — trânsito","lunch — almoço","coffee — café","break — pausa","gym — academia","workout — treino","series — série","movie — filme","sports — esportes","game — jogo","travel — viagem","vacation — férias","holiday — feriado","family — família","kids — filhos","dog — cachorro","cat — gato","apartment — apartamento","moving — mudança","neighborhood — bairro","restaurant — restaurante","recommendation — recomendação","heard about — ouviu falar de","did you see — você viu","have you tried — você já tentou","that reminds me — isso me lembra","speaking of — falando nisso","by the way — a propósito","anyway — de qualquer forma","gotta go — preciso ir","talk later — falamos depois","see you — até mais","take care — se cuida","have a good one — bom dia/boa noite","cheers — valeu","no worries — sem problema","sounds good — parece bom","for sure — com certeza","definitely — com certeza","totally — totalmente","I'm down — eu topo","count me in — conte comigo","I'll pass — dessa vez passo","maybe next time — talvez na próxima","let's do it — vamos fazer","keep me posted — me mantenha informado","hit me up — me chama","around — por perto, disponível","catch you later — até depois","hang out — sair","grab coffee — tomar um café","sync up — alinhar","off topic — fora do tema","quick question — pergunta rápida","sorry to bother — desculpe incomodar","do you have a sec — tem um minuto","heads down — focado","slammed — sobrecarregado","swamped — atolado","crazy week — semana louca"],
  resources:[
    {name:"Small talk in English", type:"YouTube", note:"Speak English with Vanessa / mmmEnglish"},
    {name:"All Ears English", type:"Podcast", note:"episódios de conexão e conversa casual"},
    {name:"The Office (US)", type:"Série", note:"melhor fonte de small talk de escritório"}
  ],
  content:["Vídeo: 20 perguntas de small talk e respostas naturais","Episódio de The Office com cena de copa","Áudio: você sustentando 3 min de conversa"],
  days:[
    {d:"Seg", title:"Input: small talk real", steps:[["Revisar cards","Anki",7],["Vídeo de small talk","YouTube",13],["Anotar 10 pares pergunta-resposta","notas",12],["Minerar 5 chunks","Anki",8]], out:"5 cards de conversa casual."},
    {d:"Ter", title:"Short answers + tags", steps:[["Revisar cards","Anki",7],["Drill: 15 short answers","Verb Gym",10],["Drill: 10 question tags","drill",13],["Gravar 90s de conversa consigo","celular",10]], out:"90s sem responder só yes/no."},
    {d:"Qua", title:"Extensivo + conexão", steps:[["Revisar cards","Anki",7],["Ouvir All Ears English","podcast",15],["Pausar 3x e reagir como em call","podcast",10],["Minerar 4 expressões","Anki",8]], out:"3 reações naturais de 20s."},
    {d:"Qui", title:"Roleplay de pré-reunião", steps:[["Revisar cards","Anki",7],["Roleplay: 5 min antes da call","ChatGPT voz",12],["Escrever 5 aberturas de conversa","caderno",10],["Correção com IA","IA",11]], out:"5 aberturas prontas para usar amanhã."},
    {d:"Sex", title:"Série + ritmo", steps:[["Revisar cards","Anki",7],["Cena de copa em The Office","Netflix",15],["Shadowing de 5 falas curtas","Netflix",10],["Minerar 3 cards","Anki",8]], out:"5 falas com entonação de conversa."},
    {d:"Sáb", title:"Output longo", steps:[["Revisar cards","Anki",7],["Preparar: meu fim de semana","notas",5],["Gravar 3 min de small talk sozinho","celular",20],["Transcrever e analisar","IA",8]], out:"3 min com 10 perguntas de volta."},
    {d:"Dom", title:"Revisão + barril", steps:[["Revisar cards","Anki",7],["Re-escuta do vídeo de segunda","YouTube",15],["Reler os 70 termos em voz alta","lista",10],["Repor o Barril da semana 19","Drive",8]], out:"Barril da semana 19 pronto."}
  ]
},
{
  n:19, phase:2,
  theme:"Planos, prazos e atrasos: falar de tempo como dev",
  goal:"Negociar prazo, avisar atraso e replanejar sem entrar em pânico — em inglês claro e educado.",
  grammar:{ title:"Futuro: will, going to e present continuous",
    why:"I'll do it (decisão agora), I'm going to do it (plano), I'm doing it tomorrow (agenda). A diferença muda o que o time entende por compromisso.",
    drill:"10 frases: 3 decisões imediatas, 4 planos, 3 compromissos agendados. Depois reagende 5 deles." },
  vocab:["plan — plano","schedule — cronograma","timeline — linha do tempo","deadline — prazo","milestone — marco","deliverable — entrega","roadmap — roteiro","quarter — trimestre","Q1 — primeiro trimestre","sprint — ciclo","iteration — iteração","release — lançamento","launch — lançamento","go live — entrar no ar","kick off — iniciar","wrap up — encerrar","postpone — adiar","push back — adiar","bring forward — antecipar","move up — antecipar","delay — atraso","on track — no prazo","at risk — em risco","behind — atrasado","ahead — adiantado","ETA — previsão","estimate — estimativa","ballpark — valor aproximado","rough estimate — estimativa grossa","firm deadline — prazo rígido","soft deadline — prazo flexível","hard stop — limite rígido","dependency — dependência","critical path — caminho crítico","resource — recurso","capacity — capacidade","bandwidth — disponibilidade","allocate — alocar","prioritize — priorizar","reprioritize — repriorizar","scope — escopo","scope creep — aumento descontrolado de escopo","MVP — produto mínimo viável","phase — fase","next phase — próxima fase","short term — curto prazo","long term — longo prazo","by Friday — até sexta","end of month — fim do mês","fiscal year — ano fiscal","holiday season — temporada de festas","blackout period — período bloqueado","code freeze — congelamento de código","launch date — data de lançamento","roll out — implementar","rollout — implementação","phased rollout — implementação gradual","pilot — piloto","beta — versão beta","GA — disponibilidade geral","post-launch — pós-lançamento","follow-up — acompanhamento","retrospective — retrospectiva","action item — item de ação","owner — responsável","commitment — compromisso","deliver on time — entregar no prazo","slip — escorregar (prazo)","overrun — estouro","contingency — contingência","buffer — margem"],
  resources:[
    {name:"Deadlines and estimates", type:"Podcast", note:"The Pragmatic Engineer — episódios de planejamento"},
    {name:"Exponent — project stories", type:"YouTube", note:"como contar projeto e prazo em entrevista"},
    {name:"Seu board real", type:"Ferramenta", note:"escreva seus tickets em inglês por 1 semana"}
  ],
  content:["Vídeo: como dar estimativa sem prometer demais","Episódio sobre scope creep","Texto: template de status report semanal"],
  days:[
    {d:"Seg", title:"Input: falar de prazos", steps:[["Revisar cards","Anki",7],["Vídeo sobre estimates","YouTube",13],["Repetir frases de prazo em voz alta","vídeo",12],["Minerar 5 chunks","Anki",8]], out:"5 cards de planejamento."},
    {d:"Ter", title:"Futuro na prática", steps:[["Revisar cards","Anki",7],["Drill: will / going to / present cont.","Verb Gym",10],["Shadowing do vídeo","YouTube",13],["Gravar seu plano da semana","celular",10]], out:"90s com 8 futuros diferentes."},
    {d:"Qua", title:"Extensivo + replanejamento", steps:[["Revisar cards","Anki",7],["Ouvir The Pragmatic Engineer","podcast",15],["Pausar 3x: como você replanejaria?","podcast",10],["Minerar 4 termos","Anki",8]], out:"3 replanejamentos falados de 40s."},
    {d:"Qui", title:"Roleplay: atraso", steps:[["Revisar cards","Anki",7],["Roleplay: avisar que vai atrasar","ChatGPT voz",12],["Escrever e-mail de status","caderno",10],["Correção com IA","IA",11]], out:"E-mail de atraso que não soa desculpa."},
    {d:"Sex", title:"Série + números de tempo", steps:[["Revisar cards","Anki",7],["Cena de planejamento em série","Netflix",15],["Drill: datas e trimestres em voz alta","drill",10],["Minerar 3 cards","Anki",8]], out:"20 datas e prazos falados sem erro."},
    {d:"Sáb", title:"Output longo", steps:[["Revisar cards","Anki",7],["Preparar: roadmap dos próximos 3 meses","notas",5],["Gravar 3 min apresentando o roadmap","celular",20],["Transcrever e analisar","IA",8]], out:"3 min com 6 formas de futuro."},
    {d:"Dom", title:"Revisão + barril", steps:[["Revisar cards","Anki",7],["Re-escuta do vídeo de segunda","YouTube",15],["Reler os 70 termos em voz alta","lista",10],["Repor o Barril da semana 20","Drive",8]], out:"Barril da semana 20 pronto."}
  ]
},
{
  n:20, phase:2,
  theme:"Pedir, oferecer e agradecer: a etiqueta que abre portas",
  goal:"Pedir favor, oferecer ajuda, agradecer e se desculpar no tom certo — sem parecer arrogante nem submisso.",
  grammar:{ title:"Modais de cortesia: could, would, may",
    why:"Could you e Would you mind são o padrão americano de pedido. Can you soa direto demais em contexto profissional.",
    drill:"Reescreva 12 pedidos diretos na versão educada. Depois faça 10 pedidos em voz alta com entonação suave." },
  vocab:["could you — você poderia","would you — você poderia","can I — posso","may I — posso (formal)","do you mind — você se importa","would you mind — você se importaria","I was wondering — eu queria saber","would it be possible — seria possível","I'd appreciate it — eu agradeceria","thanks in advance — obrigado desde já","much appreciated — muito agradecido","no problem — sem problema","happy to help — feliz em ajudar","my pleasure — o prazer é meu","anytime — sempre que precisar","sorry to bother you — desculpe incomodar","excuse me — com licença","pardon me — desculpe","after you — depois de você","go ahead — pode ir","feel free — fique à vontade","help yourself — sirva-se","make yourself at home — sinta-se em casa","let me know — me avise","keep me posted — me mantenha informado","I'll keep you in the loop — vou te manter informado","reach out — entrar em contato","follow up — dar seguimento","get back to — retornar","loop in — incluir","cc — copiar","forward — encaminhar","attach — anexar","confirm — confirmar","acknowledge — reconhecer recebimento","appreciate — agradecer, valorizar","grateful — grato","thank you so much — muito obrigado","thanks a lot — muito obrigado","cheers — valeu","you're welcome — de nada","don't mention it — imagina","it's nothing — não foi nada","glad to — feliz em","of course — claro","certainly — certamente","absolutely — com certeza","sure thing — claro","will do — farei","consider it done — considere feito","on it — já estou nisso","leave it with me — deixa comigo","I'll take care of it — eu cuido disso","let me handle it — deixa eu resolver","that's very kind — muito gentil","you shouldn't have — não precisava","I owe you one — te devo uma","I'll return the favor — retribuo","apologies — desculpas","my bad — foi mal","I'm sorry for the delay — desculpe o atraso","thanks for your patience — obrigado pela paciência","bear with me — tenha paciência","sorry for the confusion — desculpe a confusão","just to clarify — só para esclarecer","does that make sense — faz sentido","let me know if you have questions — qualquer dúvida, me avise","no rush — sem pressa","whenever you can — quando puder","please find attached — segue em anexo"],
  resources:[
    {name:"Politeness in English", type:"YouTube", note:"English with Lucy — could/would/may"},
    {name:"Business English Pod — requests", type:"Podcast", note:"episódios de pedidos e favores"},
    {name:"E-mails reais", type:"Documento", note:"reescreva 5 e-mails seus em inglês"}
  ],
  content:["Vídeo: como pedir favor sem parecer exigente","5 e-mails profissionais modelo","Áudio: você fazendo 10 pedidos"],
  days:[
    {d:"Seg", title:"Input: pedidos educados", steps:[["Revisar cards","Anki",7],["Vídeo sobre politeness","YouTube",13],["Repetir 10 pedidos em voz alta","vídeo",12],["Minerar 5 fórmulas","Anki",8]], out:"5 cards de cortesia."},
    {d:"Ter", title:"Modais + entonação", steps:[["Revisar cards","Anki",7],["Drill: 12 pedidos diretos → educados","Verb Gym",10],["Drill de entonação","Youglish",13],["Gravar 10 pedidos","celular",10]], out:"10 pedidos com entonação suave."},
    {d:"Qua", title:"Extensivo + e-mails", steps:[["Revisar cards","Anki",7],["Ouvir episódio de requests","Business English Pod",15],["Ler 3 e-mails modelo em voz alta","documento",10],["Minerar 4 expressões","Anki",8]], out:"3 e-mails lidos sem tropeçar."},
    {d:"Qui", title:"Roleplay + escrita", steps:[["Revisar cards","Anki",7],["Roleplay: pedir acesso a um sistema","ChatGPT voz",12],["Escrever 2 e-mails (pedido e agradecimento)","caderno",10],["Correção com IA","IA",11]], out:"2 e-mails prontos para enviar."},
    {d:"Sex", title:"Série + tom", steps:[["Revisar cards","Anki",7],["Cena de pedido/agradecimento","Netflix",15],["Drill: agradecer em 5 níveis","drill",10],["Minerar 3 cards","Anki",8]], out:"5 formas de agradecer sem repetir."},
    {d:"Sáb", title:"Output longo", steps:[["Revisar cards","Anki",7],["Preparar: 5 pedidos reais que você faria","notas",5],["Gravar 3 min encenando os 5","celular",20],["Transcrever e analisar","IA",8]], out:"5 pedidos reais prontos para usar."},
    {d:"Dom", title:"Revisão + barril", steps:[["Revisar cards","Anki",7],["Re-escuta do vídeo de segunda","YouTube",15],["Reler os 70 termos em voz alta","lista",10],["Repor o Barril da semana 21","Drive",8]], out:"Barril da semana 21 pronto."}
  ]
}
);
