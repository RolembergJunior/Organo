import './Rodapé.css'

const Rodape = () => {
    return(<footer className='rodape'>
            <section>
                <div className='lista'>
                    <ul>
                        <li>
                            <a href='https://pt-br.facebook.com/' >
                                <img src='./Imagens/facebook.png' alt='Facebook logo'></img>
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/'>
                                <img src='./Imagens/twitter.png' alt='Twitter logo'></img>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/'>
                                <img src='./Imagens/instagram.png' alt='Instagram logo'></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                    <div className='imagem-logo'>
                        <img className='imagem-logo' src='./Imagens/NBA-logo.png' alt='NBA logo'/>
                    </div>
            </section>

            <section>
                    <p>Desenvolvido por Rolemberg</p>

            </section>
        </footer>
    )
}

export default Rodape