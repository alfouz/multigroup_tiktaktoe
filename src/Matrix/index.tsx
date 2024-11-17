import Cell from "../Cell";
import { Container, Row } from "./styles";
import useMatrixStore, {
  CellType,
  generateMatrix,
  MatrixType,
} from "../state/useMatrixStore";
import { useEffect } from "react";

const updateMatrix = (matrix: MatrixType, newCell: CellType) => {
  return matrix.map((row) =>
    row.map((c) => (c.index === newCell.index ? newCell : c))
  );
};

function Matrix() {
  const { matrix, setMatrix } = useMatrixStore();

  useEffect(() => {
    if (matrix[0].length <= 0) {
      setMatrix(generateMatrix());
    }
  }, [matrix]);

  const handleChangeMatrix = (newCell: CellType) => {
    const newMatrix = updateMatrix(matrix, newCell);
    setMatrix(newMatrix);
  };

  return (
    <Container>
      {matrix.map((row, index) => (
        <Row key={index}>
          {row.map((c) => (
            <Cell key={c.index} cellValue={c} onChange={handleChangeMatrix} />
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default Matrix;
