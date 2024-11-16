import { Container, Row } from "./App.styles";

const colors = ["grey", "red", "blue"];

type Cell = {
  color: string;
  index: number;
};
const columns = 10;
const rows = 10;

const generateMatrix: () => Cell[][] = () => {
  return [...Array(columns)].map((_, cI) => {
    return [...Array(rows)].map((_, rI) => {
      return { color: colors[0], index: cI * columns + rI + 1 };
    });
  });
};

function App() {
  const matrix = generateMatrix();

  return (
    <Container>
      {matrix.map((column) => (
        <Row>
          {column.map((row) => (
            <span>{row.index}</span>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default App;
