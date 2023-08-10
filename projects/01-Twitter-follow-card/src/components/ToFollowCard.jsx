import ToFollowBadge from './ToFollowBadge';
import '../assets/styles/ToFollowCard.css';

const mockUsers = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isVerified: true,
    inicialIsFollowing: true
  },
  {
    userName: 'goncy',
    name: 'goncy.tsx',
    isVerified: false,
    inicialIsFollowing: false
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isVerified: true,
    inicialIsFollowing: false
  }
]

function ToFollowCard() {

  return (
    <section>
      <aside className='to-follow-container'>
        <header>
          <h2>A quién seguir</h2>
        </header>
        {
          mockUsers.map(({ userName, name, isVerified, inicialIsFollowing }, index) => (
            <ToFollowBadge
              key={index}
              userName={userName}
              name={name}
              isVerified={isVerified}
              inicialIsFollowing={inicialIsFollowing}
            />
          ))
        }
        <footer>
          Mostrar más
        </footer>
      </aside>
    </section>
  )
}

export default ToFollowCard
