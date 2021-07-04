const calcPercentOfCorrectAnswers = (correct: number, incorrect: number): string => {
  const ratio = (correct + incorrect) / correct;
  return String(Math.round(100 / ratio));
}

export default calcPercentOfCorrectAnswers;