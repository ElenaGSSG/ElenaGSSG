# Compilador de CV Imprimible Bilingüe (1 Página A4) — ElenaGS

Este directorio contiene las plantillas web pixel-perfect diseñadas para su impresión y renderizado en **1 página estándar A4** y el script de compilación a PDF vectorial bilingüe.

---

### 📄 Archivos

- `index.html`: Plantilla HTML5 + CSS3 pura ajustada con dimensiones fijas `210mm x 297mm` en **Español**, maquetación a dos columnas (Sidebar y Contenido Principal), tipografía optimizada y corte estricto sin saltos de página.
- `index-en.html`: Plantilla equivalente en **Inglés** con la misma maquetación y ajuste estricto a 1 página A4.
- `generate-pdf.bat`: Script en batch para Windows que invoca **Google Chrome** (o **Microsoft Edge**) en modo headless (`--print-to-pdf`) y compila automáticamente ambos documentos:
  - `CV_Elena_Garcia_Sanchez.pdf` (Español)
  - `CV_Elena_Garcia_Sanchez_EN.pdf` (Inglés)
- `assets/`:
  - `avatar.jpg`: Fotografía profesional optimizada.
  - `qr-portfolio.png`: Código QR vectorial que apunta a la versión interactiva online.
- `CV_Elena_Garcia_Sanchez.pdf`: PDF vectorial oficial compilado de 1 sola página (ES).
- `CV_Elena_Garcia_Sanchez_EN.pdf`: PDF vectorial oficial compilado de 1 sola página (EN).

---

### 🚀 Cómo generar los PDFs

Haz doble clic en `generate-pdf.bat` o ejecútalo desde terminal:

```cmd
generate-pdf.bat
```

El script compila ambos archivos y los sincroniza automáticamente con `../assets/docs/` para que la descarga web en el portal entregue la versión correspondiente según el idioma seleccionado.
