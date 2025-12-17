import { zocker } from "zocker";
import { MerchSchema } from "./merch.schema.js";
import { MERCH_SEED } from "../../utils/constants.js";
import { faker } from "@faker-js/faker";

const mockData = zocker(MerchSchema)
  .setSeed(MERCH_SEED)
  .supply(MerchSchema.shape.media.unwrap().shape.url, faker.image.url())
  .supply(MerchSchema.shape.likes, faker.number.int({ max: 9999 }))
  .generateMany(30);

export const mockMerch = mockData;
