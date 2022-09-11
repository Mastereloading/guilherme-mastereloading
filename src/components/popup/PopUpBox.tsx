import { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { PopUpBoxContainer } from './styles'

import colors from '../../styles/colors'

const PopUpBox = () => {
  const [boxUpDown, setBoxUpDown] = useState('boxdown')

  useEffect(() => {
    setBoxUpDown('boxup')
  }, [])

  return (
    <PopUpBoxContainer>
      <div className={boxUpDown}>
        <div className='exitbutton'>
          <FaTimes size={25} style={{ color: colors.black }} onClick={() => setBoxUpDown('boxdown')} />
        </div>
        <div className='text' style={{ right: 0 }}>
          <h1>
            Olá :)
          </h1>
          <p>
            Este site está em desenvolvimento, desculpe o transtorno.
          </p>
          <p className='p2'>
          "Não tem nada a ver com ser possível ou não. Eu faço porque quero." -Monkey D. Luffy
          </p>
        </div>
      </div>
    </PopUpBoxContainer>
  )  
}

export default PopUpBox
