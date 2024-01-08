import { websites } from '../data/data';

export const WebSites = () => {
  return (
    <div className='container-cards'>
      {websites.map((website) => (
        <div
          className='card'
          key={website.id}
          onClick={() => {
            window.open(website.url, '_blank');
          }}
        >
          <div className='card-img-container'>
            <img
              className='card-img'
              src={website.img}
              alt={website.title}
            />
          </div>
          <div className='card-content'>
            <h3>{website.title}</h3>
            {website.technologies.map((technology) => (
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
