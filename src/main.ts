import { postNewLevel } from "./callbacks/MC_POST_NEW_LEVEL";
import { postNewRoom } from "./callbacks/MC_POST_NEW_ROOM";
import { postNPCDeath } from "./callbacks/MC_POST_NPC_DEATH";
import { preRoomEntitySpawn } from "./callbacks/MC_PRE_ROOM_ENTITY_SPAWN";

export function main(): void {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events
  const newcon = RegisterMod("Better Planetariums", 1);

  // Set a callback function that corresponds to when a new run is started
  newcon.AddCallback(ModCallbacks.MC_POST_GAME_STARTED, postGameStarted);
  newcon.AddCallback(ModCallbacks.MC_POST_NPC_DEATH, postNPCDeath);
  newcon.AddCallback(ModCallbacks.MC_PRE_ROOM_ENTITY_SPAWN, preRoomEntitySpawn);
  newcon.AddCallback(ModCallbacks.MC_POST_NEW_LEVEL, postNewLevel);
  newcon.AddCallback(ModCallbacks.MC_POST_NEW_ROOM, postNewRoom);

  // Print an initialization message to the "log.txt" file
  Isaac.DebugString("newconstell initialized.");
}

function postGameStarted() {
  Isaac.DebugString("Callback triggered: MC_POST_GAME_STARTED");
}
