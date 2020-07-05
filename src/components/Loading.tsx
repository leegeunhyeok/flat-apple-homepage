import React, { useState, useEffect, useRef } from 'react';

import logo from '../assets/logo.svg';
import './Loading.scss';

export interface LoadingProps {
  onload: Function;
}

const IMAGES = [
  '',
  '/test.png',
  '/test.png',
  '/test.png',
  '/test.png',
  '/test.png',
  '/test.png',
  '/test.png',
  '/test.png',
];

const Loading: React.FunctionComponent<LoadingProps> = ({ onload }) => {
  const ref = useRef(0);
  const [loaded, setLoadedCount] = useState(ref.current);

  const increse = () => {
    setLoadedCount(++ref.current);
  };

  // Image preload (Once)
  useEffect(() => {
    ((images: string[]) => {
      return Promise.all(
        images.map((image) => {
          return new Promise((resolve) => {
            const done = () => {
              increse();
              resolve();
            };

            setTimeout(done, Math.random() * 3000 + 1000);
            // const img = new Image();
            // img.src = image;
            // img.onload = done;
            // img.onerror = done;
          });
        })
      ).then(() => {
        setTimeout(onload, 500);
      });
    })(IMAGES);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Loading">
      <div className="Loading-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Loading-bar">
        <div
          className="Loading-bar__guage"
          style={{
            width: `${(loaded / IMAGES.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
