import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function List({setId}) {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        request.then(resposta => {
            setItems(resposta.data);
        })
    }, []);

    return (
        <ListaFilmes>
            <HeadFIlme>
                Selecione o Filme
            </HeadFIlme>
            {items.map(item => 
                <Filme>
                    <Link onClick={setId(item.id)} to={`/sessoes/${item.id}`}>
                        <img src={item.posterURL}/>
                    </Link>
                </Filme>)}
        </ListaFilmes>
    );

}

const HeadFIlme = styled.div`

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

const ListaFilmes = styled.ul`

    width: 375px;
    gap: 11px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`

const Filme = styled.li`

    width: 145px;
    height: 209px;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px 2px
        rgba(0 ,0 ,0 ,0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 129px;
        height: 193px;
    }

`