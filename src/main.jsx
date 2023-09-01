import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Produto from './routes/Produto.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import Error from './routes/Error.jsx';
import ExcluirProdutos from './routes/ExcluirProdutos.jsx';

const router = createBrowserRouter([
  {path: "/" , element: <App/>, errorElement: <Error/>,
    children:[
      {path: "/" , element: <Home/>},
      {path: "/produto" , element: <Produto/>},
      {path: "/editar/produto/:id" , element: <EditarProduto/>},
      {path: "/excluir/produtos/:id" , element: <ExcluirProdutos/>},
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

