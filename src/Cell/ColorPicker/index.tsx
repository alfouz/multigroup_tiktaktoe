import { ActionIcon, Flex } from "@mantine/core";
import colors from "../../constants/Colors";

type Props = {
  onChange: (color: string) => void;
};

function Cell({ onChange }: Props) {
  return (
    <Flex
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      {colors.map((c) => {
        return (
          <ActionIcon
            key={c}
            color={c}
            onClick={() => onChange(c)}
            variant="filled"
            aria-label="Settings"
          />
        );
      })}
    </Flex>
  );
}

export default Cell;
