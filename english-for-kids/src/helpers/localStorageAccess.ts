import {StoredWordsStatType, WordStatType} from '../types/words-statistics';
import calcPercentOfCorrectAnswers from './calcPercentOfCorrectAnswers';

export const updateStatistic = (wordList: WordStatType[], existedStat: StoredWordsStatType): WordStatType[] => wordList.map(w => {
  const word = {...w};
  const wordFromExistedStat = existedStat[word.id];

  if (wordFromExistedStat) {
    word.clicksInTrain = wordFromExistedStat.clicksInTrain || 0;
    word.guessed = wordFromExistedStat.guessed || 0;
    word.missed = wordFromExistedStat.missed || 0;
    word.correctAnswersPercent = Number(calcPercentOfCorrectAnswers(wordFromExistedStat.guessed, word.missed)) || 0;
  }

  return word;
});

const mergeStatistic = (existedStats: StoredWordsStatType, newStats: StoredWordsStatType): StoredWordsStatType => {
  const keysNewStats = Object.keys(newStats);
  const updatedStats = {...existedStats};

  keysNewStats.forEach(key => {
    if (existedStats[key]) {
      updatedStats[key].clicksInTrain += newStats[key].clicksInTrain;
      updatedStats[key].guessed += newStats[key].guessed;
      updatedStats[key].missed += newStats[key].missed;
    } else {
      updatedStats[key] = newStats[key];
    }
  });

  return updatedStats;
}

export const saveStatisticToLS = (statistic: StoredWordsStatType): void => {

  const existedStats = localStorage.getItem('statistic');
  let statsWillBeSaved: StoredWordsStatType;

  if (existedStats) {
    const parsedExistedStats = (JSON.parse(existedStats) as StoredWordsStatType);
    statsWillBeSaved = mergeStatistic(parsedExistedStats, statistic);
  } else {
    statsWillBeSaved = statistic;
  }

  localStorage.setItem('statistic', JSON.stringify(statsWillBeSaved));
};

export const getStatisticFromLS = (): StoredWordsStatType | null => {
  const statistic = localStorage.getItem('statistic');
  if (!statistic) {
    return null;
  }

  const parsedStatistic = JSON.parse(statistic);
  if (Object.keys(parsedStatistic).length === 0) {
    return null;
  }

  return parsedStatistic;
};

export const deleteStatisticsFromLS = (): void => {
  localStorage.removeItem('statistic')
}