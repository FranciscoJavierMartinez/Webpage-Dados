"use strict";

//* Seleccion de elementos */
const jugador0 = document.querySelector(".jugador-0"); //* Selecciono <> por su clase */
const jugador1 = document.querySelector(".jugador-1"); //* Selecciono <> por su clase */
const puntos0 = document.querySelector("#puntos-0"); //* Selecciono <> por su id */
const puntos1 = document.querySelector("#puntos-1"); //* Selecciono <> por su id */
const puntosActuales0 = document.querySelector("#actual-0"); //* Selecciono <> por su id */
const puntosActuales1 = document.querySelector("#actual-1"); //* Selecciono <> por su id */

const dadoDom = document.querySelector(".dado"); //* Selecciono <> por su clase */

const btnNuevo = document.querySelector(".btn-nuevo"); //* Selecciono <> por su clase */
const btnTirar = document.querySelector(".btn-juega"); //* Selecciono <> por su clase */
const btnQuedarse = document.querySelector(".btn-quedarse"); //* Selecciono <> por su clase */

let puntos, puntosActuales, jugadorActivo, jugando; //* Defino variables para las funciones */

const init = () => {
  //* Funcion que no recibe nada, pero se ejecuta cuando se le indica */
  puntos = [0, 0]; //* Inicializo lo puntos en 0 */
  puntosActuales = 0; //* inicializo esta variable en 0 */
  jugadorActivo = 0; //* Defino esta variable en 0 */
  jugando = true; //* Esta variable es solo un valor booleano */

  puntos0.textContent = 0; //* Se muestra esto en el DOM */
  puntos1.textContent = 0; /* Se muestra esto en el DOM */
  puntosActuales0.textContent = 0; /* Se muestra esto en el DOM */
  puntosActuales1.textContent = 0; /* Se muestra esto en el DOM */

  dadoDom.classList.add("oculto"); //* Oculto el dado, agregando una clase a un elemento en el DOM */

  jugador0.classList.remove("jugador-ganador"); //* Remuevo esta Clase de cada variable y la puedo reactivar */
  jugador1.classList.remove("jugador-ganador"); //* Remuevo esta Clase de cada variable y la puedo reactivar */
  jugador0.classList.add("jugador-activo"); //* Agrego esta clase a la variable. DOM y CSS */
  jugador1.classList.remove("jugador-activo"); //* Remuevo esta Clase y la puedo reactivar */
};
init(); //* Ejecuto la funcion para confirmar lo que hace */

const cambioJugador = () => {
  //* Funcion que no recibe nada, pero se ejecuta cuando se indica */
  document.getElementById(`actual-${jugadorActivo}`).textContent = 0; //* Cambie de Jugador, inicializa 0 el de abajo */
  puntosActuales = 0; //* Tendra valor de 0 al cambiar de jugador, son los puntos de la tirada actual */

  jugadorActivo = jugadorActivo === 0 ? 1 : 0; //* Condicion, si es 0, ?(expresion verdadera), :(expresion falsa) */

  jugador0.classList.toggle("jugador-activo"); //* Debo tenerlas para que el cambio funcione */
  jugador1.classList.toggle("jugador-activo"); //* Debo tenerlas para que el cambio funcione */
};
// cambioJugador(); //* Funciona */

btnTirar.addEventListener("click", () => {
  //* Vamos a darle funcionalidad al boton de Tirar */
  if (jugando) {
    //* Variable Booleana, donde le preguntas si es verdadero */
    const dado = Math.trunc(Math.random() * 6) + 1; //* Metodos Matematicos para sacar un numero entre 1 y 6 */
    // console.log(dado); //* Muestro en consola el valor de la operacion mateatica */

    dadoDom.classList.remove("oculto"); //* Quito una clase que habia asignado */
    dadoDom.src = `dice-${dado}.png`; //* Mostramos en pantalla el numero de numeros del dado */

    if (dado !== 6) {
      //* Si el dado es diferente a 6 */
      puntosActuales += dado; //* Vas agregando el valor del dado en los puntos actuales */
      document.getElementById(`actual-${jugadorActivo}`).textContent = //* Seleccionamos <> por su id y que cambie segun el jugador */
        puntosActuales; //* Y muestre los puntos actuales en el DOM */
    } else {
      //* En caso Booleano falso */}
      cambioJugador(); //* Ejecuta esta funcion */
    }
  }
});

btnQuedarse.addEventListener("click", () => {
  //* Funcion de flecha que no recibe nada, pero se ejecuta con el boton quedarse */
  if (jugando) {
    //* Si jugando es verdadero */
    puntos[jugadorActivo] += puntosActuales; //* Puntos del Jugador Activo, se les va a sumar los Puntos Actuales */
    document.getElementById(`puntos-${jugadorActivo}`).textContent = //* Seleccionamos <> por Id */
      puntos[jugadorActivo]; //* Que se muestren los puntos deL jugadorActivo (Cambiarlos en el DOM) */

    if (puntos[jugadorActivo] < -1) {
      //* Si los puntos del jugador activo son negativos(No puede pasar) */
      jugando = false; //* Cambia el estado de true a false */
      document
        .querySelector(`.jugador-${jugadorActivo}`) //* Selecciona el jugador activo */
        .classList.remove("jugador-activo"); //* Remueve la clase de Jugador Activo */
    } else {
      cambioJugador(); //* Sino invoco esta funcion */
    }
  }
});

btnNuevo.addEventListener("click", () => init()); //* Inicializo el Juego */

// const fechaCreacion = new Date("2023, 5, 16, 19:07:22 GMT-0600"); //* Mes, dia, año y horario 12 horas */

let today = new Date();
let dateString = today.toLocaleString();
document.getElementById("date1").innerHTML = dateString;

let clicksNuevo = 0;
function contadorNuevo() {
  clicksNuevo += 1;
  document.getElementById("clicks-nuevo").innerHTML = clicksNuevo;
}

let clicksJuego = 0;
function contadorJuego() {
  clicksJuego += 1;
  document.getElementById("clicks-juego").innerHTML = clicksJuego;
}

let clicksCambio = 0;
function contadorCambio() {
  clicksCambio += 1;
  document.getElementById("clicks-cambio").innerHTML = clicksCambio;
}

//* Debo de tener una variable para contar los clicks a cada uno de los botones que tengo */
