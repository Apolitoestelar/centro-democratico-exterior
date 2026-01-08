import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1603985529862-9e12198c9a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YWN5JTIwc2VjdXJpdHklMjBkYXRhJTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3Njc4OTQyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080)',
              filter: 'blur(4px)',
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[var(--cd-blue)]/85" />
          
          {/* Content */}
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidad</h1>
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
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El Centro Democrático Exterior, en su compromiso con la transparencia y la protección de datos personales, 
                establece esta Política de Privacidad para informar a los usuarios sobre cómo recopilamos, usamos, 
                almacenamos y protegemos la información personal proporcionada a través de nuestro sitio web.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Esta política se aplica a todos los datos personales recopilados en este sitio web, especialmente a través 
                del formulario de registro de voluntarios y del formulario de contacto.
              </p>
            </section>

            {/* Responsible Party */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">2. Responsable del tratamiento de datos</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Organización:</strong> Centro Democrático Exterior</p>
                <p className="text-gray-700 mb-2"><strong>Lista:</strong> Lista Cerrada del Centro Democrático para la Cámara de los Colombianos en el Exterior</p>
                <p className="text-gray-700 mb-2"><strong>Candidatos:</strong></p>
                <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                  <li>Alejandro Murcia (Posición 1)</li>
                  <li>Olga Lucía Murcia (Posición 2)</li>
                  <li>Camilo Florido (Posición 3)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Contacto:</strong> Para cualquier consulta relacionada con esta política de privacidad, 
                  puede contactarnos a través del formulario de contacto disponible en este sitio web.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">3. Información que recopilamos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recopilamos información personal únicamente cuando usted decide proporcionarla voluntariamente 
                a través de nuestros formularios. Los datos que recopilamos incluyen:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-[var(--cd-blue)] mb-3">3.1. Formulario de voluntarios</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)] font-bold">•</span>
                    <span><strong>Nombre completo:</strong> Para identificarlo y comunicarnos con usted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)] font-bold">•</span>
                    <span><strong>Correo electrónico:</strong> Para enviarle información sobre la campaña y actividades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)] font-bold">•</span>
                    <span><strong>País de residencia:</strong> Para organizar actividades por regiones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)] font-bold">•</span>
                    <span><strong>Cómo puede ayudar:</strong> Para asignarle tareas acordes a sus intereses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)] font-bold">•</span>
                    <span><strong>Mensaje (opcional):</strong> Para conocer sus motivaciones y sugerencias</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[var(--cd-blue)] mb-3">3.2. Datos de navegación</h3>
                <p className="text-gray-700">
                  Nuestro sitio web no utiliza cookies de seguimiento ni sistemas de análisis que recopilen 
                  información personal de navegación. Solo almacenamos los datos que usted proporciona expresamente 
                  a través de nuestros formularios.
                </p>
              </div>
            </section>

            {/* Purpose of Data Collection */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">4. Finalidad del tratamiento de datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los datos personales que recopilamos se utilizan exclusivamente para los siguientes propósitos:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--cd-blue)] font-bold text-2xl">1.</span>
                  <span><strong>Gestión de voluntarios:</strong> Coordinar actividades de voluntariado relacionadas con la campaña electoral</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--cd-blue)] font-bold text-2xl">2.</span>
                  <span><strong>Comunicación institucional:</strong> Enviar información sobre la campaña, eventos y noticias relevantes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--cd-blue)] font-bold text-2xl">3.</span>
                  <span><strong>Respuesta a consultas:</strong> Atender las preguntas y comentarios enviados a través del formulario de contacto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--cd-blue)] font-bold text-2xl">4.</span>
                  <span><strong>Organización territorial:</strong> Coordinar actividades según el país de residencia de los voluntarios</span>
                </li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-[var(--cd-yellow)] p-4 mt-6">
                <p className="text-gray-700">
                  <strong>Importante:</strong> NO utilizamos sus datos para fines comerciales, publicitarios externos, 
                  ni los compartimos con terceros ajenos a la campaña electoral del Centro Democrático.
                </p>
              </div>
            </section>

            {/* Data Storage */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">5. Almacenamiento y seguridad de los datos</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">5.1. Plataforma de almacenamiento</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Los datos recopilados se almacenan de forma segura en <strong>Supabase</strong>, una plataforma 
                  de base de datos moderna que cumple con estándares internacionales de seguridad y protección de datos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Supabase implementa medidas de seguridad técnicas y organizativas para proteger sus datos contra 
                  acceso no autorizado, pérdida, destrucción o alteración.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">5.2. Medidas de seguridad</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)]">✓</span>
                    <span>Encriptación de datos en tránsito (HTTPS/SSL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)]">✓</span>
                    <span>Acceso restringido solo a personal autorizado de la campaña</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)]">✓</span>
                    <span>Copias de seguridad periódicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--cd-blue)]">✓</span>
                    <span>Monitoreo de accesos y actividades sospechosas</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">5.3. Tiempo de conservación</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sus datos serán conservados durante el período de la campaña electoral y hasta 6 meses después 
                  de las elecciones, salvo que usted solicite su eliminación antes de ese plazo. Transcurrido este 
                  período, los datos serán eliminados de forma segura.
                </p>
              </div>
            </section>

            {/* User Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">6. Sus derechos como titular de datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De acuerdo con las normativas de protección de datos personales, usted tiene los siguientes derechos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[var(--cd-blue)] mb-2">Derecho de acceso</h4>
                  <p className="text-sm text-gray-700">Solicitar información sobre qué datos tenemos de usted</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[var(--cd-blue)] mb-2">Derecho de rectificación</h4>
                  <p className="text-sm text-gray-700">Corregir datos incorrectos o desactualizados</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[var(--cd-blue)] mb-2">Derecho de supresión</h4>
                  <p className="text-sm text-gray-700">Solicitar la eliminación de sus datos personales</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[var(--cd-blue)] mb-2">Derecho de oposición</h4>
                  <p className="text-sm text-gray-700">Oponerse al tratamiento de sus datos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[var(--cd-blue)] mb-2">Derecho de portabilidad</h4>
                  <p className="text-sm text-gray-700">Recibir sus datos en formato estructurado</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[var(--cd-blue)] mb-2">Derecho de limitación</h4>
                  <p className="text-sm text-gray-700">Restringir el procesamiento de sus datos</p>
                </div>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg">
                <h4 className="font-bold text-[var(--cd-blue)] mb-2">¿Cómo ejercer sus derechos?</h4>
                <p className="text-gray-700 mb-3">
                  Para ejercer cualquiera de estos derechos, puede contactarnos a través del formulario de contacto 
                  disponible en este sitio web, indicando claramente qué derecho desea ejercer y proporcionando 
                  información suficiente para verificar su identidad.
                </p>
                <p className="text-gray-700 text-sm">
                  Responderemos a su solicitud en un plazo máximo de 15 días hábiles.
                </p>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">7. Compartición de datos con terceros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sus datos personales <strong>NO</strong> serán vendidos, alquilados ni compartidos con terceros para 
                fines comerciales o publicitarios.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los datos solo podrán ser compartidos en los siguientes casos:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span><strong>Con proveedores de servicios técnicos:</strong> Como Supabase, únicamente para el almacenamiento seguro de los datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span><strong>Por obligación legal:</strong> Si la ley colombiana o autoridades competentes lo requieren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span><strong>Con su consentimiento expreso:</strong> En caso de que autorice específicamente alguna compartición adicional</span>
                </li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">8. Cookies y tecnologías de seguimiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Este sitio web <strong>NO</strong> utiliza cookies de seguimiento publicitario ni herramientas de 
                análisis de terceros que recopilen información personal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Solo utilizamos tecnologías estrictamente necesarias para el funcionamiento básico del sitio web, 
                sin almacenar información personal de navegación.
              </p>
            </section>

            {/* Minors */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">9. Protección de menores de edad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Este sitio web y sus formularios están diseñados para personas mayores de 18 años, que son quienes 
                tienen derecho al voto en Colombia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No recopilamos intencionalmente datos de menores de edad. Si detectamos que hemos recopilado datos 
                de un menor sin el consentimiento apropiado, eliminaremos esa información de forma inmediata.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">10. Transferencias internacionales de datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dado que Supabase opera con infraestructura en la nube, sus datos pueden ser almacenados en 
                servidores ubicados fuera de Colombia. Sin embargo, Supabase cumple con estándares internacionales 
                de protección de datos y garantiza niveles adecuados de seguridad.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Al proporcionar sus datos a través de nuestros formularios, usted acepta esta transferencia 
                internacional bajo las garantías de seguridad mencionadas.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">11. Modificaciones a esta política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento para 
                reflejar cambios en nuestras prácticas o en la legislación aplicable.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cualquier modificación será publicada en esta página con la fecha de actualización correspondiente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos 
                su información personal.
              </p>
            </section>

            {/* Applicable Law */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">12. Legislación aplicable</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Esta Política de Privacidad se rige por la legislación colombiana en materia de protección de 
                datos personales, especialmente:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span>Ley 1581 de 2012 (Protección de Datos Personales)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span>Decreto 1377 de 2013</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--cd-blue)] font-bold">•</span>
                  <span>Demás normas concordantes y complementarias</span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--cd-blue)] mb-4">13. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene alguna pregunta, inquietud o solicitud relacionada con esta Política de Privacidad o 
                con el tratamiento de sus datos personales, puede contactarnos:
              </p>
              <div className="bg-[#003DA5] text-white p-6 rounded-lg">
                <p className="mb-2"><strong>Centro Democrático Exterior</strong></p>
                <p className="mb-4">Lista Cerrada para la Cámara de los Colombianos en el Exterior</p>
                <Link 
                  to="/#voluntarios" 
                  className="inline-block bg-[#FFD100] text-[#003DA5] px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                >
                  Ir al formulario de contacto
                </Link>
              </div>
            </section>

            {/* Consent */}
            <section className="mb-12">
              <div className="bg-yellow-50 border-2 border-[var(--cd-yellow)] p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[var(--cd-blue)] mb-4">Consentimiento</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Al utilizar este sitio web y proporcionar sus datos personales a través de nuestros formularios, 
                  usted declara haber leído, entendido y aceptado esta Política de Privacidad.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  El envío de información a través de nuestros formularios constituye su consentimiento expreso 
                  para el tratamiento de sus datos según lo establecido en esta política.
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