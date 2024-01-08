import { games } from '../data/data';

export const GameProjects = () => {
  return (
    <div className='container-cards'>
      {games.map((game) => (
        <div
          className='card'
          key={game.id}
          onClick={() => {
            window.open(game.url, '_blank');
          }}
        >
          <div className='card-img-container'>
            <img
              className='card-img'
              src={game.img}
              alt={game.title}
            />
          </div>
          <div className='card-content'>
            <h3>{game.title}</h3>
            {game.technologies.map((technology) => (
              <span
                className='pill'
                key={technology}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
