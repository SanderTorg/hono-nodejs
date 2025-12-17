import { mockPosts as posts } from "./posts.factory.js";

export function getPosts({ _limit = 30, _offset = 0 }) {
  return posts.slice(_offset, _offset + _limit);
}
