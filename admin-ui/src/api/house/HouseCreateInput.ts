import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HouseCreateInput = {
  amenity: string;
  area?: number | null;
  bath: number;
  bed: number;
  car: number;
  category: string;
  cell: number;
  city: string;
  desc: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  street: string;
  tipo: string;
  title: string;
  user?: UserWhereUniqueInput | null;
  ward: string;
  whatsapp: number;
};
