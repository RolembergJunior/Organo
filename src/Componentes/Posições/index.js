import Colaborador from '../Colaborador'
import './Posições.css'
import hexToRgba from 'hex-rgba'

const Posicoes = (props) => {
    return(
        props.jogadores.length > 0 && <section className='posicoes' style={{backgroundColor: hexToRgba(props.cor, 60)}}>

            <input onChange={evento => props.mudaCor(evento.target.value, props.time.id )} value={props.cor} type='color' className='input_cor' />
            
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(colaborador => {
                return <Colaborador 
                key={colaborador.nome} 
                corDoCard={props.cor} 
                colaborador={colaborador}
                nome={colaborador.nome} 
                time={colaborador.time} 
                imagem={colaborador.imagem} 
                posicao={colaborador.posicao}
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
                />   
            })}
            </div>
        </section>
    )
}

export default Posicoes