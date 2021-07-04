import { WordsStatisticType} from '../types/game';

const updateStatistic = (existedStats: WordsStatisticType, newStats: WordsStatisticType): WordsStatisticType => {
  const keysNewStats = Object.keys(newStats);
  const updatedStats = {...existedStats};

  keysNewStats.forEach(key => {
    if(existedStats[key]) {
      updatedStats[key].clicksInTrain = existedStats[key].clicksInTrain  + newStats[key].clicksInTrain;
      updatedStats[key].guessed = existedStats[key].guessed  + newStats[key].guessed;
      updatedStats[key].missed = existedStats[key].missed  + newStats[key].missed;
    } else {
      updatedStats[key] = newStats[key];
    }
  });

  return updatedStats;
}

export const saveStatisticToLS = (statistic: WordsStatisticType): void => {
  
  const existedStats = localStorage.getItem('statistic');
  let statsWillBeSaved: WordsStatisticType;

  if (existedStats) {
   const parsedExistedStats = (JSON.parse(existedStats) as WordsStatisticType);
   statsWillBeSaved =  updateStatistic(parsedExistedStats, statistic);
  } else {
    statsWillBeSaved = statistic;
  }

  localStorage.setItem('statistic', JSON.stringify(statsWillBeSaved));
};

export const getStatisticFromLS = (): WordsStatisticType | null => {
  const statistic = localStorage.getItem('statistic');
  if (!statistic) {
    return null;
  }

  const parsedStatistic = JSON.parse(statistic);
  if (Object.keys(parsedStatistic).length === 0) 
  return null;

  return parsedStatistic;
};

export const deleteStatisticsFromLS = (): void => {
  localStorage.removeItem('statistic')
}