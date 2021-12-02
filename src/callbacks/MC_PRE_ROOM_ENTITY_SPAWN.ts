import { ceresOnClear } from "../items/ceres";

export function preRoomEntitySpawn(
  _entityType: EntityType | int,
  _variant: int,
  _subType: int,
  _gridIndex: int,
  _seed: int,
): [EntityType | int, int, int] | void {
  ceresOnClear();
}
