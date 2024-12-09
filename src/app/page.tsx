"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>KFly Sports</title>
        <meta name="description" content="Tu fuente de información deportiva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className="header bg-blue-600 text-white rounded-lg shadow-md p-6 text-center">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
      <Image
        src="/logo_kdz.jpg"
        alt="Logo KFly Sports"
        width={100}
        height={100}
        className="rounded-full shadow-md"
      />
      <h1 className="text-4xl font-bold">KFly Sports</h1>
    </div>
    {/* Nuevo enlace a la página de Sobre Nosotros */}
    <nav>
      <Link
        href="/components/vision"
        className="text-white text-lg underline hover:text-blue-300"
      >
        Sobre Nosotros
      </Link>
    </nav>
  </div>
  <p className="mt-2 text-lg">
    Explora las últimas noticias y novedades del mundo deportivo.
  </p>
</header>


      <main className="main mt-10 space-y-10">
        {/* Sección de Artículos */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Artículos Recientes</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="postCard bg-red-600 text-white rounded-lg p-4 hover:scale-105 transform transition">
              <Link
                href="https://www.goal.com/es-mx/noticias/cuantos-goles-por-champions-league-marco-kylian-mbappe-en-su-carrera/blt754c89cdab192bfc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-semibold text-lg">Kylian Mbappé en la Champions</h3>
                <p>
                  ¿Cuántos goles ha marcado Mbappé en su carrera en la Champions
                  League?
                </p>
              </Link>
            </div>
            <div className="postCard bg-red-600 text-white rounded-lg p-4 hover:scale-105 transform transition">
              <Link
                href="https://vanguardia.com.mx/deportes/futbol-internacional/karim-benzema-vence-a-cristiano-ronaldo-en-duelo-entre-el-al-nassr-y-el-al-ittihad-JG14304850"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-semibold text-lg">Karim Benzema vs Cristiano Ronaldo</h3>
                <p>
                  Benzema vence a Cristiano Ronaldo en un duelo entre Al Nassr y
                  Al Ittihad.
                </p>
              </Link>
            </div>
            <div className="postCard bg-red-600 text-white rounded-lg p-4 hover:scale-105 transform transition">
              <Link
                href="https://www.record.com.mx/futbol-futbol-internacional-internacionales/mundial-de-clubes-2025-calendario-completo-fechas-y"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-semibold text-lg">Calendario del Mundial de Clubes 2025</h3>
                <p>
                  Consulta las fechas y el calendario completo del Mundial de
                  Clubes 2025.
                </p>
              </Link>
            </div>
            <div className="postCard bg-red-600 text-white rounded-lg p-4 hover:scale-105 transform transition">
              <Link
                href="https://www.mediotiempo.com/futbol/seleccion-brasil-seguira-usando-nike-2038-millonaria-extension-contrato"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-semibold text-lg">Brasil y Nike: Contrato Millonario</h3>
                <p>
                  La selección de Brasil seguirá usando Nike hasta 2038 con una
                  millonaria extensión de contrato.
                </p>
              </Link>
            </div>
            <div className="postCard bg-red-600 text-white rounded-lg p-4 hover:scale-105 transform transition">
              <Link
                href="https://www.marca.com/mx/futbol/2024/12/07/6753826f268e3e3e508b45d5.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-semibold text-lg">Noticias de Marca</h3>
                <p>
                  Las últimas novedades y reportajes del mundo deportivo desde Marca.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Sección de Videos */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Videos Destacados</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-56"
                src="https://www.youtube.com/embed/TumrrOZA5j4?si=vueIWgX2ngFG6ACw"
                title="Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-56"
                src="https://www.youtube.com/embed/9nLd-ezrg_0?si=PeKREreol4J5E3lb"
                title="Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-56"
                src="https://www.youtube.com/embed/jy2KFOtuDlc?si=EDPkJCGNr20DQnKS"
                title="Video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>


        <section className="section champions mt-10">
  <h2 className="text-2xl font-bold mb-6 text-center">
    Tabla de la Champions League
  </h2>
  <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
    <thead className="bg-blue-600 text-white">
      <tr>
        <th className="p-2">Equipo</th>
        <th className="p-2">PJ</th>
        <th className="p-2">V</th>
        <th className="p-2">E</th>
        <th className="p-2">D</th>
        <th className="p-2">Pts</th>
        <th className="p-2">Últimos</th>
      </tr>
    </thead>
    <tbody className="bg-gray-800 text-white">
      <tr className="odd:bg-gray-700 even:bg-gray-800">
        <td className="p-2">Liverpool</td>
        <td className="p-2">5</td>
        <td className="p-2">5</td>
        <td className="p-2">0</td>
        <td className="p-2">0</td>
        <td className="p-2">15</td>
        <td className="p-2">✅ ✅ ✅ ✅ ✅</td>
      </tr>
      <tr className="odd:bg-gray-700 even:bg-gray-800">
        <td className="p-2">Inter</td>
        <td className="p-2">5</td>
        <td className="p-2">4</td>
        <td className="p-2">1</td>
        <td className="p-2">0</td>
        <td className="p-2">13</td>
        <td className="p-2">✅ ✅ ✅ ✅ ⚪</td>
      </tr>
      <tr className="odd:bg-gray-700 even:bg-gray-800">
        <td className="p-2">Barcelona</td>
        <td className="p-2">5</td>
        <td className="p-2">4</td>
        <td className="p-2">0</td>
        <td className="p-2">1</td>
        <td className="p-2">12</td>
        <td className="p-2">✅ ✅ ✅ ❌ ✅</td>
      </tr>
      <tr className="odd:bg-gray-700 even:bg-gray-800">
        <td className="p-2">Borussia Dortmund</td>
        <td className="p-2">5</td>
        <td className="p-2">4</td>
        <td className="p-2">0</td>
        <td className="p-2">1</td>
        <td className="p-2">12</td>
        <td className="p-2">✅ ❌ ✅ ✅ ✅</td>
      </tr>
      <tr className="odd:bg-gray-700 even:bg-gray-800">
        <td className="p-2">Atalanta</td>
        <td className="p-2">5</td>
        <td className="p-2">3</td>
        <td className="p-2">2</td>
        <td className="p-2">0</td>
        <td className="p-2">11</td>
        <td className="p-2">✅ ⚪ ⚪ ✅ ✅</td>
      </tr>
      <tr className="odd:bg-gray-700 even:bg-gray-800">
        <td className="p-2">Bayer Leverkusen</td>
        <td className="p-2">5</td>
        <td className="p-2">3</td>
        <td className="p-2">1</td>
        <td className="p-2">1</td>
        <td className="p-2">10</td>
        <td className="p-2">✅ ❌ ✅ ✅ ⚪</td>
      </tr>
      <tr className="odd:bg-gray-700 even:bg-gray-800">
        <td className="p-2">Arsenal</td>
        <td className="p-2">5</td>
        <td className="p-2">3</td>
        <td className="p-2">1</td>
        <td className="p-2">1</td>
        <td className="p-2">10</td>
        <td className="p-2">✅ ✅ ✅ ❌ ⚪</td>
      </tr>
      <tr className="odd:bg-gray-700 even:bg-gray-800">
        <td className="p-2">Mónaco</td>
        <td className="p-2">5</td>
        <td className="p-2">3</td>
        <td className="p-2">1</td>
        <td className="p-2">1</td>
        <td className="p-2">10</td>
        <td className="p-2">✅ ✅ ❌ ✅ ✅</td>
      </tr>
      <tr className="odd:bg-gray-700 even:bg-gray-800">
        <td className="p-2">Aston Villa</td>
        <td className="p-2">5</td>
        <td className="p-2">3</td>
        <td className="p-2">1</td>
        <td className="p-2">1</td>
        <td className="p-2">10</td>
        <td className="p-2">❌ ✅ ✅ ✅ ❌</td>
      </tr>
      <tr className="odd:bg-gray-700 even:bg-gray-800">
        <td className="p-2">Sporting CP</td>
        <td className="p-2">5</td>
        <td className="p-2">3</td>
        <td className="p-2">1</td>
        <td className="p-2">1</td>
        <td className="p-2">10</td>
        <td className="p-2">✅ ⚪ ❌ ✅ ✅</td>
      </tr>
    </tbody>
  </table>
</section>
<section className="mt-10 bg-gray-800 p-6 rounded-lg shadow-md text-center">
  <h2 className="text-3xl font-bold mb-4 text-blue-500">Redes Sociales</h2>
  <div className="flex flex-col items-center">
    {/* Ícono de Instagram */}
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-4 rounded-full mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.31.974.974 1.248 2.242 1.31 3.608.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.31 3.608-.974.974-2.242 1.248-3.608 1.31-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.31-.974-.974-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.336-2.633 1.31-3.608.974-.974 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.738 0 8.332.013 7.052.072 5.773.131 4.52.426 3.418 1.527 2.317 2.63 2.022 3.883 1.963 5.162.903 8.317.903 11.683.963 14.837c.059 1.279.354 2.532 1.457 3.635 1.102 1.102 2.355 1.398 3.635 1.457 3.154.059 6.521.059 9.675 0 1.279-.059 2.532-.354 3.635-1.457 1.102-1.102 1.398-2.355 1.457-3.635.059-3.154.059-6.521 0-9.675-.059-1.279-.354-2.532-1.457-3.635C20.552.426 19.299.131 18.02.072 16.738.013 16.332 0 12 0zm0 5.838a6.162 6.162 0 1 0 6.162 6.162A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 3.999-3.999A3.999 3.999 0 0 1 12 16zm6.406-10.845a1.44 1.44 0 1 0 1.44-1.44 1.44 1.44 0 0 0-1.44 1.44z" />
      </svg>
    </div>
    {/* Texto e Hipervínculo */}
    <p className="text-lg text-gray-300">
      Sigue a <span className="font-bold text-white">KFly Sports</span> en{" "}
      <Link
        href="https://www.instagram.com/kfly_sport7?igsh=MWs0bWkzaGt0M2o2Ng%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-500 font-bold"
      >
        Instagram
      </Link>
    </p>
  </div>
</section>

      </main>

      <footer className="footer bg-blue-600 text-white rounded-lg shadow-md p-4 text-center mt-10">
        <p>KFly Sports &copy; 2024 - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
