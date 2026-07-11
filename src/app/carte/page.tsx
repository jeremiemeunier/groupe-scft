import { Metadata } from "next";
import dynamic from "next/dynamic";
import { createClient } from "@libs/server";
import { MapPoint, MapRail } from "@/_types/Map.type";

export const metadata: Metadata = {
  title: "Carte interactive — SCFT Groupe",
  description:
    "Explorez le réseau ferroviaire de TeuTeuLand : gares, lignes et points d'intérêt sur une carte interactive.",
};

const PartMap = dynamic(() => import("@/_components/parts/PartMap"), {
  ssr: false,
  loading: () => (
    <div className="map-loading">
      <p>Chargement de la carte…</p>
    </div>
  ),
});

export default async function CartePage() {
  const supabase = await createClient();

  const [{ data: points }, { data: rails }] = await Promise.all([
    supabase.from("map_point").select(),
    supabase.from("map_rail").select(),
  ]);

  return (
    <div className="teaui grid rgs-0">
      <div className="teaui grid rgs-0 bg-corail">
        <div className="teaui grid bg-corail va-center sv-30">
          <div className="teaui grid format-page sl">
            <p className="teaui ma0 ms-ma0 xs-ma0 pa0 ms-pa0 xs-pa0 text ff-title fs-80 fw-900">
              Carte du réseau
            </p>
            <div className="teaui grid tc-2">
              <p className="teaui">
                Explorez les gares, lignes ferroviaires et points d&apos;intérêt
                du réseau SCFT sur TeuTeuLand.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PartMap
        points={(points as MapPoint[]) ?? []}
        rails={(rails as MapRail[]) ?? []}
      />
    </div>
  );
}
