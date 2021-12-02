import { postNPCDeath } from "./callbacks/MC_POST_NPC_DEATH";
import { preRoomEntitySpawn } from "./callbacks/MC_PRE_ROOM_ENTITY_SPAWN";

export function main(): void {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events
  const newcon = RegisterMod("New Constellations", 1);

  // Set a callback function that corresponds to when a new run is started
  newcon.AddCallback(ModCallbacks.MC_POST_GAME_STARTED, postGameStarted);
  newcon.AddCallback(ModCallbacks.MC_POST_NPC_DEATH, postNPCDeath);
  newcon.AddCallback(ModCallbacks.MC_PRE_ROOM_ENTITY_SPAWN, preRoomEntitySpawn);

  // Print an initialization message to the "log.txt" file
  Isaac.DebugString("newconstell initialized.");
}

function postGameStarted() {
  Isaac.DebugString("Callback triggered: MC_POST_GAME_STARTED");
}
