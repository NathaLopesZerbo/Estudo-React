import React from 'react'

const Event = () => {

    const handleClick = (e) => {
      console.log(e);
      console.log('Executou');
    };

    const renderSomething = (x) =>{
      if(x){
        return <h1>Renderizando isso!</h1>
      } else{
        return <h1>Renderizando outra coisa</h1>
      }
    };

    return 10>2 && <p>Carregando...</p>

  return (
    <div>
        <div>
            <button onClick={() => console.log('Testando um Evento')}>Clique Aqui</button>
        </div>
        <div>
          <button onClick={handleClick}>Clique aqui - com Função</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Event 