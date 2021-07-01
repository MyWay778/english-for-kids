import clsx from 'clsx';
import { FC, ReactElement } from 'react';
import RepeatIcon from '../icons/RepeatIcon';
import './game-control.scss';

interface GameControlProps {
  isGameStarted: boolean;
  isHeighlightStart: boolean;
  onStart: () => void;
  onRepeat: () => void;
}

const GameControl: FC<GameControlProps> = ({
  isGameStarted,
  isHeighlightStart,
  onStart,
  onRepeat,
}): ReactElement => {
  const button = isGameStarted ? (
    <button className="game-control__repeat" onClick={onRepeat}>
      <RepeatIcon
        width={60}
        height={60}
        className="game-control__repeat-icon"
        fill="#00d4ff"
      />
    </button>
  ) : (
    <button
      className={clsx(
        'game-control__start',
        isHeighlightStart && 'game-control__start_heighlight'
      )}
      onClick={onStart}
    >
      Start game
    </button>
  );
  return <div className="game-control">{button}</div>;
};

export default GameControl;
