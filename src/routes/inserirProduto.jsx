import React, {useEffect, useState} from "react";

export default function inserirProduto(){
    document.title = "CADASTRAR";   

    const [listaLocalProdutos, setListaLocalProdutos] = useState([{}]);

    useEffect(()=>{
        fetch("http://localhost:5000/produtos",{
            method:"GET",
            headers:{
                "Content-Type" : "application/json",
            }
        })
        .then((response)=> response.json())
        .then((data)=>{
            setListaLocalProdutos(data);
        }).catch(error => console.log(error));

        const novoId = (listaLocalProdutos[listaLocalProdutos.length - 1].id + 1)
        console.log("NOVO ID" + novoId)

    },[]);

   return(
    <><div>InserirProduto</div><div>
           <form onSubmit={handleSubmit}>
               <fieldset>
                   <legend>Produto Selecionado</legend>
                   <input type="hidden" name="id" value={produto.id} />
                   <div>
                       <label htmlFor="idProd">Nome do Produto</label>
                       <input type="text" name="nome" id="idProd" onChange={handleChange} value={produto.nome} />
                   </div>
                   <div>
                       <label htmlFor="idDesc">Descrição</label>
                       <input type="text" name="desc" id="idDesc" onChange={handleChange} value={produto.desc} />
                   </div>
                   <div>
                       <label htmlFor="idPreco">Preço</label>
                       <input
                           type="text"
                           name="preco"
                           id="idPreco"
                           onChange={handleChange}
                           value={produto.preco} />
                   </div>
                   <div>
                       <button>EDITAR</button>
                   </div>
               </fieldset>
           </form>
       </div></>
   ) 
}