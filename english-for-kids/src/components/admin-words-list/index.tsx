import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import CardList from '../card-list';
import { CardType } from '../../types/game';
import CardAddItem from '../card-add-item';
import AdminWordsCard from '../admin-words-card';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import { NewCardData } from '../../types/admin-panel';
import ImagePlaceholder from '../../static/images/others/placeholder-image.png';
import Loader from '../loader';

interface AdminWordsListProps {
  words: CardType[];
}

interface AdminWordsListParams {
  id: string;
}

const AdminWordsList: FC<AdminWordsListProps> = ({ words }): ReactElement => {
  const { fetchCards, setEditableWordId, editAdminWord, addWord, deleteWord } =
    useActions();
  const { editableWordId } = useTypedSelector((state) => state.adminPanel);
  const [wordsLimit, setWordsLimit] = useState<number>(0);
  const [addMode, setAddMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const categoryId = useParams<AdminWordsListParams>().id;
  const shownWords = useMemo(
    () => words.slice(0, wordsLimit),
    [words, wordsLimit]
  );
  const observer = useRef<IntersectionObserver>();

  const lastCardElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (wordsLimit >= words.length || isLoading) {
            return;
          }
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            setWordsLimit((limit) => limit + 4);
          }, 500);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [words, wordsLimit, isLoading]
  );

  useEffect(() => {
    fetchCards(Number(categoryId));
  }, []);

  const clickCancelHandler = (): void => {
    setEditableWordId(null);
  };

  const saveHandler = (
    () =>
    (data: NewCardData): void => {
      editAdminWord({ ...data, categoryId: Number(categoryId) });
    }
  )();

  const clickAddCardHandler = (): void => {
    setAddMode(true);
  };

  const clickCancelAddCardHandler = (): void => {
    setAddMode(false);
  };

  const saveNewWordHandler = (
    () =>
    (data: NewCardData): void => {
      addWord({ ...data, categoryId: Number(categoryId) });
      setAddMode(false);
    }
  )();

  const deleteHandler = (wordId: number) => {
    deleteWord(Number(categoryId), wordId);
  };

  return (
    <>
      <h2 className="admin-page-title">Words</h2>
      <CardList>
        {words.length < 8 &&
          (addMode ? (
            <AdminWordsCard
              saveHandler={saveNewWordHandler}
              cancelHandler={clickCancelAddCardHandler}
              word={{
                id: 0,
                spelling: '',
                translating: '',
                imageSrc: ImagePlaceholder,
                soundSrc: '',
              }}
              editable={true}
            />
          ) : (
            <CardAddItem onClick={clickAddCardHandler} itemName="word" />
          ))}
        {shownWords.map((word) => {
          const clickEditHandler = (): void => {
            setEditableWordId(word.id);
          };
          const editable = word.id === editableWordId;

          return (
            <li key={word.id}>
              <AdminWordsCard
                clickEditHandler={clickEditHandler}
                saveHandler={saveHandler}
                deleteHandler={deleteHandler}
                cancelHandler={clickCancelHandler}
                word={word}
                editable={editable}
              />
            </li>
          );
        })}
      </CardList>
      {isLoading && <Loader className="admin-page-loader" />}
      <div className="admin-page-observer" ref={lastCardElementRef} />
    </>
  );
};

export default AdminWordsList;
