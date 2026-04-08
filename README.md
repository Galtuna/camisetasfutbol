# 🏟️ Galería de Camisetas de Fútbol

Una página web moderna y responsiva para mostrar y gestionar una colección de camisetas de fútbol históricas.

## 🌟 Características

- ✨ **Diseño moderno** - Interfaz oscura elegante con colores vibrantes
- 📱 **Responsivo** - Se adapta perfectamente a cualquier dispositivo (desktop, tablet, móvil)
- 🔍 **Búsqueda avanzada** - Filtra por equipo, marca, temporada, país, equipación, talla, número o jugador
- 🖼️ **Galería de imágenes** - Soporte para múltiples fotos por camiseta
- 💾 **Datos en JSON** - Fácil de agregar y editar camisetas
- ⌨️ **Accesible** - Controles intuitivos y atajos de teclado

## 📦 Archivos del Proyecto

```
camisetasfutbol2/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y diseño
├── script.js           # Funcionalidad JavaScript
├── data.json           # Datos de las camisetas
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

1. **Abre el archivo** `index.html` en tu navegador web
2. **Visualiza** todas las camisetas en la galería
3. **Busca** usando el campo de búsqueda (equipo, marca, temporada, etc.)
4. **Haz clic** en cualquier camiseta para ver más detalles
5. **Navega** por las imágenes usando las miniaturas

## ➕ Agregar Camisetas

Para agregar nuevas camisetas, abre el archivo `data.json` y agrega un nuevo objeto siguiente esta estructura:

```json
{
    "team": "Nombre del Equipo",
    "brand": "Marca de la Camiseta",
    "season": "Temporada (ej: 2023-2024)",
    "country": "País del equipo",
    "kit": "Tipo de equipación (ej: 1ª equipación, 2ª equipación)",
    "size": "Talla de la camiseta (ej: S, M, L, XL)",
    "number": 10,
    "playerName": "Nombre del Jugador (opcional)",
    "images": [
        "img/camisetas/foto_1.jpg",
        "img/camisetas/foto_2.jpg"
    ]
}
```

### Campos Explicados:
- **team** (requerido): Nombre del club o selección
- **brand** (requerido): Fabricante de la camiseta (Adidas, Nike, Puma, etc.)
- **season** (requerido): Temporada de la camiseta
- **country** (requerido): País del equipo
- **kit** (requerido): Tipo de equipación (1ª, 2ª, portero, especial, etc.)
- **size** (requerido): Talla de la camiseta (S, M, L, XL, etc.)
- **number** (opcional): Número de la camiseta (0 = no mostrar)
- **playerName** (opcional): Nombre del jugador (vacío = no mostrar)
- **images** (requerido): Array con rutas de las imágenes

## 🎨 Personalización

### Cambiar Colores

Abre `style.css` y modifica las variables de color en la sección `:root`:

```css
:root {
    --primary-color: #0f1419;        /* Negro azulado oscuro */
    --secondary-color: #1a2332;      /* Azul grisáceo */
    --accent-color: #00d4aa;         /* Verde turquesa vibrante */
    --accent-light: #26debd;         /* Verde turquesa claro */
    --accent-hover: #00b894;         /* Verde turquesa oscuro para hover */
    --text-color: #ffffff;           /* Blanco puro */
    --text-secondary: #b8c5d6;       /* Gris azulado claro */
    --border-color: #2d3748;         /* Gris azulado */
    --card-bg: #1e293b;              /* Fondo de tarjetas */
    --success-color: #48bb78;        /* Verde éxito */
}
```

### Agregar tu Logo

Modifica el título en el `<header>` de `index.html`:

```html
<h1>🏆 Mi Colección de Camisetas 🏆</h1>
```

## 🔍 Funcionalidades

### Búsqueda
- Busca por nombre de equipo
- Busca por marca fabricante
- Busca por temporada
- Busca por país
- Busca por tipo de equipación
- Busca por talla
- Busca por número de camiseta
- Busca por nombre de jugador

### Modal (Vista de Detalles)
- Visualiza imágenes en tamaño grande
- Navega entre múltiples fotos
- Ve toda la información de la camiseta
- Cierra con ESC o haciendo clic fuera

## 📸 Fuentes de Imágenes

Puedes usar imágenes de:
- **Local**: Descarga imágenes y guárdalas en una carpeta `/images/`
- **URLs externas**: Usa enlaces directos (como en los ejemplos actuales)
- **Servicios**: Unsplash, Pixabay, Pexels (imágenes gratis)

## 📝 Ejemplo Completo de Camiseta

```json
{
    "team": "FC Barcelona",
    "brand": "Nike",
    "season": "2023-2024",
    "country": "España",
    "kit": "1ª equipación",
    "size": "L",
    "number": 7,
    "playerName": "Ousmane Dembélé",
    "images": [
        "img/camisetas/barcelona_1.jpg",
        "img/camisetas/barcelona_2.jpg"
    ]
}
```

## ⌨️ Atajos de Teclado

- **ESC**: Cierra el modal de detalles

## 🌐 Navegadores Soportados

- ✅ Chrome/Edge (versión 90+)
- ✅ Firefox (versión 88+)
- ✅ Safari (versión 14+)
- ✅ Opera (versión 76+)

## 🎯 Próximas Mejoras Posibles

- 🔐 Agregar sistema de administración (agregar/editar/eliminar)
- 📊 Estadísticas y gráficos
- 💾 Guardar colección en base de datos
- 🏆 Filtros avanzados (por temporada, liga, etc.)
- 👁️ Comparar camisetas lado a lado
- ⭐ Sistema de favoritos

## 📄 Licencia

Este proyecto es libre para usar y modificar.

## 💬 Soporte

Para agregar más camisetas, simplemente abre `data.json` y sigue el formato establecido.

---

**Disfruta de tu colección de camisetas antiguas** ⚽
