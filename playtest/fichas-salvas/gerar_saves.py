import json, os, datetime, unicodedata, re

PROPK = ["ARRE","AGAR","CORT","CONT","DEFL","PERF","PROJ"]
def props(on): return {k: (k in on) for k in PROPK}
def arma(nome,tipo,equipado,categoria,alcance,dur,custoPA,dano,on):
    return {"nome":nome,"tipo":tipo,"equipado":equipado,"categoria":categoria,"alcance":alcance,
            "durabilidade":dur,"custoPA":custoPA,"dano":dano,"props":props(on)}
def prot(nome,rpa,rd,dur,reg): return {"nome":nome,"redPA":rpa,"redDano":rd,"durabilidade":dur,"regioes":reg,"equipada":True}
def item(it,q,pu,pt,eq=True): return {"equipado":eq,"item":it,"qtd":q,"pesoUnit":pu,"pesoTotal":pt}
def saude():
    # novo modelo: dano acumulado por membro (0–20), começa em 0
    return {k:0 for k in ["cabeca","tronco","bracoE","bracoD","pernaE","pernaD"]}
def tri(n):  # custo escalonado: 1+2+...+n
    n=max(0,int(n)); return n*(n+1)//2

# base exp, custo PA, atributo, efeito curto p/ habilidades
HAB = {
 "Quebrar guarda":(2,"1 PA + PA da arma","Físico","Força o inimigo a gastar a guarda levantada; metade do dano."),
 "Encontrão":(2,"1 PA + PA da arma","Físico","Corre 2 m e empurra o oponente; metade do dano."),
 "Atordoar":(4,"1 PA + PA da arma","Físico","Metade do dano e reduz PA do alvo de forma persistente (até descanso curto)."),
 "Investida":(3,"1 PA + PA da arma","Físico","Avança na direção do alvo ignorando engajamento e ataca."),
 "Ataques múltiplos & médios":(2,"1 PA","Físico","Muda de alvo com armas médias ignorando a desvantagem de ataques múltiplos."),
 "Ataques múltiplos & pesados":(3,"1 PA","Físico","Muda de alvo com armas pesadas ignorando a desvantagem de ataques múltiplos."),
 "Ataques múltiplos & leves":(1,"1 PA","Ágil","Muda de alvo com armas leves ignorando a desvantagem de ataques múltiplos."),
 "Golpe surpresa":(2,"1 PA + PA da arma","Ágil","Escondido, com arma leve: causa dado adicional de dano (1d4→1d10)."),
 "Ataques à distância concentrados":(2,"1 PA","Ágil","Mantém o alvo à distância ignorando a desvantagem de ataques múltiplos."),
 "Alcance à distância":(2,"2 PA + PA da arma","Ágil","Aumenta a área de alcance ideal da arma à distância."),
 "Alcance corpo a corpo":(2,"3 PA + PA da arma (reduz por nível)","Ágil","Aumenta o alcance ideal da arma corpo a corpo de longo alcance."),
 "Arremesso improvisado":(2,"1 PA","Ágil","Arremessa armas/objetos como se fossem armas de arremesso neste turno."),
 "Disparada":(2,"5 PA","Ágil","Movimento em linha reta (6–10 m por nível)."),
 "Analisar fraquezas":(1,"1 PA","Mental","Vê quanto dano o oponente recebeu em partes do corpo à escolha."),
 "Criar armadilha":(2,"1 PA","Mental","Depõe uma armadilha que prende e causa dano ao ser acionada."),
 "Confundir inimigo":(3,"4 PA","Mental","Desvantagem no próximo contrateste de defesa/esquiva de oponentes (até 6 m)."),
 "Intimidação generalizada":(3,"4 PA","Mental","Atrasa os turnos de oponentes em 1 posição (até 6 m)."),
 "Urro de Intimidação":(3,"4 PA","Mental","Atrasa muito o turno de um oponente (até 3 m)."),
 "Consumir":(4,"4 PA","Mental","Consome/desativa habilidades de um oponente."),
 "Recompor":(4,"4 PA","Mental","Recupera as próprias aptidões consumidas."),
 "Cura especializada":(3,"4 PA","Social","Cura dano superficial de um aliado adjacente (1d4→1d12)."),
 "Tratamento especializado":(4,"5 PA","Social","Trata dano profundo de um aliado adjacente (1d4→3d6)."),
 "Animar":(2,"2 PA","Social","Recupera aptidões consumidas de um aliado adjacente."),
 "Brado de guerra":(3,"2 PA","Social","Vantagem no próximo ataque de aliados a até 4 m."),
 "Grito de alerta":(3,"4 PA","Social","Vantagem no próximo contrateste de defesa/esquiva de aliados a até 4 m."),
 "Comandar":(2,"1 PA","Social","Transfere pontos de ação do seu próximo turno para um aliado."),
 "Revigorar":(2,"2 PA","Social","Reativa uma habilidade de um aliado."),
 "Revitalizar":(4,"7 PA","Social","Traz um aliado inconsciente à consciência e faz um tratamento automático."),
}
# base exp, atributo, efeito p/ traços (maestrias, técnicas, aspectos)
TRC = {
 "Maestria em armas contundentes":(1,"—","Ativa a propriedade contundente: cada acerto reduz PA do alvo (leve −1, média −2, pesada −3)."),
 "Maestria em armas cortantes":(1,"—","Ativa a propriedade cortante: ataque de oportunidade quando o alvo SAI do alcance ideal."),
 "Maestria em armas perfurantes":(1,"—","Ativa a propriedade perfurante: ataque de oportunidade quando o alvo ENTRA no alcance ideal."),
 "Maestria em armas versáteis":(1,"—","Alterna a empunhadura sem gastar PA (+1d4 a duas mãos)."),
 "Maestria em projéteis":(1,"—","Ignora barreiras no caminho do alvo; recarregar não custa PA ao acertar."),
 "Maestria em armaduras leves":(1,"—","Domínio de armaduras leves."),
 "Maestria em armaduras médias":(1,"—","Domínio de armaduras médias."),
 "Maestria em armaduras pesadas":(1,"—","Domínio de armaduras pesadas."),
 "Técnica em Esconder-se":(1,"Ágil","Anula a desvantagem natural para esconder-se."),
 "Técnica em Realizar truques":(1,"Ágil/Social","Anula a desvantagem natural para realizar truques."),
 "Técnica em Saltar":(1,"Ágil","Anula a desvantagem natural para saltar."),
 "Técnica em Nadar":(1,"Ágil","Anula a desvantagem natural para nadar."),
 "Técnica em Ponderar":(1,"Mental","Anula a desvantagem natural para ponderar."),
 "Técnica em Investigar/Observar":(1,"Mental","Anula a desvantagem natural para investigar/observar."),
 "Técnica em Tratar/Curar":(3,"Social/Mental","Anula a desvantagem natural para tratar/curar."),
 "Técnica em Persuadir/Seduzir":(1,"Social","Anula a desvantagem natural para persuadir/seduzir."),
 "Emboscador":(4,"—","Pelas costas, escondido, com arma leve: dobra o resultado do dano."),
 "Saltador":(3,"—","Salto sobe de 5 m para 10 m (requer Técnica em Saltar)."),
 "Reativo":(4,"—","Ataque de oportunidade quando um oponente sai do seu alcance ideal (guarda levantada)."),
 "Lépido":(3,"—","Recua 1 m após acertar com arma de longo alcance."),
 "Corredor":(8,"—","Dobra o teto de PA usado no deslocamento."),
 "Maratonista":(4,"—","Dobra o movimento correndo em linha reta (≥5 PA, sem peso pesado)."),
 "Escorregadio":(4,"—","+1d10 para esquivar de ataques de oportunidade (sem armadura média/pesada)."),
 "Empacado":(2,"—","Reduz movimentação forçada pela metade."),
 "Resistente":(3,"—","Reduz o dano recebido pela metade (guarda + armadura média/pesada)."),
 "Protetor":(4,"—","Desvia para si o dano de um aliado adjacente (requer escudo)."),
 "Blindado":(4,"—","+1d10 para defender ataques à distância com escudo."),
 "Alerta":(4,"—","Ataque de oportunidade quando um oponente entra no seu alcance ideal (guarda levantada)."),
 "Firme":(4,"—","Usa arma pesada com uma mão (−3 dano)."),
 "Firme aprimorado":(4,"—","Remove a redução do Firme: arma pesada numa mão sem penalidade (requer Firme)."),
 "Burro de carga":(6,"—","Carrega um aliado agarrado sem gastar PA extra."),
 "Apoiador":(4,"—","Usa aptidões nos testes de um aliado adjacente."),
}
def H(nome,nivel):
    base,custo,atr,ef = HAB[nome]
    usos=[0,0,0,0,0]; usos[nivel-1]=1
    return {"tipo":"Habilidade","nome":nome,"efeito":ef,"requisitos":"","atributo":atr,
            "valorCompra":f"{base} exp.","custoPA":custo,"usosPorNivel":usos,"nivel":nivel}  # base unitario (nv1); total = base*nivel
def T(nome):
    base,atr,ef = TRC[nome]
    return {"tipo":"Traço","nome":nome,"efeito":ef,"requisitos":"","atributo":atr,
            "valorCompra":f"{base} exp.","custoPA":"—","usosPorNivel":[0,0,0,0,0],"nivel":1}

def apt(f=0,a=0,m=0,s=0):
    return {"fisica":{"total":str(f) if f else "","usado":""},
            "agil":{"total":str(a) if a else "","usado":""},
            "mental":{"total":str(m) if m else "","usado":""},
            "social":{"total":str(s) if s else "","usado":""}}

def pa(red_arm=0,comprado=0,total=10,outros=0):
    # 'comprado' = PA adquiridos com exp (entram na base, a partir de 10); 'outros' = modificador avulso
    return {"base":str(10+comprado),"redArmadura":(str(red_arm) if red_arm else "0"),"redDano":"0",
            "redCarga":"0","outros":(f"+{outros}" if outros else "0"),"total":str(total)}

def build(fname, nome, cenario, budget, aptd, pontos, armas, protec, equip, cars, anot, rules="vigente"):
    f=int(aptd["fisica"]["total"] or 0)+int(aptd["agil"]["total"] or 0)+int(aptd["mental"]["total"] or 0)+int(aptd["social"]["total"] or 0)
    nhab=sum(1 for c in cars if c["tipo"]=="Habilidade")
    ntrc=sum(1 for c in cars if c["tipo"]=="Traço")
    data={
      "info":{"nome":nome,"jogador":"","cenario":cenario,"ultimaSessao":""},
      "exp":{"baseTotal":str(budget),"baseUsada":str(budget),"qtdAptidoes":str(f),
             "qtdHabilidades":str(nhab),"qtdTracos":str(ntrc)},
      "aptidoes":aptd,"pa":pontos,"armas":armas,"protecoes":protec,"saude":saude(),
      "fadiga":0,"guardas":"0","equipamentos":equip,
      "carga":{"capacidade":"","carregado":""},
      "tesouro":[{"label":"Moedas","valor":""},{"label":"","valor":""},{"label":"","valor":""},{"label":"","valor":""}],
      "caracteristicas":cars,"anotacoes":anot}
    payload={"app":"marca-de-sangue-ficha","schemaVersion":1,"rulesVersion":rules,
             "salvoEm":datetime.datetime.now().isoformat(),"data":data}
    with open(f"/tmp/fichas/{fname}.mds.json","w",encoding="utf-8") as fh:
        json.dump(payload,fh,ensure_ascii=False,indent=2)
    return fname, len(cars), f

print("helpers ok")

results=[]
def mk(*a,**k):
    r=build(*a,**k); results.append(r)

# ---------- Cenário 1 — Medieval — A Brecha na Muralha (15 exp) ----------
C1="Cenário 1 — A Brecha na Muralha (Medieval)"
mk("01-medieval-15exp-gunnar","Gunnar, o Escudeiro",C1,15,
   apt(f=3), pa(-2,0,8),
   [arma("Maça","Média · versátil","Mão hábil","Contundente/Perfurante","1 m","","4","2d4 CONT · 1d6 PERF",["CONT","PERF"])],
   [prot("Escudo pequeno (leve · guarda 2 PA)","-1","-1","10",[]),
    prot("Peitoral leve","-1","-1","10",["tronco"])],
   [item("Maça","1","",""),item("Escudo pequeno","1","",""),item("Peitoral leve","1","","")],
   [T("Maestria em armas contundentes"),T("Maestria em armaduras leves"),
    H("Atordoar",1),H("Encontrão",1)],
   "Mão hábil: direita. Muro da brecha: maça contundente (−2 PA/acerto) + Atordoar; Encontrão para repelir; guarda + 3 aptidões físicas.")

mk("01-medieval-15exp-elina","Elina, a Arqueira",C1,15,
   apt(a=3,f=1), pa(0,0,10),
   [arma("Arco curto","Leve · à distância","Duas mãos","Projétil","6–9 m","","2","1d4 (flecha)",["PROJ"]),
    arma("Faca (reserva)","Leve","Mão hábil","Cortante/Perfurante","1 m","","2","1d4",["CORT","PERF","ARRE"])],
   [],
   [item("Arco curto","1","",""),item("Flechas ponta de madeira","20","",""),item("Faca","1","","")],
   [T("Maestria em projéteis"),H("Ataques à distância concentrados",2),
    H("Alcance à distância",1),T("Técnica em Investigar/Observar")],
   "Mão hábil: direita. Fica no fundo; ~5 tiros/turno (arco 2 PA); foca quem vai passar pela brecha; aptidões ágeis para os acertos decisivos.")

mk("01-medieval-15exp-bras","Brás, o Lanceiro",C1,15,
   apt(f=3), pa(-1,0,9),
   [arma("Lança","Média · longo alcance","Mão hábil","Perfurante","2 m","","4","1d6",["PERF","ARRE"])],
   [prot("Peitoral leve","-1","-1","10",["tronco"])],
   [item("Lança","1","",""),item("Peitoral leve","1","","")],
   [T("Maestria em armas perfurantes"),T("Maestria em armaduras leves"),
    H("Investida",2)],
   "Mão hábil: direita. Alcance 2 m: perfurante pune quem ENTRA; sair do engajamento já provoca AoO (regra nova); Investida fura a guarda; segura a lateral da brecha. 3 aptidões físicas.")

# ---------- Cenário 2 — Mukashi — O Selo do Templo (30 exp) ----------
C2="Cenário 2 — O Selo do Templo (Mukashi)"
mk("02-mukashi-30exp-kaede","Kaede, a Shinobi",C2,30,
   apt(a=4,f=1), pa(0,0,10),
   [arma("Kunai","Leve · acuidade","Mão hábil","Cortante/Perfurante","1 m","","2","1d4",["CORT","PERF","ARRE"]),
    arma("Shuriken","Leve · arremesso","Mão inábil","Perfurante","2–5 m","","2","1d4",["ARRE","PERF"])],
   [],
   [item("Kunai","1","",""),item("Shuriken","5","","")],
   [T("Técnica em Esconder-se"),T("Técnica em Realizar truques"),T("Técnica em Saltar"),
    T("Maestria em armas cortantes"),T("Emboscador"),H("Golpe surpresa",3),
    H("Ataques múltiplos & leves",2),T("Saltador")],
   "Mão hábil: direita. Ataca pelas costas, escondida: Emboscador (dobra) + Golpe surpresa (+1d8) derruba sentinela num golpe. Saltar vence muros/lago.")

mk("02-mukashi-30exp-takeshi","Takeshi, o Ronin",C2,30,
   apt(f=3,a=2), pa(-1,0,9),
   [arma("Katana","Média · versátil · longo alcance","Duas mãos","Cortante/Perfurante","1–2 m","","4","1d8 CORT · 1d6 PERF (+1d4 a 2 mãos)",["CORT","PERF"])],
   [prot("Peitoral leve","-1","-1","10",["tronco"])],
   [item("Katana","1","",""),item("Peitoral leve","1","","")],
   [T("Maestria em armas cortantes"),T("Maestria em armas perfurantes"),T("Maestria em armas versáteis"),
    T("Maestria em armaduras leves"),H("Ataques múltiplos & médios",2),H("Investida",1),
    T("Lépido"),T("Técnica em Ponderar")],
   "Mão hábil: direita. Katana a 2 mãos (+1d4); alterna cortante/perfurante; Investida fura engajamento; Lépido para bater e recuar. 4 maestrias pesam no orçamento (custo escalonado).")

mk("02-mukashi-30exp-haruko","Haruko, a Curandeira",C2,30,
   apt(s=4,m=1), pa(0,0,10),
   [arma("Bastão médio","Média · versátil","Duas mãos","Contundente","1 m","","4","2d4 (+1d4 a 2 mãos)",["CONT"])],
   [],
   [item("Bastão médio","1","","")],
   [T("Técnica em Tratar/Curar"),T("Técnica em Ponderar"),H("Cura especializada",2),
    H("Animar",1),H("Brado de guerra",1),H("Comandar",2)],
   "Mão hábil: direita. Fica atrás: Comandar dá PA à Kaede; Brado garante o acerto da emboscada; cura fora/dentro; Animar recarrega aptidões dela.")

mk("02-mukashi-30exp-jiro","Jiro, o Arqueiro Yumi",C2,30,
   apt(a=5), pa(0,0,10),
   [arma("Arco composto","Média · à distância","Duas mãos","Projétil","7–10 m","","4","1d4 (flecha de ferro)",["PROJ"]),
    arma("Adaga (reserva)","Leve","Mão hábil","Cortante/Perfurante","1 m","","2","1d4",["CORT","PERF","ARRE"])],
   [],
   [item("Arco composto","1","",""),item("Flechas ponta de ferro","20","",""),item("Adaga","1","","")],
   [T("Maestria em projéteis"),H("Ataques à distância concentrados",3),H("Alcance à distância",2),
    T("Técnica em Esconder-se"),T("Técnica em Investigar/Observar"),H("Analisar fraquezas",2)],
   "Mão hábil: direita. Cobertura à distância: Projéteis ignora barreiras; Analisar fraquezas para mirar; fica escondido.")

# ---------- Cenário 3 — Colapso — Correr no Ferro-Velho (50 exp) ----------
C3="Cenário 3 — Correr no Ferro-Velho (Colapso)"
mk("03-colapso-50exp-vera","Vera, a Batedora",C3,50,
   apt(a=18,f=4), pa(0,0,10),
   [arma("Machadinha","Média · arremesso","Mão hábil","Cortante","1 m / 2–4 m","","4","1d8",["CORT","ARRE"]),
    arma("Faca (reserva)","Leve","Mão inábil","Cortante/Perfurante","1 m","","2","1d4",["CORT","PERF","ARRE"])],
   [],
   [item("Machadinha","1","",""),item("Faca","1","","")],
   [T("Corredor"),T("Maratonista"),H("Disparada",3),T("Técnica em Saltar"),T("Saltador"),
    T("Técnica em Nadar"),T("Escorregadio"),H("Ataques múltiplos & leves",1)],
   "Mão hábil: direita. A mais rápida: Corredor+Maratonista+Disparada atravessam o mapa; Escorregadio anula oportunidade ao fugir; serve de isca.")

mk("03-colapso-50exp-doc","Doc, o Sucateiro-Médico",C3,50,
   apt(s=9,m=8), pa(0,0,10),
   [arma("Bastão médio","Média · versátil","Duas mãos","Contundente","1 m","","4","2d4",["CONT"]),
    arma("Funda","Leve · à distância","Mão hábil","Projétil","4–7 m","","2","2 (pedra)",["PROJ"])],
   [],
   [item("Bastão médio","1","",""),item("Funda","1","",""),item("Pedras","10","","")],
   [T("Técnica em Tratar/Curar"),T("Técnica em Investigar/Observar"),H("Cura especializada",3),
    H("Tratamento especializado",1),H("Criar armadilha",3),H("Comandar",3),H("Revigorar",2)],
   "Mão hábil: direita. Nega terreno: Criar armadilha trava perseguidores; Comandar dá PA para fugir; cura quem cai. Compra tempo.")

mk("03-colapso-50exp-muro","\"Muro\", a Retaguarda",C3,50,
   apt(f=15), pa(-4,0,6),
   [arma("Martelo grande","Pesada · longo alcance","Duas mãos","Contundente","1–2 m","","6","3d4",["CONT"])],
   [prot("Peitoral médio","-2","-2","25",["tronco"]),
    prot("Escudo médio (guarda 3 PA)","-2","-2","15",[])],
   [item("Martelo grande","1","",""),item("Peitoral médio","1","",""),item("Escudo médio","1","","")],
   [T("Maestria em armas contundentes"),T("Maestria em armaduras médias"),T("Resistente"),
    T("Empacado"),T("Reativo"),H("Atordoar",3),H("Encontrão",2),H("Quebrar guarda",1),T("Burro de carga")],
   "Mão hábil: direita. Tampão no gargalo: martelo contundente (−3 PA) + Atordoar atrasam o bando; Resistente aguenta; Empacado não é empurrado; carrega ferido (Burro de carga). PA baixo (6): administre.")

# ---------- Cenário 4 — Medieval — A Escolta da Chama (70 exp) ----------
C4="Cenário 4 — A Escolta da Chama (Medieval)"
mk("04-medieval-70exp-roland","Ser Roland, o Guardião",C4,70,
   apt(f=25), pa(-4,1,7),
   [arma("Espada longa","Média · versátil · longo alcance","Mão hábil","Cortante/Perfurante","1–2 m","","4","1d8 CORT · 1d6 PERF (+1d4 a 2 mãos)",["CORT","PERF"])],
   [prot("Peitoral médio","-2","-2","25",["tronco"]),
    prot("Escudo grande (média · guarda 3 PA)","-2","-2","20",[])],
   [item("Espada longa","1","",""),item("Peitoral médio","1","",""),item("Escudo grande","1","","")],
   [T("Maestria em armaduras pesadas"),T("Maestria em armaduras médias"),T("Maestria em armas cortantes"),
    T("Maestria em armas contundentes"),T("Maestria em armas versáteis"),T("Protetor"),T("Resistente"),
    T("Blindado"),T("Reativo"),T("Alerta"),T("Firme"),T("Empacado"),
    H("Quebrar guarda",2),H("Encontrão",3)],
   "Mão hábil: direita (+1 PA comprado). Escudo vivo: Protetor intercepta golpes no Arauto, Resistente corta pela metade; Blindado apara flechas; Alerta+Reativo punem quem se aproxima; Encontrão joga da ponte.")

mk("04-medieval-70exp-isolde","Dame Isolde, a Comandante",C4,70,
   apt(s=18,m=4), pa(-2,0,8),
   [arma("Sabre","Média · versátil · longo alcance","Mão hábil","Cortante/Perfurante","1–2 m","","4","1d8 CORT · 1d6 PERF (+1d4 a 2 mãos)",["CORT","PERF"])],
   [prot("Peitoral leve","-1","-1","10",["tronco"]),
    prot("Escudo pequeno (leve · guarda 2 PA)","-1","-1","10",[])],
   [item("Sabre","1","",""),item("Peitoral leve","1","",""),item("Escudo pequeno","1","","")],
   [H("Grito de alerta",3),H("Brado de guerra",3),H("Comandar",4),T("Apoiador"),
    H("Confundir inimigo",3),H("Intimidação generalizada",2),T("Maestria em armaduras leves"),
    T("Maestria em armas cortantes"),T("Técnica em Persuadir/Seduzir")],
   "Mão hábil: direita. Cérebro: Comandar dá PA ao Arauto; Grito de alerta blinda a formação; Confundir/Intimidação desmontam a emboscada; Apoiador empresta aptidões ao NPC.")

mk("04-medieval-70exp-gareth","Gareth, o Lanceiro de Formação",C4,70,
   apt(f=26), pa(-2,0,8),
   [arma("Alabarda","Pesada · longo alcance","Duas mãos","Perfurante","2–3 m","","6","1d8",["PERF"])],
   [prot("Peitoral médio","-2","-2","25",["tronco"])],
   [item("Alabarda","1","",""),item("Peitoral médio","1","","")],
   [T("Maestria em armas perfurantes"),T("Maestria em armaduras médias"),T("Reativo"),T("Alerta"),
    H("Alcance corpo a corpo",3),H("Investida",3),H("Ataques múltiplos & pesados",2),
    H("Encontrão",3),H("Quebrar guarda",1),T("Empacado"),T("Resistente")],
   "Mão hábil: direita. Muralha móvel: alcance 2–3 m + perfurante + Reativo + Alerta = anel de ameaça ao redor do Arauto; Encontrão empurra pra fora da ponte.")

mk("04-medieval-70exp-lyra","Lyra, a Batedora-Arqueira",C4,70,
   apt(a=24,m=10), pa(-1,1,10),
   [arma("Arco longo","Pesada · à distância","Duas mãos","Projétil","8–12 m","","6","1d4 (flecha de ferro)",["PROJ"]),
    arma("Adaga (reserva)","Leve","Mão hábil","Cortante/Perfurante","1 m","","2","1d4",["CORT","PERF","ARRE"])],
   [prot("Peitoral leve","-1","-1","10",["tronco"])],
   [item("Arco longo","1","",""),item("Flechas ponta de ferro","20","",""),item("Adaga","1","",""),item("Peitoral leve","1","","")],
   [T("Maestria em projéteis"),T("Maestria em armaduras leves"),H("Ataques à distância concentrados",4),
    H("Alcance à distância",3),H("Analisar fraquezas",3),H("Confundir inimigo",2),H("Disparada",2),
    T("Técnica em Investigar/Observar"),T("Técnica em Esconder-se")],
   "Mão hábil: direita (+1 PA comprado). Contra-artilharia: alcance 12 m elimina o Arqueiro inimigo; Analisar fraquezas + Confundir; Disparada busca elevação.")

# ---------- Cenário 5 — Épico — O Coração do Colosso (100 exp) ----------
C5="Cenário 5 — O Coração do Colosso (Épico)"
mk("05-epico-100exp-thorne","Thorne, o Quebra-Colosso",C5,100,
   apt(f=9), pa(-5,3,8),
   [arma("Martelo de batalha","Pesada · longo alcance","Uma mão (Firme apr.) + escudo","Contundente","1–2 m","","6","3d4",["CONT"]),
    arma("Machado de batalha (reserva)","Pesada","Duas mãos","Cortante","1–2 m","","6","1d12",["CORT"])],
   [prot("Peitoral pesado","-3","-3","50",["tronco"]),
    prot("Escudo médio (guarda 3 PA)","-2","-2","15",[])],
   [item("Martelo de batalha","1","",""),item("Machado de batalha","1","",""),item("Peitoral pesado","1","",""),item("Escudo médio","1","","")],
   [T("Maestria em armaduras pesadas"),T("Maestria em armaduras médias"),T("Maestria em armas contundentes"),
    T("Maestria em armas cortantes"),T("Firme"),T("Firme aprimorado"),T("Resistente"),T("Blindado"),
    T("Protetor"),T("Reativo"),T("Alerta"),T("Empacado"),H("Atordoar",5),H("Quebrar guarda",2),H("Encontrão",2)],
   "Mão hábil: direita (+3 PA comprados). Âncora: Firme aprimorado = martelo pesado numa mão + escudo; Atordoar nv5 (−5 PA) + maestria contundente (−3) estrangulam o Colosso; Protetor+Resistente salvam aliados da Esmagada.")

mk("05-epico-100exp-syla","Syla, a Assassina",C5,100,
   apt(a=34,f=6,m=1), pa(0,0,10),
   [arma("Adaga (mão hábil)","Leve","Mão hábil","Cortante/Perfurante","1 m","","2","1d4",["CORT","PERF","ARRE"]),
    arma("Adaga (mão inábil)","Leve","Mão inábil","Cortante/Perfurante","1 m","","2","1d4",["CORT","PERF","ARRE"])],
   [],
   [item("Adaga","2","","")],
   [T("Técnica em Esconder-se"),T("Técnica em Realizar truques"),T("Técnica em Saltar"),T("Saltador"),
    T("Maestria em armas cortantes"),T("Maestria em armas perfurantes"),T("Emboscador"),T("Escorregadio"),
    H("Golpe surpresa",4),H("Ataques múltiplos & leves",5),H("Disparada",5),H("Investida",4),
    H("Analisar fraquezas",4),H("Arremesso improvisado",2)],
   "Mão hábil: direita. Pico de dano: Disparada/Investida até as costas; Emboscador (dobra) + Golpe surpresa (+1d10). Foca o braço; ao expor, muda pro Núcleo. Escorregadio foge dos Fragmentos.")

mk("05-epico-100exp-neriss","Neriss, a Tática de Batalha",C5,100,
   apt(m=25,a=4), pa(-1,0,9),
   [arma("Besta leve","Média · à distância","Duas mãos","Projétil","7–10 m","","4","1d4 (virote)",["PROJ"])],
   [prot("Peitoral leve","-1","-1","10",["tronco"])],
   [item("Besta leve","1","",""),item("Virotes","20","",""),item("Peitoral leve","1","","")],
   [H("Consumir",3),H("Confundir inimigo",4),H("Intimidação generalizada",4),H("Urro de Intimidação",3),
    H("Criar armadilha",4),H("Analisar fraquezas",3),H("Recompor",2),T("Maestria em projéteis"),
    H("Ataques à distância concentrados",2),T("Técnica em Investigar/Observar"),T("Técnica em Ponderar")],
   "Mão hábil: direita. Controle: Confundir dá desvantagem na defesa do Colosso (todos acertam mais); Intimidação/Urro atrasam o chefe; Consumir desliga o Tremor; Recompor recarrega aptidões; armadilhas nos Fragmentos.")

mk("05-epico-100exp-albrecht","Albrecht, o Cantor de Guerra",C5,100,
   apt(s=16), pa(0,0,10),
   [arma("Bastão médio","Média · versátil","Duas mãos","Contundente","1 m","","4","2d4 (+1d4 a 2 mãos)",["CONT"])],
   [],
   [item("Bastão médio","1","","")],
   [T("Técnica em Tratar/Curar"),H("Cura especializada",5),H("Tratamento especializado",4),
    H("Revitalizar",3),H("Brado de guerra",4),H("Grito de alerta",4),H("Comandar",3),
    H("Animar",2),T("Apoiador")],
   "Mão hábil: direita. Fôlego do grupo: Grito de alerta blinda contra a área do chefe; Brado prepara o burst; Revitalizar ressuscita; Tratamento desfaz dano profundo; Animar recarrega Neriss/Syla.")

# ---------- Cenário 6 — Colapso — O Vale dos Atiradores (50 exp) — TESTE DE COBERTURA ----------
C6="Cenário 6 — O Vale dos Atiradores (Colapso)"
mk("06-colapso-50exp-fio","Fio, a Franco-atiradora",C6,50,
   apt(a=5,m=2,f=1), pa(0,0,10),
   [arma("Rifle","Pesada · à distância","Duas mãos","Projétil","3–20 m","","6","1d8 (bala)",["PROJ"]),
    arma("Pistola simples (reserva)","Leve · à distância","Coldre","Projétil","2–15 m","","2","1d8 (bala)",["PROJ"])],
   [],
   [item("Rifle","1","",""),item("Balas de pólvora","20","",""),item("Pistola simples","1","","")],
   [T("Maestria em projéteis"),T("Técnica em Esconder-se"),T("Lépido"),T("Escorregadio"),
    H("Ataques à distância concentrados",4),H("Alcance à distância",3),H("Analisar fraquezas",4),H("Disparada",2)],
   "Mão hábil: direita. Contra-atiradora: da cobertura completa, levanta guarda e só sai para atirar (atirar expõe até a próxima guarda). Analisar + concentrados afunilam um Olho de Chumbo por vez; Lépido volta pra trás da cobertura.")

mk("06-colapso-50exp-brecha","Brecha, o Assaltante",C6,50,
   apt(a=5,f=3,m=1), pa(0,0,10),
   [arma("Espingarda","Média · à distância","Duas mãos","Projétil","1–5 m","","4","1d8 (bala)",["PROJ"]),
    arma("Faca (reserva)","Leve","Cinto","Cortante/Perfurante","1 m","","2","1d4",["CORT","PERF"])],
   [],
   [item("Espingarda","1","",""),item("Balas de pólvora","16","",""),item("Faca","1","","")],
   [T("Maestria em projéteis"),T("Escorregadio"),T("Empacado"),
    H("Disparada",3),H("Investida",3),H("Ataques à distância concentrados",2),H("Arremesso improvisado",1)],
   "Mão hábil: direita. Ponta de lança: Disparada cruza os vãos expostos num lance; quando os Cães emboscam, Investida leva até eles e a espingarda de perto limpa o corredor, poupando o resto de largar a cobertura.")

mk("06-colapso-50exp-torre","\"Torre\", a Barricada",C6,50,
   apt(f=5,a=1), pa(-4,0,6),
   [arma("Martelo médio","Média · versátil","Mão hábil","Contundente","1 m","","4","2d4 (+1d4 a 2 mãos)",["CONT"]),
    arma("Pistola simples (reserva)","Leve · à distância","Coldre","Projétil","2–15 m","","2","1d8 (bala)",["PROJ"])],
   [prot("Peitoral médio","-2","-2","25",["tronco"]),
    prot("Escudo médio (guarda 3 PA)","-2","-2","15",[])],
   [item("Martelo médio","1","",""),item("Peitoral médio","1","",""),item("Escudo médio","1",""," "),item("Pistola simples","1","","")],
   [T("Maestria em armaduras médias"),T("Maestria em armas contundentes"),T("Blindado"),T("Resistente"),
    T("Protetor"),T("Empacado"),H("Atordoar",3),H("Encontrão",2),H("Quebrar guarda",1)],
   "Mão hábil: direita. Cobertura ambulante: escudo + Blindado dão defesa contra os tiros de cima para quem está atrás; enfrenta os Cães de perto (Atordoar/Encontrão) enquanto Fio/Brecha cuidam dos espinhaços; Protetor salva aliado exposto. PA 6: administre.")

mk("06-colapso-50exp-eco","Eco, o Coiote",C6,50,
   apt(s=5), pa(0,0,10),
   [arma("Pistola simples","Leve · à distância","Mão hábil","Projétil","2–15 m","","2","1d8 (bala)",["PROJ"]),
    arma("Faca (reserva)","Leve","Cinto","Cortante/Perfurante","1 m","","2","1d4",["CORT","PERF"])],
   [],
   [item("Pistola simples","1","",""),item("Balas de pólvora","12","",""),item("Kit de primeiros socorros","1","",""),item("Faca","1","","")],
   [T("Técnica em Investigar/Observar"),T("Técnica em Realizar truques"),T("Apoiador"),
    H("Comandar",3),H("Criar armadilha",3),H("Cura especializada",2),H("Confundir inimigo",3),H("Analisar fraquezas",2)],
   "Mão hábil: direita. Maestro: Comandar empurra PA para quem cruza um vão exposto; Criar armadilha recebe os Cães na boca da manilha; Confundir estraga o tiro de um atirador sobre um aliado sem cobertura; Cura levanta quem apanhar.")

# ---------- verificação de exp ----------
print("\n=== verificação de exp por ficha ===")
allok=True
for r in results:
    fname,_,_ = r
    p=json.load(open(f"/tmp/fichas/{fname}.mds.json",encoding="utf-8"))
    d=p["data"]; budget=int(d["exp"]["baseTotal"])
    # aptidões: custo escalonado por atributo (triangular)
    total=sum(tri(int(v["total"] or 0)) for v in d["aptidoes"].values())
    maestrias=0
    for c in d["caracteristicas"]:
        nome=c["nome"].strip()
        if not nome: continue
        if c["tipo"]=="Habilidade":
            total+=HAB[nome][0]*c["nivel"]
        elif nome.lower().startswith("maestria"):
            maestrias+=1
        else:
            total+=TRC[nome][0]
    total+=tri(maestrias)  # maestrias escalonadas pela quantidade total
    n=int(d["pa"]["base"])-10
    if n>0: total+=5*n*(n+1)//2
    ok = total==budget
    allok = allok and ok
    print(f"  {'OK ' if ok else 'ERRO'} {fname:<34} exp={total:>3} / {budget}")
print("\nRESULTADO:", "TODAS AS 18 FICHAS OK" if allok else "HÁ FICHAS COM EXP ERRADO")
print("arquivos:", len(results))
