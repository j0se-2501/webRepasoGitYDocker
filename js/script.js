"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let currentExercise = 1;
  let totalExercises = 8;

  // Asigna eventos de clic a todos los botones de ejercicio
  let exerciseButtons = document.querySelectorAll(".exercise-button");
  exerciseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      let targetId = button.getAttribute("data-bs-target");
      hideAllCards();
      currentExercise = targetId.match(/\d+$/); //para coger del String los números del final
      document.getElementById(targetId).classList.remove("d-none");

      updateButtonsVisibility();
    });
  });

  // Botón de Ejercicio Anterior
  document
    .getElementById("ejercicioAnterior")
    .addEventListener("click", function () {
      if (currentExercise > 1) {
        currentExercise--;
        showExercise(currentExercise);
      }
    });

  // Botón de Ejercicio Siguiente
  document
    .getElementById("ejercicioSiguiente")
    .addEventListener("click", function () {
      if (currentExercise < totalExercises) {
        currentExercise++;
        showExercise(currentExercise);
      }
    });

  function hideAllCards() {
    let cards = document.querySelectorAll(".exercise-card");
    cards.forEach(function (card) {
      card.classList.add("d-none");
    });
  }

  function showExercise(exerciseNumber) {
    hideAllCards();
    document
      .getElementById("ejercicio" + exerciseNumber)
      .classList.remove("d-none");
    updateButtonsVisibility();
  }

  function updateButtonsVisibility() {
    let botonesNavegacion = document.getElementById("botonesNavegacion");

    // Mostrar los botones de Ejercicio Anterior y Siguiente después del primer clic
    botonesNavegacion.classList.remove("d-none");
  }
});
