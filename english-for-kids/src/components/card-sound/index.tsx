import {FC, ReactElement} from 'react';
import './styles.scss';
import playSound from '../../helpers/playSound';
import playIcon from '../../static/icon/play.svg';

interface CardSoundProps {
  title: string;
  soundUrl: string;
}

const CardSound: FC<CardSoundProps> = ({title, soundUrl}): ReactElement => {
  const clickHandler = (): void => {
    playSound(soundUrl)
  }
  
  return (
    <button className="card-sound" onClick={clickHandler}>
      <img className="card-sound--icon" src={playIcon} alt="play"/>
      <span className="card-sound--title">{title}</span>
    </button>
  );
};

export default CardSound;
