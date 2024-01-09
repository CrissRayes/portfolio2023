import { games } from '../data/data';

export const GameProjects = () => {
  return (
    <div className='container-cards'>
      {games.map((game) => (
        <div
          className='card'
          key={game.id}
        >
          <img
            className='card-img'
            src={game.img}
            alt={game.title}
          />
          <div className='card-content'>
            <center>{game.title}</center>
            <button
              className='card-btn'
              onClick={() => {
                window.open(game.url, '_blank');
              }}
            >
              View Project
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
