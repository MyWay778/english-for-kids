import React, { FC, ReactElement, useRef, useState } from 'react';
import clsx from 'clsx';
import './game-card.scss';
import LoopIcon from '../icons/LoopIcon';
import imagePlaceholder from '../../static/images/others/placeholder-image.png';

interface WordCardProps {
  spelling: string;
  translating: string;
  imageSrc: string;
  soundSrc: string;
  isGameMode: boolean;
  disabled: boolean;
  gameClickHandler: GameClickHandlerType;
}

export type GameClickHandlerType = () => void;

const GameCard: FC<WordCardProps> = ({
  spelling,
  translating,
  imageSrc,
  isGameMode,
  disabled,
  gameClickHandler,
}): ReactElement => {
  const [flippedState, setFlippedState] = useState(false);
  const cardContainer = useRef<HTMLDivElement>(null);

  const loopButtonHandler = (e: React.SyntheticEvent): void => {
    e.stopPropagation();
    setFlippedState(true);
    if (cardContainer.current) {
      let isMouseOnCard = true;

      const enterHandler = () => {
        isMouseOnCard = true;
      };

      const leaveHandler = () => {
        isMouseOnCard = false;
        setTimeout(() => {
          if (!isMouseOnCard) {
            cardContainer.current?.removeEventListener(
              'mouseleave',
              leaveHandler
            );
            cardContainer.current?.removeEventListener(
              'mouseenter',
              enterHandler
            );
            setFlippedState(false);
          }
        }, 800);
      };

      cardContainer.current.addEventListener('mouseleave', leaveHandler);
      cardContainer.current.addEventListener('mouseenter', enterHandler);
    }
  };

  return (
    <div className="card-wrapper" ref={cardContainer}>
      <div
        className={clsx('game-card', flippedState && 'game-card_flipped')}
        ref={cardContainer}
      >
        <div
          className={clsx(
            'game-card__action-area',
            disabled && 'game-card__action-area_disabled'
          )}
          onClick={gameClickHandler}
        >
          <div className="game-card__front-wrapper">
            <img
              className={clsx(
                'game-card__img',
                isGameMode && 'game-card__img_full-height'
              )}
              src={imageSrc || imagePlaceholder}
              alt={spelling}
            />
            <div
              className={clsx(
                'game-card__front',
                isGameMode && 'game-card__front_hidden'
              )}
            >
              <h4 className="game-card__title">{spelling}</h4>
              <button
                className="game-card__flip-btn"
                onClick={loopButtonHandler}
              >
                <LoopIcon />
              </button>
            </div>
          </div>
          <div className="game-card__back">{translating}</div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
