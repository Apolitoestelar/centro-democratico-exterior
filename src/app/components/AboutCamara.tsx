import { Globe, Users, Scale, MessageSquare, Building2, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

export function AboutCamara() {
  const navigate = useNavigate();
  
  const benefits = [
    {
      icon: Scale,
      title: 'Legislar por los colombianos en el exterior',
      description: 'Crear leyes que protejan tus derechos como migrante y faciliten tus trámites consulares.'
    },
    {
      icon: MessageSquare,
      title: 'Tu voz en el Congreso',
      description: 'Representación directa de los intereses y necesidades de millones de colombianos en el mundo.'
    },
    {
      icon: Building2,
      title: 'Mejorar servicios consulares',
      description: 'Impulsar mejoras en atención, trámites y protección consular en todos los países.'
    },
    {
      icon: Shield,
      title: 'Defender tus derechos',
      description: 'Garantizar seguridad jurídica, facilitar inversión en Colombia y proteger a las familias.'
    }
  ];

  return (
    <section id="camara" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 rounded-full px-4 py-2 mb-6">
            <Globe className="w-5 h-5" />
            <span className="text-sm">Pedagogía Electoral</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            ¿Qué es la Cámara de los Colombianos en el Exterior?
          </h2>
          <p className="text-xl text-gray-600">
            Una circunscripción especial del Congreso que representa a los <strong>millones de colombianos</strong> que viven fuera del país.
          </p>
        </div>

        {/* Main Visual Explanation */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-900" />
                  </div>
                  <div>
                    <div className="text-3xl">6 Millones+</div>
                    <div className="text-blue-200">Colombianos en el exterior</div>
                  </div>
                </div>
                <div className="space-y-4 text-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span>Estados Unidos, España, Venezuela</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span>Canadá, Reino Unido, Australia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span>Y más de 100 países en el mundo</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl" />
            </div>

            {/* Right - Explanation */}
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-900">
                Tu representación directa en Colombia
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                La Cámara del Exterior es tu canal directo para tener <strong>voz y voto</strong> en las decisiones que afectan tu vida como colombiano en el extranjero.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                <p className="text-blue-900">
                  <strong>Los representantes elegidos</strong> trabajan desde el Congreso para mejorar servicios consulares, defender tus derechos, facilitar inversiones y mantener el vínculo con Colombia.
                </p>
              </div>
              <p className="text-gray-600">
                Por eso tu voto <strong>no es simbólico</strong>, es estratégico. Votar por el Centro Democrático es votar por experiencia, claridad y resultados.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-900" />
                </div>
                <h4 className="text-lg text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-6 h-auto" 
            onClick={() => navigate('/blog/tu-voto-explicado-facil-guia-paso-a-paso')}
          >
            Cómo votar paso a paso
          </Button>
        </div>
      </div>
    </section>
  );
}