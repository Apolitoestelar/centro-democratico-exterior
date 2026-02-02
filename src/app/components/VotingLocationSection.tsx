import { MapPin, ExternalLink, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export function VotingLocationSection() {
  const navigate = useNavigate();

  const handleFindLocation = () => {
    navigate('/puesto-de-votacion');
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <MapPin className="w-10 h-10 text-white" />
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight text-gray-900">
          Si estás fuera de Colombia, tu voto no lo está.
        </h2>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
          Tu voz cruza fronteras. Encuentra tu puesto de votación y haz que Colombia también se juegue afuera.
        </p>

        {/* CTA Button */}
        <div className="mb-6">
          <Button 
            onClick={handleFindLocation}
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 text-xl px-10 py-6 h-auto group shadow-lg"
          >
            Ubicar mi puesto de votación
            <ExternalLink className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Micro-copy */}
        <p className="text-gray-500 text-lg mb-8">
          Ten tu cédula lista. Consulta oficial y segura.
        </p>

        {/* Important Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <p className="text-blue-800 text-sm leading-relaxed text-left">
              Los puestos de votación pueden actualizarse antes de la jornada electoral. Verifica tu información con tiempo y llega a votar sin contratiempos.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-yellow-100 rounded-full opacity-50 blur-3xl" />
      </div>
    </section>
  );
}