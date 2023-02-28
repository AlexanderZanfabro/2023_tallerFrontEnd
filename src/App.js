
import './App.css';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Dashboard from './componentes/Dashboard';
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Agreagado Noob
import NavBar from './commons/Navbar/index';
// fin agregado noob

let App = () => {

  const infoIdDepartamento = info => {
    let infoGenerica = {}
  }


  return (
    <Provider store={store}>
     
      <BrowserRouter>
      <NavBar/>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='Registro' element={<Registro infoIdDepartamento={infoIdDepartamento}/>} />
          <Route path='Dashboard' element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
