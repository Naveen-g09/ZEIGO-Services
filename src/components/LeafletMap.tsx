import { useEffect, useRef } from 'react';
import type { MapOptions, TileLayerOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export interface LeafletMapProps {
  /** Latitude/longitude pair for the map centre. */
  center?: [number, number];
  /** Initial zoom level. */
  zoom?: number;
  /** Optional popup text attached to the marker. */
  popupLabel?: string;
  /** Optional tile layer configuration. */
  tileLayerOptions?: TileLayerOptions;
  /** Tailwind utility classes passed to the map container. */
  className?: string;
}

const DEFAULT_CENTER: [number, number] = [19.02501538216906, 73.03832257601033];
const DEFAULT_TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const DEFAULT_ATTRIBUTION = '© OpenStreetMap contributors';

const BASE_MAP_OPTIONS: MapOptions = {
  zoomControl: true,
  scrollWheelZoom: false,
  attributionControl: false,
};

const LeafletMap = ({
  center = DEFAULT_CENTER,
  zoom = 17,
  popupLabel,
  tileLayerOptions,
  className,
}: LeafletMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    let map: L.Map | null = null;
    let tileLayer: L.TileLayer | null = null;
    let marker: L.Marker | null = null;

    const initialiseMap = async () => {
      const L = await import('leaflet');

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: markerIcon2x,
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
      });

      if (!mapContainerRef.current) {
        return;
      }

      const options: MapOptions = {
        ...BASE_MAP_OPTIONS,
        zoom,
      };

      map = L.map(mapContainerRef.current, options).setView(center, zoom);

      tileLayer = L.tileLayer(DEFAULT_TILE_URL, {
        attribution: DEFAULT_ATTRIBUTION,
        maxZoom: 19,
        ...tileLayerOptions,
      });

      tileLayer.addTo(map);

      marker = L.marker(center).addTo(map);

      if (popupLabel) {
        marker.bindPopup(popupLabel, {
          closeButton: false,
          autoClose: false,
        });
        marker.openPopup();
      }
    };

    initialiseMap();

    return () => {
      if (marker) {
        marker.remove();
      }
      if (tileLayer) {
        tileLayer.remove();
      }
      if (map) {
        map.remove();
      }
    };
  }, [center, zoom, popupLabel, tileLayerOptions]);

  const containerClassName = ['relative h-full w-full overflow-hidden rounded-3xl', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={mapContainerRef}
      className={containerClassName}
      role="img"
      aria-label={popupLabel ?? 'Office location map'}
      data-testid="leaflet-map"
    />
  );
};

export default LeafletMap;
