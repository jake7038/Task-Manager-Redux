import EstiloGlobal, {Container} from "./styles";
import ListadeTarefas from "./containers/listadeTarefas";
import BarraLateral from "./containers/BarraLateral";
function App() {
  return (
  <>
    <EstiloGlobal/>
    <Container>
      <BarraLateral/>
      <ListadeTarefas/>
    </Container>
  </>
  );
}

export default App;
