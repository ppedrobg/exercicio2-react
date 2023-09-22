import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

//BLOCO DE ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import Erro from './routes/Error.jsx';
import EditarProdutos from './routes/EditarProduto.jsx';
import ExcluirProdutos from './routes/ExcluirProdutos.jsx';
import inserirProduto from './routes/inserirProduto.jsx'

const router = createBrowserRouter(
  [
    {path : "/", element : <App/>, errorElement : <Erro/>,
    
    children:[
      {path : "/" , element : <Home/>},
      {path : "/produtos" , element : <Produtos/>},
      {path : "/editar/produtos/:id" , element : <EditarProdutos/>},
      {path : "/excluir/produtos/:id" , element : <ExcluirProdutos/>},
      { path: '/inserir', component:<inserirProduto /> },
    ]}
  ]
);

//BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)