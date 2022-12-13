import styled from "styled-components"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Tela2({id1, id2, setId2, setSessao}) {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id1}/showtimes`);

        request.then(resposta => {
            setItems(resposta.data.days);
        })
    }, []);

    return(

        <Container>
            <HeadHorario>
                Selecione o horário
            </HeadHorario>
            {items.map(item => 
                <Horario>
                    <p>{item.weekday} - {item.date}</p>
                     {item.showtimes.map(item => 
                        <Link onClick={() => {setId2(item.id); setSessao(item.id)}} to={`/assentos/${item.id}`}><BotaoHorario>{item.name}</BotaoHorario></Link>
                        )}
                </Horario>)}
        </Container>

    )

}

const Container = styled.div`

    display: block;
    width: 375px;
    margin-bottom: 117px;

`

export const HeadHorario = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

display: flex;
justify-content: center;
align-items: center;
height: 110px;
width: 100%;
font-family: 'Roboto';
color: #293845;
font-weight: 400;
font-size: 24px;
margin-top: 67px;

`

const Horario = styled.div`
    height: 100px;
    margin-left: 43px;
`

const BotaoHorario = styled.button`

    background-color: #e8833a;
    height: 43px;
    width: 83px;
    border-radius: 3px;
    border: 0px;
    margin-right: 9px;
    margin-top: 23px;
    margin-bottom: 23px;
    color: #ffffff;

    &:hover {
        cursor: pointer;
    }

`