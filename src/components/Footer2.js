import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Footer2({id3, img, nomeFilme, sessao}) {

    const [items, setItems] = useState([]);
    let variavel

    useEffect(() => {

        
            const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessao}/seats`);

            request.then(resposta => {
                setItems(resposta.data);
            })
    }, []);

    

    if(items.day.weekday == undefined){
        variavel = "erro"}

    return (

        <Container>
            <Container2>
                <img src={img}/>
            </Container2>
            <Textos>
                {nomeFilme}<br/>
                {variavel}
            </Textos>
        </Container>

    )

}


const Textos = styled.div`

    margin-left: 13px;
    font-size: 26px;
    font-weight: 400;
    color: #293845;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const Container = styled.div`

    height: 117px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #dfe6ed;
    border: 1px solid #9eadba;

`

const Container2 = styled.div`

    height: 89px;
    width: 64px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 72px;
        width: 48px;
    }
`