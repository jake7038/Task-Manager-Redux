import { FormEvent, useState } from "react"
import { BotaoSalvar, MainContainer, Titulo } from "../../styles"
import { Campo } from "../../styles"
import{ Form, Opcoes, Opcao } from "./styles"
import { useDispatch } from "react-redux"
import * as enums from "../../utils/enums/Tarefa"
import Tarefa from "../../models/Tarefa"
import { cadastrar } from "../../store/redurcers/tarefas"
import { useNavigate } from "react-router-dom"

const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

    const cadastrarTarefa = (e: FormEvent) => {
        e.preventDefault()
        const tarefaParaAdicionar = new Tarefa(titulo, prioridade, enums.Status.PENDENTE, descricao, 9)

        dispatch(cadastrar(tarefaParaAdicionar))
        navigate("/")
    }

    return(
        <MainContainer>
        <Titulo>Nova Tarefa</Titulo>
        <Form onSubmit={cadastrarTarefa}>
            <Campo value={titulo} onChange={evento => setTitulo(evento.target.value)} type="text" placeholder="Título"/>
            <Campo as="textarea" value={descricao} onChange={evento => setDescricao(evento.target.value)} name="" placeholder="Descrição da tarefa" id=""></Campo>
            <Opcoes>
                <p>Prioridade</p>
                {Object.values(enums.Prioridade).map(prioridade => (
                    <Opcao key={prioridade}>
                        <input value={prioridade} name="prioridade" type="radio" onChange={(e) => setPrioridade(e.target.value as enums.Prioridade)} id={prioridade} defaultChecked={prioridade === enums.Prioridade.NORMAL} /> 
                        <label htmlFor={prioridade}>{prioridade}</label>
                    </Opcao>
                    
                ))}
            </Opcoes>
            <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </Form>
    </MainContainer>
    )
}
export default Formulario