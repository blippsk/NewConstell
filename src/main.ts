export function main(): void {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events
  const mod = RegisterMod("newconstell", 1);

  // Set a callback function that corresponds to when a new run is started
  mod.AddCallback(ModCallbacks.MC_POST_GAME_STARTED, postGameStarted);

  // Print an initialization message to the "log.txt" file
  Isaac.DebugString("newconstell initialized.");
}

function postGameStarted() {
  Isaac.DebugString("Callback triggered: MC_POST_GAME_STARTED");
}
