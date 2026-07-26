import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  title?: string;
}

export default function PhotoGallery({ photos, title = 'Galerie photos' }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i - 1 + photos.length) % photos.length : null),
    [photos.length]
  );

  const next = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i + 1) % photos.length : null),
    [photos.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  if (photos.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Images className="text-emerald-600" size={20} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <div className="border-2 border-dashed border-gray-200 rounded-3xl p-20 text-center bg-white">
            <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <Images className="text-gray-300" size={40} />
            </div>
            <p className="text-gray-400 text-lg font-medium">Les photos de cet événement seront ajoutées prochainement</p>
            <p className="text-gray-300 text-sm mt-2">Revenez bientôt !</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Images className="text-emerald-600" size={20} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-full text-sm font-semibold">
            {photos.length} photo{photos.length > 1 ? 's' : ''}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-300 scale-0 group-hover:scale-100">
                  <ZoomIn className="text-gray-800" size={20} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/96 flex items-center justify-center animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/60 hover:text-white bg-white/5 hover:bg-white/15 rounded-full p-3 transition-all duration-200 z-10"
            aria-label="Fermer"
          >
            <X size={22} />
          </button>

          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest">
            {lightboxIndex + 1} / {photos.length}
          </div>

          {photos.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white bg-white/5 hover:bg-white/15 rounded-full p-3 md:p-4 transition-all duration-200 z-10"
              aria-label="Photo précédente"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          <div
            className="max-h-[88vh] px-16 md:px-24 flex flex-col items-center gap-4"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            {photos[lightboxIndex].caption && (
              <p className="text-white/60 text-sm text-center max-w-xl">
                {photos[lightboxIndex].caption}
              </p>
            )}
          </div>

          {photos.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-white/60 hover:text-white bg-white/5 hover:bg-white/15 rounded-full p-3 md:p-4 transition-all duration-200 z-10"
              aria-label="Photo suivante"
            >
              <ChevronRight size={26} />
            </button>
          )}

          {photos.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === lightboxIndex ? 'bg-white w-4' : 'bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
