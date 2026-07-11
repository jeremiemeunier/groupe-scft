export interface MapPoint {
  id: string | number;
  name: string;
  type: "gare" | "poi" | "depot" | string;
  x: number;
  z: number;
  description?: string | null;
  enc_name?: string | null;
  color?: string | null;
}

export interface MapRailCoordinate {
  x: number;
  z: number;
}

export interface MapRail {
  id: string | number;
  name: string;
  color: string;
  coordinates: MapRailCoordinate[];
}
