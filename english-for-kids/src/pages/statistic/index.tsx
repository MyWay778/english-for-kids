import { FC, ReactElement, useEffect } from 'react';
import calcPercentOfCorrectAnswers from '../../helpers/calcPercentOfCorrectAnswers';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import './styles.scss';

const StatisticPage: FC = (): ReactElement => {
  const { wordsStatistic } = useTypedSelector((state) => ({
    ...state.game,
    ...state.app,
  }));

  const { getWordsStatistic, setWordsStatistic, deleteWordsStatistic } = useActions();

  useEffect(() => {
    getWordsStatistic();
    return () => {
      setWordsStatistic({});
    };
  }, []);

  const wordsStatisticValues = Object.values(wordsStatistic);
  console.log(wordsStatisticValues)

  if (wordsStatisticValues.length === 0) {
    return <p>there is no data...</p>
  }

  return (
    <>
    <div className="statistics-wrapper">
      <table className="statistics">
        <caption className="statistics__title">Statistics</caption>
        <thead className="statistics__head">
          <tr>
            <th className="statistics__item">category</th>
            <th className="statistics__item">word</th>
            <th className="statistics__item">translation</th>
            <th className="statistics__item statistics__item_train statistics__item_digit">
              train
            </th>
            <th className="statistics__item statistics__item_correct statistics__item_digit">
              correct
            </th>
            <th className="statistics__item statistics__item_mistake statistics__item_digit">
              mistake
            </th>
            <th className="statistics__item statistics__item_digit">%</th>
          </tr>
        </thead>
        <tbody>
          {wordsStatisticValues.map((stat) => (
            <tr key={stat.spelling} className="statistics__row">
              <td className="statistics__item statistics__item_bold">
                {stat.categoryName}
              </td>
              <td className="statistics__item">{stat.spelling}</td>
              <td className="statistics__item">{stat.translating}</td>
              <td className="statistics__item statistics__item_digit">
                {stat.clicksInTrain}
              </td>
              <td className="statistics__item statistics__item_digit">
                {stat.guessed}
              </td>
              <td className="statistics__item statistics__item_digit">
                {stat.missed}
              </td>
              <td className="statistics__item statistics__item_data statistics__item_digit">
                {stat.guessed + stat.missed > 0
                  ? calcPercentOfCorrectAnswers(stat.guessed, stat.missed)
                  : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button className="statistics-button" onClick={deleteWordsStatistic}>Clean</button>
    </>
  );
};

export default StatisticPage;
