import { useState } from 'react';

const Conteudo = () => {
    const [contador, setContador] = useState(0);
    const [lido, setLido] = useState(0);
    return (
      <div>
        <article>
          <h2>Biblia</h2>
          <p>Jesus é o pão da vida e cuida de tudo debaixo do céu</p>
          <div>
            <p>{lido}{contador}</p>
            <button onClick={() => setLido('Read:')}>
              lido
            </button>
            <button onClick={() => setContador('Like')}>
              Jesus!!!!!!!
            </button>

            <button onClick={() => setContador('Like')}>
            Curti
            </button>

            <button onClick={() => setContador('Deslike')}>
            Não Curti
            </button>
          </div>


        </article>
      </div>
    )
  }


  export default Conteudo;