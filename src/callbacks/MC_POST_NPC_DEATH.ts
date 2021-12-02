import { hadesBone } from "../items/hades";

export function postNPCDeath(npc: EntityNPC): void {
  hadesBone(npc);
}
