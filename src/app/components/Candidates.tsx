import { Award, Globe2, Shield, Briefcase, GraduationCap, Users, ExternalLink } from 'lucide-react';
import olgaImage from '../../assets/5c5fb4fd5029318435667e5aedd28b5d5d336d7c.png';
import camiloImage from '../../assets/ecd9f6e71fa20d3410615160b9c65f620e926582.png';

export function Candidates() {
  const candidates = [
    {
      name: 'Olga Lucía Murcia',
      role: 'Cabeza de Lista',
      image: olgaImage,
      tagline: 'Mirada internacional y rigor técnico',
      description: 'Experta en temas migratorios con preparación técnica sólida. Aporta perspectiva femenina y rigor en la defensa de derechos consulares.',
      qualities: [
        { icon: Globe2, text: 'Experiencia internacional en migración' },
        { icon: GraduationCap, text: 'Preparación técnica y académica' },
        { icon: Award, text: 'Perspectiva femenina con autoridad' },
        { icon: Briefcase, text: 'Rigor en análisis de políticas públicas' }
      ]
    },
    {
      name: 'Camilo Florido',
      role: 'Candidato',
      image: camiloImage,
      tagline: 'Experiencia y respaldo institucional',
      description: 'Trayectoria sólida en temas de seguridad y orden institucional. Conexión con la defensa de estabilidad y valores democráticos.',
      qualities: [
        { icon: Shield, text: 'Experiencia en seguridad y orden' },
        { icon: Award, text: 'Respaldo institucional del partido' },
        { icon: Briefcase, text: 'Trayectoria en servicio público' },
        { icon: Users, text: 'Conexión con comunidades colombianas' }
      ]
    }
  ];

  return (
    <section id="candidatos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 rounded-full px-4 py-2 mb-6">
            <Users className="w-5 h-5" />
            <span className="text-sm">Lista Cerrada 2026</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Los Candidatos del <span className="text-blue-900">Centro Democrático</span>
          </h2>
          <p className="text-xl text-gray-600">
            Una lista <strong>preparada, experimentada y comprometida</strong> con los colombianos en el exterior.
          </p>
        </div>

        {/* Candidates Grid */}
        <div className="space-y-8 mb-16">
          {candidates.map((candidate, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image Column */}
                <div className="lg:col-span-2 relative">
                  <div className="relative h-64 lg:h-full min-h-[400px]">
                    <img 
                      src={candidate.image}
                      alt={candidate.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Overlay Badge */}
                    {index === 0 && (
                      <div className="absolute top-6 left-6">
                        <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm shadow-lg">
                          ⭐ Cabeza de Lista
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <p className="text-blue-600 text-sm uppercase tracking-wide mb-2">
                        {candidate.role}
                      </p>
                      <h3 className="text-3xl lg:text-4xl text-gray-900 mb-3">
                        {candidate.name}
                      </h3>
                      <p className="text-xl text-gray-600 italic">
                        {candidate.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {candidate.description}
                    </p>

                    {/* Qualities */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {candidate.qualities.map((quality, qIndex) => {
                        const Icon = quality.icon;
                        return (
                          <div key={qIndex} className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-blue-900" />
                            </div>
                            <p className="text-gray-700 text-sm pt-2">
                              {quality.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Note */}
                    {index === 0 && (
                      <div className="bg-blue-50 border-l-4 border-blue-900 p-4 rounded-r-lg">
                        <p className="text-sm text-blue-900">
                          💡 <strong>Como cabeza de lista,</strong> Olga lidera el equipo que representa la claridad, experiencia y compromiso del Centro Democrático.
                        </p>
                      </div>
                    )}
                    
                    {/* Olga Murcia Website Link */}
                    {index === 0 && (
                      <div>
                        <a 
                          href="https://olgamurcia.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                          <Globe2 className="w-5 h-5" />
                          <span>Visita su página web</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Summary */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-6">
              Un equipo completo, una sola marca
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Al votar por el <strong className="text-yellow-400">Centro Democrático</strong>, votas por los dos candidatos como equipo unificado. No hay división de votos, hay suma de fuerza.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                ✓ Liderazgo claro
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                ✓ Experiencia diversa
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                ✓ Representación sólida
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                ✓ Institucionalidad fuerte
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}