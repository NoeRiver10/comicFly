"use client";

import React from "react";
import Link from "next/link";

export default function VisionPage() {
  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <header className="text-center bg-blue-600 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
      </header>

      <main className="mt-10 space-y-10">
        {/* Misión */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-500 text-center">Misión</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            En <strong>KFly Sports</strong>, nuestro propósito es ser el faro que guía a todos los apasionados del fútbol. Nuestra misión es ofrecer una plataforma de contenido de alta calidad, cubriendo desde las noticias más recientes y análisis detallados, hasta entrevistas exclusivas y reportajes especiales. Queremos asegurarnos de que cada aficionado, sin importar su nivel de conocimiento, se sienta informado y emocionado sobre el mundo del fútbol.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            Además, nos comprometemos a fomentar una comunidad inclusiva y diversa, donde cada voz y opinión es valorada, promoviendo el respeto y la pasión compartida por este hermoso deporte. Nos esforzamos por crear una experiencia enriquecedora para nuestros usuarios, proporcionando herramientas interactivas como estadísticas en tiempo real, foros de discusión y encuestas, que permitan una participación activa y significativa.
          </p>
        </section>

        {/* Visión */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-500 text-center">Visión</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Nuestra visión en <strong>KFly Sports</strong> es establecer un legado como la fuente principal y más confiable de información sobre fútbol a nivel mundial. Aspiramos a innovar constantemente, integrando tecnología de vanguardia y métodos creativos para presentar las noticias y análisis de manera atractiva y accesible.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            Visualizamos un futuro donde <strong>KFly Sports</strong> sea reconocido no solo por la precisión y profundidad de su contenido, sino también por su compromiso con la integridad y el espíritu deportivo. Queremos inspirar a las futuras generaciones de aficionados y jugadores, proporcionándoles un espacio seguro y estimulante para aprender, compartir y crecer.
          </p>
        </section>

        {/* Valores Fundamentales */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-blue-500 text-center">
            Valores Fundamentales
          </h2>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-300 space-y-2">
            <li><strong>Pasión por el Fútbol:</strong> Nuestra dedicación al fútbol es el corazón de todo lo que hacemos.</li>
            <li><strong>Calidad y Precisión:</strong> Nos comprometemos a ofrecer información confiable y bien investigada.</li>
            <li><strong>Innovación Constante:</strong> Buscamos siempre nuevas formas de mejorar la experiencia del usuario.</li>
            <li><strong>Comunidad y Diversidad:</strong> Valoramos todas las voces y promovemos un ambiente inclusivo.</li>
            <li><strong>Integridad y Respeto:</strong> Actuamos con honestidad y fomentamos el espíritu deportivo.</li>
          </ul>
        </section>
      </main>

      {/* Botón para regresar a la página principal */}
      <div className="text-center mt-10">
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          Regresar a la Página Principal
        </Link>
      </div>

      <footer className="text-center mt-10 p-4 bg-blue-600 text-white rounded-lg shadow-md">
        <p>&copy; 2024 KFly Sports. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
