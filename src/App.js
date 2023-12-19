import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulário';
import Posicoes from './Componentes/Posições';
import Rodape from './Componentes/Rodapé';
import { v4 as uuidv4 } from 'uuid';





function App() {

  const[jogadores, setJogadores] = useState([])

  const novoJogadorCadastrado = (jogador) =>{
    setJogadores([...jogadores, jogador])
  }


  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome:'Point Guard',
      cor:'#A6D157',
    },

    {
      id: uuidv4(),
      nome:'Shooting Guard',
      cor:'#E06B69',
    },

    {
      id: uuidv4(),
      nome:'Small Forward',
      cor: '#57C278',
    },

    {
      id: uuidv4(),
      nome:'Power Forward',
      cor: '#DB6EBF',
    },

    {
      id: uuidv4(),
      nome:'Center',
      cor: '#FFBA05',
    },

  ])


  function mudaDeCorTime (cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        console.log(time.id)
          time.cor = cor;
      }
      return time
    }))
  }


  function deletarJogador (id) {
    setJogadores(jogadores.filter(jogador => jogador.id !== id))
  }


  function cadastrarPosicao (novaPosicao) {
    setTimes([...times, {...novaPosicao, id:uuidv4() }])
  }

  function aoFavoritar (id) {
    setJogadores(jogadores.map(jogador => {
      if(jogador.id === id) jogador.favorito = !jogador.favorito

      return jogador
    }))
  }


  return (
    <div className="App">
      <Banner></Banner>

      <Formulario nomeDasPosicoes={times.map(time => time.nome)} 
      jogadoresCadastrado={jogador => novoJogadorCadastrado(jogador)}
      aoCadastrarPosicao={cadastrarPosicao}
      />

      {times.map(time =>  
      <Posicoes nome={time.nome} 
      mudaCor={mudaDeCorTime}
      cor={time.cor} 
      jogadores={jogadores.filter(jogador => jogador.posicao === time.nome)}
      aoDeletar={deletarJogador}
      time={time}
      aoFavoritar={aoFavoritar}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
