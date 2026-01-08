import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Navigation */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[var(--cd-blue)] hover:text-[var(--cd-blue-dark)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>

        {/* Header Section */}
        <div className="relative bg-[var(--cd-blue)] text-white py-16 overflow-hidden">
          {/* Background Image with Blur */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1764106813759-9ef7bf42a0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGNvbnRyYWN0fGVufDF8fHx8MTc2Nzg1NDA4M3ww&ixlib=rb-4.1.0&q=80&w=1080)',
              filter: 'blur(4px)',
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[var(--cd-blue)]/85" />
          
          {/* Content */}
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos de Uso</h1>
            <p className="text-xl text-blue-100">
              Centro Democrático Exterior - Cámara de los Colombianos en el Exterior
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Última actualización: 8 de enero de 2026
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">1. Aceptación de los términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bienvenido al sitio web oficial del Centro Democrático Exterior para la Lista Cerrada de la 
                Cámara de los Colombianos en el Exterior. Al acceder y utilizar este sitio web, usted acepta 
                estar sujeto a estos Términos de Uso y a todas las leyes y regulaciones aplicables.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Si no está de acuerdo con alguno de estos términos, le solicitamos que no utilice este sitio web.
              </p>
            </section>

            {/* Purpose of the Site */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">2. Propósito del sitio web</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Este sitio web es una plataforma institucional con los siguientes objetivos:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span><strong>Educación electoral:</strong> Informar a los colombianos en el exterior sobre el proceso electoral, el sistema de lista cerrada y cómo ejercer su derecho al voto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span><strong>Presentación de candidatos:</strong> Dar a conocer a los tres candidatos de la lista cerrada: Alejandro Murcia, Olga Lucía Murcia y Camilo Florido</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span><strong>Organización de voluntarios:</strong> Facilitar el registro de personas interesadas en apoyar la campaña como voluntarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span><strong>Difusión de contenido:</strong> Compartir noticias, artículos pedagógicos y recursos sobre la campaña y el proceso electoral</span>
                </li>
              </ul>
            </section>

            {/* Use of the Site */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">3. Uso permitido del sitio</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-[var(--cd-blue)] mb-3">3.1. Usos autorizados</h3>
                <p className="text-gray-700 mb-3">Al utilizar este sitio web, usted se compromete a:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)]">✓</span>
                    <span>Utilizar el sitio únicamente con fines informativos y legales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)]">✓</span>
                    <span>Proporcionar información veraz y actualizada en los formularios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)]">✓</span>
                    <span>Respetar los derechos de autor y propiedad intelectual del contenido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)]">✓</span>
                    <span>Compartir contenido del sitio respetando su naturaleza política y contexto electoral</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">3.2. Usos prohibidos</h3>
                <p className="text-gray-700 mb-3">Está estrictamente prohibido:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Usar el sitio para difundir información falsa o engañosa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Intentar acceder de forma no autorizada a sistemas o bases de datos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Transmitir virus, malware o cualquier código dañino</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Realizar ataques de denegación de servicio o sobrecargar intencionalmente el sitio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Usar el sitio para acosar, amenazar o difamar a terceros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Recopilar información de otros usuarios sin su consentimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Utilizar el contenido del sitio con fines comerciales sin autorización previa</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">4. Propiedad intelectual</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">4.1. Derechos de autor</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Todo el contenido de este sitio web, incluyendo pero no limitado a textos, imágenes, gráficos, 
                  logos, iconos, fotografías, videos y software, es propiedad del Centro Democrático Exterior o 
                  de sus licenciantes y está protegido por las leyes de propiedad intelectual de Colombia.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">4.2. Uso del logotipo y marca</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  El logotipo del Centro Democrático y todos los elementos visuales de identidad corporativa 
                  son marcas registradas. Su uso no autorizado está prohibido y puede ser objeto de acciones legales.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-[var(--cd-yellow)] p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">4.3. Uso permitido de contenido</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Se permite el uso del contenido de este sitio para:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Compartir información electoral en redes sociales con la debida atribución</li>
                  <li>• Difundir material de campaña respetando su contexto y mensaje original</li>
                  <li>• Uso educativo sobre el proceso electoral</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  Cualquier otro uso requiere autorización expresa y por escrito del Centro Democrático Exterior.
                </p>
              </div>
            </section>

            {/* User Content */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">5. Contenido del usuario</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">5.1. Formularios y envíos</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Al enviar información a través de los formularios de este sitio web (formulario de voluntarios, 
                  formulario de contacto, etc.), usted garantiza que:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• La información proporcionada es veraz, precisa y actualizada</li>
                  <li>• Es mayor de 18 años y tiene capacidad legal para contratar</li>
                  <li>• No está violando ninguna ley o regulación al proporcionar la información</li>
                  <li>• Otorga permiso al Centro Democrático Exterior para utilizar dicha información según la Política de Privacidad</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">5.2. Responsabilidad del usuario</h3>
                <p className="text-gray-700 leading-relaxed">
                  Usted es el único responsable de la información que proporciona. El Centro Democrático Exterior 
                  se reserva el derecho de rechazar, eliminar o no procesar cualquier envío que considere inapropiado, 
                  ilegal o que viole estos términos.
                </p>
              </div>
            </section>

            {/* Liability Limitations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">6. Limitación de responsabilidad</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">6.1. Contenido "tal cual"</h3>
                <p className="text-gray-700 leading-relaxed">
                  Este sitio web y su contenido se proporcionan "tal cual" y "según disponibilidad". No garantizamos 
                  que el sitio estará disponible en todo momento, que esté libre de errores o que la información 
                  esté siempre actualizada en tiempo real.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">6.2. Enlaces externos</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Este sitio puede contener enlaces a sitios web de terceros (como la Registraduría Nacional, CNE, etc.). 
                  No somos responsables del contenido, políticas de privacidad o prácticas de estos sitios externos.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  El acceso a sitios externos es bajo su propio riesgo y responsabilidad.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">6.3. Daños indirectos</h3>
                <p className="text-gray-700 leading-relaxed">
                  En ningún caso el Centro Democrático Exterior será responsable por daños indirectos, incidentales, 
                  especiales o consecuentes que resulten del uso o la imposibilidad de usar este sitio web.
                </p>
              </div>
            </section>

            {/* Electoral Compliance */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">7. Cumplimiento electoral</h2>
              
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[var(--cd-blue)] mb-3">7.1. Transparencia</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Este sitio web cumple con todas las normas electorales vigentes en Colombia, incluyendo:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Código Electoral Colombiano</li>
                  <li>• Resoluciones del Consejo Nacional Electoral (CNE)</li>
                  <li>• Normativa sobre propaganda electoral digital</li>
                  <li>• Leyes de financiación de campañas</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-[var(--cd-blue)] mb-3">7.2. Naturaleza del sitio</h3>
                <p className="text-gray-700 leading-relaxed">
                  Este es un sitio de propaganda electoral autorizado, inscrito y fiscalizado por las autoridades 
                  electorales competentes. Todo el contenido respeta los límites y restricciones establecidos por 
                  la legislación electoral colombiana.
                </p>
              </div>
            </section>

            {/* Availability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">8. Disponibilidad del sitio</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos esforzamos por mantener el sitio web disponible las 24 horas del día, los 7 días de la semana. 
                Sin embargo, nos reservamos el derecho de:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span>Realizar mantenimiento programado o de emergencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span>Modificar, suspender o descontinuar cualquier aspecto del sitio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span>Restringir el acceso a ciertas funcionalidades sin previo aviso</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                No seremos responsables si por cualquier razón el sitio no está disponible en cualquier momento o período.
              </p>
            </section>

            {/* Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">9. Privacidad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El uso de este sitio web también está sujeto a nuestra Política de Privacidad, que describe cómo 
                recopilamos, usamos y protegemos su información personal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le recomendamos leer nuestra <Link to="/politica-de-privacidad" className="text-[var(--cd-blue)] underline hover:text-[var(--cd-blue-dark)]">Política de Privacidad</Link> para entender mejor cómo manejamos sus datos.
              </p>
            </section>

            {/* Modifications */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">10. Modificaciones a los términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento sin previo aviso. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Es su responsabilidad revisar periódicamente estos términos. El uso continuado del sitio después 
                de cualquier cambio constituye su aceptación de los nuevos términos.
              </p>
              <div className="bg-yellow-50 border-l-4 border-[var(--cd-yellow)] p-4">
                <p className="text-gray-700">
                  <strong>Fecha de última actualización:</strong> Esta versión de los Términos de Uso fue actualizada 
                  el 8 de enero de 2026.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">11. Ley aplicable y jurisdicción</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">11.1. Legislación colombiana</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Estos Términos de Uso se rigen por las leyes de la República de Colombia, sin considerar sus 
                  disposiciones sobre conflictos de leyes.
                </p>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">11.2. Resolución de disputas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cualquier disputa relacionada con estos términos o el uso del sitio web será resuelta en primer 
                  lugar mediante negociación de buena fe. Si no se alcanza un acuerdo, las partes se someterán a 
                  la jurisdicción de los tribunales competentes de Colombia.
                </p>
              </div>
            </section>

            {/* Severability */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">12. Divisibilidad</h2>
              <p className="text-gray-700 leading-relaxed">
                Si cualquier disposición de estos Términos de Uso se considera inválida o inaplicable por un 
                tribunal competente, dicha disposición será modificada e interpretada para cumplir los objetivos 
                de dicha disposición en la mayor medida posible, y las disposiciones restantes continuarán en 
                pleno vigor y efecto.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">13. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene alguna pregunta, inquietud o comentario sobre estos Términos de Uso, puede contactarnos:
              </p>
              <div className="bg-gray-100 text-gray-800 p-6 rounded-lg">
                <p className="mb-2"><strong>Centro Democrático Exterior</strong></p>
                <p className="mb-4">Lista Cerrada para la Cámara de los Colombianos en el Exterior</p>
                <Link 
                  to="/#contacto" 
                  className="inline-block bg-[var(--cd-blue)] text-white px-6 py-3 rounded-lg font-bold hover:bg-[var(--cd-blue-dark)] transition-colors"
                >
                  Ir al formulario de contacto
                </Link>
              </div>
            </section>

            {/* Acceptance */}
            <section className="mb-12">
              <div className="bg-yellow-50 border-2 border-[var(--cd-yellow)] p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[var(--cd-blue)] mb-4">Aceptación de los términos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>AL ACCEDER Y UTILIZAR ESTE SITIO WEB, USTED RECONOCE QUE HA LEÍDO, ENTENDIDO Y ACEPTA 
                  ESTAR SUJETO A ESTOS TÉRMINOS DE USO.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Si no está de acuerdo con estos términos, debe dejar de utilizar este sitio web inmediatamente.
                </p>
              </div>
            </section>

          </div>

          {/* Footer Action */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <div className="flex justify-center">
              <Link 
                to="/"
                className="inline-block bg-[var(--cd-blue)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--cd-blue-dark)] transition-colors"
              >
                Volver a inicio
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}