import { ArrowRight, CheckCircle, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative pt-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Cámara de los Colombianos en el Exterior</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Colombia también se juega <span className="text-yellow-400">afuera</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100">
                Tu voto en el exterior decide
              </p>
            </div>

            {/* Value Props */}
            <div className="space-y-3 text-blue-100">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-lg">Una lista preparada con experiencia y claridad</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-lg">Representación sólida para los colombianos en el exterior</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-lg">Claridad para votar. Fuerza para representarte.</p>
              </div>
            </div>

            {/* Lista Cerrada Info */}
            <div className="bg-yellow-400 text-blue-950 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl mb-2">📋 Votación por Lista Cerrada</h3>
              <p className="text-base">
                <strong>Vota por el partido, no por nombres individuales.</strong> Al votar por el Centro Democrático, votas por toda la lista preparada y experimentada.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 text-lg px-8 py-6 h-auto group"
              >
                <a href="#como-votar">
                  Aprende cómo votar
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 h-auto"
                onClick={() => {
                  document.getElementById('voluntarios')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Únete como voluntario
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span>Votación: 2-8 de marzo de 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Lista Oficial CD</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Candidates */}
          <div className="relative space-y-6">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1672851612972-651dd2bb6363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBwb2xpdGljYWwlMjBsZWFkZXJzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2Nzc0NDY2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Candidatos Centro Democrático Exterior"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-3">
              <a 
                href="https://www.facebook.com/CDexterior" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/CDexterior" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://x.com/CDColExt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-red-600 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}