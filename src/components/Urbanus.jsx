import { FaGlobe } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import useImageLoader from '../hooks/useImageLoader';
import { SkeletonLoader } from './SkeletonLoader';

export const Urbanus = () => {
  const imageUrls = ['/img/urbanus-web.png'];
  const imagesLoaded = useImageLoader(imageUrls);
  return (
    <div className='project-detail'>
      <div>
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className='image-container'
          >
            {!imagesLoaded[index] && (
              <SkeletonLoader
                width={300}
                height={200}
                borderRadius={5}
                backgroundColor={'#f0f0f0'}
                marginBottom={0}
                onClick={() => {
                  window.open(
                    'https://crissrayes.github.io/webUrbanus',
                    '_blank'
                  );
                }}
              />
            )}
            <img
              className='project-img'
              style={{ display: imagesLoaded[index] ? 'block' : 'none' }}
              src={url}
              alt={`Image ${index + 1}`}
              onClick={() => {
                window.open(
                  'https://crissrayes.github.io/webUrbanus',
                  '_blank'
                );
              }}
            />
          </div>
        ))}
      </div>

      <div>
        <h3>About</h3>
        <p>
          Urbanus is a real estate company located in Chile. This project
          involved the design, development, and deployment of its corporate
          website.
        </p>
        <div>
          <span className='pill'>JavaScript</span>
          <span className='pill'>Html</span>
          <span className='pill'>Css</span>
          <span className='pill'>PHP</span>
        </div>
        <div className='project-icon'>
          <FaGlobe />
          WebSite
          <NavLink
            to='https://crissrayes.github.io/webUrbanus'
            target='_blank'
            rel='noreferrer'
          >
            https://crissrayes.github.io/webUrbanus
          </NavLink>
        </div>
      </div>
    </div>
  );
};
