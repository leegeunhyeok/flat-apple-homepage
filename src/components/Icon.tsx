import React from 'react';
import './Icon.scss';

export interface IconProps {
  icon: string;
  size: string;
  scale?: number;
}

const SIZE: { [key: string]: number } = {
  small: 24,
  medium: 36,
  large: 48,
  extra: 60,
};

const Icon: React.FunctionComponent<IconProps> = ({
  icon,
  size,
  scale = 1,
}) => {
  const px = SIZE[size] * scale;

  return (
    <span
      className="Icon"
      style={{
        backgroundImage: `url(${icon})`,
        ...(size
          ? {
              backgroundSize: `${px}px`,
            }
          : null),
      }}
    />
  );
};

export default Icon;
