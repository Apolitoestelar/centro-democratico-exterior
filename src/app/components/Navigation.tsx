import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import logoCD from '../../assets/039f153c6eab94e68a1c342038a80e441d70eff4.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'La Cámara', href: '#camara' },
    { label: 'Candidatos', href: '#candidatos' },
    { label: 'Cómo Votar', href: '#como-votar' },
    { label: 'Razones', href: '#razones' },
    { label: 'Blog', href: '#blog' },
    { label: 'Únete', href: '#voluntarios' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoCD} 
              alt="Centro Democrático - Colombianos en el Exterior" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-900 transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="bg-blue-900 hover:bg-blue-800">
              <a href="#voluntarios">Ser Voluntario</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-blue-900 hover:bg-blue-800 mx-4">
                Ser Voluntario
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}