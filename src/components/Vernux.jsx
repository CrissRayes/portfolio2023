import { FaGlobe } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import useImageLoader from '../hooks/useImageLoader';
import { SkeletonLoader } from './SkeletonLoader';

export const Vernux = () => {
  const imageUrls = ['/img/vernux-web.png'];
  const imagesLoaded = useImageLoader(imageUrls);
  return (
    <div className='project-detail'>
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
                window.open('https://crissrayes.github.io/vernux', '_blank');
              }}
            />
          )}
          <img
            className='project-img'
            style={{
              display: imagesLoaded[index] ? 'block' : 'none',
            }}
            src={url}
            alt={`Image ${index + 1}`}
            onClick={() => {
              window.open('https://crissrayes.github.io/vernux', '_blank');
            }}
          />
        </div>
      ))}

      <div>
        <h3>About</h3>
        <p>
          Vernux is a custom furniture company located in Chile. This project
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
            to='https://crissrayes.github.io/vernux'
            target='_blank'
            rel='noreferrer'
          >
            https://crissrayes.github.io/vernux
          </NavLink>
        </div>
      </div>
    </div>
  );
};
