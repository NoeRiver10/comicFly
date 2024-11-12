"use client";

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import axios from 'axios';

// Define la interfaz para el equipo de la Champions League
interface Team {
  team: {
    id: number;
    name: string;
  };
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
}

export default function HomePage() {
  const [championsTable, setChampionsTable] = useState<Team[]>([]);

  useEffect(() => {
    const fetchChampionsTable = async () => {
      try {
        const response = await axios.get('/api/getChampionsData');
        setChampionsTable(response.data);
      } catch (error) {
        console.error('Error fetching the Champions League data:', error);
      }
    };
  
    fetchChampionsTable();
  }, []);
  

  return (
    <div className="container">
      <Head>
        <title>KFly Sports</title>
        <meta name="description" content="Tu fuente de información deportiva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="header">
        <div className="logoContainer">
          <Image src="/logo_kdz.jpg" alt="Logo KFly Sports" width={100} height={100} className="logoImage" />
          <h1 className="siteTitle">KFly Sports</h1>
        </div>
        <p className="tagline">Explora las últimas noticias y novedades del mundo deportivo.</p>
      </header>

      <main className="main">
        <section className="postsList">
          <h2>Artículos Recientes</h2>
          <div className="postCard">
            <Link href="https://centralmadridista.com/reunion-clave-entre-carlo-ancelotti-y-la-plantilla-del-real-madrid-en-pos-de-resolver-la-crisis/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <h3>Primer Artículo</h3>
                <p>Reunión clave entre Carlo Ancelotti y la plantilla del Real Madrid en pos de resolver la crisis.</p>
              </a>
            </Link>
          </div>
          <div className="postCard">
            <Link href="https://www.fifa.com/es/tournaments/mens/club-world-cup/usa-2025/articles/andrea-pirlo-entrevista-mundial-de-clubes-fifa" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <h3>Segundo Artículo</h3>
                <p>Andrea Pirlo habla sobre el próximo Mundial de Clubes FIFA en una entrevista exclusiva.</p>
              </a>
            </Link>
          </div>
        </section>

        <section className="videoSection">
          <h2>Video Destacado</h2>
          <div className="videoContainer" style={{ maxWidth: '560px', margin: '20px auto' }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/1EEJkNLFveQ?si=EFSjkjtbndmTKisg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="championsTable">
          <h2>Tabla de la Champions League</h2>
          <div className="tableContainer" style={{ maxWidth: '800px', margin: '20px auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#1565c0', color: '#fff' }}>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>Equipo</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>PJ</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>PG</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>PE</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>PP</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>Pts</th>
                </tr>
              </thead>
              <tbody>
                {championsTable.map((team) => (
                  <tr key={team.team.id}>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{team.team.name}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{team.playedGames}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{team.won}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{team.draw}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{team.lost}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>KFly Sports &copy; 2024 - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

export default function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>KFly Sports</title>
        <meta name="description" content="Tu fuente de información deportiva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="header">
        <div className="logoContainer">
          <Image src="/logo_kdz.jpg" alt="Logo KFly Sports" width={100} height={100} className="logoImage" />
          <h1 className="siteTitle">KFly Sports</h1>
        </div>
        <p className="tagline">Explora las últimas noticias y novedades del mundo deportivo.</p>
      </header>

      <main className="main">
        <section className="postsList">
          <h2>Artículos Recientes</h2>
          <div className="postCard">
            <Link href="https://centralmadridista.com/reunion-clave-entre-carlo-ancelotti-y-la-plantilla-del-real-madrid-en-pos-de-resolver-la-crisis/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <p>Reunión clave entre Carlo Ancelotti y la plantilla del Real Madrid en pos de resolver la crisis.</p>
              </a>
            </Link>
          </div>
          <div className="postCard">
            <Link href="https://www.fifa.com/es/tournaments/mens/club-world-cup/usa-2025/articles/andrea-pirlo-entrevista-mundial-de-clubes-fifa" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <p>Andrea Pirlo habla sobre el próximo Mundial de Clubes FIFA en una entrevista exclusiva.</p>
              </a>
            </Link>
          </div>
        </section>

        <section className="videoSection">
          <h2>Video Destacado</h2>
          <div className="videoContainer" style={{ maxWidth: '560px', margin: '20px auto' }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/1EEJkNLFveQ?si=EFSjkjtbndmTKisg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="championsTable">
          <h2>Tabla de la Champions League</h2>
          <div className="tableContainer" style={{ maxWidth: '800px', margin: '20px auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#1565c0', color: '#fff' }}>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>Equipo</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>PJ</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>V</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>E</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>D</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Liverpool</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>4</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>4</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>0</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>0</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>12</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Sporting CP</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>4</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>3</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>1</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>0</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>10</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Mónaco</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>4</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>3</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>1</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>0</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>10</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Stade Brestois 29</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>4</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>3</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>1</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>0</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>10</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>Inter</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>4</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>3</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>1</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>0</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>10</td>
                </tr>
                {/* Agrega más filas según sea necesario */}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>KFly Sports &copy; 2024 - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
