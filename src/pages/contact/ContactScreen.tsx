import { useState } from 'react'
import { Container } from './styles'
import { saveMessage } from '../../lib/firebase/firebase'
import Page from '../../components/page/Page'

const Contact = () => {
  const [message, setMessage] = useState('')
  const [contactEmail, setContactEmail] = useState('')

  const sendMessage = () => {
    saveMessage(contactEmail, message)
    setMessage('')
    alert('(Este balão de mensagem será editado em breve...) - Sua mensagem foi enviada, entrarei em contato :)')

    return '200'
  }

  return (
    <div id='contact'>
      <Page background='black' style={{paddingRight: '0px'}}>
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
            <textarea id='email' rows={1} style={{ resize: 'none' }} placeholder='Email para contato...' value={contactEmail} onChange={text => setContactEmail(text.target.value)} />
            <textarea rows={12} style={{ outline: 'none', resize: 'none' }} placeholder='Mensagem sobre novos projetos...' value={message} onChange={text => setMessage(text.target.value)} />
            <button className="button-light" onClick={() => sendMessage()}>
              Enviar
            </button>
          </div>
        </Container>
      </Page>
    </div>
  )
}

export default Contact
