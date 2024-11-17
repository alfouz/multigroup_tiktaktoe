import { create } from "zustand";
import { persist } from "zustand/middleware";
import colors from "../constants/Colors";

export type CellType = {
  color: string;
  index: number;
};

export type MatrixType = CellType[][];

interface MatrixStore {
  matrix: MatrixType;
  setMatrix: (newMatrix: MatrixType) => void;
  resetMatrix: () => void;
}

const columns = 10;
const rows = 10;

export const generateMatrix: () => MatrixType = () => {
  return [...Array(columns)].map((_, cI) => {
    return [...Array(rows)].map((_, rI) => {
      return { color: colors[0], index: cI * columns + rI + 1 };
    });
  });
};

const useMatrixStore = create<MatrixStore>()(
  persist(
    (set) => ({
      matrix: [[]],
      setMatrix: (newMatrix) => set(() => ({ matrix: newMatrix })),
      resetMatrix: () => set(() => ({ matrix: generateMatrix() })),
    }),
    {
      name: "matrix-storage",
    }
  )
);

export default useMatrixStore;
