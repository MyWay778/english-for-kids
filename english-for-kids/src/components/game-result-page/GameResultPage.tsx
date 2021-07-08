import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import thumbUpImage from '../../static/images/emoji/thumbs-up.webp';
import gladImage from '../../static/images/emoji/glad.webp';
import sadImage from '../../static/images/emoji/sad.webp';
import './game-result-page.scss';
import playSound from '../../helpers/playSound';
import successSound from '../../static/sounds/success.wav';
import failSound from '../../static/sounds/fail.wav';


const GameResultPage: FC = () => {
  const { gameResult } = useTypedSelector((state) => state.game);
  const history = useHistory();

  if (!gameResult) {
    return <p>Oops! Something went wrong</p>;
  }

  let mistakesMessage: string;
  let congratulationsMessage = 'Congratulations, you won!';
  let resultImage: string;
  let sound = successSound;

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
      sound = failSound;
    }
  } else {
    mistakesMessage = 'Without mistakes!'
    resultImage = thumbUpImage;
  }

  const bodyClickHandler = (): void => {
    history.push('/');
  }

  useEffect(() => {
    playSound(sound);
  }, []);

  return (
    <div className="game-result" onClick={bodyClickHandler}>
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
