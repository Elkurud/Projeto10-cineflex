import React from "react";
import styled from "styled-components";
import List from "./List";


export default function Tela1({setId1, setId3, setImg, setNomeFilme}) {
  return (
    <Container>
      <List setId1 = {setId1} setId3 = {setId3} setImg = {setImg} setNomeFilme = {setNomeFilme} />
    </Container>
  );
}

const Container = styled.div`

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
}

`