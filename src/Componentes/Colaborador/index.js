import './Colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborador = (props) => {
    
    function favoritar () {
        props.aoFavoritar(props.colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    
    
    return (
        <div className='colaborador'>
            <AiFillCloseCircle className='deletar' size={25} onClick={() => props.aoDeletar(props.colaborador.id)}/>
            <div className='cabecalho' style={{ backgroundColor: props.corDoCard}}>
                <img src={props.imagem} alt={props.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.time}</h5>
                <div className='favoritar'>
                    {props.colaborador.favorito
                        ? <AiFillHeart {...propsFavorito} color='#FF0000'/>
                        : <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}   

export default Colaborador