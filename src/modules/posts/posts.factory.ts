import { PostSchema } from "./posts.schema.js";
import { zocker } from "zocker";
import { faker } from "@faker-js/faker";
import { POSTS_SEED } from "../../utils/constants.js";

const mockData = zocker(PostSchema)
  .setSeed(POSTS_SEED)
  .supply(PostSchema.shape.media.unwrap().shape.url, faker.image.url())
  .supply(PostSchema.shape.likes, faker.number.int({ max: 9999 }))
  .generateMany(30);

export const mockPosts = mockData;
