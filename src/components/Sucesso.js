import styled from "styled-components"

export default function Sucesso(){

    return(
        <>
            <Anuncio>Pedido feito<br/>com sucesso!</Anuncio>
        </>
    )

}

const Anuncio = styled.div`

    width: 374px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 28px;
    margin-top: 67px;
    font-weight: 700;
    color: #247a6b;
    font-size: 24px;

`