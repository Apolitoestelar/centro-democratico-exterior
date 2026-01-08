import { CheckCircle, XCircle, ArrowDown, Hand, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import votacionImage from '../../assets/1cca7d4e68b6d7b884c9cb094dfd277522fac285.png';

export function ListaCerrada() {
  return (
    <section id="como-votar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-900 rounded-full px-4 py-2 mb-6">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">Importante: Lista Cerrada</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            ✅ ASÍ SE VOTA BIEN
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            (versión institucional – para la web)
          </p>
          <p className="text-lg text-gray-700">
            En estas elecciones, la Cámara de los Colombianos en el Exterior y el Senado se votan por lista cerrada.
            Eso significa que <strong>no se vota por nombres, ni por números</strong>, sino marcando el logo del Centro Democrático.
          </p>
        </div>

        {/* Main Visual Guide with Image */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-12">
          <div className="max-w-5xl mx-auto">
            {/* Instructions */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-4 border-blue-900 mb-8">
              <h3 className="text-2xl md:text-3xl text-blue-900 mb-6 text-center">
                Para votar correctamente por el Centro Democrático debes hacer lo siguiente:
              </h3>
              
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👉</span>
                  <p>Puedes marcar el logo del partido.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👉</span>
                  <p>O puedes marcar el espacio en blanco frente al logo.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👉</span>
                  <p>O puedes marcar el logo y el espacio en blanco al mismo tiempo.</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-blue-200">
                <p className="text-center text-xl">
                  <strong className="text-blue-900">Las tres opciones son válidas.</strong> Todas cuentan como voto correcto.
                </p>
              </div>
            </div>

            {/* Voting Image */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-blue-900">
              <img 
                src={votacionImage} 
                alt="Ejemplo de tarjetón electoral - Cómo votar por Centro Democrático"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Summary Steps */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl text-center mb-10">
            ✅ Resumen: 3 pasos para votar correctamente
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1️⃣
              </div>
              <h4 className="text-xl mb-3">Busca el logo</h4>
              <p className="text-gray-300">
                En el tarjetón, ubica el logo del Centro Democrático.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2️⃣
              </div>
              <h4 className="text-xl mb-3">Marca el partido</h4>
              <p className="text-gray-300">
                Marca el logo del partido o el espacio en blanco frente al logo, o ambos. No se marcan nombres ni números.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3️⃣
              </div>
              <h4 className="text-xl mb-3">¡Listo!</h4>
              <p className="text-gray-300">
                Tu voto queda válido y respalda la lista completa y preparada del Centro Democrático.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-8 py-6 h-auto"
            >
              vota por Uribe y los de Uribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}