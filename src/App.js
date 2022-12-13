import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Tela1 from "./components/Tela1";
import Tela2 from "./components/Tela2";
import Tela3 from "./components/Tela3";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";


function App() {

  const [id1, setId1] = React.useState(0)
  
  const [id2, setId2] = React.useState(0)

  const [img, setImg] = React.useState("")

  return (

    <BrowserRouter>    
    <GlobalStyle/>
    <Header/>
			<Routes>
				<Route path="/" element={<Tela1 setId1 = {setId1} setImg = {setImg} />} />
        <Route path="/sessoes/:idFilme" element={<><Tela2 id1 = {id1} id2 = {id2} setId2 = {setId2} /><Footer img = {img} /></>}/>
        <Route path="/assentos/:idSessao" element={<><Tela3 id2 = {id2} /><Footer img = {img} /></>}/>
			</Routes>
		</BrowserRouter>

  );
}

export default App;
