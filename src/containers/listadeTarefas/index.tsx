import { useSelector } from "react-redux"
import Tarefa from "../../components/Tarefa"
import { Container, Resultado } from "./styles"
import { RootReducer } from "../../store"

const ListadeTarefas = () => {
    const { itens } = useSelector((state: RootReducer) => state.tarefas)
    const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro)

    const filtraTarefas = () => {
        let tarefaFiltradas = itens;

        if(termo !== undefined){
            tarefaFiltradas = tarefaFiltradas.filter(
            (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0)
            if(criterio === 'prioridade'){
                tarefaFiltradas = tarefaFiltradas.filter((item) => item.prioridade === valor) 
                
            }
            else if (criterio === 'status'){
                tarefaFiltradas = tarefaFiltradas.filter((item) => item.status === valor)
            }
            return tarefaFiltradas
        }
        else{
            return itens
        }
        
    }

    const exibeResultadoFiltragem = (quantidade: number) => {
        let mensagem = '';
        const complementacao =  termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

        if(criterio === 'todas'){
            mensagem = `${quantidade} tarefas encontrada(s) como : todas${complementacao}`
        }else{
            mensagem = `${quantidade} tarefas encontrada(s) como: "${`${criterio} = ${valor}`}"${complementacao}`
        }
        return mensagem
    }

    const Tarefas = filtraTarefas()
    const mensagem = exibeResultadoFiltragem(Tarefas.length)
    return (
        <Container>
        <Resultado> {mensagem}</Resultado>
        <ul>
            {Tarefas.map(t => <li key={t.titulo}><Tarefa id={t.id} descricao={t.descricao} status={t.status} prioridade={t.prioridade} titulo={t.titulo}/> </li>)}
        </ul>
        </Container>
    )
}

export default ListadeTarefas