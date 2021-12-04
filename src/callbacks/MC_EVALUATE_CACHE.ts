import { stats } from "../items/pallas";

export function evaluateCache(player: EntityPlayer, cacheFlag: CacheFlag) {
  stats(player, cacheFlag);
}
