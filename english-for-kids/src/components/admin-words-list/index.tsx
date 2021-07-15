import React, {FC, ReactElement, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './styles.scss';
import CardList from '../card-list';
import {CardType} from '../../types/game';
import CardAddItem from '../card-add-item';
import AdminWordsCard from '../admin-words-card';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import {NewCardData} from '../../types/admin-panel';
import ImagePlaceholder from '../../static/images/others/placeholder-image.png';


interface AdminWordsListProps {
  words: CardType[];
  edit: boolean;
}

interface AdminWordsListParams {
  id: string;
}

const AdminWordsList: FC<AdminWordsListProps> = ({words, edit}): ReactElement => {
  const {fetchCards, setEditableWordId, editAdminWord, addWord} = useActions();
  const {editableWordId} = useTypedSelector(state => state.adminPanel);

  const [addMode, setAddMode] = useState(false);

  const categoryId = useParams<AdminWordsListParams>().id;

  useEffect(() => {
    fetchCards(Number(categoryId));
  }, []);

  const clickCancelHandler = (): void => {
    setEditableWordId(null);
  };

  const saveHandler = (() => (data: NewCardData): void => {
    editAdminWord({...data, categoryId: Number(categoryId)});
  })();

  const clickAddCardHandler = (): void => {
    setAddMode(true);
  };

  const clickCancelAddCardHandler = (): void => {
    setAddMode(false);
  };

  const saveNewWordHandler = (() => (data: NewCardData): void => {
      addWord({...data, categoryId: Number(categoryId)});
      setAddMode(false);
  })();

  return (
    <>
      <h2 className="admin-page-title">Words</h2>
      <CardList>
        {words.map(word => {
          const clickEditHandler = (): void => {
            setEditableWordId(word.id);
          }
          const editable = word.id === editableWordId;

          return <AdminWordsCard key={word.id} clickEditHandler={clickEditHandler} saveHandler={saveHandler}
                                 cancelHandler={clickCancelHandler} word={word} editable={editable}/>
        })}
        {addMode ? <AdminWordsCard saveHandler={saveNewWordHandler}
                                   cancelHandler={clickCancelAddCardHandler} word={{id:0, spelling: '', translating: '', imageSrc: ImagePlaceholder, soundSrc: ''}} editable={true}/> :
          <CardAddItem onClick={clickAddCardHandler} itemName="word"/>}
      </CardList>
    </>
  )
}

export default AdminWordsList;
