import { useState } from 'react';
import { Users, MessageCircle, Share2, HandHeart, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { supabase } from '../../lib/supabase';

export function VolunteerSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log('Enviando datos:', formData);
      console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
      
      const { data, error: supabaseError } = await supabase
        .from('voluntarios')
        .insert([
          {
            nombre: formData.name,
            email: formData.email,
            pais: formData.country,
            ciudad: formData.city || null,
          }
        ]);

      console.log('Respuesta Supabase:', { data, error: supabaseError });

      if (supabaseError) {
        console.error('Error al enviar datos:', supabaseError);
        setError(`Error: ${supabaseError.message}`);
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', country: '', city: '' });
      }, 5000);
    } catch (err) {
      console.error('Error inesperado:', err);
      setError(`Error inesperado: ${err}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ways = [
    {
      icon: Share2,
      title: 'Comparte información',
      description: 'Ayuda a difundir contenido educativo sobre cómo votar y por qué importa.'
    },
    {
      icon: MessageCircle,
      title: 'Conecta con otros',
      description: 'Únete a grupos de colombianos que apoyan la lista del Centro Democrático.'
    },
    {
      icon: Users,
      title: 'Organiza eventos',
      description: 'Coordina charlas informativas en tu ciudad sobre la importancia del voto.'
    },
    {
      icon: HandHeart,
      title: 'Moviliza el voto',
      description: 'Ayuda a recordar fechas clave y facilitar el acceso a las urnas.'
    }
  ];

  return (
    <section id="voluntarios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-900 rounded-full px-4 py-2 mb-6">
            <HandHeart className="w-5 h-5" />
            <span className="text-sm">Comunidad y Acción</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Únete a la <span className="text-blue-900">Comunidad</span>
          </h2>
          <p className="text-xl text-gray-600">
            Sé parte de una red de <strong>colombianos comprometidos</strong> con la defensa de nuestros derechos en el exterior.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Ways to Help */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">Cómo puedes ayudar</h3>
              <div className="space-y-4">
                {ways.map((way, index) => {
                  const Icon = way.icon;
                  return (
                    <div 
                      key={index}
                      className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="text-lg text-gray-900 mb-1">
                          {way.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {way.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-8">
              <h4 className="text-xl mb-4">Al unirte recibes:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Información actualizada sobre fechas y procesos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Material educativo para compartir</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Conexión con colombianos en tu ciudad</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Recursos para organizar eventos locales</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl text-gray-900 mb-2">Regístrate como voluntario</h3>
              <p className="text-gray-600 mb-8">
                Forma parte de la red de colombianos que trabajan por una representación fuerte.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <Input 
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Tu nombre"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="tu@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm text-gray-700 mb-2">
                      País de residencia *
                    </label>
                    <Input 
                      id="country"
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      placeholder="Ej: España, Estados Unidos"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm text-gray-700 mb-2">
                      Ciudad
                    </label>
                    <Input 
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      placeholder="Ej: Madrid, Miami"
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-lg py-6 h-auto group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Quiero ser parte'}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {error && (
                    <p className="text-xs text-red-500 text-center mt-2">
                      {error}
                    </p>
                  )}

                  <p className="text-xs text-gray-500 text-center">
                    Al registrarte aceptas recibir información sobre la campaña del Centro Democrático Exterior.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-blue-900" />
                  </div>
                  <h4 className="text-2xl text-gray-900 mb-3">¡Gracias por unirte!</h4>
                  <p className="text-gray-600">
                    Pronto recibirás información en tu correo para comenzar a participar.
                  </p>
                </div>
              )}
            </div>

            {/* Trust Signal */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Tus datos están protegidos y no serán compartidos</span>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="text-4xl text-blue-900 mb-2">2,500+</div>
            <div className="text-gray-600">Voluntarios activos</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="text-4xl text-blue-900 mb-2">45+</div>
            <div className="text-gray-600">Países representados</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="text-4xl text-blue-900 mb-2">150+</div>
            <div className="text-gray-600">Eventos organizados</div>
          </div>
        </div>
      </div>
    </section>
  );
}