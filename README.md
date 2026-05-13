# Fmandinga — Front La Mandinga
# React + TypeScript + Vite

Front tienda ropa deporte. React + Vite + TS. Deploy Vercel.

## Stack

- React 19 · TS · Vite 8
- React Router v7 (rutas)
- Axios (fetch API)
- SweetAlert2 (popups)
- React Hook Form (forms)
- js-cookie (cookies auth)

## Arrancar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Variables entorno

Crear `.env` en raíz:

```
VITE_API_URL=http://localhost:5000/api
```

## Páginas

| Ruta | Qué hace |
|------|----------|
| `/` | Home (Hero + SobreNosotros) |
| `/productos` | Catálogo con filtro categoría |
| `/checkout` | Pago pedido |
| `/login` | Login |
| `/register` | Registro |
| `/perfil` | Datos usuario |
| `/admin` | Panel admin |
| `/success` | Confirmación compra |
| `/aviso-legal` | Legal |

## Estructura

```
src/
├── components/   # Navbar, Cart, Hero, Footer...
├── pages/        # Una carpeta por página
├── context/      # CartContext
└── service/      # authService, productService
```

## Deploy

Vercel. Push main = redeploy auto.
URL prod: https://lamandinga.tripleeme.es
