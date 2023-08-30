import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HouseWhereInput = {
  amenity?: StringFilter;
  area?: IntNullableFilter;
  bath?: IntFilter;
  bed?: IntFilter;
  car?: IntFilter;
  category?: StringFilter;
  cell?: IntFilter;
  city?: StringFilter;
  desc?: StringFilter;
  id?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  street?: StringFilter;
  tipo?: StringFilter;
  title?: StringFilter;
  user?: UserWhereUniqueInput;
  ward?: StringFilter;
  whatsapp?: IntFilter;
};
