import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HouseListRelationFilter } from "../house/HouseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  houses?: HouseListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
