import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Tela1 from "./components/Tela1";
import Tela2 from "./components/Tela2";
import Tela3 from "./components/Tela3";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Sucesso from "./components/Sucesso";


function App() {

  const [id1, setId1] = React.useState(0)
  
  const [id2, setId2] = React.useState(0)

  const [id3, setId3] = React.useState(0)

  const [img, setImg] = React.useState("")

  const [nomeFilme, setNomeFilme] = React.useState("")
  const [sessao, setSessao] = React.useState("")

  const [seatsList, setSeatsList] = React.useState([])

  const [nome, setNome] = React.useState("")
  const [cpf, setCpf] = React.useState("")

  return (

    <BrowserRouter>    
    <GlobalStyle/>
    <Header/>
			<Routes>
				<Route path="/" element={<Tela1 setId1 = {setId1} setId3 = {setId3} setImg = {setImg} setNomeFilme = {setNomeFilme} />} />
        <Route path="/sessoes/:idFilme" element={<><Tela2 id1 = {id1} id2 = {id2} setId2 = {setId2} setSessao = {setSessao} /><Footer id3 = {id3} img = {img} nomeFilme = {nomeFilme} /></>}/>
        <Route path="/assentos/:idSessao" element={<><Tela3 seatsList = {seatsList} setSeatsList = {setSeatsList} id2 = {id2} nome = {nome} setNome = {setNome} cpf = {cpf} setCpf = {setCpf} /><Footer2 id3 = {id3} img = {img} nomeFilme = {nomeFilme} sessao = {sessao} /></>}/>
        <Route path="/sucesso" element={<Sucesso nome = {nome} cpf = {cpf} seatsList = {seatsList} setSeatsList = {setSeatsList} sessao = {sessao} />} /> 
			</Routes>
		</BrowserRouter>

  );
}

export default App;
