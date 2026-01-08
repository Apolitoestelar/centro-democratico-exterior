# ✅ CHECKLIST PRE-DEPLOYMENT

Usa esta lista para asegurarte de que todo está listo antes de hacer el deployment.

---

## 🔍 ARCHIVOS NECESARIOS (Todos creados ✅)

- [x] `/netlify.toml` - Configuración de Netlify
- [x] `/public/robots.txt` - Para motores de búsqueda
- [x] `/public/sitemap.xml` - Mapa del sitio para SEO
- [x] `/.env.example` - Plantilla de variables de entorno
- [x] `/.gitignore` - Archivos a ignorar en Git
- [x] `/DEPLOYMENT_GUIDE.md` - Guía completa paso a paso
- [x] `/QUICK_START.md` - Guía rápida
- [x] SEO components agregados a todas las páginas

---

## 📝 INFORMACIÓN QUE NECESITAS TENER A MANO

### 1. Credenciales de Supabase
```
VITE_SUPABASE_URL=https://emcnyhdjewbrpfhztemj.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_7sT_sblLlvsWcHHfFHCWqw_1E7csqY-
```

### 2. Información de tu dominio
- [ ] Dominio de GoDaddy: ___________________________
- [ ] Acceso al panel de GoDaddy: Sí / No
- [ ] Usuario GoDaddy: _____________________________
- [ ] Contraseña guardada en: _____________________

### 3. Cuentas necesarias (crear si no las tienes)
- [ ] GitHub: https://github.com (gratis)
- [ ] Netlify: https://netlify.com (gratis)
- [ ] Google Search Console (opcional, gratis)
- [ ] Google Analytics (opcional, gratis)
- [ ] Google Tag Manager (opcional, gratis)
- [ ] Google Ads (requiere presupuesto)

---

## 🎯 OPTIMIZACIONES SEO IMPLEMENTADAS

### Meta Tags ✅
- [x] Title dinámico por página
- [x] Description optimizada
- [x] Keywords relevantes
- [x] Open Graph para redes sociales
- [x] Twitter Cards
- [x] Canonical URLs

### Archivos SEO ✅
- [x] sitemap.xml con todas las páginas
- [x] robots.txt permitiendo rastreo
- [x] Meta robots en todas las páginas

### Performance ✅
- [x] Configuración de cache en Netlify
- [x] Compresión de assets
- [x] Lazy loading de imágenes (ImageWithFallback)
- [x] Build optimizado con Vite

---

## 🚀 PASOS PARA DEPLOYMENT

### Fase 1: Preparación (ya completada ✅)
- [x] Código optimizado
- [x] SEO configurado
- [x] Variables de entorno preparadas
- [x] Archivos de configuración creados

### Fase 2: Export desde Figma Make
- [ ] Haz clic en "Export" en Figma Make
- [ ] Descarga el archivo ZIP
- [ ] Descomprime en tu computadora
- [ ] Verifica que todos los archivos estén presentes

### Fase 3: Subir a GitHub
- [ ] Crear/abrir GitHub Desktop o usar la web
- [ ] Crear repositorio: `centro-democratico-exterior`
- [ ] Subir todos los archivos
- [ ] Verificar que el código esté en GitHub

### Fase 4: Deploy en Netlify
- [ ] Conectar Netlify con GitHub
- [ ] Seleccionar el repositorio
- [ ] Configurar build: `npm run build`
- [ ] Directorio: `dist`
- [ ] **CRÍTICO**: Agregar variables de entorno de Supabase
- [ ] Deploy site
- [ ] Verificar que el sitio funcione en la URL de Netlify

### Fase 5: Conectar dominio
- [ ] En Netlify: agregar dominio personalizado
- [ ] Copiar nameservers de Netlify
- [ ] En GoDaddy: cambiar nameservers
- [ ] Esperar propagación DNS (30 min - 48 hrs)
- [ ] Verificar que el dominio resuelva correctamente

### Fase 6: Verificación final
- [ ] Sitio carga en el dominio personalizado
- [ ] HTTPS está activo (candado verde)
- [ ] Formulario de voluntarios funciona
- [ ] Todas las imágenes cargan
- [ ] Enlaces del blog funcionan
- [ ] Navegación funciona correctamente
- [ ] Responsive en móvil funciona

### Fase 7: SEO Setup (opcional pero recomendado)
- [ ] Actualizar sitemap.xml con el dominio real
- [ ] Registrar en Google Search Console
- [ ] Subir sitemap a Search Console
- [ ] Instalar Google Analytics
- [ ] Instalar Google Tag Manager (para Ads)
- [ ] Configurar eventos de conversión

---

## 🔧 ACTUALIZACIONES NECESARIAS POST-DEPLOYMENT

### 1. Actualizar sitemap.xml
Reemplaza `https://tudominio.com` con tu dominio real en:
- `/public/sitemap.xml`
- `/public/robots.txt`

### 2. Actualizar variables de entorno (opcional)
Si creas cuentas de Analytics/GTM, agregar en Netlify:
```
VITE_GA4_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_SITE_URL=https://tudominio.com
```

---

## 📊 MÉTRICAS A MONITOREAR POST-LAUNCH

### Primera semana
- [ ] Visitas totales (Google Analytics)
- [ ] Tasa de rebote
- [ ] Tiempo en sitio
- [ ] Formularios enviados (Supabase)
- [ ] Páginas más visitadas

### SEO
- [ ] Páginas indexadas en Google
- [ ] Posición para keywords clave:
  - "centro democrático exterior"
  - "lista cerrada colombianos exterior"
  - "elecciones 2026 exterior"
  - "cámara colombianos exterior"

### Conversiones
- [ ] Formularios de voluntarios completados
- [ ] Clics en "Dona ahora"
- [ ] Descargas de guía de votación
- [ ] Clics en calendario electoral
- [ ] Agregados a calendario de Google

---

## 🎯 CONFIGURACIÓN GOOGLE ADS (POST-DEPLOYMENT)

### Prerrequisitos
- [x] Google Tag Manager instalado
- [ ] Cuenta Google Ads activa
- [ ] Presupuesto definido
- [ ] Eventos de conversión configurados

### Eventos de conversión sugeridos
1. **Alta conversión**: Formulario voluntario enviado
2. **Media conversión**: Descarga guía de votación
3. **Baja conversión**: Tiempo en sitio > 2 minutos
4. **Engagement**: Clic en agregar a calendario
5. **Micro conversión**: Scroll hasta sección "Razones"

### Keywords sugeridas para SEM
- Lista cerrada centro democrático
- Votar desde el exterior Colombia
- Elecciones 2026 colombianos exterior
- Cámara colombianos exterior
- Centro democrático exterior
- Alejandro Murcia candidato
- Como votar desde [país]
- Consulados Colombia votación

---

## 🆘 CONTACTOS DE SOPORTE

### Plataformas
- **Netlify Support**: https://answers.netlify.com/
- **GoDaddy Support**: Chat 24/7 en godaddy.com
- **GitHub Support**: https://support.github.com/
- **Supabase Support**: https://supabase.com/support

### Documentación
- **Netlify Docs**: https://docs.netlify.com/
- **Vite Docs**: https://vite.dev/
- **React Router**: https://reactrouter.com/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## ✅ VERIFICACIÓN FINAL ANTES DE LANZAR

Marca cada item cuando lo hayas verificado:

### Funcionalidad
- [ ] Todas las secciones de la landing page cargan
- [ ] Navegación funciona (Home, Blog, Footer links)
- [ ] Formulario de voluntarios envía datos a Supabase
- [ ] Enlaces externos abren correctamente
- [ ] Botón "Dona ahora" funciona
- [ ] Modal de calendario se abre
- [ ] Enlaces de Google Calendar funcionan
- [ ] Blog posts cargan correctamente
- [ ] Imágenes cargan sin errores 404

### Performance
- [ ] Sitio carga en menos de 3 segundos
- [ ] No hay errores en la consola del navegador
- [ ] Responsive funciona en móvil, tablet y desktop
- [ ] HTTPS está activo

### SEO
- [ ] Meta tags presentes en todas las páginas
- [ ] Sitemap accesible en /sitemap.xml
- [ ] Robots.txt accesible en /robots.txt
- [ ] Favicon visible en el navegador
- [ ] Open Graph tags para compartir en redes

### Legal
- [ ] Política de privacidad accesible
- [ ] Términos de uso accesibles
- [ ] Mensaje de aviso en formulario sobre datos personales

---

## 🎊 POST-LAUNCH INMEDIATO

Una vez que el sitio esté en vivo:

1. **Compartir la URL** con el equipo de campaña
2. **Probar desde diferentes dispositivos** (móvil, tablet, desktop)
3. **Enviar a 5-10 personas** para que lo prueben
4. **Recoger feedback** inicial
5. **Crear primeras publicaciones** en redes sociales
6. **Iniciar campañas de Google Ads** (si ya están listas)
7. **Monitorear Supabase** para ver primeros registros de voluntarios

---

## 📅 CALENDARIO DE LANZAMIENTO SUGERIDO

### Día 1-2: Deploy y configuración básica
- Export, GitHub, Netlify
- Conectar dominio
- Verificar funcionamiento

### Día 3-5: SEO y Analytics
- Google Search Console
- Google Analytics
- Google Tag Manager
- Primeras optimizaciones

### Día 6-7: Marketing
- Lanzamiento en redes sociales
- Primera campaña Google Ads
- Email a base de contactos
- Coordinación con equipo

### Semana 2+: Optimización
- Análisis de métricas
- Ajustes basados en datos
- A/B testing de CTAs
- Optimización de conversiones

---

**Última actualización**: 8 de enero 2026  
**Estado**: ✅ Listo para deployment  
**Próximo paso**: Exportar desde Figma Make
