import { 
  FileText, 
  Calendar, 
  HelpCircle, 
  MapPin, 
  Bell,
  ExternalLink,
  Download,
  BookOpen
} from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import guiaVotacion from '../../assets/0f5887beb8a60be5af943f9803a3f9acbc154c00.png';
import { CalendarReminderModal } from './CalendarReminderModal';

export function ResourcesSection() {
  const navigate = useNavigate();
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  const handleDownloadGuia = () => {
    const link = document.createElement('a');
    link.href = guiaVotacion;
    link.download = 'Guia-Paso-a-Paso-Votar-Exterior-Centro-Democratico.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCalendario = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1C5Sz_PBIaG1Ng_2oBQneuQ_KZm4I7LoM';
    link.download = 'Calendario-Electoral-2026-Centro-Democratico.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resources = [
    {
      icon: FileText,
      title: 'Guía paso a paso para votar',
      description: 'Descarga la guía completa con instrucciones detalladas para ejercer tu voto desde el exterior.',
      action: 'Descargar PDF',
      type: 'download'
    },
    {
      icon: Calendar,
      title: 'Calendario electoral 2026',
      description: 'Todas las fechas importantes: inscripción, consulta de puestos, día de votación y más.',
      action: 'Ver calendario',
      type: 'download-calendar'
    },
    {
      icon: MapPin,
      title: 'Consulta tu lugar de votación',
      description: 'Encuentra el consulado o lugar de votación más cercano a tu ciudad.',
      action: 'Consulta lugar de votación',
      type: 'link',
      url: 'https://wsp.registraduria.gov.co/censo/consultar'
    },
    {
      icon: HelpCircle,
      title: 'Preguntas frecuentes',
      description: 'Resuelve todas tus dudas sobre el proceso electoral y la lista cerrada.',
      action: 'Ver FAQ',
      type: 'faq'
    }
  ];

  const importantDates = [
    {
      date: '8 de enero de 2026',
      event: 'Cierre de inscripción de cédulas',
      description: 'Si no inscribiste tu cédula antes de esta fecha, no puedes votar. Es el punto de no retorno.',
      status: 'completed'
    },
    {
      date: '2 al 8 de marzo de 2026',
      event: 'Semana de votación en el exterior',
      description: 'Los colombianos en el exterior no votan un solo día, sino durante toda la semana previa.',
      status: 'upcoming'
    },
    {
      date: '7 de marzo de 2026',
      event: 'Ley seca',
      description: 'Marca el cierre simbólico de la campaña y el paso a la jornada electoral.',
      status: 'upcoming'
    },
    {
      date: '8 de marzo de 2026',
      event: 'Día oficial de elecciones en Colombia',
      description: 'Culmina el proceso: elecciones de Congreso de la República.',
      status: 'future'
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm">Recursos y Herramientas</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Información que <span className="text-blue-900">necesitas</span>
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que debes saber para votar informado y sin complicaciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Resources Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {resource.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-blue-900 border-blue-900 hover:bg-blue-50"
                        onClick={() => {
                          if (resource.type === 'faq') {
                            navigate('/blog/preguntas-frecuentes-elecciones-exterior');
                          } else if (resource.url) {
                            window.open(resource.url, '_blank', 'noopener,noreferrer');
                          } else if (resource.type === 'download') {
                            handleDownloadGuia();
                          } else if (resource.type === 'download-calendar') {
                            handleDownloadCalendario();
                          }
                        }}
                      >
                        {resource.action}
                        {resource.type === 'download' ? (
                          <Download className="ml-2 w-4 h-4" />
                        ) : (
                          <ExternalLink className="ml-2 w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Important Dates Sidebar */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-blue-900" />
              <h3 className="text-xl text-gray-900">Fechas clave</h3>
            </div>
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="relative pl-8 pb-4 last:pb-0">
                  {/* Timeline Line */}
                  {index !== importantDates.length - 1 && (
                    <div className="absolute left-2.5 top-6 bottom-0 w-0.5 bg-gray-200" />
                  )}
                  
                  {/* Status Dot */}
                  <div className={`absolute left-0 top-1 w-5 h-5 rounded-full border-2 ${
                    item.status === 'completed' 
                      ? 'bg-blue-500 border-blue-500' 
                      : item.status === 'upcoming'
                      ? 'bg-yellow-400 border-yellow-400 animate-pulse'
                      : 'bg-white border-gray-300'
                  }`} />
                  
                  <div>
                    <div className={`text-sm mb-1 ${
                      item.status === 'upcoming' ? 'text-yellow-600' : 'text-gray-600'
                    }`}>
                      {item.date}
                    </div>
                    <div className="text-gray-900">
                      {item.event}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button 
                size="sm"
                className="w-full bg-blue-900 hover:bg-blue-800"
                onClick={() => setIsCalendarModalOpen(true)}
              >
                <Bell className="mr-2 w-4 h-4" />
                Recibir recordatorios
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
          <h3 className="text-2xl text-gray-900 mb-8 text-center">Preguntas frecuentes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg text-gray-900 mb-3">
                ¿Necesito registrar mi cédula en el consulado?
              </h4>
              <p className="text-gray-600 text-sm">
                Sí, es importante inscribir tu cédula en el consulado correspondiente para poder votar desde el exterior. Verifica fechas límite en el calendario.
              </p>
            </div>
            <div>
              <h4 className="text-lg text-gray-900 mb-3">
                ¿Cómo sé dónde me toca votar?
              </h4>
              <p className="text-gray-600 text-sm">
                Una vez inscrito, podrás consultar tu puesto de votación en la página de la Registraduría o en el consulado más cercano.
              </p>
            </div>
            <div>
              <h4 className="text-lg text-gray-900 mb-3">
                ¿Qué pasa si voto por un nombre en vez del partido?
              </h4>
              <p className="text-gray-600 text-sm">
                En lista cerrada, NO se puede votar por nombres individuales. Solo debes marcar el logo del partido Centro Democrático para que tu voto sea válido.
              </p>
            </div>
            <div>
              <h4 className="text-lg text-gray-900 mb-3">
                ¿Puedo votar si vivo en cualquier país?
              </h4>
              <p className="text-gray-600 text-sm">
                Sí, los colombianos en el exterior pueden votar desde los consulados habilitados en más de 60 países alrededor del mundo.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-blue-900 text-blue-900 hover:bg-blue-50"
              onClick={() => navigate('/blog/preguntas-frecuentes-elecciones-exterior')}
            >
              Ver todas las preguntas
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Calendar Reminder Modal */}
      <CalendarReminderModal 
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
      />
    </section>
  );
}