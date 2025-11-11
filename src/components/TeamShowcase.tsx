import React, { useEffect, useMemo, useState } from 'react';
import ImagePlaceholder, { GalleryAsset } from './ImagePlaceholder';

interface TeamImage {
  src?: string | null;
  alt: string;
}

interface TeamShowcaseProps {
  images: TeamImage[];
  title: string;
  tagline?: string;
  intervalMs?: number;
  fallbackAsset?: GalleryAsset;
}

const TeamShowcase: React.FC<TeamShowcaseProps> = ({
  images,
  title,
  tagline,
  intervalMs = 4200,
  fallbackAsset,
}) => {
  const preparedImages = useMemo(() => images.filter((image) => Boolean(image?.src)), [images]);
  const hasImages = preparedImages.length > 0;

  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (!hasImages || prefersReducedMotion) {
      return;
    }

    const rotation = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % preparedImages.length);
    }, intervalMs);

    return () => {
      window.clearInterval(rotation);
    };
  }, [hasImages, intervalMs, prefersReducedMotion, preparedImages.length]);

  const goToSlide = (index: number) => {
    setActiveIndex((index % preparedImages.length + preparedImages.length) % preparedImages.length);
  };

  if (!hasImages) {
    return (
      <ImagePlaceholder asset={fallbackAsset} alt={title} className="h-full min-h-[360px]" rounded="rounded-[2.5rem]" />
    );
  }

  const previousImage = preparedImages[(activeIndex + preparedImages.length - 1) % preparedImages.length];
  const nextImage = preparedImages[(activeIndex + 1) % preparedImages.length];

  return (
    <div className="group relative h-full min-h-[360px] w-full overflow-hidden rounded-[2.5rem] bg-slate-900 text-white shadow-xl shadow-blue-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.35),_transparent_55%)]" aria-hidden />

      {preparedImages.map((image, index) => (
        <img
          key={image.src}
          src={image.src!}
          alt={image.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-slate-900/40 mix-blend-multiply" aria-hidden />

      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-100">
            Real team in action
          </span>
          <span className="text-xs text-sky-100/80">{String(activeIndex + 1).padStart(2, '0')} / {String(preparedImages.length).padStart(2, '0')}</span>
        </div>

        <div className="max-w-md">
          <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">{title}</h3>
          {tagline ? <p className="mt-2 text-sm text-slate-100/80 sm:text-base">{tagline}</p> : null}
        </div>
      </div>

      <div className="absolute inset-x-8 bottom-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Show previous team photo"
          >
            <span aria-hidden className="text-lg font-semibold">
              ‹
            </span>
          </button>
          <button
            type="button"
            onClick={() => goToSlide(activeIndex + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Show next team photo"
          >
            <span aria-hidden className="text-lg font-semibold">
              ›
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <figure className="relative hidden h-16 w-16 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-lg shadow-slate-900/40 sm:block">
            <img src={previousImage.src!} alt={previousImage.alt} className="h-full w-full object-cover opacity-90" loading="lazy" />
            <figcaption className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-transparent text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
              <span className="absolute bottom-2 left-2">Previous</span>
            </figcaption>
          </figure>
          <figure className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/30 bg-white/5 shadow-lg shadow-slate-900/50">
            <img src={preparedImages[activeIndex].src!} alt={preparedImages[activeIndex].alt} className="h-full w-full object-cover" loading="lazy" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent px-2 pb-1 pt-4 text-[10px] uppercase tracking-[0.2em] text-white/80">
              Now on duty
            </figcaption>
          </figure>
          <figure className="relative hidden h-16 w-16 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-lg shadow-slate-900/40 sm:block">
            <img src={nextImage.src!} alt={nextImage.alt} className="h-full w-full object-cover opacity-90" loading="lazy" />
            <figcaption className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-transparent text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
              <span className="absolute bottom-2 left-2">Next</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 hidden w-[70%] -translate-x-1/2 justify-center gap-1 sm:flex">
        {preparedImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.6)]' : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Show team photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamShowcase;
