
import './App.css';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Dashboard from './componentes/Dashboard';
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


let App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='Registro' element={<Registro />} />
          <Route path='Dashboard' element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
