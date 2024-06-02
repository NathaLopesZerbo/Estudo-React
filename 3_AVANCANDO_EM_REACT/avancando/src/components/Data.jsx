import {useState} from 'react'
import ListRender from './ListRender';

const Data = () => {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15)
  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={()=>(someData = 15)}>Mudar Varíavel</button>
        </div>
        <div>
          <p>Valor: {anotherNumber}</p>
          <button onClick={() => setAnotherNumber(20)}>Mudar State</button>
        </div>
    </div>
  )
}

export default Data