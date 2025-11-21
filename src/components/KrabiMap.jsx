import { useEffect, useRef } from 'react';

const markers = [
  { name: 'Ao Nang', position: [8.0404, 98.8222] },
  { name: 'Railay', position: [8.0117, 98.8395] },
  { name: 'Phi Phi Island', position: [7.7407, 98.7765] },
  { name: 'Hong Island', position: [8.1089, 98.7021] },
  { name: 'Thale Waek', position: [7.99, 98.8144] },
];

const krabiBounds = [
  [7.4, 98.55],
  [8.4, 99.1],
];

function KrabiMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const L = window.L;
    if (!L || !mapRef.current) {
      return undefined;
    }

    const bounds = L.latLngBounds(krabiBounds);
    const map = L.map(mapRef.current, {
      center: [8.0863, 98.9063],
      zoom: 10,
      zoomControl: false,
      maxBounds: bounds.pad(0.15),
      minZoom: 8,
      maxZoom: 17,
    });
    mapInstanceRef.current = map;

    L.control.zoom({ position: 'topright' }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    fetch(`${import.meta.env.BASE_URL}krabi-border.geojson`)
      .then((response) => response.json())
      .then((data) => {
        const layer = L.geoJSON(data, {
          style: {
            color: '#0099ff',
            weight: 2,
            fillColor: '#0099ff',
            fillOpacity: 0.1,
          },
        }).addTo(map);

        if (data.features && data.features.length) {
          map.fitBounds(layer.getBounds().pad(0.1));
        } else {
          map.fitBounds(bounds);
        }
      })
      .catch(() => {
        map.fitBounds(bounds);
      });

    const premiumIcon = L.icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers/img/marker-shadow.png',
      iconSize: [30, 45],
      iconAnchor: [15, 42],
      popupAnchor: [0, -32],
      shadowSize: [45, 45],
    });

    markers.forEach((spot) => {
      L.marker(spot.position, { icon: premiumIcon })
        .addTo(map)
        .bindPopup(
          `<div style="display:flex;flex-direction:column;gap:4px;">` +
            `<strong style="font-size:14px;color:#0b69c4;">${spot.name}</strong>` +
            '<span style="color:#1b365d;">Signature Krabi highlight</span>' +
          '</div>',
        );
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-sky-100 py-16 sm:py-20">
      <div className="section-shell space-y-6">
        <div className="flex flex-col gap-3 text-center">
          <span className="mx-auto inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b69c4] ring-1 ring-[#0b69c4]/20 shadow-sm">
            Premium Krabi Explorer Map
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Navigate Krabi Province</h2>
          <p className="text-lg text-slate-700 sm:max-w-3xl sm:mx-auto">
            Discover the most iconic islands and beaches with our ocean-inspired map. Zoom, pan, and explore the turquoise coastline with curated highlights.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-sky-100 shadow-2xl shadow-sky-100/80">
          <div
            ref={mapRef}
            className="h-[520px] w-full"
            style={{ background: 'linear-gradient(135deg, #e0f2ff 0%, #f8fdff 50%, #c2e1ff 100%)' }}
          />
        </div>
      </div>
    </section>
  );
}

export default KrabiMap;
