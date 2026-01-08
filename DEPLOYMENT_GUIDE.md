# 🚀 Guía de Deployment - Centro Democrático Exterior

Esta guía te llevará paso a paso para publicar tu página en Netlify con tu dominio de GoDaddy.

---

## 📋 Pre-requisitos

✅ Cuenta en Netlify (gratis)  
✅ Cuenta en GitHub (gratis)  
✅ Dominio en GoDaddy (ya lo tienes)  
✅ Credenciales de Supabase  

---

## 🎯 PASO 1: Descargar el código desde Figma Make

1. **En Figma Make**, haz clic en el botón **"Export"** o **"Download"** (arriba a la derecha)
2. Se descargará un archivo **ZIP** con todo el código
3. **Descomprime** el archivo ZIP en tu computadora
4. Verás una carpeta con todos los archivos del proyecto

---

## 🐙 PASO 2: Subir el código a GitHub

### Opción A: Usar GitHub Desktop (más fácil, recomendado)

1. **Descarga GitHub Desktop**: https://desktop.github.com/
2. **Instálalo** y ábrelo
3. Haz clic en **"File" → "Add Local Repository"**
4. Selecciona la carpeta donde descomprimiste el código
5. Si GitHub te pregunta, haz clic en **"Create a Repository"**
6. Dale un nombre: `centro-democratico-exterior`
7. Haz clic en **"Publish repository"**
8. ✅ ¡Listo! Tu código ya está en GitHub

### Opción B: Usar la interfaz web de GitHub

1. Ve a https://github.com
2. Haz clic en el botón **"+"** (arriba derecha) → **"New repository"**
3. Nombre: `centro-democratico-exterior`
4. Marca como **"Public"** o **"Private"** (recomiendo Private)
5. Haz clic en **"Create repository"**
6. En la siguiente pantalla, arrastra todos los archivos de tu carpeta descomprimida
7. Haz clic en **"Commit changes"**
8. ✅ ¡Listo! Tu código ya está en GitHub

---

## 🌐 PASO 3: Conectar GitHub con Netlify

1. Ve a https://app.netlify.com
2. Haz clic en **"Add new site" → "Import an existing project"**
3. Selecciona **"Deploy with GitHub"**
4. Netlify te pedirá autorizar el acceso a GitHub → Haz clic en **"Authorize"**
5. Busca tu repositorio: `centro-democratico-exterior`
6. Haz clic en el repositorio

---

## ⚙️ PASO 4: Configurar el Build en Netlify

En la pantalla de configuración, verifica que diga:

- **Branch to deploy**: `main` (o `master`)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 🔐 IMPORTANTE: Variables de entorno

Antes de hacer el deploy, **DEBES** agregar las variables de Supabase:

1. Haz clic en **"Show advanced"**
2. Haz clic en **"New variable"**
3. Agrega estas dos variables:

   **Variable 1:**
   - Key: `VITE_SUPABASE_URL`
   - Value: `https://emcnyhdjewbrpfhztemj.supabase.co`

   **Variable 2:**
   - Key: `VITE_SUPABASE_ANON_KEY`
   - Value: `sb_publishable_7sT_sblLlvsWcHHfFHCWqw_1E7csqY-`

4. Haz clic en **"Deploy site"**

**⏳ Netlify comenzará a construir tu sitio** (toma 2-5 minutos)

---

## 🎉 PASO 5: Tu sitio ya está en línea

Una vez terminado el build:

1. Netlify te dará una URL temporal como: `https://random-name-12345.netlify.app`
2. **Haz clic en esa URL** para verificar que todo funciona
3. Verifica especialmente:
   - ✅ La página carga correctamente
   - ✅ El formulario de voluntarios funciona (prueba enviando un registro)
   - ✅ Todas las imágenes se ven bien
   - ✅ Los enlaces del blog funcionan

---

## 🌍 PASO 6: Conectar tu dominio de GoDaddy

Ahora vamos a conectar tu dominio personalizado.

### En Netlify:

1. En tu sitio de Netlify, ve a **"Site settings" → "Domain management"**
2. Haz clic en **"Add custom domain"**
3. Escribe tu dominio (ejemplo: `centrodemocraticoexterior.com`)
4. Haz clic en **"Verify"** y luego **"Add domain"**
5. Netlify te mostrará **instrucciones específicas** con registros DNS

Netlify te dará algo como esto:

```
Opción 1: Usar Name Servers (recomendado)
dns1.p05.nsone.net
dns2.p05.nsone.net
dns3.p05.nsone.net
dns4.p05.nsone.net

Opción 2: Usar registros A/CNAME
A Record: 75.2.60.5
```

### En GoDaddy:

#### **Opción A: Name Servers (más fácil, recomendada)**

1. Inicia sesión en GoDaddy
2. Ve a **"My Products" → "Domains"**
3. Haz clic en tu dominio
4. Ve a **"DNS" → "Nameservers"**
5. Haz clic en **"Change"**
6. Selecciona **"I'll use my own nameservers"**
7. Pega los 4 nameservers que Netlify te dio:
   - `dns1.p05.nsone.net`
   - `dns2.p05.nsone.net`
   - `dns3.p05.nsone.net`
   - `dns4.p05.nsone.net`
8. Haz clic en **"Save"**

#### **Opción B: Registros A/CNAME (alternativa)**

1. En GoDaddy, ve a **"DNS" → "DNS Records"**
2. **Borra** cualquier registro A que apunte a tu dominio principal (@)
3. Haz clic en **"Add" → "A Record"**
4. Configura:
   - **Name**: `@`
   - **Value**: (la IP que Netlify te dio, ej: `75.2.60.5`)
   - **TTL**: `1 Hour`
5. Haz clic en **"Add" → "CNAME Record"**
6. Configura:
   - **Name**: `www`
   - **Value**: (el dominio de Netlify, ej: `random-name-12345.netlify.app`)
   - **TTL**: `1 Hour`
7. Guarda los cambios

---

## ⏰ PASO 7: Esperar propagación DNS

- **Los cambios DNS pueden tardar de 5 minutos a 48 horas** (normalmente 1-2 horas)
- Puedes verificar el estado en: https://dnschecker.org
- Escribe tu dominio y verifica que apunte correctamente

Una vez propagado, **tu sitio estará en vivo en tu dominio personalizado** 🎉

---

## 🔒 PASO 8: Activar HTTPS/SSL (automático)

Netlify activa **HTTPS automáticamente** una vez que tu dominio esté conectado.

1. En Netlify, ve a **"Site settings" → "Domain management" → "HTTPS"**
2. Verifica que diga **"Certificate active"**
3. Si está pendiente, espera unos minutos y recarga la página

✅ Tu sitio ahora tiene **HTTPS gratis** (el candado en el navegador)

---

## 📊 PASO 9: Configurar Google Search Console

Para que Google indexe tu sitio:

1. Ve a https://search.google.com/search-console
2. Haz clic en **"Add property"**
3. Escribe tu dominio: `https://tudominio.com`
4. Google te pedirá **verificar** que eres el dueño:
   - **Opción más fácil**: Agregar un meta tag HTML
   - Netlify tiene una opción para esto en **"Post processing" → "Snippet injection"**
5. Una vez verificado, ve a **"Sitemaps"** (menú izquierdo)
6. Agrega tu sitemap: `https://tudominio.com/sitemap.xml`
7. Haz clic en **"Submit"**

**Google comenzará a indexar tu sitio** (puede tomar 1-7 días)

---

## 📈 PASO 10: Configurar Google Analytics 4

1. Ve a https://analytics.google.com
2. Crea una cuenta y una propiedad para tu sitio
3. Google te dará un **ID de medición** como: `G-XXXXXXXXXX`
4. **Copia ese ID**
5. En Netlify, ve a **"Site settings" → "Environment variables"**
6. Agrega una nueva variable:
   - **Key**: `VITE_GA4_ID`
   - **Value**: `G-XXXXXXXXXX` (tu ID real)
7. Netlify redesplegará tu sitio automáticamente

---

## 🎯 PASO 11: Configurar Google Tag Manager (para Google Ads)

1. Ve a https://tagmanager.google.com
2. Crea una cuenta y un contenedor para tu sitio
3. Google te dará un **GTM ID** como: `GTM-XXXXXXX`
4. **Copia ese ID**
5. En Netlify, ve a **"Site settings" → "Environment variables"**
6. Agrega una nueva variable:
   - **Key**: `VITE_GTM_ID`
   - **Value**: `GTM-XXXXXXX` (tu ID real)

### Configurar eventos de conversión en GTM:

**Evento 1: Formulario de voluntarios enviado**
- Trigger: Form Submission
- Tag Type: Google Ads Conversion
- Conversion ID: (lo obtienes de Google Ads)

**Evento 2: Clic en "Dona ahora"**
- Trigger: Click - All Elements
- Condition: Click URL contains "stripe" o el texto del botón
- Tag Type: Google Ads Conversion

**Evento 3: Tiempo en sitio > 2 minutos**
- Trigger: Timer
- Interval: 120000 (2 minutos en milisegundos)
- Tag Type: Google Ads Conversion

---

## 🚨 Resolución de problemas comunes

### ❌ Error: "Build failed"
- Revisa que las variables de entorno estén correctamente escritas
- Verifica que `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` estén presentes

### ❌ El formulario de voluntarios no funciona
- Verifica las variables de Supabase en Netlify
- Asegúrate de que la tabla en Supabase exista y tenga los permisos correctos

### ❌ Las imágenes no cargan
- Asegúrate de que la carpeta `public` esté en el repositorio
- Verifica que las imágenes importadas con `figma:asset` estén presentes

### ❌ React Router no funciona (error 404 en rutas)
- Verifica que el archivo `netlify.toml` esté en la raíz del proyecto
- El archivo debe tener el redirect configurado correctamente

### ❌ El dominio no resuelve después de 24 horas
- Verifica los Name Servers en GoDaddy
- Usa https://dnschecker.org para verificar la propagación
- Contacta al soporte de Netlify o GoDaddy

---

## 🎊 ¡Felicidades!

Tu sitio está ahora:
- ✅ En producción con tu dominio personalizado
- ✅ Con HTTPS/SSL activo
- ✅ Optimizado para SEO
- ✅ Con tracking de Google Analytics
- ✅ Listo para Google Ads
- ✅ Con formulario de voluntarios funcionando

---

## 📞 Soporte

Si tienes problemas:
- **Netlify**: https://docs.netlify.com
- **GoDaddy**: Soporte 24/7 en su chat
- **Supabase**: https://supabase.com/docs

---

## 🔄 Actualizaciones futuras

Cada vez que quieras hacer cambios:

1. Edita los archivos en tu computadora
2. En GitHub Desktop, escribe un mensaje de commit
3. Haz clic en **"Push origin"**
4. **Netlify detectará el cambio automáticamente** y redesplegará tu sitio (2-5 min)

¡Así de fácil! 🚀

---

**Última actualización**: 8 de enero de 2026  
**Versión**: 1.0  
**Contacto**: Centro Democrático Exterior
