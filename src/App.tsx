import { Container } from "./App.styles";
import Matrix from "./Matrix";
import { MantineProvider } from "@mantine/core";
import MenuDialog from "./MenuDialog";
import { useHotkeys } from "@mantine/hooks";
import useSettingsStore from "./state/useSettingsStore";

function App() {
  const { setMenuOpened } = useSettingsStore();
  useHotkeys([["escape", () => setMenuOpened(true)]]);

  return (
    <MantineProvider>
      <Container>
        <Matrix />
        <MenuDialog />
      </Container>
    </MantineProvider>
  );
}

export default App;
