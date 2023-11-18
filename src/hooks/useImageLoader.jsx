import { useState, useEffect } from 'react';

const useImageLoader = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(
    Array(imageUrls.length).fill(false)
  );

  useEffect(() => {
    const loadImage = (index) => {
      const img = new Image();
      img.src = imageUrls[index];

      img.onload = () => {
        setImagesLoaded((prev) => {
          const newImagesLoaded = [...prev];
          newImagesLoaded[index] = true;
          return newImagesLoaded;
        });
      };

      return () => {
        img.onload = null;
      };
    };

    imageUrls.forEach((url, index) => {
      loadImage(index);
    });
  }, [imageUrls]);

  return imagesLoaded;
};

export default useImageLoader;
