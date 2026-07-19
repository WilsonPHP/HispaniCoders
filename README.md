# HispaniCoders - Commercial Website Platform

Base escalable y preparada para produccion para el sitio comercial de HispaniCoders.

## Objetivo

Sitio orientado a conversion para empresas de Estados Unidos que quieren incorporar talento LATAM en sus equipos de tecnologia.

## Stack

- React + Vite
- TypeScript estricto
- Tailwind CSS
- React Router
- Framer Motion
- React Helmet Async
- Lucide React
- Endpoints PHP en /api

## Requisitos

- Node.js 18+
- npm 9+

## Scripts

```bash
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Estructura

```text
src/
	assets/
	components/
		layout/
		navigation/
		sections/
		ui/
		forms/
	layouts/
	pages/
	hooks/
	styles/
	data/
	lib/
	services/
	utils/
	App.tsx
	main.tsx
api/
	contact.php
	request-talent.php
```

## Estado por etapas

Fase 1 completada:

- Sistema de diseno base (tokens, tipografia, componentes UI)
- Layout principal (header, footer, contenedores, secciones)
- Ruteo multi-pagina inicial
- SEO por pagina con metadatos y JSON-LD listo para evolucionar
- Endpoints PHP base para formularios

Proxima fase:

- Profundizar Home comercial final (copy, pruebas sociales, conversion)
- Completar contenido de paginas internas con componentes reutilizables
- Integrar formularios al backend PHP y validaciones de negocio

## Despliegue Namecheap

1. Ejecutar build:

```bash
npm run build
```

2. Subir el contenido interno de dist/ a public_html.
3. Subir tambien la carpeta api/ dentro de public_html para los endpoints PHP.
4. Verificar que exista public_html/.htaccess (sale automaticamente desde public/.htaccess en el build).

Importante:

- No subir el codigo fuente de src/ como sitio publico.
- El index.html publico debe ser el generado por dist/, no el index.html raiz del repo.
- Si se publica el index del repo, el navegador intenta cargar /src/main.tsx y genera error MIME.
