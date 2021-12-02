import { postNPCDeath } from "./callbacks/MC_POST_NPC_DEATH";

export function main(): void {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events
  const mod = RegisterMod("newconstellations", 1);

  // Set a callback function that corresponds to when a new run is started
  mod.AddCallback(ModCallbacks.MC_POST_GAME_STARTED, postGameStarted);
  mod.AddCallback(ModCallbacks.MC_POST_NPC_DEATH, postNPCDeath);

  // Print an initialization message to the "log.txt" file
  Isaac.DebugString("newconstell initialized.");
}

function postGameStarted() {
  Isaac.DebugString("Callback triggered: MC_POST_GAME_STARTED");
}
