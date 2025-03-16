import Tarefa from "../../components/Tarefa"
import { Container } from "./styles"
const tarefas = [
    {
        titulo: 'teste',
        descricao: 'teste',
        prioridade: 'importante',
        status: 'pendente'
    },
    {
        titulo: '1',
        descricao: '2',
        prioridade: '3',
        status: '4'
    }
]

const ListadeTarefas = () => (
    <Container>
    <p> 2 tarefas marcadas como: "categoria" e "termo"</p>
    <ul>
        {tarefas.map(t => <li key={t.titulo}><Tarefa descricao={t.descricao} status={t.status} prioridade={t.prioridade} titulo={t.titulo}/> </li>)}
    </ul>
    </Container>
)

export default ListadeTarefas