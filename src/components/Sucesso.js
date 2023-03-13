import styled from "styled-components"
import axios from "axios"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sucesso({nome, cpf, seatsList, setSeatsList, sessao, seatsId, setRefresh}){

    const [filme, setFilme] = React.useState("")
    const [data, setData] = useState("")

    useEffect(() => {

        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessao}/seats`);

        request.then((resposta) => {
            setFilme(resposta.data.movie.title)
            setData(`${resposta.data.day.weekday} ${resposta.data.day.date}`)
        })
});

    return(
        <>
            <Anuncio>Pedido feito<br/>com sucesso!</Anuncio>
            <Infos>
                <h1>Filme e sessão</h1><br/>
                <h2>{filme}</h2>
                <h2>{data}</h2>
            </Infos>
            <Infos>
                <h1>Ingressos</h1><br/>
                {seatsList.map(lista => <h2>Assento {lista}</h2>)}
            </Infos>
            <Infos>
                <h1>Comprador</h1><br/>
                <h2>Nome: {nome}</h2>
                <h2>CPF: {cpf}</h2>
            </Infos>
            <Link to={`/`} data-test="go-home-btn" onClick={() => setRefresh(1)}>
                <Home>Voltar pra Home</Home>
            </Link>
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

const Infos = styled.div`

    margin-bottom: 50px;
    margin-left: 29px;

    h1 {
        letter-spacing: 0.04em;
        line-height: 26px;
        font-weight: 700;
        font-size: 24px;
        color: #293845;
    }

    h2 {
        font-weight: 400;
        font-size: 22px;
        letter-spacing: 0.04em;
        line-height: 26px;
        margin-bottom: 5px;
    }

`

const Home = styled.button`

    width: 225px;
    height: 42px;
    background-color: #e8833a;
    border: 0px;
    border-radius: 3px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    margin-left: 75px;

`