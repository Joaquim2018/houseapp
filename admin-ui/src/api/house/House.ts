import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type House = {
  amenity: string;
  area: number | null;
  bath: number;
  bed: number;
  car: number;
  category: string;
  cell: number;
  city: string;
  createdAt: Date;
  desc: string;
  id: string;
  mapData: JsonValue;
  photos: JsonValue;
  street: string;
  tipo: string;
  title: string;
  updatedAt: Date;
  user?: User | null;
  ward: string;
  whatsapp: number;
};
