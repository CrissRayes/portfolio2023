import { ProjectCard } from '../components/ProjectCard';
import { websites } from '../data/data';

export const WebSites = () => {
  return (
    <div className='container-cards'>
      {websites.map((website) => (
        <ProjectCard
          key={website.id}
          {...website}
        />
      ))}
    </div>
  );
};
