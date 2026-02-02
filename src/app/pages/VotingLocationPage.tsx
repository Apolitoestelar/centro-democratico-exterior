import { MapPin, ExternalLink, Clock, CheckCircle, AlertCircle, FileText, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

export function VotingLocationPage() {
  const handleConsultRegistraduria = () => {
    window.open('https://wsp.registraduria.gov.co/censo/consultar', '_blank', 'noopener,noreferrer');
  };

  const steps = [
    {
      number: 1,
      title: 'Verifica tu inscripción',
      description: 'Asegúrate de que tu cédula esté inscrita en el consulado correspondiente.',
      icon: CheckCircle
    },
    {
      number: 2,
      title: 'Consulta tu puesto asignado',
      description: 'Ingresa tu número de cédula en la página oficial de la Registraduría.',
      icon: MapPin
    },
    {
      number: 3,
      title: 'Confirma fechas y horarios',
      description: 'Verifica las fechas de votación y horarios específicos para tu ubicación.',
      icon: Clock
    }
  ];

  const faqs = [
    {
      question: '¿Cómo saber mi puesto de votación en el exterior?',
      answer: 'Ingresa tu número de cédula en la página oficial de la Registraduría Nacional. El sistema te mostrará tu puesto asignado y la dirección exacta del consulado o lugar de votación.'
    },
    {
      question: '¿Hasta cuándo puedo consultar mi puesto?',
      answer: 'Puedes consultar tu puesto de votación hasta el mismo día de las elecciones. Sin embargo, te recomendamos verificarlo con anticipación para evitar contratiempos.'
    },
    {
      question: '¿Puedo cambiar mi lugar de votación?',
      answer: 'No es posible cambiar tu lugar de votación una vez asignado. El puesto se determina según tu inscripción consular y no puede modificarse durante el proceso electoral.'
    },
    {
      question: '¿Qué documentos necesito para votar?',
      answer: 'Necesitas tu cédula de ciudadanía colombiana vigente. No se aceptan fotocopias ni otros documentos de identidad.'
    },
    {
      question: '¿Qué pasa si estoy de viaje el día de votación?',
      answer: 'Solo puedes votar en el puesto asignado según tu inscripción consular. Si estarás de viaje, debes planificar tu regreso o no podrás ejercer tu derecho al voto.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Consultar Puesto de Votación Colombianos en el Exterior | CD Exterior"
        description="Encuentra tu puesto de votación oficial para colombianos en el exterior. Consulta rápida, segura y actualizada. Fechas y requisitos 2026."
        keywords="puesto votación exterior, donde votar colombia exterior, consultar lugar votación"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-10 h-10 text-blue-900" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
            Consultar puesto de votación para colombianos en el exterior
          </h1>
          
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Encuentra tu lugar de votación oficial de manera rápida y segura. Información actualizada para las elecciones 2026.
          </p>

          <Button 
            onClick={handleConsultRegistraduria}
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 text-xl px-10 py-6 h-auto group shadow-lg"
          >
            Consultar en Registraduría
            <ExternalLink className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-blue-200 text-sm mt-4">
            Ten tu cédula lista antes de hacer clic
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-gray-900 text-center mb-12">
            Dónde votar fuera de Colombia paso a paso
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <div className="w-8 h-8 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-gray-900 text-center mb-12">
            Fechas para votar en el exterior
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-blue-900 mt-1" />
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Semana de votación</h3>
                  <p className="text-gray-600 mb-2">2 al 8 de marzo de 2026</p>
                  <p className="text-sm text-gray-500">Los colombianos en el exterior votan durante toda la semana, no un solo día.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Fecha límite inscripción</h3>
                  <p className="text-gray-600 mb-2">8 de enero de 2026</p>
                  <p className="text-sm text-gray-500">Si no inscribiste tu cédula antes de esta fecha, no puedes votar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-gray-900 text-center mb-12">
            Qué hacer si mi puesto no aparece
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <CheckCircle className="w-8 h-8 text-blue-900 mb-4" />
              <h3 className="text-lg text-gray-900 mb-3">Verificar inscripción</h3>
              <p className="text-gray-600 text-sm">Confirma que tu cédula esté inscrita en el consulado correspondiente a tu lugar de residencia.</p>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-6">
              <AlertCircle className="w-8 h-8 text-yellow-600 mb-4" />
              <h3 className="text-lg text-gray-900 mb-3">Contactar consulado</h3>
              <p className="text-gray-600 text-sm">Comunícate directamente con el consulado colombiano más cercano para resolver dudas específicas.</p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <FileText className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-lg text-gray-900 mb-3">Documentación</h3>
              <p className="text-gray-600 text-sm">Revisa que todos tus documentos estén actualizados y correspondan a tu residencia actual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-gray-900 text-center mb-12">
            Preguntas frecuentes
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">¿Listo para consultar tu puesto?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Verifica tu lugar de votación oficial en la Registraduría Nacional
          </p>
          
          <Button 
            onClick={handleConsultRegistraduria}
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 text-xl px-10 py-6 h-auto group"
          >
            Ir a consulta oficial
            <ExternalLink className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}