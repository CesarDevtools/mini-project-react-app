import React from 'react';
import './AboutPage.css'; 

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Acerca de MyMeals</h1>
        <p>
          MealTracker es una aplicación web simple construida con React que te permite guardar y organizar tus comidas favoritas. Cada entrada de comida incluye una foto, el nombre de la comida y su información nutricional básica, como calorías y macronutrientes. Es una herramienta útil para hacer un seguimiento de tus hábitos alimenticios y mantener un registro de tus recetas favoritas.
        </p>
        <p>
          Este proyecto fue desarrollado por un equipo de tres desarrolladores apasionados:
        </p>
        <ul className="developer-list">
          <li>César Galán de Venezuela</li>
          <li>Emilio Saucedo de Bolivia</li>
          <li>Gianfranco Devita de Argentina</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;