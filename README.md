# Pomodoro Timer App

## Visão Geral

Este é um aplicativo de Pomodoro construído em React. Ele permite que você utilize a técnica de Pomodoro para gerenciar seu tempo, alternando entre períodos de trabalho focado e pausas curtas.

## Funcionalidades

- **Sessões de Trabalho:** Cronometra períodos de trabalho focado de 25 minutos.
- **Pausas Curtas:** Após cada sessão de trabalho, há uma pausa curta de 5 minutos.
- **Pausas Longas:** Após 4 sessões de trabalho, há uma pausa longa de 15 minutos.
- **Controle de Ciclos:** Alterna automaticamente entre períodos de trabalho e pausas.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **React Context API**: Para gerenciar o estado da aplicação de forma centralizada.
- **React Hooks**: Para controlar o ciclo de vida dos componentes e o estado.
- **ESLint**: Para garantir a qualidade do código.

## Como usar

Você pode acessar a aplicação neste [link](https://jhoyr.github.io/pomodoro/) para começar a usar o temporizador Pomodoro diretamente.

1. Iniciar Sessão de Trabalho

2. Quando a aplicação carregar, clique em "Start" para iniciar uma sessão de trabalho.
O cronômetro começará a contar a partir de 25 minutos.
Pausas Curtas e Longas

3. Após o término de uma sessão de trabalho, o cronômetro mudará automaticamente para uma pausa curta.
Depois de quatro sessões, você será automaticamente direcionado para uma pausa longa.


## Deploy React em gh-pages

- Para utilizar gh-pages: adicionar duas chaves em package.json
    - "predeploy": "npm run build", <----------- #1
    - "deploy": "gh-pages -d build", <---------- #2
- Em seguida, adicionar homepage ao package.json
    -  "homepage": "https://jhoyr.github.io/pomodoro/" <----
- Instalação pacote gh-pages: yarn add gh-pages
- Fazer deploy da aplicação: npm run deploy 
