import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Tela1 from "./components/Tela1";
import Tela2 from "./components/Tela2"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";


function App() {

  const [id, setId] = React.useState(0)

  return (

    <BrowserRouter>    
    <GlobalStyle/>
    <Header/>
			<Routes>
				<Route path="/" element={<Tela1 setId = {setId}/>} />
        <Route path="/sessoes/:idFilme" element={<Tela2 id = {id} />}/>
			</Routes>
		</BrowserRouter>

  );
}

export default App;
