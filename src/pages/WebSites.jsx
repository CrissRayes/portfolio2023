import { websites } from '../data/data';

export const WebSites = () => {
  return (
    <div className='container-cards'>
      {websites.map((website) => (
        <div
          className='card'
          key={website.id}
        >
          <img
            className='card-img'
            src={website.img}
            alt={website.title}
          />
          <div className='card-content'>
            <center>{website.title}</center>
            <button
              className='card-btn'
              onClick={() => {
                window.open(website.url, '_blank');
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
