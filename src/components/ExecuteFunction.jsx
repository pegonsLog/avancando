import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <h3>
            <button onClick={myFunction}>Clique aqui para executar a função</button>
        </h3>
    </div>
  )
}

export default ExecuteFunction