import {FC, ReactElement} from 'react';
import './styles.scss';
import uploadIcon from '../../static/icon/upload.svg';

interface CardSoundInputProps {
  title: string;
}

const CardSoundInput: FC<CardSoundInputProps> = ({title}): ReactElement =>
    <>
      <label className="card-sound-input">
        <img className="card-sound-input--image" src={uploadIcon} alt="upload"/>
        <span className="card-sound-input--title">{title}</span>
        <input className="card-sound-input--input" type="file"/>
      </label>

    </>


export default CardSoundInput;
