import { FaGlobe } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import useImageLoader from '../hooks/useImageLoader';
import { SkeletonLoader } from './SkeletonLoader';

export const Synaptech = () => {
  const imageUrls = ['/img/synaptech-web.png'];
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
                  window.open('https://www.synaptech.cl', '_blank');
                }}
              />
            )}
            <img
              className='project-img'
              style={{ display: imagesLoaded[index] ? 'block' : 'none' }}
              src={url}
              alt={`Image ${index + 1}`}
              onClick={() => {
                window.open('https://www.synaptech.cl', '_blank');
              }}
            />
          </div>
        ))}
      </div>

      <div>
        <h3>About</h3>
        <p>
          Synaptech is a software and web development company located in Chile.
          This project involved design, development, and deployment of its
          corporate website, and included the integration of a contact form
          using AWS SES as well as the integration of a payment gateway.
        </p>
        <div>
          <span className='pill'>React JS</span>
          <span className='pill'>JavaScript</span>
          <span className='pill'>Tailwind CSS</span>
          <span className='pill'>AWS Amplify</span>
          <span className='pill'>AWS SES</span>
          <span className='pill'>AWS API Gateway</span>
          <span className='pill'>AWS Lambda</span>
        </div>
        <div className='project-icon'>
          <FaGlobe />
          WebSite
          <NavLink
            to='https://www.synaptech.cl'
            target='_blank'
            rel='noreferrer'
          >
            https://www.synaptech.cl
          </NavLink>
        </div>
      </div>
    </div>
  );
};
