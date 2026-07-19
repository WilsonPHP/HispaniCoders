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

2. Subir contenido de dist/ al hosting.
3. Mantener carpeta api/ en el servidor para procesar formularios PHP.
