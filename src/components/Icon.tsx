import React from 'react';
import './Icon.scss';

export interface IconProps {
  icon: string;
  size: string;
  scale?: number;
}

const SIZE: { [key: string]: number } = {
  small: 20,
  medium: 28,
  large: 36,
};

const Icon: React.FunctionComponent<IconProps> = ({
  icon,
  size,
  scale = 1,
}) => {
  const px = SIZE[size] * scale;

  return (
    <span
      className={`Icon--${size}`}
      style={{
        backgroundImage: `url(${icon})`,
        ...(size
          ? {
              backgroundSize: `${px}px`,
              width: `${px}px`,
              height: `${px}px`,
            }
          : null),
      }}
    />
  );
};

export default Icon;
