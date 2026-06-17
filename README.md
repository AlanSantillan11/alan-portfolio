# 🎵 Alan Portfolio — README Maestro

> Este archivo es la guía completa del proyecto. Ante cualquier duda, nueva sesión o consulta, leer esto primero.

---

## 🧠 Concepto General

Portfolio personal con **estética inspirada en Spotify**. La idea central es que cada sección del portfolio sea una **"track"** (canción), como si la vida y carrera de Alan fuera un álbum musical. El visitante "escucha" el portfolio navegando por las pistas.

No es una copia de Spotify — es una **inspiración visual**: colores oscuros, tipografía moderna, elementos interactivos, tarjetas tipo "álbum", barra de reproducción decorativa, etc.

---

## 🌐 Stack Tecnológico

| Tecnología | Uso |
|---|---|
| React + Vite | Framework principal |
| CSS Modules | Estilos por componente |
| React Router | Navegación entre secciones/vistas |
| Context API | Manejo del idioma (ES/EN) |
| JavaScript | Lógica general |

> Sin librerías externas de UI por ahora — todo hecho a mano para practicar lo del curso.

---

## 🌍 Idiomas

El portfolio soporta **español e inglés**. Ya está implementado el contexto:

- Archivo: `src/LanguageContext.jsx`
- Hook: `useLang()` — devuelve `{ language, toggleLanguage }`
- El idioma por defecto es `"es"`
- Toggle cambia entre `"es"` y `"en"`
- Todos los textos del portfolio están en `src/data/portafolioData.js` con la forma:
```js
{ es: "texto en español", en: "text in english" }
```

---

## 📁 Estructura del Proyecto

```
alan-portfolio/
├── public/
├── src/
│   ├── components/        ← Componentes reutilizables (vacío, a construir)
│   ├── data/
│   │   └── portafolioData.js  ← Todos los datos del portfolio
│   ├── styles/            ← Estilos globales y por componente (vacío, a construir)
│   ├── App.jsx            ← Componente raíz (casi vacío, a construir)
│   ├── LanguageContext.jsx ← Contexto de idioma ✅ LISTO
│   ├── index.css          ← Estilos base
│   └── main.jsx           ← Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎵 Secciones (Tracks)

Cada sección es una "pista" del álbum. Están definidas en `portafolioData.js`:

| # | Título ES | Título EN | Descripción |
|---|---|---|---|
| 01 | Intro | Intro | Pantalla de bienvenida, nombre, rol, botón de play |
| 02 | Historia | Background | Sobre Alan, su camino, estudios (UNQ) |
| 03 | Habilidades | Stack | Skills: HTML, CSS, JS, React, Bootstrap, Java, SQL, Git |
| 04 | Proyectos | Projects | Tarjetas de proyectos estilo álbum |
| 05 | Contacto | Contact | Email, LinkedIn, GitHub |

---

## 🎨 Estética Visual (Inspiración Spotify)

- **Fondo**: negro o gris muy oscuro (`#121212` como Spotify)
- **Acento**: verde Spotify (`#1DB954`) o se puede personalizar con otro color
- **Tipografía**: moderna, sans-serif (ej: Inter, Poppins)
- **Tarjetas de proyectos**: estilo "álbum" con imagen/cover, título, descripción
- **Barra inferior**: barra decorativa estilo "now playing" (no funcional, es estética)
- **Sidebar izquierda**: navegación tipo biblioteca de Spotify con las tracks
- **Área principal**: contenido de la track seleccionada

---

## 📊 Datos del Portfolio (`portafolioData.js`)

```js
{
  name: "Alan Emanuel Santillan",
  role: { es: "Desarrollador Frontend", en: "Frontend Developer" },
  location: "Quilmes, Buenos Aires",
  bio: { es: "...", en: "..." },
  contact: {
    email: "santillanalane11@gmail.com",
    linkedin: "linkedin.com/in/alanemanuelsantillan",
    github: "github.com/AlanSantillan11"
  },
  tracks: [ /* las 5 secciones */ ],
  skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Java", "SQL", "Git"],
  projects: [
    {
      title: "Forge Bootcamp",
      description: { es: "...", en: "..." },
      tech: ["React", "Vite", "Bootstrap", "JavaScript"],
      link: "https://github.com/AlanSantillan11/Proyecto-Forge-Front-End"
    }
  ]
}
```

---

## 🗺️ Plan de Desarrollo (paso a paso)

### Fase 1 — Layout base ✅ Iniciado
- [x] Proyecto creado con Vite + React
- [x] LanguageContext implementado
- [x] Datos del portfolio definidos
- [ ] Layout principal (Sidebar + MainContent)
- [ ] App.jsx con estructura base
- [ ] Estilos globales (variables CSS, reset)

### Fase 2 — Componentes principales
- [ ] `Sidebar.jsx` — navegación con las tracks
- [ ] `NowPlaying.jsx` — barra inferior decorativa
- [ ] `LanguageToggle.jsx` — botón ES/EN
- [ ] `TrackList.jsx` — lista de secciones

### Fase 3 — Secciones (views)
- [ ] `Intro.jsx` — bienvenida con nombre y rol
- [ ] `Historia.jsx` — sobre Alan
- [ ] `Habilidades.jsx` — skills con íconos o badges
- [ ] `Proyectos.jsx` — tarjetas estilo álbum
- [ ] `Contacto.jsx` — links de contacto

### Fase 4 — Interactividad
- [ ] Navegación entre secciones con React Router o estado
- [ ] Animaciones suaves entre secciones
- [ ] Toggle de idioma funcionando en toda la app

### Fase 5 — Pulido final
- [ ] Responsive (mobile)
- [ ] Deploy en Vercel o GitHub Pages

---

## 👤 Datos Personales de Alan

- **Nombre**: Alan Emanuel Santillán
- **Ubicación**: Quilmes, Buenos Aires
- **Estudios**: Tecnicatura Universitaria en Programación — UTN
- **Curso completado**: Front End en Skillnest-Forge Bootcamp
- **Email**: santillanalane11@gmail.com
- **LinkedIn**: linkedin.com/in/alanemanuelsantillan
- **GitHub**: github.com/AlanSantillan11

---

## 📌 Notas importantes para retomar

1. El `LanguageContext` ya funciona — siempre importar `useLang()` para acceder al idioma.
2. Los textos bilingües siempre tienen la forma `texto[language]` donde `language` es `"es"` o `"en"`.
3. El proyecto usa **CSS Modules** — cada componente tiene su propio `.module.css`.
4. No usar librerías de UI externas — todo a mano para practicar.
5. La metáfora Spotify es estética, no funcional — no hay audio real.
6. Arrancar siempre por el **layout base** antes de los componentes internos.
