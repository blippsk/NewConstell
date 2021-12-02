import { game, ModItemTypes, NewConData, rng } from "../constants";

export function ceresOnClear(): void {
  const data = NewConData;
  const player = Isaac.GetPlayer();
  if (!player.HasCollectible(ModItemTypes.CERES)) {
    return;
  }
  if (data.room.ceresCount <= 6) {
    data.room.ceresCount += 1;
  } else if (data.room.ceresCount === 7) {
    data.room.ceresCount = 0;
    ceresReward();
  }
}

function ceresReward() {
  const roomCenter = game
    .GetRoom()
    .FindFreePickupSpawnPosition(game.GetRoom().GetCenterPos());
  const rand = rng.RandomInt(101);
  if (rand >= 80) {
    Isaac.Spawn(
      EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_COLLECTIBLE,
      0,
      roomCenter,
      Vector.Zero,
      undefined,
    );
  } else if (rand >= 60) {
    Isaac.Spawn(
      EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_ETERNALCHEST,
      0,
      roomCenter,
      Vector.Zero,
      undefined,
    );
  } else if (rand >= 50) {
    Isaac.Spawn(
      EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_KEY,
      KeySubType.KEY_GOLDEN,
      roomCenter,
      Vector.Zero,
      undefined,
    );
  } else if (rand >= 40) {
    Isaac.Spawn(
      EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_BOMB,
      BombSubType.BOMB_GOLDEN,
      roomCenter,
      Vector.Zero,
      undefined,
    );
  } else if (rand >= 5) {
    Isaac.Spawn(
      EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_BIGCHEST,
      0,
      roomCenter,
      Vector.Zero,
      undefined,
    );
  } else if (rand >= 0) {
    Isaac.Spawn(
      EntityType.ENTITY_PICKUP,
      PickupVariant.PICKUP_BOMB,
      BombSubType.BOMB_GIGA,
      roomCenter,
      Vector.Zero,
      undefined,
    );
  }
  rng.Next();
}
