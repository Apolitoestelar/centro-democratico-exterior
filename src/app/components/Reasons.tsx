import { 
  Scale, 
  Building2, 
  Shield, 
  Users, 
  Globe2, 
  FileText,
  TrendingUp,
  Heart,
  CheckCircle
} from 'lucide-react';

export function Reasons() {
  const reasons = [
    {
      icon: Building2,
      title: 'Mejora de atención consular',
      description: 'Impulsar servicios consulares más eficientes, ágiles y cercanos en todos los países donde viven colombianos.',
      color: 'blue'
    },
    {
      icon: Scale,
      title: 'Defensa de derechos del migrante',
      description: 'Legislar para proteger tus derechos laborales, seguridad social y acceso a servicios desde el Congreso.',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Seguridad jurídica',
      description: 'Garantizar estabilidad legal para inversiones, empresas y familias colombianas en el exterior.',
      color: 'red'
    },
    {
      icon: Globe2,
      title: 'Estabilidad regional',
      description: 'Promover políticas que fortalezcan la seguridad democrática y la estabilidad en la región.',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Facilitación de inversión',
      description: 'Crear condiciones favorables para que colombianos en el exterior inviertan y emprendan en Colombia.',
      color: 'yellow'
    },
    {
      icon: FileText,
      title: 'Orden institucional',
      description: 'Defender la institucionalidad fuerte frente a la improvisación y el populismo.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Representación real',
      description: 'Una lista con experiencia comprobada, no candidatos improvisados o sin trayectoria.',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Conexión con Colombia',
      description: 'Mantener y fortalecer el vínculo entre los colombianos en el exterior y su país de origen.',
      color: 'red'
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
            <span className="text-sm">Por qué Centro Democrático</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Razones para votar por el <span className="text-blue-900">Centro Democrático</span>
          </h2>
          <p className="text-xl text-gray-600">
            Un voto estratégico por <strong>experiencia, claridad y resultados</strong> que sí impactan tu vida en el exterior.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const colors = getColorClasses(reason.color);
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-blue-300"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-lg text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

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