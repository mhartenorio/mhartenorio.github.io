import React, { useState } from 'react';
import './ImageViewer.css';

interface ImageViewerProps {
  src: string;
  alt?: string;
  filename: string;
  dimensions?: { width: number; height: number };
}

export const ImageViewer: React.FC<ImageViewerProps> = ({
  src,
  alt = 'Preview',
  filename,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="image-viewer-container" role="region" aria-label={`Image preview: ${filename}`}>
      <div className="image-preview-wrapper">
        <img
          src={src}
          alt={alt}
          className={`image-preview ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};
