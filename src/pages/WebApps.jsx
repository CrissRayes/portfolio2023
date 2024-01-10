import { ProjectCard } from '../components/ProjectCard';
import { webapps } from '../data/data';

export const WebApps = () => {
  return (
    <div className='container-cards'>
      {webapps.map((webapp) => (
        <ProjectCard
          key={webapp.id}
          {...webapp}
        />
      ))}
    </div>
  );
};
