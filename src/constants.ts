export enum ModItemTypes {
  CERES = Isaac.GetItemIdByName("Ceres"),
  HADES = Isaac.GetItemIdByName("Hades"),
}
export const rng = RNG();
export const game = Game();

export type ModData = {
  room: {
    ceresCount: number;
  };
};
export const NewConData: ModData = {
  room: {
    ceresCount: 0,
  },
};
