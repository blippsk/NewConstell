import { addFlag, addTearsStat, runInNFrames } from "isaacscript-common";
import { game, ModItemTypes, NewConData } from "../constants";

export function pallasMapping(): void {
  const player = Isaac.GetPlayer();
  if (player.HasCollectible(ModItemTypes.PALLAS)) {
    player.UseCard(Card.CARD_WORLD, addFlag(1, 3, 8));
  }
}

export function pallasStats(): void {
  const player = Isaac.GetPlayer();
  if (game.GetRoom().HasWater() && player.HasCollectible(ModItemTypes.PALLAS)) {
    player.Damage *= 2;
    addTearsStat(player, 1.5);
    NewConData.room.pallasStats = 1;
  } else if (
    NewConData.room.pallasStats === 1 &&
    player.HasCollectible(ModItemTypes.PALLAS)
  ) {
    NewConData.room.pallasStats = 0;
    player.Damage /= 2;
    addTearsStat(player, -1.5);
  }
}

export function pallasTearInit(): void {
  const player = Isaac.GetPlayer();
  if (!player.HasCollectible(ModItemTypes.PALLAS)) {
    return;
  }
  for (let i = 0; i < 30 * player.TearRange; i++) {
    runInNFrames(() => {
      pee();
    }, i * 5);
  }
}
function pee() {
  const player = Isaac.GetPlayer();
  const tear = player.ToTear();
  if (tear !== undefined) {
    Isaac.Spawn(
      EntityType.ENTITY_EFFECT,
      EffectVariant.PLAYER_CREEP_HOLYWATER,
      0,
      tear.Position,
      Vector(0, 0),
      player,
    );
  }
}
