import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Calendar, ExternalLink, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { getBlogPostBySlug } from '../data/blogPosts';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEOHead } from '../components/SEOHead';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  // Scroll to top cuando el componente se monta o cambia el slug
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <SEOHead title="Artículo no encontrado - Centro Democrático Exterior" />
        <div className="text-center">
          <h1 className="text-4xl text-gray-900 mb-4">Artículo no encontrado</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={`${post.title} - Centro Democrático Exterior`}
        description={post.excerpt}
        keywords={`${post.category}, elecciones 2026, colombianos exterior, centro democrático`}
        ogType="article"
      />
      <Navigation />
      
      {/* Hero pequeño */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:bg-white/10"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Volver al Blog
          </Button>

          {/* Categoría */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm">
              {post.category === 'official' ? 'Noticia oficial' : 'Cobertura en medios'}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
            {post.title}
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-blue-100 mb-6">
            {post.subtitle}
          </p>

          {/* Fecha */}
          <div className="flex items-center gap-4 text-blue-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen destacada */}
      <section className="relative -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <ImageWithFallback 
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contenido */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {post.content.intro}
          </p>

          {/* Cuerpo */}
          <div className="prose prose-lg max-w-none">
            {post.content.body.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Conclusión */}
          {post.content.conclusion && (
            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-900 rounded-r-lg">
              <p className="text-gray-900 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          )}

          {/* Enlace externo */}
          {post.content.externalLink && (
            <div className="mt-8">
              <a 
                href={post.content.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 underline"
              >
                <ExternalLink className="w-5 h-5" />
                {post.content.externalLink.text}
              </a>
            </div>
          )}

          {/* Compartir */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl text-gray-900">Compartir este artículo</h3>
              <Button variant="outline" className="gap-2">
                <Share2 className="w-4 h-4" />
                Compartir
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* CTAs finales */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-gray-900 mb-6">
            ¿Listo para ejercer tu voto informado?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Conoce más sobre nuestra propuesta y únete a la campaña
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-900 hover:bg-blue-800"
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('como-votar')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Aprende cómo votar
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-50"
              onClick={() => navigate('/')}
            >
              Volver al inicio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}