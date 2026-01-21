import { 
  Scale, 
  Building2, 
  Shield, 
  Users, 
  Globe2, 
  FileText,
  TrendingUp,
  Heart,
  CheckCircle,
  X,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';

export function Reasons() {
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null);

  const proposals = [
    {
      icon: Globe2,
      title: 'Evolución de la Ley 2136 hacia una Ley General Migratoria Colombiana',
      preview: 'Impulsaremos la reglamentación, el fortalecimiento y actualización de la Ley 2136 de 2021, analizando en consenso con la sociedad civil, la ciudadanía, los partidos políticos, la academia, el gremio sindical y demás integrantes que tengan relación con el tema, las modificaciones y adiciones que se le deban realizar.',
      fullText: `🧭 EJE TRANSVERSAL
Evolución de la Ley 2136 hacia una Ley General Migratoria Colombiana

Impulsaremos la reglamentación, el fortalecimiento y actualización de la Ley 2136 de 2021, analizando en consenso con la sociedad civil, la ciudadanía, los partidos políticos, la academia, el gremio sindical y demás integrantes que tengan relación con el tema, las modificaciones y adiciones que se le deban realizar. Entre otros:

• Ordenar y articular la política de emigración, inmigración, retorno y extranjería.
• Fortalecer el Sistema Nacional de Migraciones, integrando a toda la institucionalidad colombiana, asignándole funciones específicas de obligatorio cumplimiento.
• Hacer realmente operativos los instrumentos existentes.
• Ampliar la participación y representación de los colombianos en el exterior, a través de una verdadera Mesa Colombiana para las Migraciones, con carácter inclusivo, decisorio, con voz y voto e incidencia política dentro del Sistema Nacional de Migraciones.
• Reconocer a la diáspora como actor estratégico del desarrollo nacional.

👉 Se trata de construir sobre lo ya avanzado y hacerlo más efectivo.`,
      color: 'blue'
    },
    {
      icon: Building2,
      title: 'Servicios consulares más eficientes, cercanos y humanos',
      preview: 'Fortaleceremos los servicios consulares existentes, mejorando su funcionamiento y cercanía con la comunidad; y para ello estableceremos en consenso con el Ministerio de Relaciones Exteriores, dentro de la Ley General Migratoria Colombiana, sin interferir en las funciones y facultades del Ejecutivo, acciones necesarias de obligatorio cumplimiento.',
      fullText: `1️⃣ Servicios consulares más eficientes, cercanos y humanos.

Fortaleceremos los servicios consulares existentes, mejorando su funcionamiento y cercanía con la comunidad; y para ello estableceremos en consenso con el Ministerio de Relaciones Exteriores, dentro de la Ley General Migratoria Colombiana, sin interferir en las funciones y facultades del Ejecutivo, acciones necesarias de obligatorio cumplimiento.

• Optimización de los trámites digitales.
• Mayor interoperabilidad entre entidades del Estado.
• Revisión de tarifas y simplificación de procesos.
• Consulados móviles más frecuentes y mejor planificados, especialmente en zonas sin sede consular.
• Seguimiento institucional y control político a la gestión de embajadas y consulados.
• Reforzamiento presupuestario y de funcionarios y trabajadores.

👉 Un consulado que funciona bien es una garantía de dignidad y respaldo del Estado.`,
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Protección y salud para los colombianos en el exterior',
      preview: 'Fortaleceremos los mecanismos de protección para los colombianos en el exterior, especialmente en momentos críticos.',
      fullText: `2️⃣ Protección y salud para los colombianos en el exterior
Convenios EPS y atención en situaciones de vulnerabilidad.

Fortaleceremos los mecanismos de protección para los colombianos en el exterior, especialmente en momentos críticos.

• Consolidación y fortalecimiento del Fondo Especial para las Migraciones para la atención de emergencias, repatriaciones y situaciones humanitarias.
• Promoción de convenios con EPS colombianas, que permitan acceso a cobertura en casos específicos para colombianos en el exterior que no cuenten con sistema de salud en su país de residencia.
• Atención prioritaria en situaciones de vulnerabilidad, con enfoque humanitario.

👉 La protección del colombiano no termina fuera del territorio nacional.`,
      color: 'red'
    },
    {
      icon: TrendingUp,
      title: 'Trabajo y oportunidades reales',
      preview: 'El eje laboral de la política migratoria se fortalecerá con herramientas concretas y viables.',
      fullText: `3️⃣ Trabajo y oportunidades reales
Bolsa Internacional de Empleo

El eje laboral de la política migratoria se fortalecerá con herramientas concretas y viables.

• Creación de una Bolsa Internacional de Empleo, que conecte a colombianos en el exterior con oportunidades laborales en, y desde Colombia con otros países.
• Reconocimiento de la experiencia laboral adquirida en el exterior.
• Expedición virtual de la Certificación Laboral por Competencias desde el Servicio Nacional de Aprendizaje "SENA", para los colombianos que residan fuera del país.
• Articulación con programas de formación técnica y tecnológica en línea.
• Apoyo a procesos de retorno laboral cuando aplique.
• Facilitación de la movilidad laboral, mediante la firma de convenios recíprocos para la convalidación de la licencia de conducir colombiana con países extranjeros.

👉 El empleo digno es la base de una migración estable y ordenada.`,
      color: 'yellow'
    },
    {
      icon: FileText,
      title: 'Educación, desarrollo económico desde la diáspora',
      preview: 'La diáspora colombiana es una oportunidad estratégica para el país.',
      fullText: `4️⃣ Educación, desarrollo económico desde la diáspora

La diáspora colombiana es una oportunidad estratégica para el país.

• Acceso a educación y formación tecnológica a través del SENA en línea para colombianos en el exterior.
• Formación técnica y profesional gratuita a través de la Universidad Nacional Abierta y a Distancia "UNAD".
• Modernización y fortalecimiento al reconocimiento de títulos, estudios y experiencia laboral internacional.
• Articulación del talento de la diáspora con el desarrollo productivo nacional.
• Incentivos a la inversión productiva desde el exterior.
• Programas de retorno productivo con acompañamiento real.
• Reconocimiento del colombiano migrante como sujeto de crédito en Colombia.
• Inclusión de los colombianos en el exterior, en programas para la adquisición de vivienda social, con requisitos acordes con las circunstancias de esa población.
• Uso responsable de tecnologías como Blockchain para fortalecer la trazabilidad, la confianza y la eficiencia en remesas, inversión e inclusión financiera.

👉 Cuando la diáspora crece, Colombia crece.`,
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Participación real y representación de los colombianos en el exterior',
      preview: 'La Ley General Migratoria garantizará espacios formales y efectivos de participación ciudadana.',
      fullText: `5️⃣ Participación real y representación de los colombianos en el exterior en la Agenda Nacional.

La Ley General Migratoria garantizará espacios formales y efectivos de participación ciudadana.

• Mesa Colombiana para las Migraciones, con carácter inclusivo, decisorio, con voz y voto e incidencia política dentro del Sistema Nacional de Migraciones.
• Mecanismos de consulta digital y rendición de cuentas.
• Participación activa de la diáspora en la construcción, seguimiento y evaluación de políticas públicas.
• Impulso a la diplomacia ciudadana, reconociendo a cada colombiano en el exterior como embajador cultural, social y económico del país.

👉 Sin participación, no hay política pública legítima.`,
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-900', border: 'border-blue-900' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-900', border: 'border-yellow-900' },
      red: { bg: 'bg-red-100', text: 'text-red-900', border: 'border-red-900' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="razones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">Nuestras Propuestas</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Propuestas del <span className="text-blue-900">Centro Democrático</span>
          </h2>
          <p className="text-xl text-gray-600">
            Un plan estratégico con <strong>propuestas concretas y viables</strong> que impactan directamente tu vida en el exterior.
          </p>
        </div>

        {/* Proposals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {proposals.map((proposal, index) => {
            const Icon = proposal.icon;
            const colors = getColorClasses(proposal.color);
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-blue-300"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-lg text-gray-900 mb-3 leading-tight">
                  {proposal.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {proposal.preview}
                </p>
                <button
                  onClick={() => setSelectedProposal(index)}
                  className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  Saber más
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedProposal !== null && (
          <div className="fixed inset-0 bg-blue-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-blue-900 to-blue-800 rounded-t-2xl">
                <h3 className="text-2xl text-white font-bold pr-8 leading-tight">
                  {proposals[selectedProposal].title}
                </h3>
                <button
                  onClick={() => setSelectedProposal(null)}
                  className="w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-blue-900" />
                </button>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {proposals[selectedProposal].fullText.split('\n').map((line, i) => {
                    if (line.trim() === '') return <div key={i} className="h-2" />;
                    
                    // Títulos principales (con emojis y números)
                    if (line.includes('🧭') || line.match(/^[0-9]️⃣/)) {
                      return (
                        <h2 key={i} className="text-2xl font-bold text-blue-900 mb-4 mt-6">
                          {line}
                        </h2>
                      );
                    }
                    
                    // Subtítulos
                    if (line.includes('Bolsa Internacional') || line.includes('Convenios EPS')) {
                      return (
                        <h3 key={i} className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                          {line}
                        </h3>
                      );
                    }
                    
                    // Puntos con viñetas
                    if (line.startsWith('•')) {
                      return (
                        <div key={i} className="flex items-start gap-3 mb-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed">{line.substring(1).trim()}</p>
                        </div>
                      );
                    }
                    
                    // Conclusiones (con 👉)
                    if (line.includes('👉')) {
                      return (
                        <div key={i} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6 mb-4">
                          <p className="text-blue-900 font-medium italic">{line}</p>
                        </div>
                      );
                    }
                    
                    // Texto normal
                    return (
                      <p key={i} className="text-gray-700 leading-relaxed mb-3">
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Block */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What We Offer */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-2xl">Centro Democrático ofrece</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>Experiencia comprobada en representación institucional</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>Partido consolidado con trayectoria de gobierno</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>Claridad ideológica: seguridad, libertad, institucionalidad</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>Lista unificada sin división de votos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span>Compromiso con estabilidad regional y democrática</span>
              </li>
            </ul>
          </div>

          {/* What to Avoid */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Shield className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-2xl text-gray-900">Evita la improvisación</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full mt-1 flex-shrink-0" />
                <span>Candidatos sin experiencia en representación</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full mt-1 flex-shrink-0" />
                <span>Partidos sin claridad ideológica o trayectoria</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full mt-1 flex-shrink-0" />
                <span>Promesas sin sustento ni plan de acción</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full mt-1 flex-shrink-0" />
                <span>División del voto en listas fragmentadas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full mt-1 flex-shrink-0" />
                <span>Populismo sin institucionalidad</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl text-blue-950 mb-4">
            Experiencia vs. Improvisación
          </h3>
          <p className="text-lg text-blue-900 max-w-3xl mx-auto mb-8">
            El Centro Democrático tiene <strong>trayectoria comprobada</strong> en defensa de la institucionalidad, la seguridad democrática y la libertad. Tu voto no es un experimento, es una decisión estratégica.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-blue-950">
            <div className="bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
              ✓ Claridad
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
              ✓ Orden
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
              ✓ Experiencia
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
              ✓ Resultados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}