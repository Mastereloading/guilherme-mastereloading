import { useState } from 'react'
import { Container } from './styles'
import { saveMessage } from '../../lib/firebase/firebase'

const Contact = () => {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    saveMessage(message)
    setMessage('')
    alert('(Este balão de mensagem será editado em breve...) - Sua mensagem foi enviada, entrarei em contato :)')

    return '200'
  }

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
          <textarea className='aaa' rows={12} style={{ outline: 'none', resize: 'none' }} placeholder='Deixe seu contato e uma mensagem sobre novos projetos...' value={message} onChange={text => setMessage(text.target.value)} />
          <button className="button-light" onClick={() => sendMessage()}>
            Enviar
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Contact
