---
titulo: Lista de veículos
tipo: regra
cenario: modulo
modulo: veiculos
status: estavel
tags: [modulo, veiculos, categorias, integridade, listas]
atualizado-em: 2026-08-15
---

# Lista de veículos — categorias e valores-base

As categorias do [módulo de veículos](../README.md). Elas definem o
[dano de colisão](../README.md#dano-de-colisão) e servem de **molde** para montar um veículo
concreto: o cenário (ou o narrador) parte destes valores e ajusta o que fizer sentido para a
máquina específica.

## As partes de um veículo

Todo veículo tem **cinco partes + o propulsor**. Cada uma tem integridade própria; o dano que excede
uma parte transborda para o **Propulsor**, e o que excede o Propulsor divide-se entre os ocupantes.

| Parte | O que é | Observação |
|---|---|---|
| **Frente** | Capô, para-choque dianteiro, grade | A parte atingida numa colisão frontal |
| **Traseira** | Porta-malas, para-choque traseiro, caçamba | Onde costuma ficar o bagageiro |
| **Lateral esquerda** | Portas e chapas do lado esquerdo | |
| **Lateral direita** | Portas e chapas do lado direito | |
| **Locomoção** | Pneus, rodas, eixos, esteiras, patas, velas ou outro conjunto que permite deslocamento | Ao zerar, impede acelerar e deixa o veículo *Desgovernado* |
| **Propulsor** | Motor, força motriz, núcleo mágico ou outro componente central | **Não** se repara sem [peças comuns](../README.md#peças-de-reposição--o-insumo-de-reparo); ao zerar, o excedente vai aos ocupantes |

A parte atingida por um ataque mirado é escolha de quem ataca; numa colisão, é a parte voltada
para o impacto, definida pela [orientação](../README.md#orientação) dos dois veículos.

Uma parte externa zerada deixa de absorver dano: novos danos recebidos nela seguem diretamente ao
Propulsor. Um cenário pode dar nomes próprios às partes — no Colapso, por exemplo, *Locomoção
comprometida* pode aparecer como *Pneu furado*.

## Categorias

| Categoria | Exemplos | Velocidade máx. | Propulsor | Integridade por parte | Ocupantes | Slots de equip. | Combustível |
|---|---|:--:|:--:|:--:|:--:|:--:|:--:|
| **Sem motor** | Bicicleta, carroça, reboque, charrete | 20 m/t | — | 5 | 1–2 | 1 | — |
| **A** | Moto, triciclo, buggy | 80 m/t | 10 | 8 | 1–2 | 2 | 4 |
| **B** | Carro de passeio, picape leve | 70 m/t | 15 | 12 | 4 | 3 | 6 |
| **C** | Van, 4×4, picape pesada | 60 m/t | 20 | 16 | 6 | 4 | 8 |
| **D** | Caminhão, ônibus | 50 m/t | 25 | 20 | 8 | 6 | 12 |
| **E** | Carreta, blindado, máquina de guerra | 40 m/t | 30 | 25 | 10 | 8 | 16 |

**Como ler:**

- **Velocidade máx.** — o teto que o veículo alcança acelerando. Quanto maior o porte, menor a
  velocidade e maior a massa: é a troca que a [matriz de colisão](../README.md#dano-de-colisão) já
  expressa (o pesado destrói o leve).
- **Propulsor** — a integridade do componente que produz ou transmite movimento. Em veículos
  comuns, é o motor; o valor 20 da categoria **C** ancora a progressão das demais categorias.
- **Integridade por parte** — vale para cada uma das cinco partes, individualmente.
- **Ocupantes** — quantos espaços de assento o veículo tem, incluindo o piloto.
- **Slots de equip.** — quantos [equipamentos](lista-de-equipamentos.md) cabem instalados.
- **Combustível** — pontos de tanque cheio, consumidos por turno de viagem (a condição *Consumo elevado*
  dobra o consumo).

> 💡 **Na mesa:** para montar um veículo específico, pegue a linha da categoria e mexa em **no
> máximo dois valores**, compensando um com o outro — uma moto de corrida troca integridade por
> velocidade; um caminhão-fortaleza troca velocidade por slots. Mudanças maiores que isso
> provavelmente significam que o veículo é de outra categoria.

## Veículos sem motor

A categoria **Sem motor** cobre tudo que se move por tração própria, animal ou gravidade. Ela tem
particularidades:

- **Não tem combustível** nem propulsor — logo, não sofre condições que dependam desses
  componentes e não existe *Reparo especializado* para ela.
- O dano que excederia o Propulsor vai **direto aos ocupantes**.
- Ao colidir, **recebe o dobro** do dano comum, em parte aleatória.
- A "velocidade máxima" depende do que a puxa: 20 m/t é o valor de referência para tração animal ou
  pedalada forte. Uma descida íngreme ou um animal excepcional pode ultrapassar isso, a critério do
  narrador.
