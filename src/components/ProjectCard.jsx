export const ProjectCard = ({ id, img, title, url }) => {
  return (
    <div>
      <div className='container-cards'>
        <div
          className='card'
          key={id}
        >
          <img
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
