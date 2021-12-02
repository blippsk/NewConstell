export enum ModItemTypes {
  CERES = Isaac.GetItemIdByName("Ceres"),
  PALLAS = Isaac.GetItemIdByName("Pallas"),
  HADES = Isaac.GetItemIdByName("Hades"),
}
export const rng = RNG();
export const game = Game();

export type ModData = {
  room: {
    ceresCount: number;
    pallasStats: number;
  };
};
export const NewConData: ModData = {
  room: {
    ceresCount: 0,
    pallasStats: 0,
  },
};
