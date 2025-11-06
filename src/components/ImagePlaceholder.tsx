import React from 'react';

export interface GalleryAsset {
  src?: string | null;
  storagePath: string;
  description: string;
}

interface ImagePlaceholderProps {
  asset?: GalleryAsset;
  alt: string;
  className?: string;
  rounded?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ asset, alt, className = '', rounded = 'rounded-3xl' }) => {
  if (asset?.src) {
    return (
      <img
        src={asset.src}
        alt={alt}
        className={`${rounded} object-cover shadow-xl ring-1 ring-white/20 ${className}`.trim()}
      />
    );
  }

  return (
    <div
      className={`relative flex h-full min-h-[260px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-sky-700 text-white shadow-inner ${rounded} ${className}`.trim()}
      aria-label={`${alt} placeholder`}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-sky-400/20 blur-2xl" />
      </div>
      <div className="relative z-10 max-w-xs text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Image Placeholder</p>
        <h3 className="mt-4 text-xl font-bold">{alt}</h3>
        {asset && (
          <p className="mt-4 text-sm text-white/70">
            Add an image at
            <span className="block font-semibold text-white">{asset.storagePath}</span>
            {asset.description ? ` – ${asset.description}` : null}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImagePlaceholder;
