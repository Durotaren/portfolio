import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: [25.389176004399275, 42.62205080143139],
      zoom: 4,
    });

    map.on('load', () => {
      map.setPaintProperty('background', 'background-color', '#2B2B2B');
      map.setPaintProperty('landcover', 'fill-color', '#262B1D');
      map.setPaintProperty('water', 'fill-color', '#213949');
      map.setPaintProperty('roadname_sec', 'text-color', '#C2C2C2');
      map.setLayoutProperty('roadname_sec', 'text-size', 14);
      map.setLayoutProperty('poi_park', 'text-size', 12);

      const coords = [25.389176004399275, 42.62205080143139];

      map.addSource('dot', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: { type: 'Point', coordinates: coords },
              properties: {},
            },
          ],
        },
      });

      map.addLayer({
        id: 'dot-inner',
        type: 'circle',
        source: 'dot',
        paint: {
          'circle-radius': 6,
          'circle-color': '#3B82F6',
        },
      });

      map.addLayer({
        id: 'dot-pulse',
        type: 'circle',
        source: 'dot',
        paint: {
          'circle-radius': 6,
          'circle-color': '#3B82F6',
          'circle-opacity': 0.4,
        },
      });

      const duration = 2000;
      const delay = 1000;

      function animate(now: number) {
        const cycle = duration + delay;
        const time = now % cycle;

        if (time < duration) {
          const progress = time / duration;

          const radius = 6 + progress * 20;
          const opacity = 0.4 * (1 - progress);

          map.setPaintProperty('dot-pulse', 'circle-radius', radius);
          map.setPaintProperty('dot-pulse', 'circle-opacity', opacity);
        } else {
          map.setPaintProperty('dot-pulse', 'circle-radius', 6);
          map.setPaintProperty('dot-pulse', 'circle-opacity', 0);
        }

        requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);

      map.getStyle().layers.forEach((layer) => {
        if (layer.type === 'symbol' && layer.layout?.['text-field']) {
          map.setLayoutProperty(layer.id, 'text-field', ['get', 'name_en']);
        }
      });

      setTimeout(() => {
        map.easeTo({
          zoom: 15,
          duration: 3500,
          easing: (t) => t * (2 - t),
        });
      }, 1500);
    });

    return () => map.remove();
  }, []);

  return (
    <div className="relative w-full h-[192px] rounded-xl">
      <div ref={mapContainer} className="w-full h-full rounded-xl" />
      <div className="absolute bottom-0 left-0 w-full h-[20%] pointer-events-none bg-gradient-to-t from-black/100 to-transparent" />
    </div>
  );
}
