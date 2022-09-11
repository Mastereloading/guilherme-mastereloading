import { Container } from './styles'

const Contact = () => {
  return (
    <div id='contact'>
      <Container>
        <div className="text">
          <h1>
            Contato
          </h1>
          <p>
            Estou sempre disponível, envie uma mensagem ou email para discutirmos e codarmos juntos.
          </p>
        </div>
        <div className="form">
          <textarea className='aaa' rows={12} style={{ outline: 'none', resize: 'none' }} placeholder='Deixe uma mensagem sobre novos projetos...' />
          <button className="button-light">
            Enviar
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Contact
