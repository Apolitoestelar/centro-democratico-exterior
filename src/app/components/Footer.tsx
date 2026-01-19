import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin,
  Phone,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logoCD from '../../assets/53fa2ff5f390fd3584518cf066c49832b639ffaa.png';

export function Footer() {
  const footerLinks = {
    institutional: [
      { label: 'Quiénes somos', href: '#' },
      { label: 'La Cámara del Exterior', href: '#camara' },
      { label: 'Candidatos', href: '#candidatos' },
      { label: 'Cómo votar', href: '#como-votar' }
    ],
    resources: [
      { label: 'Guías de votación', href: '#como-votar' },
      { label: 'Calendario electoral', href: 'https://drive.google.com/file/d/1C5Sz_PBIaG1Ng_2oBQneuQ_KZm4I7LoM/view?usp=drive_link', external: true },
      { label: 'Preguntas frecuentes', href: '/blog/preguntas-frecuentes-elecciones-exterior', internal: true },
      { label: 'Lugar de votación', href: 'https://wsp.registraduria.gov.co/censo/consultar', external: true }
    ],
    participate: [
      { label: 'Ser voluntario', href: '#voluntarios' },
      { label: 'Comunidad', href: '#' },
      { label: 'Recursos para compartir', href: 'https://drive.google.com/drive/folders/1ysQDg9_-klvU_4LVoPR-BJ1S6IyfVtBX?usp=drive_link', external: true },
      { label: 'Eventos', href: '#eventos' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/CDexterior', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/CDColExt', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/CDexterior', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Branding Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={logoCD} 
                alt="Centro Democrático - Colombianos en el Exterior" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Representación fuerte, experimentada y comprometida con los derechos de los colombianos en el exterior.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:contacto@cdexterior.com" className="hover:text-white transition-colors">
                  contacto@cdexterior.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+1-214-551-8773</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-white mb-4">Institucional</h3>
            <ul className="space-y-3">
              {footerLinks.institutional.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-white mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : ''}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Participa */}
          <div>
            <h3 className="text-white mb-4">Participa</h3>
            <ul className="space-y-3">
              {footerLinks.participate.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transparency & Legal Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="bg-blue-900/30 border border-blue-800/50 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <ExternalLink className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Transparencia Electoral</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Esta página institucional cumple con las normas electorales de Colombia. Para información oficial sobre el proceso electoral, visita:
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a href="https://www.registraduria.gov.co" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    Registraduría Nacional <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    CNE <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} Centro Democrático Exterior. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <Link to="/politica-de-privacidad" className="hover:text-white transition-colors">
                Política de privacidad
              </Link>
              <Link to="/terminos-de-uso" className="hover:text-white transition-colors">
                Términos de uso
              </Link>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="pb-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 italic">
              "Claridad para votar. Fuerza para representarte. Colombia se juega afuera."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}