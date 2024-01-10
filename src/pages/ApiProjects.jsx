import { ProjectCard } from '../components/ProjectCard';
import { apis } from '../data/data';

export const ApiProjects = () => {
  return (
    <div className='container-cards'>
      {apis.map((api) => (
        <ProjectCard
          key={api.id}
          {...api}
        />
      ))}
    </div>
  );
};
