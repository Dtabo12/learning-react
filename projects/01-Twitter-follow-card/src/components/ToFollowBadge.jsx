import { useState } from 'react';
import '../assets/styles/ToFollowBadge.css';
import VerifiedSVG from "../assets/svg/verified.svg";

// eslint-disable-next-line react/prop-types
function ToFollowBadge({ userName, name, isVerified, inicialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(inicialIsFollowing);

  const btnText = isFollowing ? 'Siguiendo' : 'Seguir';
  const showVerifiedBagde = isVerified ? 'block' : 'none';
  const buttonClassName = isFollowing
    ? 'badge-info-btn following'
    : 'badge-info-btn';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <div className='badge-container'>
      <article className='badge-image'>
        <img src={`https://unavatar.io/twitter/${userName}`} alt={`Avatar de ${userName}`} />
      </article>
      <aside className='badge-info'>
        <div className="user-info">
          <span className='user-info-account'>
            <strong>{name}</strong>
            <img style={{ 'display': showVerifiedBagde }} src={VerifiedSVG} alt="Cuenta Verificada" />

          </span>
          <span className='user-info-nickname'>@{userName}</span>
        </div>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='badge-info-btn-text'>{btnText}</span>
          <span className='badge-info-btn-stop'>Dejar de seguir</span>
        </button>
      </aside>
    </div>
  )
}
export default ToFollowBadge;