import { FaImage } from 'react-icons/fa6';

export const SkeletonLoader = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  marginBottom,
  onClick,
}) => {
  const skeletonStyles = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor || '#f0f0f0',
    borderRadius: `${borderRadius}px` || '8px',
    marginBottom: `${marginBottom}px` || '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div
      className='skeleton-loader'
      style={skeletonStyles}
      onClick={onClick}
    >
      <div>
        <FaImage
          size={40}
          color='#555'
        />
      </div>
    </div>
  );
};
