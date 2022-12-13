import styled from "styled-components"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeadHorario } from "./Tela2";

export default function Tela3({id2}) {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id2}/seats`);

        request.then(resposta => {
            setItems(resposta.data.seats);
        })
    }, []);


    return(
        <>
            <HeadHorario>
                <p>Selecione o(s) assento(s)</p>
            </HeadHorario>
            <Assentos>
                {items.map((f) => <Assento data={f}/>)}
            </Assentos>
        </>
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
        return(setSeletor(<Disp onClick={() => {select(props, setSeletor);}}>{props.data.name}</Disp>))
        
    }else{

        listaAssentos.push(props.data.name);
        listaAssentos.sort(function(a, b){return a - b});
        return(setSeletor(<Selected onClick={() => {select(props, setSeletor);}}>{props.data.name}</Selected>))

    }

}

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