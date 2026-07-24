"use client";

// Leaflet CSS is imported globally in globals.scss
import { MapPoint, MapRail } from "@/_types/Map.type";
import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, Polyline, Popup, useMap } from "react-leaflet";

const TYPE_COLORS: Record<string, string> = {
  gare: "#e8533a",
  poi: "#3a8ee8",
  depot: "#7c3ae8",
};

const DEFAULT_COLOR = "#888888";

function getMarkerColor(point: MapPoint): string {
  return point.color ?? TYPE_COLORS[point.type] ?? DEFAULT_COLOR;
}

function createDivIcon(color: string, type: string): L.DivIcon {
  const isGare = type === "gare";
  return L.divIcon({
    className: "",
    html: `<div class="map-marker map-marker--${type}" style="background-color:${color};border-color:${color}">
      ${isGare ? '<i class="ri-train-line"></i>' : '<i class="ri-map-pin-line"></i>'}
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -20],
  });
}

interface PointsLayerProps {
  points: MapPoint[];
}

function PointsLayer({ points }: PointsLayerProps) {
  const map = useMap();

  useEffect(() => {
    const markers: L.Marker[] = [];

    points.forEach((point) => {
      const color = getMarkerColor(point);
      const icon = createDivIcon(color, point.type);
      const marker = L.marker([point.x, point.z], { icon }).addTo(map);

      const popupContent = document.createElement("div");
      popupContent.className = "map-popup";

      const badge = document.createElement("span");
      badge.className = `map-popup__badge map-popup__badge--${point.type}`;
      badge.style.backgroundColor = color;
      badge.textContent = point.type;

      const title = document.createElement("h3");
      title.className = "map-popup__title";
      title.textContent = point.name;

      popupContent.appendChild(badge);
      popupContent.appendChild(title);

      if (point.description) {
        const desc = document.createElement("p");
        desc.className = "map-popup__desc";
        desc.textContent = point.description;
        popupContent.appendChild(desc);
      }

      if (point.type === "gare" && point.enc_name) {
        const link = document.createElement("a");
        link.href = `/societes/gare-connexions/${point.enc_name}`;
        link.className = "map-popup__link";
        link.textContent = "Voir la fiche gare →";
        popupContent.appendChild(link);
      }

      marker.bindPopup(popupContent, { className: "map-popup-wrapper" });
      markers.push(marker);
    });

    return () => {
      markers.forEach((m) => m.remove());
    };
  }, [map, points]);

  return null;
}

interface PartMapProps {
  points: MapPoint[];
  rails: MapRail[];
}

const LEGEND_TYPES = [
  { type: "gare", label: "Gare", color: TYPE_COLORS.gare },
  { type: "poi", label: "Point d'intérêt", color: TYPE_COLORS.poi },
  { type: "depot", label: "Dépôt", color: TYPE_COLORS.depot },
];

export default function PartMap({ points, rails }: PartMapProps) {
  const center: [number, number] = [0, 0];

  return (
    <div className="map-root">
      <MapContainer
        center={center}
        zoom={0}
        minZoom={-5}
        maxZoom={5}
        crs={L.CRS.Simple}
        className="map-container"
        zoomControl
      >
        {rails.map((rail) => (
          <Polyline
            key={rail.id}
            positions={rail.coordinates.map(
              ({ x, z }) => [x, z] as [number, number],
            )}
            pathOptions={{ color: rail.color, weight: 4, opacity: 1 }}
          ></Polyline>
        ))}

        <PointsLayer points={points} />
      </MapContainer>

      <div className="map-legend">
        <p className="map-legend__title">Légende</p>
        {LEGEND_TYPES.map(({ type, label, color }) => (
          <div key={type} className="map-legend__item">
            <span
              className="map-legend__dot"
              style={{ backgroundColor: color }}
            />
            <span className="map-legend__label">{label}</span>
          </div>
        ))}
        <div className="map-legend__item">
          <span
            className="map-legend__line"
            style={{ backgroundColor: "#aaaaaa" }}
          />
          <span className="map-legend__label">Ligne ferroviaire</span>
        </div>
      </div>
    </div>
  );
}
