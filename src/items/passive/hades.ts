import { addFlag } from "isaacscript-common";
import { ModItemTypes, rng } from "../../constants";

export function hadesBone(EntityNPC: EntityNPC): void {
  const player = Isaac.GetPlayer();
  if (
    !player.HasCollectible(ModItemTypes.HADES) ||
    !EntityNPC.IsActiveEnemy(false)
  ) {
    return;
  }
  if (rng.RandomInt(101) <= 40) {
    player.UseActiveItem(
      CollectibleType.COLLECTIBLE_BOOK_OF_THE_DEAD,
      addFlag(1, 8),
    );
  }
}
