import { Center, Popover } from "@mantine/core";
import { Container } from "./styles";
import ColorPicker from "./ColorPicker";
import { CellType } from "../state/useMatrixStore";
import { useState } from "react";

type Props = {
  cellValue: CellType;
  onChange: (newCell: CellType) => void;
};
function Cell({ cellValue, onChange }: Props) {
  const [opened, setOpened] = useState(false);
  const handleOnChange = (color: string) => {
    onChange({ ...cellValue, color: color });
    setOpened(false);
  };

  return (
    <Container>
      <Popover
        position="bottom"
        withArrow
        shadow="md"
        opened={opened}
        onChange={setOpened}
      >
        <Popover.Target>
          <Center
            bg={cellValue.color}
            w="calc(100% - 8px)"
            h="calc(100% - 8px)"
            style={{ cursor: "pointer", borderRadius: "8px" }}
            onClick={() => setOpened((o) => !o)}
            fw={500}
            fz={28}
          >
            {cellValue.index}
          </Center>
        </Popover.Target>
        <Popover.Dropdown>
          <ColorPicker onChange={handleOnChange} />
        </Popover.Dropdown>
      </Popover>
    </Container>
  );
}

export default Cell;
