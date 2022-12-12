import React from "react";
import styled from "styled-components";
import List from "./List";


export default function Tela1({setId}) {
  return (
    <Container>
      <List setId = {setId}/>
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