import type { GalleryAsset } from '../components/ImagePlaceholder';

export interface ClientProfile {
  name: string;
  industry?: string;
  logo?: GalleryAsset;
}

export interface SpecialistService {
  name: string;
  description: string;
  asset: GalleryAsset;
}

