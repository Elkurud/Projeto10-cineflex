import styled from "styled-components";

export default function Footer({img}) {

    return (

        <Container>
            <Container2>
                <img src={img}/>
            </Container2>
        </Container>

    )

}


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

    & img {
        height: 72px;
        width: 48px;
    }

`