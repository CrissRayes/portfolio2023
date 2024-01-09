import { ProjectCard } from '../components/ProjectCard';
import { games } from '../data/data';

export const GameProjects = () => {
  return (
    <div className='container-cards'>
      {games.map((game) => (
        <ProjectCard
          key={game.id}
          {...game}
        />
      ))}
    </div>
  );
};
