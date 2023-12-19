
import { useState } from 'react'
import Botao from '../Botão'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulário.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [time, setTime] = useState('');
    const [imagem, setImagem] = useState('');
    const [posicao, setPosicao] = useState('');
    const [nomePosicao, setNomePosicao] = useState('');
    const [corPosicao, setCorPosicao] = useState('');


    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.jogadoresCadastrado({
            nome: nome,
            time: time,
            imagem: imagem,
            posicao: posicao
        })

        setNome('')
        setTime('')
        setImagem('')
        setPosicao('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <Campo 
                    type='text'
                    obrigatorio={true} 
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <Campo
                    type='text'
                    obrigatorio={true} 
                    label="Time" 
                    placeholder="Digite o seu time"
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Campo 
                    type='text'
                    label="Imagem" 
                    placeholder="Digite o seu URL da sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    type='text'
                    label="Posições" 
                    posicoes={props.nomeDasPosicoes}
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>

            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.aoCadastrarPosicao({ nome:nomePosicao, cor:corPosicao})
            }}
            >
                <h2>Preencha os dados para criar uma nova posição</h2>
                <Campo 
                    obrigatorio
                    type='text'
                    label="Nome"
                    placeholder="Digite o seu nome da sua posição"
                    valor={nomePosicao}
                    aoAlterado={valor => setNomePosicao(valor)}
                />

                <Campo 
                    obrigatorio
                    type='color'
                    label="Cor" 
                    placeholder="Digite a cor da sua posição"
                    valor={corPosicao}
                    aoAlterado={valor => setCorPosicao(valor)} 
                />

                <Botao>
                    Criar uma nova posição
                </Botao>
            </form>
        </section>
    )
}

export default Formulario