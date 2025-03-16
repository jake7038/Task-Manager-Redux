import styled from "styled-components";
import {Props} from '.';

type PropsSemLegendaEContador = Omit<Props, 'contador'| 'legenda'>


export const Card = styled.div<PropsSemLegendaEContador>`
    padding: 8px;
    border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#1A1A1A') };
    background-color: ${(props) => (props.ativo? '#fff' : ' #fcfcfc')};
    color: ${(props) => (props.ativo? '#1E90FF' : ' #5E5E5E')};
    border-radius: 8px;
`

export const Contador = styled.span`
    font-size: 24px;
    font-weight: bold;
    display: block;
`

export const label = styled.span`
    font-size: 14px;

`