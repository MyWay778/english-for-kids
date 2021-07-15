import React, {FC, ReactElement} from 'react';
import './styles.scss';
import uploadIcon from '../../static/icon/upload.svg';

interface CardSoundInputProps {
  title: string;
  onChange?: (e: React.SyntheticEvent) => void;
}

const CardSoundInput: FC<CardSoundInputProps> = ({title, onChange}): ReactElement =>
    <>
      <label className="card-sound-input">
        <img className="card-sound-input--image" src={uploadIcon} alt="upload"/>
        <span className="card-sound-input--title">{title}</span>
        <input className="card-sound-input--input" onChange={onChange} type="file" accept='audio/*'/>
      </label>

    </>


export default CardSoundInput;
