import styled from "styled-components"

export default function Header() {

    return (

        <Cabecalho>
            CINEFLEX
        </Cabecalho>

    )

}

const Cabecalho = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

background-color: #c3cfd9;

font-family: 'Roboto';
font-size: 34px;
color: #e8833a;
width: 100%;
height: 67px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;

`