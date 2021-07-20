import { FC, ReactElement } from 'react';
import './styles.scss';

interface IconButtonProps {
  title: string;
  iconUrl: string;
  onClick?: () => void;
  color?: 'tomato' | 'green';
  fontWeight?: 600;
}

const IconButton: FC<IconButtonProps> = ({
  title,
  iconUrl,
  color = 'black',
  fontWeight = 400,
  onClick,
}): ReactElement => (
  <button className="icon-button" onClick={onClick}>
    <img className="icon-button--icon" src={iconUrl} alt={title} />
    <span className="icon-button--title" style={{ color, fontWeight }}>
      {title}
    </span>
  </button>
);

export default IconButton;
