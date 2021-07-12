import {FC, ReactElement, useEffect} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import './styles.scss';
import {SortMethodDirectionCollection, SortMethodTypesCollection} from '../../types/words-statistics';


const StatisticPage: FC<RouteComponentProps> = ({history}): ReactElement => {
  const {wordsStatistics, sortMethod} = useTypedSelector((state) => ({
    ...state.wordsStat
  }));

  const {getWordsStat, clearWordsStat, changeSortMethod, changeCategory} = useActions();

  useEffect(() => {
    getWordsStat();
  }, []);

  // const wordsStatisticValues = Object.values(wordsStatistic);

  if (wordsStatistics.length === 0) {
    return <p>there is no data...</p>
  }

  const clickSortHandlerCreator = (sortType: SortMethodTypesCollection): () => void =>
    () => {
      const direction = sortMethod.direction === SortMethodDirectionCollection.DOWN
        ? SortMethodDirectionCollection.UP : SortMethodDirectionCollection.DOWN

      changeSortMethod({type: sortType, direction});
    }

  const clickOnCategoryHandler = clickSortHandlerCreator(SortMethodTypesCollection.BY_CATEGORY);
  const clickOnWordHandler = clickSortHandlerCreator(SortMethodTypesCollection.BY_WORD);
  const clickOnTranslationHandler = clickSortHandlerCreator(SortMethodTypesCollection.BY_TRANSLATION);
  const clickOnTrainHandler = clickSortHandlerCreator(SortMethodTypesCollection.BY_TRAIN);
  const clickOnCorrectHandler = clickSortHandlerCreator(SortMethodTypesCollection.BY_CORRECT);
  const clickOnMistakeHandler = clickSortHandlerCreator(SortMethodTypesCollection.BY_MISTAKE);
  const clickOnACPercentHandler = clickSortHandlerCreator(SortMethodTypesCollection.BY_ACPERSENT);

  const sortArrow = <span className="statistics__sort-arrow">{sortMethod.direction === SortMethodDirectionCollection.DOWN ? '↓' : '↑'}</span>;

  const trainHandler = (): void => {
    changeCategory({id: -1, name: 'custom'});
    history.push('/cards');
  };

  return (
    <>
      <div className="statistics-wrapper">
        <table className="statistics">
          <caption className="statistics__title">Statistics</caption>
          <thead className="statistics__head">
          <tr>
            <th
              className="statistics__item"
              onClick={clickOnCategoryHandler}>category {sortMethod.type === SortMethodTypesCollection.BY_CATEGORY &&
            sortArrow}
            </th>
            <th className="statistics__item"
                onClick={clickOnWordHandler}>word {sortMethod.type === SortMethodTypesCollection.BY_WORD &&
            sortArrow}</th>
            <th className="statistics__item"
                onClick={clickOnTranslationHandler}>translation {sortMethod.type === SortMethodTypesCollection.BY_TRANSLATION &&
            sortArrow}</th>
            <th className="statistics__item statistics__item_train statistics__item_digit"
                onClick={clickOnTrainHandler}>
              train {sortMethod.type === SortMethodTypesCollection.BY_TRAIN &&
            sortArrow}
            </th>
            <th className="statistics__item statistics__item_correct statistics__item_digit"
                onClick={clickOnCorrectHandler}>
              correct {sortMethod.type === SortMethodTypesCollection.BY_CORRECT &&
            sortArrow}
            </th>
            <th className="statistics__item statistics__item_mistake statistics__item_digit"
                onClick={clickOnMistakeHandler}>
              mistake {sortMethod.type === SortMethodTypesCollection.BY_MISTAKE &&
            sortArrow}
            </th>
            <th className="statistics__item statistics__item_digit" onClick={clickOnACPercentHandler}>
              % {sortMethod.type === SortMethodTypesCollection.BY_ACPERSENT &&
            sortArrow}
            </th>
          </tr>
          </thead>
          <tbody>
          {wordsStatistics.map((stat) => (
            <tr key={stat.id} className="statistics__row">
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
                {stat.correctAnswersPercent === -1 ? '-' : stat.correctAnswersPercent}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className="statistics-control-container">
        <button className="statistics-button statistics-button_practice" onClick={trainHandler}>Train</button>
        <button className="statistics-button" onClick={clearWordsStat}>Clear</button>
      </div>
    </>
  );
};

export default StatisticPage;
