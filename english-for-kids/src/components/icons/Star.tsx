import { FC, ReactElement } from 'react';

interface StarProps {
  width: number;
  height: number;
  fill: 'gold' | 'none';
}

const Star: FC<StarProps> = ({ width, height, fill }): ReactElement => (
  <svg
    width={width}
    height={height}
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill={fill === 'none' ? 'transparent' : fill}
    stroke={fill === 'none' ? 'black' : fill}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
);

export default Star;
