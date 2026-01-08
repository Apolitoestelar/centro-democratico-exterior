import { Calendar, Newspaper, ExternalLink, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { getLatestPosts } from '../data/blogPosts';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogSection() {
  const posts = getLatestPosts(6);
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 rounded-full px-4 py-2 mb-6">
            <Newspaper className="w-5 h-5" />
            <span className="text-sm">Blog y Noticias</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Mantente <span className="text-blue-900">informado</span>
          </h2>
          <p className="text-xl text-gray-600">
            Últimas noticias de campaña, pedagogía electoral y cobertura en medios.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all group cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                    post.category === 'official' 
                      ? 'bg-blue-900 text-white' 
                      : 'bg-yellow-400 text-blue-950'
                  }`}>
                    {post.category === 'official' ? (
                      <>
                        <Newspaper className="w-3 h-3" />
                        Noticia oficial
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-3 h-3" />
                        Cobertura en medios
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>

                {/* Title */}
                <h3 className="text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-900 transition-colors">
                  {post.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.subtitle}
                </p>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-blue-900 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto group/btn"
                >
                  Leer más
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50"
          >
            Ver todas las noticias
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}