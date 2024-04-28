# BlackJack

Pasos para ejecutar el juego:

1. Clonar el repositorio
2. Ejecutar el comando `npm install o yarn` en la terminal
3. Ejecutar el comando `npm run dev o yarn dev` en la terminal
4. Abrir el navegador en la dirección `http://localhost:5173/`

## Producción

1. Ejecutar el comando `npm run build o yarn build` en la terminal
2. Tomar los archivos de la carpeta `dist` y subirlos a un servidor

## Demo

[BlackJack](https://juancamilosanchez.me/black-Jack/)

## Descripción

El juego consiste en que el jugador debe sumar 21 puntos o acercarse lo más posible a esta cifra sin pasarse. El jugador juega contra la banca, que también intenta sumar 21 puntos o acercarse lo más posible a esta cifra sin pasarse. Si el jugador se pasa de 21 puntos, pierde la partida. Si el jugador no se pasa de 21 puntos, pero la banca tiene más puntos que él, el jugador pierde la partida. Si el jugador no se pasa de 21 puntos y tiene más puntos que la banca, el jugador gana la partida. Si el jugador y la banca tienen la misma cantidad de puntos, la partida queda en empate.

## Reglas

- El jugador puede pedir tantas cartas como desee, hasta que se pase de 21 puntos o decida plantarse.
- Las cartas numéricas suman su valor, las figuras suman 10 puntos y el as suma 11 puntos.
- Si el jugador se pasa de 21 puntos, pierde la partida.
- Si el jugador no se pasa de 21 puntos, pero la banca tiene más puntos que él, el jugador pierde la partida.
- Si el jugador no se pasa de 21 puntos y tiene más puntos que la banca, el jugador gana la partida.
- Si el jugador y la banca tienen la misma cantidad de puntos, la partida queda en empate.

## Funcionalidades

- El jugador puede pedir una carta.
- El jugador puede plantarse.
- El juego muestra el resultado de la partida.

## Tecnologías

- HTML
- CSS
- JavaScript
- Vite

## Autor

- [Juan Camilo Sanchez Echeverri](https://juancamilosanchez.me)
