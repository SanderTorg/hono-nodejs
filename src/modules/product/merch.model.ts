import { mockMerch as merch } from "./merch.factory.js";

export function getMerch({ _limit = 30, _offset = 0 }) {
  return merch.slice(_offset, _offset + _limit);
}
