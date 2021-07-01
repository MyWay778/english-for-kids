/* eslint-disable no-lone-blocks */
import React, { FC, ReactElement, useRef, useState } from 'react';
import clsx from 'clsx';
import './game-card.scss';
import LoopIcon from '../icons/LoopIcon';

interface WordCardProps {
  id: number;
  title: string;
  translatedTitle: string;
  imageSrc: string;
  soundSrc: string;
  isGameMode: boolean;
  disabled: boolean;
  gameClickHandler: GameClickHandlerType;
}

export type GameClickHandlerType = (cardId: number) => void;

const GameCard: FC<WordCardProps> = ({
  id,
  title,
  translatedTitle,
  imageSrc,
  soundSrc,
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

  const clickOnFrontInGameModeHandler = () => {
    gameClickHandler(id);
  };

  const clickOnFrontHandler = () => {
    if (soundSrc) {
      const audio = new Audio(soundSrc);
      audio.volume = 0.2;
      audio.play();
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
          onClick={
            isGameMode ? clickOnFrontInGameModeHandler : clickOnFrontHandler
          }
        >
          <div className="game-card__front-wrapper">
            <img
              className={clsx(
                'game-card__img',
                isGameMode && 'game-card__img_full-height'
              )}
              src={imageSrc}
              alt={title}
            />
            <div
              className={clsx(
                'game-card__front',
                isGameMode && 'game-card__front_hidden'
              )}
            >
              <h4 className="game-card__title">{title}</h4>
              <button
                className="game-card__flip-btn"
                onClick={loopButtonHandler}
              >
                <LoopIcon />
              </button>
            </div>
          </div>
          <div className="game-card__back">{translatedTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
