import { ArrowRight, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Colombian flag colors inspiration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Emotional Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 text-red-300" />
            <span className="text-white text-sm">Colombia te necesita</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Colombia también se juega <span className="text-yellow-400">afuera</span>
          </h2>
          <div className="text-xl sm:text-2xl text-blue-100 mb-4">
            El exterior decide. Tu voto protege, ordena y da dirección.
          </div>
        </div>

        {/* Emotional Message */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-6">
            Miles de colombianos en el mundo necesitan <strong className="text-white">representación fuerte</strong>, 
            no improvisación. Necesitan <strong className="text-white">claridad</strong>, no confusión. 
            Necesitan un partido con <strong className="text-white">experiencia</strong> y compromiso real.
          </p>
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
            Tu voto por el <strong className="text-yellow-400">Centro Democrático</strong> es un voto por 
            <strong className="text-white"> seguridad democrática</strong>, 
            <strong className="text-white"> institucionalidad fuerte</strong> y 
            <strong className="text-white"> defensa de la libertad</strong>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 text-xl px-10 py-7 h-auto group shadow-xl"
          >
            Quiero votar informado
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          <a
            href="#voluntarios"
            className="inline-flex items-center justify-center border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 text-xl px-10 py-7 h-auto shadow-xl rounded-md transition-colors"
          >
            Quiero ser parte
          </a>
        </div>

        {/* Key Values */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
            ✓ Claridad
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
            ✓ Experiencia
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
            ✓ Seguridad democrática
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
            ✓ Libertad
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
            ✓ Institucionalidad
          </div>
        </div>

        {/* Final Statement */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <p className="text-2xl sm:text-3xl text-white mb-4">
              "Una lista preparada. Un partido sólido. Una representación que sí cuenta."
            </p>
            <div className="flex items-center justify-center gap-3 text-blue-200">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>Centro Democrático Exterior 2026</span>
            </div>
          </div>
        </div>

        {/* Voting Reminder */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-200 text-sm">
            📅 <strong className="text-white">Votación: 2-8 de marzo de 2026</strong> | 
            Marca el logo del Centro Democrático, no nombres individuales
          </p>
        </div>
      </div>
    </section>
  );
}