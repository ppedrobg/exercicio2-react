import Cabecalho from './components/cabecalho/cabecalho'
import Rodape from './components/rodape/rodape'
import Secao from './components/secao/secao'



export default function App() {


  // ÁREA DECLARATIVA


  return (
    <>
      { /*ÁREA IMPERATIVA*/}

      <div>
        { /*ÁREA IMPERATIVA*/}

        { /* Um cabeçalho com header, um h1, uma lista ul com 3 itens com links*/}
        <Cabecalho/>
        { /* Uma seção com div com 3 parágrafos, com 3 linhas de lorem,
        uma imagem*/}
       <Secao/>

        { /* Um rodapé com uma div, uma lista ul com 3 itens e 
        links para rede sociais*/}
        <Rodape/>
          
      </div>
    </>
  )
}
