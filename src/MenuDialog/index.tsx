import { Dialog, Text, Button } from "@mantine/core";
import useSettingsStore from "../state/useSettingsStore";
import useMatrixStore from "../state/useMatrixStore";

const MenuDialog = () => {
  const { menuOpened, setMenuOpened } = useSettingsStore();
  const { resetMatrix } = useMatrixStore();

  const handleResetGame = () => {
    setMenuOpened(false);
    resetMatrix();
  };
  return (
    <Dialog
      opened={menuOpened}
      withCloseButton
      onClose={() => setMenuOpened(false)}
      size="lg"
      radius="md"
    >
      <Text size="sm" mb="xs" fw={500}>
        Reset Game
      </Text>
      <Button onClick={handleResetGame}>Reset Game</Button>
    </Dialog>
  );
};

export default MenuDialog;
