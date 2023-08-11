import Square from "./Square";

import '../assets/styles/Modal.css'

// eslint-disable-next-line react/prop-types
function Modal({ winner, resetGame }) {
  return (
    <section className="modal">
      <div className="modal-container">
        <h2>{winner === false ? 'Empate' : 'Ganador'}</h2>
        {
          winner !== false && (
            <header>
              <Square>{winner}</Square>
            </header>
          )
        }
        <footer>
          <button onClick={resetGame}>Volver a empezar</button>
        </footer>
      </div>
    </section>
  )
}
export default Modal;