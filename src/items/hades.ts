import { addFlag } from "isaacscript-common";
import { ModItemTypes, rng } from "../constants";

export function hadesBone(npc: EntityNPC): void {
  const player = Isaac.GetPlayer();
  if (!player.HasCollectible(ModItemTypes.HADES) || !npc.IsActiveEnemy(true)) {
    return;
  }
  if (rng.RandomInt(101) <= 40) {
    player.UseActiveItem(
      CollectibleType.COLLECTIBLE_BOOK_OF_THE_DEAD,
      addFlag(1, 3, 8),
    );
  }
}
