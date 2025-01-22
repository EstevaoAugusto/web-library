import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router";
import TelaCadastro from './views/TelaCadastro.jsx';
import TelaLogin from './views/TelaLogin.jsx';
import TelaPerfilLeitor from './views/TelaPerfilLeitor.jsx';
import TelaRecuperarConta from './views/TelaRecuperarConta.jsx';
import TelaAdministrador from './views/TelaAdministrador.jsx';
import TelaAcervo from './views/TelaAcervo.jsx';
import TelaPerfilAdmin from './views/TelaPerfilAdmin.jsx';

function App() {
  const [count, setCount] = useState(0)

  /*
  useEffect(() => {
    const fetchAPI = async () => {
      try{
        const response = await fetch("http://localhost:8080/api")
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json(); 
        console.log(data); 
      } catch (error) {
        console.error(error)
      }
    }

    fetchAPI()
  }, [])
  */

  return (
    <Routes>
      <Route path="/" element={<TelaCadastro />}/>
      <Route path="/TelaAdministrador" element={<TelaAdministrador />}/>
      <Route path="/TelaAcervo" element={<TelaAcervo />}/>
      <Route path="/TelaLogin" element={<TelaLogin />}/>
      <Route path="/TelaPerfilLeitor" element={<TelaPerfilLeitor />}/>
      <Route path="/TelaRecuperarConta" element={<TelaRecuperarConta />}/>
      <Route path="/TelaPerfilAdmin" element={<TelaPerfilAdmin />}/>
    </Routes>
  )
}

export default App
