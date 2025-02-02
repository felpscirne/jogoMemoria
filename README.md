# Jogo da Memória

Este é um simples jogo da memória desenvolvido com React e Vite. O objetivo do jogo é encontrar todos os pares de cartas antes que suas tentativas acabem.

## Estrutura do Projeto

- jogoMemoria/
  - .gitignore
  - eslint.config.js
  - index.html
  - package.json
  - public/
  - README.md
  - src/
    - App.css
    - App.jsx
    - assets/
    - components/
      - Board.jsx
      - Card.jsx
      - Game.jsx
    - index.css
    - main.jsx
  - vite.config.js

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina

### Passos

1. Clone o repositório:

```sh
git clone https://github.com/felpscirne/jogoMemoria.git
cd jogoMemoria
```

2. Instale as dependências:
```sh
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```sh
npm run dev
```
4. Abra o navegador e acesse seu localhost.



## Estrutura de Componentes:

  - <b>App.jsx:</b> Componente principal que renderiza o título do jogo e o componente Game.<br>
  - <b>Game.jsx:</b> Componente que gerencia a lógica do jogo, incluindo o estado das cartas e as tentativas do jogador.<br>
  - <b>Board.jsx:</b> Componente que renderiza o tabuleiro do jogo com as cartas.<br>
  - <b>Card.jsx:</b> Componente que representa uma carta individual no jogo.


## Estilos

### Os estilos do projeto estão divididos em dois arquivos CSS:

- <b>index.css:</b> Estilos globais para o projeto. <br>
- <b>App.css:</b> Estilos específicos para o componente App. (Pouco utilizado neste projeto)


## Regras do Jogo
- O jogador tem 6 tentativas para encontrar todos os pares de cartas.<br>
- Clique em uma carta para virá-la.<br>
- Se duas cartas viradas não formarem um par, elas serão viradas de volta.<br>
- O jogo termina quando todas as cartas forem encontradas ou quando as tentativas acabarem.
