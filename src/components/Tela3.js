import styled from "styled-components"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeadHorario } from "./Tela2";

export default function Tela3({setSeatsList, id2, nome, setNome, cpf, setCpf}) {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id2}/seats`);

        request.then(resposta => {
            setItems(resposta.data.seats);
            
        })
    }, []);


    return(
        <Meio>

            <HeadHorario>
                <p>Selecione o(s) assento(s)</p>
            </HeadHorario>

            <Assentos>
                {items.map((f) => <Assento data={f}/>)}
            </Assentos>

            <Organizador>
            <Exemplo><Selected/>Selecionado</Exemplo>
            <Exemplo><Disp/>Disponível</Exemplo>
            <Exemplo><Ndisp/>Indisponível</Exemplo>
            </Organizador>

            <Dados>
            Nome do comprador:
            <Input placeholder="Digite seu nome..." type='text' value={nome} onChange={e => setNome(e.target.value)}></Input>
            CPF do comprador:
            <Input placeholder="Digite seu CPF..." type='text' value={cpf} onChange={e => setCpf(e.target.value)}></Input>
            </Dados>

            <Link onClick={() => setSeatsList(listaAssentos)} to={"/sucesso"}>
                <BotaoReserva>Reservar Assento(s)</BotaoReserva>
            </Link>

        </Meio>
    )

}



function Assento(props) {

    const [seletor, setSeletor] = React.useState(<Disp onClick={() => {select(props, setSeletor);}}>{props.data.name}</Disp>)

    

    if(props.data.isAvailable){
        return (<>{seletor}</>)
    }else{
        return (<Ndisp>{props.data.name}</Ndisp>)
    }

}

let listaAssentos = []

function select(props, setSeletor) {

    if(listaAssentos.includes(props.data.name)){

        let index = listaAssentos.indexOf(props.data.name);
        listaAssentos.splice(index, 1);
        listaAssentos.sort(function(a, b){return a - b});
        setSeletor(<Disp onClick={() => {select(props, setSeletor);}}>{props.data.name}</Disp>)
        return(listaAssentos)
        
    }else{

        listaAssentos.push(props.data.name);
        listaAssentos.sort(function(a, b){return a - b});
        setSeletor(<Selected onClick={() => {select(props, setSeletor);}}>{props.data.name}</Selected>)
        return(listaAssentos)

    }

}

const Meio = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

`

const BotaoReserva = styled.button`

    margin-top: 57px;
    margin-bottom: 140px;
    width: 225px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e8833a;
    border-radius: 3px;
    color: #ffffff;
    border: 0px solid;

`

const Input = styled.input`

    width: 327px;
    height: 51px;
    border-radius: 3px;
    border: 1px solid #d5d5d5;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 18px;
    margin-top: 3px;
    margin-bottom: 7px;

    &::placeholder {
        color: #afafaf;
        font-style: italic;
    }

`

const Dados = styled.div`

    margin-top: 41px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #293845;

`

const Organizador = styled.div`

    display: flex;
    margin-top: 42px;
    justify-content: center;


`

const Exemplo = styled.div`

    width: 91px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    color: #4E5A65;
;

`

const Selected = styled.button`
    height: 26px;
    width: 26px;
    background-color: #1aae9e;
    box-sizing: border-box;
    border: 1px solid #0e7d71;
    border-radius: 12px;
    font-size: 11px;
    color: #000000;
    &:hover {
        cursor: pointer;
    }
`

const Assentos = styled.div`

    height: 203px;
    width: 327px;
    display: flex;
    flex-wrap: wrap;
    gap: 18px 7px;

`

const Disp = styled.button`

    
    height: 26px;
    width: 26px;
    background-color: #c3cfd9;
    box-sizing: border-box;
    border: 1px solid #808f9d;
    border-radius: 12px;
    font-size: 11px;
    color: #000000;
    &:hover {
        cursor: pointer;
    }

`

const Ndisp = styled.button`

    height: 26px;
    width: 26px;
    background-color: #fbe192;
    box-sizing: border-box;
    border: 1px solid #f7c52b;
    border-radius: 12px;
    font-size: 11px;
    color: #000000;

`