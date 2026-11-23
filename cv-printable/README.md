# Compilador de CV Imprimible (1 Página A4) — ElenaGS

Este directorio contiene la plantilla web pixel-perfect diseñada exclusivamente para su impresión / renderizado en **1 página estándar A4** y el script de compilación a PDF vectorial.

---

### 📄 Archivos

- `index.html`: Plantilla HTML5 + CSS3 pura ajustada con dimensiones fijas `210mm x 297mm`, maquetación a dos columnas (Sidebar y Contenido Principal), tipografía optimizada y corte estricto sin saltos de página.
- `generate-pdf.bat`: Script en batch para Windows que invoca **Google Chrome** (o **Microsoft Edge**) en modo headless (`--print-to-pdf`) y compila automáticamente `CV_Elena_Garcia_Sanchez.pdf`.
- `assets/`:
  - `avatar.jpg`: Fotografía profesional optimizada.
  - `qr-portfolio.png`: Código QR vectorial de alta definición que apunta a la versión interactiva online.
- `CV_Elena_Garcia_Sanchez.pdf`: PDF vectorial oficial compilado de 1 sola página.

---

### 🚀 Cómo generar el PDF

Haz doble clic en `generate-pdf.bat` o ejecútalo desde terminal:

```cmd
generate-pdf.bat
```

El script compilará el archivo `CV_Elena_Garcia_Sanchez.pdf` y lo sincronizará automáticamente con `../assets/docs/CV_Elena_Garcia_Sanchez.pdf` para que esté disponible de inmediato para el botón de descarga del portal web.
