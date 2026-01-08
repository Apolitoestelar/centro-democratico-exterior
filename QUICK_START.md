# 🚀 GUÍA RÁPIDA DE DEPLOYMENT

## ✅ CHECKLIST ANTES DE DEPLOYAR

Antes de subir a Netlify, verifica que tienes:

- [ ] Tu dominio de GoDaddy activo
- [ ] Acceso a la configuración DNS de GoDaddy
- [ ] Las credenciales de Supabase a la mano:
  - VITE_SUPABASE_URL: `https://emcnyhdjewbrpfhztemj.supabase.co`
  - VITE_SUPABASE_ANON_KEY: `sb_publishable_7sT_sblLlvsWcHHfFHCWqw_1E7csqY-`

---

## 📦 PASO 1: EXPORTAR DE FIGMA MAKE

1. Haz clic en **"Export"** o **"Download"** en Figma Make
2. Guarda el archivo ZIP
3. Descomprime en tu computadora

---

## 🐙 PASO 2: SUBIR A GITHUB

### Opción más fácil: GitHub Desktop

1. Descarga: https://desktop.github.com/
2. Instala y abre GitHub Desktop
3. File → Add Local Repository
4. Selecciona la carpeta del proyecto
5. "Create a Repository" → Nombre: `centro-democratico-exterior`
6. "Publish repository"
7. ✅ Listo

### Opción alternativa: Web

1. github.com → botón "+" → New repository
2. Nombre: `centro-democratico-exterior`
3. Create repository
4. Arrastra todos los archivos del proyecto
5. Commit changes
6. ✅ Listo

---

## 🌐 PASO 3: DEPLOYMENT EN NETLIFY

1. Ve a https://app.netlify.com
2. "Add new site" → "Import an existing project"
3. "Deploy with GitHub"
4. Autoriza Netlify
5. Selecciona: `centro-democratico-exterior`
6. **IMPORTANTE**: Haz clic en "Show advanced"
7. Agrega estas variables de entorno:

```
VITE_SUPABASE_URL = https://emcnyhdjewbrpfhztemj.supabase.co
VITE_SUPABASE_ANON_KEY = sb_publishable_7sT_sblLlvsWcHHfFHCWqw_1E7csqY-
```

8. Haz clic en **"Deploy site"**
9. ⏳ Espera 3-5 minutos
10. ✅ Tu sitio estará en: `https://tu-sitio.netlify.app`

---

## 🌍 PASO 4: CONECTAR TU DOMINIO

### En Netlify:

1. Site settings → Domain management
2. "Add custom domain"
3. Escribe tu dominio (ej: `tudominio.com`)
4. "Add domain"
5. Netlify te dará **Name Servers** (copia estos 4):
   - `dns1.p05.nsone.net`
   - `dns2.p05.nsone.net`
   - `dns3.p05.nsone.net`
   - `dns4.p05.nsone.net`

### En GoDaddy:

1. Inicia sesión en GoDaddy
2. My Products → Domains → [tu dominio]
3. DNS → Nameservers → "Change"
4. "I'll use my own nameservers"
5. Pega los 4 nameservers de Netlify
6. "Save"
7. ⏳ Espera 30 min - 24 hrs para propagación

---

## ✅ VERIFICACIÓN FINAL

Después de que el DNS se propague, verifica:

- [ ] Tu dominio carga la página correctamente
- [ ] El formulario de voluntarios funciona
- [ ] Todas las imágenes cargan
- [ ] Los enlaces del blog funcionan
- [ ] El sitio tiene HTTPS (candado en navegador)

---

## 📊 PASO 5 (OPCIONAL): SEO Y ANALYTICS

### Google Search Console
1. https://search.google.com/search-console
2. "Add property" → tu dominio
3. Verificar propiedad
4. Agregar sitemap: `https://tudominio.com/sitemap.xml`

### Google Analytics
1. https://analytics.google.com
2. Crear cuenta y propiedad
3. Copiar ID (ej: G-XXXXXXXXXX)
4. En Netlify → Site settings → Environment variables
5. Agregar: `VITE_GA4_ID = G-XXXXXXXXXX`

### Google Tag Manager (para Ads)
1. https://tagmanager.google.com
2. Crear cuenta y contenedor
3. Copiar ID (ej: GTM-XXXXXXX)
4. En Netlify → Site settings → Environment variables
5. Agregar: `VITE_GTM_ID = GTM-XXXXXXX`

---

## 🆘 PROBLEMAS COMUNES

**❌ Build failed**
→ Verifica que las variables de entorno estén bien escritas

**❌ Formulario no funciona**
→ Verifica las credenciales de Supabase en las variables de entorno

**❌ Dominio no resuelve**
→ Verifica los nameservers en GoDaddy
→ Espera más tiempo para propagación DNS
→ Usa https://dnschecker.org para verificar

**❌ Página 404 en rutas**
→ Verifica que el archivo `netlify.toml` esté en la raíz

---

## 📞 SOPORTE

- **Guía completa**: Ver archivo `DEPLOYMENT_GUIDE.md`
- **Netlify Docs**: https://docs.netlify.com
- **GoDaddy Support**: Chat 24/7 en su sitio

---

## 🎉 ¡Listo!

Tu sitio está ahora en producción, optimizado para SEO, y listo para recibir tráfico.

**Próximos pasos sugeridos:**
1. Configurar Google Ads
2. Crear campañas de SEM
3. Compartir en redes sociales
4. Monitorear analytics

---

**Actualizado**: 8 de enero 2026  
**Versión**: 1.0
