import { useState, useEffect } from 'react';

const useImageLoader = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(
    Array(imageUrls.length).fill(false)
  );

  useEffect(() => {
    let isMounted = true;

    const loadImage = (index) => {
      const img = new Image();
      img.src = imageUrls[index];

      img.onload = () => {
        if (!isMounted) return; // Avoid memory leak
        setImagesLoaded((prev) => {
          const newImagesLoaded = [...prev];
          newImagesLoaded[index] = true;
          return newImagesLoaded;
        });
      };

      return () => {
        isMounted = false;
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
