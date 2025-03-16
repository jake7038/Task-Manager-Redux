import FiltroCard from "../../components/FiltroCard"
import * as S from './styles'

const BarraLateral = () => (
    <S.Aside>
        <div>
            <S.Campo type="text" placeholder="Buscar" />
            <S.Filtros>
                <FiltroCard contador={1} legenda="Pendentes"/>
                <FiltroCard contador={2} legenda="Concluídas"/>
                <FiltroCard contador={3} legenda="Urgentes"/>
                <FiltroCard contador={4} legenda="Importantes"/>
                <FiltroCard contador={5} legenda="Normal"/>
                <FiltroCard contador={6} legenda="Todas" />
            </S.Filtros>
        </div>
    </S.Aside>
)

export default BarraLateral