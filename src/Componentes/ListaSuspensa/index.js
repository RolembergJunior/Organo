import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    return(
        <div className='lista_suspensa'>
            <label>{props.label}</label>

            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
            <option value=""></option>
                    {props.posicoes.map(posicao => <option key={posicao}>{posicao}</option>)}
            </select>
        </div>
    )
}


export default ListaSuspensa