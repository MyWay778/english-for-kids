import { FC } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import thumbUpImage from '../../static/images/emoji/thumbs-up.webp';
import gladImage from '../../static/images/emoji/glad.webp';
import sadImage from '../../static/images/emoji/sad.webp';
import './game-result-page.scss';

const GameResultPage: FC = () => {
  const { gameResult } = useTypedSelector((state) => state.game);

  if (!gameResult) {
    return <p>Oops! Something went wrong</p>;
  }

  let mistakesMessage: string;
  let congratulationsMessage = 'Congratulations, you won!';
  let resultImage: string;

  if (gameResult.wrongAnswers > 0) {
    resultImage = gladImage;
    if (gameResult.wrongAnswers === 1) {
      mistakesMessage = 'You made one mistake!';
    } else if (gameResult.wrongAnswers <= 3) {
      mistakesMessage = `You made ${gameResult.wrongAnswers} mistakes!`;
    } else {
      congratulationsMessage = 'Oops!...'
      mistakesMessage = 'You\'ve made too many mistakes.';
      resultImage = sadImage;
    }
  } else {
    mistakesMessage = 'Without mistakes!'
    resultImage = thumbUpImage;
  }

  return (
    <div className="game-result">
        <h2 className="game-result__primary">
          {congratulationsMessage}
        </h2>
        <h4 className="game-result__secondary">
        {mistakesMessage}
        </h4>
        <img className="game-result__image" src={resultImage} alt="win image" />
    </div>
  );
};

export default GameResultPage;
