import { House as THouse } from "../api/house/House";

export const HOUSE_TITLE_FIELD = "title";

export const HouseTitle = (record: THouse): string => {
  return record.title || String(record.id);
};
