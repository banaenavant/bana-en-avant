import { ArrowLeft, Calendar } from 'lucide-react';
import PhotoGallery, { GalleryPhoto } from './PhotoGallery';

export type { GalleryPhoto };

export interface Stat {
  value: string;
  label: string;
}

type CategoryColor = 'emerald' | 'red' | 'blue' | 'purple' | 'orange' | 'cyan';

interface ActionDetailLayoutProps {
  title: string;
  subtitle: string;
  date: string;
  category: string;
  categoryColor: CategoryColor;
  heroImage: string;
  description: string;
  stats?: Stat[];
  impacts?: string[];
  photos: GalleryPhoto[];
  onBack: () => void;
}

const categoryBadge: Record<CategoryColor, string> = {
  emerald: 'bg-emerald-500 text-white',
  red:     'bg-red-500 text-white',
  blue:    'bg-blue-500 text-white',
  purple:  'bg-purple-500 text-white',
  orange:  'bg-orange-500 text-white',
  cyan:    'bg-cyan-500 text-white',
};

export default function ActionDetailLayout({
  title, subtitle, date, category, categoryColor,
  heroImage, description, stats = [], impacts = [], photos, onBack,
}: ActionDetailLayoutProps) {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner ── */}
      <div className="relative h-[62vh] min-h-[460px] overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover animate-slowZoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/88" />

        <button
          onClick={onBack}
          className="absolute top-8 left-6 md:left-10 flex items-center gap-2 glass text-white/80 hover:text-white hover:bg-white/20 px-4 py-2.5 rounded-full transition-all duration-300 group z-10"
        >
          <ArrowLeft size={17} className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm font-medium">Retour aux actions</span>
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <div className="flex flex-wrap items-center gap-3 mb-5 animate-fadeInUp anim-delay-100">
            <span className={`${categoryBadge[categoryColor]} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg`}>
              {category}
            </span>
            <span className="flex items-center gap-1.5 text-white/65 text-sm glass px-3 py-1.5 rounded-full">
              <Calendar size={13} />
              {date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 max-w-4xl text-shadow-lg animate-fadeInUp anim-delay-200">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed animate-fadeInUp anim-delay-300">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ── Stats Row ── */}
      {stats.length > 0 && (
        <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 py-10 shadow-lg">
          <div className="container mx-auto px-6">
            <div className={`grid gap-6 ${stats.length === 2 ? 'grid-cols-2' : stats.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-3'}`}>
              {stats.map((stat, i) => (
                <div key={i} className="text-center text-white">
                  <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-emerald-100 text-xs font-semibold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Main Content ── */}
      <div className="container mx-auto px-6 py-16">
        <div className={`grid grid-cols-1 gap-12 items-start ${impacts.length > 0 ? 'lg:grid-cols-3' : ''}`}>

          <div className={impacts.length > 0 ? 'lg:col-span-2' : ''}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 rounded-full bg-gradient-to-b from-emerald-500 to-teal-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">À propos de cette action</h2>
            </div>
            <div className="text-gray-700 leading-8 text-[1.05rem] space-y-4 whitespace-pre-line">
              {description}
            </div>
          </div>

          {impacts.length > 0 && (
            <div className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl p-8 border border-emerald-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  Impact de l'action
                </h3>
                <ul className="space-y-4">
                  {impacts.map((impact, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-emerald-600 text-[10px] font-black">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Photo Gallery ── */}
      <PhotoGallery photos={photos} title="Galerie de l'événement" />

    </div>
  );
}
