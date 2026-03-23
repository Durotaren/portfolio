// export default function Map() {
//   return <div className="w-full bg-gray-400 h-[192px] rounded-lg"></div>;
// }
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
      center: [25.386676939959802, 42.62330756336017],
      zoom: 6,
    });

    map.on('load', () => {
      map.setPaintProperty('background', 'background-color', '#2B2B2B');

      map.getStyle().layers.forEach((layer) => {
        if (layer.type === 'symbol' && layer.layout?.['text-field']) {
          map.setLayoutProperty(layer.id, 'text-field', ['get', 'name_en']);
        }
      });

      setTimeout(() => {
        map.easeTo({
          zoom: 14, // target zoom
          duration: 2500, // milliseconds,
          easing: (t) => t * (2 - t), // linear easing
        });
      }, 1500);
    });

    return () => map.remove();
  }, []);

  return (
    <div className="w-full h-[192px] rounded-xl">
      <div ref={mapContainer} className="w-full h-full rounded-xl" />
    </div>
  );
}
