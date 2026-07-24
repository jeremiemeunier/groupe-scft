import { Metadata } from "next";
import { createClient } from "@libs/server";
import { MapPoint, MapRail } from "@/_types/Map.type";
import PartMap from "@part/PartMap";

export const metadata: Metadata = {
  title: "Carte interactive — SCFT Groupe",
  description:
    "Explorez le réseau ferroviaire de TeuTeuLand : gares, lignes et points d'intérêt sur une carte interactive.",
};

export default async function CartePage() {
  const supabase = await createClient();

  const [{ data: points }, { data: rails }] = await Promise.all([
    supabase.from("map_point").select(),
    supabase.from("map_rail").select(),
  ]);

  return (
    <div className="teaui grid rgs-0">
      <div className="teaui grid rgs-0 bg-corail">
        <div className="teaui grid bg-corail va-center sv-30 pt80">
          <div className="teaui grid format-page sl pt80 ms-pt80 xs-pt80 pb80 ms-pb80 xs-pb80">
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
