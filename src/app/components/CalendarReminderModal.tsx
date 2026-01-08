import { X, Calendar, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

interface CalendarReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendarReminderModal({ isOpen, onClose }: CalendarReminderModalProps) {
  if (!isOpen) return null;

  const calendarEvents = [
    {
      title: 'Cierre de inscripción de cédulas',
      date: '20260108',
      description: 'Si no inscribiste tu cédula antes de esta fecha, no puedes votar. Es el punto de no retorno.',
      displayDate: '8 de enero de 2026'
    },
    {
      title: 'Inicio de votación en el exterior',
      date: '20260302',
      description: 'Inicia la semana de votación para colombianos en el exterior. Verifica tu lugar de votación y horarios.',
      displayDate: '2 de marzo de 2026'
    },
    {
      title: 'Ley seca - Cierre de campaña',
      date: '20260307',
      description: 'Marca el cierre simbólico de la campaña y el paso a la jornada electoral.',
      displayDate: '7 de marzo de 2026'
    },
    {
      title: 'Elecciones Congreso de la República',
      date: '20260308',
      description: 'Día oficial de elecciones en Colombia. Los colombianos en el exterior pueden votar hasta este día.',
      displayDate: '8 de marzo de 2026'
    }
  ];

  const generateGoogleCalendarUrl = (event: typeof calendarEvents[0]) => {
    const baseUrl = 'https://calendar.google.com/calendar/render';
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.title,
      dates: `${event.date}/${event.date}`,
      details: event.description,
      location: 'Consulado de Colombia',
      ctz: 'America/Bogota'
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const addAllToCalendar = () => {
    // Abrir cada evento en una nueva pestaña con un pequeño delay para evitar bloqueadores de popups
    calendarEvents.forEach((event, index) => {
      setTimeout(() => {
        window.open(generateGoogleCalendarUrl(event), '_blank', 'noopener,noreferrer');
      }, index * 300);
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-900" />
            </div>
            <div>
              <h2 className="text-2xl text-gray-900">Agregar a tu calendario</h2>
              <p className="text-sm text-gray-600">No te pierdas ninguna fecha importante</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Add All Button */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-6 border border-blue-200">
            <h3 className="text-lg text-gray-900 mb-2">Agregar todas las fechas</h3>
            <p className="text-sm text-gray-600 mb-4">
              Se abrirán 4 ventanas de Google Calendar. Confirma cada evento para agregarlo a tu calendario.
            </p>
            <Button
              onClick={addAllToCalendar}
              className="w-full bg-blue-900 hover:bg-blue-800"
            >
              <Calendar className="mr-2 w-4 h-4" />
              Agregar todas a Google Calendar
            </Button>
          </div>

          {/* Individual Events */}
          <div>
            <h3 className="text-lg text-gray-900 mb-4">O agrega fechas individuales</h3>
            <div className="space-y-3">
              {calendarEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <div className="flex-1">
                    <div className="text-gray-900 mb-1">{event.title}</div>
                    <div className="text-sm text-gray-600">{event.displayDate}</div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(generateGoogleCalendarUrl(event), '_blank', 'noopener,noreferrer')}
                    className="text-blue-900 border-blue-900 hover:bg-blue-50"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Info Note */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Nota:</strong> Necesitas tener una cuenta de Google Calendar. Los eventos se abrirán en ventanas nuevas para que los confirmes uno por uno.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 flex justify-end rounded-b-2xl">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}
