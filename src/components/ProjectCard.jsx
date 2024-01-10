import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ProjectCard = ({ id, img, title, url }) => {
  return (
    <div>
      <div className='container-cards'>
        <div
          className='card'
          key={id}
        >
          <LazyLoadImage
            className='card-img'
            src={img}
            alt={title}
            onClick={() => {
              window.open(url, '_blank');
            }}
          />
          <div className='card-content'>
            <center>{title}</center>
            <button
              className='card-btn'
              onClick={() => {
                window.open(url, '_blank');
              }}
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
