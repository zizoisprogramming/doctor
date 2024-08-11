import React, { useState, useEffect } from 'react';
import smile from '../images/smile-vector.png'

const ImageDrawer = () => {
  const [canvas, setCanvas] = useState(null);
  const [context, setContext] = useState(null);
  const [drawn, setDrawn] = useState(false);
  const [image] = useState(() => {
    const img = new Image();
    img.src = smile; // replace with your image URL
    return img;
  });

  useEffect(() => {
    const canvasElement = document.getElementById('canvas');
    setCanvas(canvasElement);
    setContext(canvasElement.getContext('2d'));
  }, []);

  useEffect(() => {
    if (canvas && context && image) {
      const drawImage = () => {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imageWidth = image.width;
        const imageHeight = image.height;

        context.clearRect(0, 0, canvasWidth, canvasHeight);

        let drawnWidth = 0;
        const intervalId = setInterval(() => {
          context.drawImage(image, 0, 0, drawnWidth, imageHeight, 0, 0, drawnWidth, canvasHeight);
          drawnWidth++;

          if (drawnWidth >= imageWidth) {
            clearInterval(intervalId);
            setDrawn(true);
          }
        }, 10); // Adjust the interval to control the drawing speed
      };

      image.onload = drawImage;

      return () => {
        clearInterval(drawImage);
      };
    }
  }, [canvas, context, image]);

  return (
    <div>
      <canvas id="canvas" width="500" height="200" />
    </div>
  );
}

export default ImageDrawer;
